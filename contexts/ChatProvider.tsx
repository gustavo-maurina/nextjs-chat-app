import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ChatContext {
  currentChatId: string;
  setCurrentChatId: Dispatch<SetStateAction<string>>;
}

const ChatContext = createContext<ChatContext>({} as ChatContext);

export const ChatProvider = ({ children }: PropsWithChildren<any>) => {
  const [currentChatId, setCurrentChatId] = useState("");
  const [friendList, setFriendList] = useState();

  useEffect(() => {
    console.log("new chat,id:", currentChatId);
  }, [currentChatId]);

  return (
    <ChatContext.Provider value={{ currentChatId, setCurrentChatId }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
