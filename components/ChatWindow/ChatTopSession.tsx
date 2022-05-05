import { useEffect, useRef } from "react";
import { useChat } from "../../contexts/ChatProvider";
import { useSocket } from "../../contexts/SocketProvider";

export const ChatTopSession = () => {
  const { currentChatId, setCurrentChatId } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket.on) return;
    socket.on("receive-message", ({ senderId }) => setCurrentChatId(senderId));
  }, [socket, setCurrentChatId]);

  function changeChatId(): void {
    if (inputRef.current?.value) setCurrentChatId(inputRef.current?.value);
  }

  return currentChatId ? (
    <div className="bg-blue-900 w-full flex">
      <p className="text-center m-auto text-white">
        Conversa com <strong>{currentChatId}</strong>
      </p>
    </div>
  ) : (
    <>
      <input
        ref={inputRef}
        className="w-full px-2"
        type="text"
        placeholder="Informe o ID para iniciar conversa..."
      />
      <button onClick={changeChatId} className="w-12 bg-green-400 pb-1">
        &#128233;
      </button>
    </>
  );
};
