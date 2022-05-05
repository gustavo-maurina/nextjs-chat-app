import axios from "axios";
import { FormEvent, useRef } from "react";
import { apiUrl } from "../../constants/apiUrl";
import { useAuth } from "../../contexts/AuthProvider";

export const AddFriendInput = ({ friendList }: any) => {
  const friendNameRef = useRef<HTMLInputElement>(null);
  const { userId } = useAuth();

  async function addFriend(e: FormEvent) {
    e.preventDefault();
    const friendTag = friendNameRef.current?.value;
    try {
      await axios.post(`${apiUrl}/friend-lists`, { userId, friendTag });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={addFriend} className="w-full flex">
      <input
        ref={friendNameRef}
        type="text"
        placeholder="Adicionar amigo..."
        name="friendName"
        className="px-2 w-full drop-shadow h-10"
      />
      <button className="w-12 bg-green-400 text-2xl">+</button>
    </form>
  );
};
