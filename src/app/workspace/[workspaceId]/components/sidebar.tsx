import { usePathname } from "next/navigation";
import { Bell, Home, MessagesSquare, MoreHorizontal } from "lucide-react";

import { Hint } from "@/components/hint";
import { UserButton } from "@/features/auth/components/user-button";
import { SidebarButton } from "@/app/workspace/[workspaceId]/components/sidebar-button";
import { WorkspaceSwitcher } from "@/app/workspace/[workspaceId]/components/workspace-switcher";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={Home}
        label="Home"
        isActive={pathname.includes("/workspace")}
      />
      <SidebarButton icon={MessagesSquare} label="DMs" />
      <SidebarButton icon={Bell} label="Activity" />
      <SidebarButton icon={MoreHorizontal} label="More" />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <Hint label="User options" side="right">
          <UserButton />
        </Hint>
      </div>
    </aside>
  );
};
// timestamp 03:39:23
