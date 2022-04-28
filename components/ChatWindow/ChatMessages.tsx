import { useMessages } from "../../contexts/MessagesProvider";

export const ChatMessages = () => {
  const { messages } = useMessages();

  return (
    <div className="h-full flex flex-col justify-end p-2 gap-2">{messages}</div>
  );
};
