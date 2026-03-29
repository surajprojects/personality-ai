import { MessagesType } from "@/app/page";
import Message from "./message";

export default function MessagesWrapper({ messages }: { messages: MessagesType[] }) {
  return (
    <>
      <div className="grid grow grid-cols-1 gap-3">
        {messages.map((item, idx) => (
          <Message key={idx} user={item.user} ai={item.ai} />
        ))}
      </div>
    </>
  );
}
