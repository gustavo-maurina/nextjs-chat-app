import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

interface SocketContext {
  socket: Socket;
  userTag: string | undefined;
  setUserTag: Dispatch<SetStateAction<string | undefined>>;
}

const SocketContext = createContext<SocketContext>({} as SocketContext);

export const SocketProvider = ({ children }: PropsWithChildren<any>) => {
  const [userTag, setUserTag] = useState<string>();
  const [socket, setSocket] = useState<Socket>({} as Socket);

  useEffect(() => {
    const socketConnection = io("http://localhost:8080", {});
    socketConnection.on("connect", () => {
      setSocket(socketConnection);
    });

    return () => {
      socketConnection.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, userTag, setUserTag }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
