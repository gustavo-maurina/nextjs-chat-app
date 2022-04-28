import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 } from "uuid";
import { ChatMessage } from "../components/ChatWindow/ChatMessage";
import getHoursAndSeconds from "../helpers/getHoursAndSecond";
import { Message } from "../models/Message";
import { useChat } from "./ChatProvider";
import { useSocket } from "./SocketProvider";

interface MessagesContext {
  messages: any[];
  addMessageToChat: (message: Message, type: "sent" | "received") => void;
  sendMessage: (msg: string) => void;
}

const MessagesContext = createContext<MessagesContext>({} as MessagesContext);

export const MessagesProvider = ({ children }: PropsWithChildren<any>) => {
  const [messages, setMessages] = useState<any[]>([]);
  const { currentChatId } = useChat();
  const { socket } = useSocket();

  useEffect(() => {
    if (socket.on)
      socket.on(
        "receive-message",
        ({ message, timeSent, recipient }: Message) => {
          const msg: Message = {
            message,
            recipient: currentChatId,
            timeSent: new Date(),
          };
          addMessageToChat(msg, "received");
        }
      );
  }, [socket]); // eslint-disable-line react-hooks/exhaustive-deps

  function addMessageToChat(message: Message, type: "sent" | "received"): void {
    console.log("sending");
    const newMsg = (
      <ChatMessage
        key={v4()}
        type={type}
        msg={message.message}
        date={getHoursAndSeconds(message.timeSent)}
      />
    );
    setMessages((current) => [...current, newMsg]);
  }

  const sendMessage = (msg: string): void => {
    const message: Message = {
      message: msg,
      recipient: currentChatId,
      timeSent: new Date(),
    };

    addMessageToChat(message, "sent");
    socket.emit("send-message", message);
  };

  return (
    <MessagesContext.Provider
      value={{ messages, addMessageToChat, sendMessage }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => {
  return useContext(MessagesContext);
};
