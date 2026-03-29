"use client";

import { useState } from "react";

interface MessagesType {
  user: string;
  ai: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessagesType[]>([]);

  const handleSend = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://personality-ai-b8fx.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });
      const result: { response: string } = await response.json();
      if (response.ok) {
        setMessages((prevData) => [
          ...prevData,
          {
            user: inputMessage,
            ai: result.response,
          },
        ]);
        setInputMessage("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="h-screen w-screen p-5">
        {/* Title */}
        <h1 className="text-center font-mono text-3xl font-bold">Personality AI</h1>
        {/* Wrapper */}
        <div className="mx-auto my-2 flex min-h-72 w-xl flex-col justify-end rounded-2xl border-2 border-slate-400 bg-amber-50 p-4 shadow-sm">
          {/* Messages Display */}
          <div className="grow">
            {isLoading && <p>Loading...</p>}
            {messages.map((item, idx) => {
              return (
                <div key={idx}>
                  <p>User: {item.user}</p>
                  <p>AI: {item.ai}</p>
                </div>
              );
            })}
          </div>
          {/* Message Input */}
          <div className="flex items-center gap-2.5">
            <input
              type="text"
              id="inputMessage"
              name="inputMessage"
              onChange={(evt) => setInputMessage(evt.target.value)}
              className="w-full rounded-2xl bg-white px-3 py-1 text-xl shadow-sm ring ring-offset-2 outline-1 transition duration-300 ease-in-out hover:shadow-md"
            />
            <button
              type="button"
              onClick={handleSend}
              className="cursor-pointer rounded-2xl bg-blue-500 px-3 py-1.5 text-white shadow-sm transition duration-300 ease-in-out hover:bg-blue-500/90 hover:shadow-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
