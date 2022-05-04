import { useAuth } from "../../contexts/AuthProvider";
import { Chat } from "./Chat";
import { UserTagPrompt } from "./UserTagPrompt";

export const MainContent = () => {
  const { userId } = useAuth();

  return <>{userId ? <Chat /> : <UserTagPrompt />}</>;
};
