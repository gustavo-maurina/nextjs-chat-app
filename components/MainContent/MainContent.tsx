import { useSocket } from "../../contexts/SocketProvider";
import { Chat } from "./Chat";
import { UserTagPrompt } from "./UserTagPrompt";

export const MainContent = () => {
  const { userTag } = useSocket();

  return <>{userTag ? <Chat /> : <UserTagPrompt />}</>;
};
