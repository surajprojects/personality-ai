"use client";

import { toast } from "sonner";
import { ArrowUp } from "lucide-react";
import { MessagesType } from "@/app/page";
import { Dispatch, SetStateAction, useState } from "react";
import Spinner from "@personality-ai/ui/components/spinner";

export default function ChatInput({
  setMessages,
}: {
  setMessages: Dispatch<SetStateAction<MessagesType[]>>;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>("");
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
      } else {
        toast.error("Something went wrong!!! Please try again!!!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!! Please try again!!!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSend();
        }}
        className="mt-5 flex items-center gap-2.5 rounded-full bg-[#303030] p-2"
      >
        <input
          type="text"
          id="inputMessage"
          name="inputMessage"
          placeholder="Ask anything"
          maxLength={150}
          value={inputMessage}
          onChange={(evt) => setInputMessage(evt.target.value)}
          className="w-full rounded-2xl px-3 text-lg text-white transition duration-300 ease-in-out outline-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="cursor-pointer rounded-full bg-white p-2 text-black shadow-sm transition duration-300 ease-in-out outline-none hover:bg-white/80 hover:shadow-md disabled:cursor-not-allowed"
        >
          {isLoading ? <Spinner customize /> : <ArrowUp size={16} />}
        </button>
      </form>
    </>
  );
}
