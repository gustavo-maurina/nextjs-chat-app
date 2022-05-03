import { ChatProvider } from "../../contexts/ChatProvider";
import { ChatWindow } from "../ChatWindow";
import { FriendList } from "../FriendList";

export const Chat = () => {
  return (
    <ChatProvider>
      <FriendList />
      <ChatWindow />
    </ChatProvider>
  );
};
