import { useEffect, useState } from "react";
import { useSocket } from "../../contexts/SocketProvider";
import { FriendInfo } from "./FriendInfo";

export const FriendList = () => {
  const { socket } = useSocket();
  const [friendList, setFriendList] = useState<any[]>();

  useEffect(() => {
    fetch("http://localhost:8080/friend-list").then((res) =>
      res.json().then((data) => {
        console.log(data.friendList);

        setFriendList(data.friendList);
      })
    );
  }, []);

  return (
    <div className="h-full w-1/4 min-w-[300px] bg-gray-300 flex flex-col items-center justify-between">
      <div className="text-center mt-2 font-bold">LISTA DE AMIGOS</div>
      <p>
        seu id: <code>{socket.id}</code>
      </p>

      <div className="w-full h-full mt-8 px-3">
        {friendList &&
          friendList.map((friend, idx) => (
            <FriendInfo key={idx} friend={friend} />
          ))}
      </div>
      <div className="w-full flex">
        <input
          type="text"
          placeholder="Adicionar amigo..."
          name="friendName"
          className="px-2 w-full drop-shadow h-10"
        />
        <button className="w-12 bg-green-400 text-2xl">+</button>
      </div>
    </div>
  );
};
