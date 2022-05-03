import { FormEvent, useRef, useState } from "react";
import { ArrowRight, Frown } from "react-feather";
import { apiUrl } from "../../constants/apiUrl";
import { useSocket } from "../../contexts/SocketProvider";

export const UserTagPrompt = () => {
  const [requestFailed, setRequestFailed] = useState<boolean>(false);
  const userTagRef = useRef<HTMLInputElement>(null);
  const { setUserTag } = useSocket();

  async function sendUserTag(e: FormEvent) {
    e.preventDefault();
    const userTag = userTagRef.current?.value;
    const body = JSON.stringify({ userTag });
    const method = "POST";

    const req = await fetch(`${apiUrl}/login`, { body, method });
    if (req.status === 200) return setUserTag(userTag);
    setRequestFailed(true);
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-zinc-300 text-5xl font-semibold">Quem é você?</p>
      <form onSubmit={sendUserTag} className="flex items-center">
        <input
          placeholder="Nome de usuário..."
          type="text"
          className="px-2 py-1"
          ref={userTagRef}
          required
        />
        <button className="bg-blue-400 hover:bg-blue-300 h-full w-10">
          <ArrowRight className="m-auto" />
        </button>
      </form>
      {requestFailed && (
        <p className="text-red-400 flex items-center gap-2">
          <Frown /> Erro ao definir usuário
        </p>
      )}
    </div>
  );
};
