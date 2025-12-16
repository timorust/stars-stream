"use client";
import { useUser } from "@clerk/nextjs";
import {
  Call,
  CallingState,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
  type User,
} from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { useState } from "react";

if (!process.env.NEXT_PUBLIC_STREAM_API_KEY)
  throw new Error("NEXT_PUBLIC_STREAM_API_KEY:=> is not set.");

function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const { id } = useParams();

  const [call, setCall] = useState<Call | null>();
  const [error, setError] = useState<string | null>(null);

  const [client, setClient] = useState<StreamVideoClient | null>(null);

  if (!client) return <div>Loading ...client</div>;
  if (!call) return <div>Loading ...call</div>;

  return (
    <StreamVideo client={client}>
      <StreamTheme className="text-white">
        <StreamCall call={call}>{children}</StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}

export default Layout;
