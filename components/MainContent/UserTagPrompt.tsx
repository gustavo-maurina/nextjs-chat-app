import { FormEvent, useRef, useState } from "react";
import { ArrowRight, Frown, Plus } from "react-feather";
import { useAuth } from "../../contexts/AuthProvider";
import { createUserRequest } from "../../services/createUserRequest";
import { loginUserRequest } from "../../services/loginUserRequest";

interface reqFailed {
  failed: boolean;
  type: number;
}

export const UserTagPrompt = () => {
  const { setUserId } = useAuth();
  const userTagRef = useRef<HTMLInputElement>(null);
  const [requestFailed, setRequestFailed] = useState<reqFailed>({
    failed: false,
    type: 0,
  });

  async function sendUserTag(e?: FormEvent): Promise<void> {
    if (e) e.preventDefault();
    const userTag = userTagRef.current?.value;
    const { status, data } = await loginUserRequest(userTag as string);

    if (status === 200) return setUserId(data.id);

    setRequestFailed({
      failed: true,
      type: status,
    });
  }

  async function newUser() {
    const userTag = userTagRef.current?.value;
    const { status, data } = await createUserRequest(userTag as string);
    if (status === 200) setUserId(data.id);
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
      {requestFailed.failed && (
        <>
          <div className="flex gap-2 text-red-400">
            <Frown />
            {requestFailed.type === 404
              ? "Usuário não existe"
              : "Erro no servidor"}
          </div>
          <div>
            <button
              onClick={newUser}
              className="bg-green-400 p-1 px-2 outline outline-1 flex items-center"
            >
              <Plus size={14} className="mt-[1px] mr-1" /> Criar usuário
            </button>
          </div>
        </>
      )}
    </div>
  );
};
