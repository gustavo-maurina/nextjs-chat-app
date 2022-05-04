import { ChatProvider } from "../../contexts/ChatProvider";
import { SocketProvider } from "../../contexts/SocketProvider";
import { ChatWindow } from "../ChatWindow";
import { FriendList } from "../FriendList";

export const Chat = () => {
  return (
    <SocketProvider>
      <ChatProvider>
        <FriendList />
        <ChatWindow />
      </ChatProvider>
    </SocketProvider>
  );
};
