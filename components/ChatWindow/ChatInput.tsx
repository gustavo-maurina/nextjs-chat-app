import { FormEvent, useRef } from "react";
import { Send } from "react-feather";
import { useMessages } from "../../contexts/MessagesProvider";

export const ChatInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage } = useMessages();

  function send(event: FormEvent) {
    event.preventDefault();
    sendMessage(inputRef.current?.value || "");
    inputRef.current!.value = "";
  }

  return (
    <form onSubmit={send} className="h-[12%] max-h-[3rem] w-full flex">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enviar mensagem..."
        className="pl-2 w-full better-focus"
      />
      <button
        type={"submit"}
        className="bg-blue-400 w-12 text-2xl grid place-items-center pt-1"
      >
        <Send size={20} />
      </button>
    </form>
  );
};
