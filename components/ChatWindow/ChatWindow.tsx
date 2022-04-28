import { MessagesProvider } from "../../contexts/MessagesProvider";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { ChatTopSession } from "./ChatTopSession";

export const ChatWindow = () => {
  return (
    <MessagesProvider>
      <div className="flex flex-col h-full w-2/4">
        <div className="flex w-full drop-shadow h-[10%]">
          <ChatTopSession />
        </div>
        <div className="bg-gray-300 flex flex-col overflow-hidden pb-2 pt-8 h-[92%]">
          <ChatMessages />
        </div>
        <ChatInput />
      </div>
    </MessagesProvider>
  );
};
