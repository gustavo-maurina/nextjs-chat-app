import type { NextPage } from "next";
import { ChatWindow } from "../components/ChatWindow";
import { FriendList } from "../components/FriendList";
import { ChatProvider } from "../contexts/ChatProvider";
import { SocketProvider } from "../contexts/SocketProvider";

const Home: NextPage = () => {
  return (
    <SocketProvider>
      <div className="bg-slate-900 w-screen h-screen flex items-center px-12">
        <div className="h-3/5 w-full flex gap-12 justify-center">
          <ChatProvider>
            <FriendList />
            <ChatWindow />
          </ChatProvider>
        </div>
      </div>
    </SocketProvider>
  );
};

export default Home;
