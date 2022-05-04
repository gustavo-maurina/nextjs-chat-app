import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { useAuth } from "./AuthProvider";

interface SocketContext {
  socket: Socket;
}

const SocketContext = createContext<SocketContext>({} as SocketContext);

export const SocketProvider = ({ children }: PropsWithChildren<any>) => {
  const [socket, setSocket] = useState<Socket>({} as Socket);
  const { userId } = useAuth();

  useEffect(() => {
    const socketConnection = io("http://localhost:8080", {
      query: { userId },
    });
    socketConnection.on("connect", () => {
      setSocket(socketConnection);
    });

    return () => {
      socketConnection.close();
    };
  }, [userId]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
