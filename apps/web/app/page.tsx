"use client";

import ChatInput from "@/components/chatInput";
import MessagesWrapper from "@/components/messagesWrapper";
import { useState } from "react";

export interface MessagesType {
  ai: string;
  user: string;
}

export default function Home() {
  const [messages, setMessages] = useState<MessagesType[]>([]);
  return (
    <>
      <div className="mx-auto h-full w-full grow p-8 lg:w-5xl">
        {/* Title */}
        <h1 className="text-center font-sans text-4xl font-bold text-white">Personality AI</h1>
        {/* Messages Wrapper */}
        <MessagesWrapper messages={messages} />
        {/* Chat Input */}
        <ChatInput setMessages={setMessages} />
      </div>
    </>
  );
}
