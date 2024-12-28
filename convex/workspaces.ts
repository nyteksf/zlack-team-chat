// 1:57:07 timestamp
import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { auth } from "./auth";

const generateJoinCode = () => {
  const code = Array.from(
    { length: 6 },
    () => "0123456789abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 36)]
  ).join("");

  return code;
};

export const join = mutation({
  args: {
    joinCode: v.string(),
    workspaceId: v.id("workspaces"),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized action prohibited");
    }

    const workspace = await ctx.db.get(args.workspaceId);

    if (!workspace) {
      throw new Error("Workspace not found");
    }

    if (workspace.joinCode !== args.joinCode.toLocaleLowerCase()) {
      throw new Error("Invalid join code");
    }

    const existingMember = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.workspaceId).eq("userId", userId)
      )
      .unique();

    if (existingMember) {
      throw new Error("User is already a member of the current workspace.");
    }

    await ctx.db.insert("members", {
      userId,
      workspaceId: workspace._id,
      role: "member",
    });

    return workspace._id;
  },
});

export const newJoinCode = mutation({
  args: {
    workspaceId: v.id("workspaces"),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized action prohibited");
    }

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.workspaceId).eq("userId", userId)
      )
      .unique();

    if (!member || member.role !== "admin") {
      throw new Error("Unauthorized action");
    }

    const joinCode = generateJoinCode();

    await ctx.db.patch(args.workspaceId, {
      joinCode,
    });

    return args.workspaceId;
  },
});

export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized access is prohibited.");
    }

    // FUNC TO CHECK IF JOINCODE EXISTS IN DB
    const isJoinCodeUnique = async (code: string) => {
      const existingWorkspace = await ctx.db
        .query("workspaces")
        .filter((q) => q.eq(q.field("joinCode"), code))
        .first();

      return !existingWorkspace;
    };

    let joinCode = generateJoinCode();
    let attempts = 0;
    const MAX_ATTEMPTS = 10; // PREVENT INFINITE LOOP

    while (!(await isJoinCodeUnique(joinCode)) && attempts < MAX_ATTEMPTS) {
      joinCode = generateJoinCode();
      attempts++;
    }

    // THROW ERROR IF MAX_ATTEMPTS === 10
    if (attempts === MAX_ATTEMPTS) {
      throw new Error("Failed to generate a unique join code.");
    }

    const workspaceId = await ctx.db.insert("workspaces", {
      name: args.name,
      userId,
      joinCode,
    });

    await ctx.db.insert("members", {
      userId,
      workspaceId,
      role: "admin",
    });

    await ctx.db.insert("channels", {
      name: "general",
      workspaceId,
    });

    return workspaceId;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      return [];
    }

    const members = ctx.db
      .query("members")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .collect();

    const workspaceIds = (await members).map((member) => member.workspaceId);

    const workspaces = [];

    for (const workspaceId of workspaceIds) {
      const workspace = await ctx.db.get(workspaceId);

      if (workspace) {
        workspaces.push(workspace);
      }
    }

    return workspaces;
  },
});

export const getInfoById = query({
  args: { id: v.id("workspaces") },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      return null;
    }

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.id).eq("userId", userId)
      )
      .unique();

    const workspace = await ctx.db.get(args.id);
    
    return {
      name: workspace?.name,
      isMember: !!member,
    }
  },
});

export const getById = query({
  args: { id: v.id("workspaces") },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      throw new Error("Access unauthorized: please log in.");
    }

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.id).eq("userId", userId)
      )
      .unique();

    if (!member) {
      return null;
    }

    const workspace = await ctx.db.get(args.id);
    return workspace;
  },
});

export const update = mutation({
  args: {
    id: v.id("workspaces"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      throw new Error("User unauthorized. Please log in.");
    }

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.id).eq("userId", userId)
      )
      .unique();

    if (!member || member.role !== "admin") {
      throw new Error("User unauthorized. Please log in.");
    }

    await ctx.db.patch(args.id, {
      name: args.name,
    });

    return args.id;
  },
});

export const remove = mutation({
  args: {
    id: v.id("workspaces"),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      throw new Error("User unauthorized. Please log in.");
    }

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.id).eq("userId", userId)
      )
      .unique();

    if (!member || member.role !== "admin") {
      throw new Error("User unauthorized. Please log in.");
    }

    const [members] = await Promise.all([
      ctx.db
        .query("members")
        .withIndex("by_workspace_id", (q) => q.eq("workspaceId", args.id))
        .collect(),
    ]);

    for (const member of members) {
      await ctx.db.delete(member._id);
    }

    await ctx.db.delete(args.id);

    return args.id;
  },
});
