"use client";

import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import VerificationInput from "react-verification-input";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useJoin } from "@/features/workspaces/api/use-join";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace-info";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const JoinPage = () => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const searchParams = useSearchParams();

  const queryParam = searchParams?.toString();
  const extractedQueryValue = queryParam?.slice(0, 6);

  const [verificationValue, setVerificationValue] = useState(
    extractedQueryValue || ""
  );

  const { mutate, isPending } = useJoin();
  const { data, isLoading } = useGetWorkspaceInfo({ id: workspaceId });

  const isMember = useMemo(() => data?.isMember, [data?.isMember]);

  const handleChange = (newValue: string) => {
    console.log("newValue: ", newValue);
    setVerificationValue(newValue);
  };

  const handleComplete = (value: string) => {
    mutate(
      { workspaceId, joinCode: value },
      {
        onSuccess: (id) => {
          toast.success("Workspace joined");
          router.replace(`/workspace/${id}`);
        },
        onError: () => {
          toast.error("Failed to join workspace.");
        },
      }
    );
  };

  useEffect(() => {
    if (extractedQueryValue) {
      // POPULATE STATE WITH SEARCHPARAMS VALUE
      setVerificationValue(extractedQueryValue);
    }
  }, [extractedQueryValue]);

  useEffect(() => {
    // HANDLE ATTEMPTING CODE IF INPUT VIA URL PARAMS
    if (!extractedQueryValue || extractedQueryValue.length < 6) return;

    if (extractedQueryValue && extractedQueryValue.length === 6) {
      handleComplete(extractedQueryValue);
    }
  }, [extractedQueryValue]);

  useEffect(() => {
    if (isMember) {
      router.push(`/workspace/${workspaceId}`);
    }
  }, [isMember, router, workspaceId]);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-y-6 items-center justify-center bg-white p-8 rounded-lg shadow-md">
      <Image src="/logo.png" width={60} height={60} alt="logo" />
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1 className="text-2xl font-bold">Join {data?.name}</h1>
          <p className="text-md text-muted-foreground">
            Enter the workspace code to join.
          </p>
        </div>
        <VerificationInput
          value={verificationValue}
          onChange={handleChange}
          onComplete={handleComplete}
          length={6}
          classNames={{
            container: cn(
              "flex gap-x-2 w-full justify-center",
              isPending && "opacity-50 cursor-not-allowed"
            ),
            character:
              "uppercase h-auto w-10 rounded-md border border-gray-300 flex items-center justify-center text-lg font-semibold text-gray-800 bg-gray-100 focus:border-[#1264a3] focus:ring-2 focus:ring-[#1264a3]/20 transition-all duration-200 ease-in-out",
            characterInactive: "bg-muted",
            characterSelected: "bg-[#F9F9F9] text-[#242424]",
            characterFilled: "bg[#F9F9F9], text-[#242424]",
          }}
          autoFocus
        />
      </div>
      <div className="flex gap-x-4">
        <Button size="lg" variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default JoinPage;
