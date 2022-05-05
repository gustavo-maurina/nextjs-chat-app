import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../constants/apiUrl";
import { useAuth } from "../../contexts/AuthProvider";
import { useSocket } from "../../contexts/SocketProvider";
import { AddFriendInput } from "./AddFriendInput";
import { FriendInfo } from "./FriendInfo";

export const FriendList = () => {
  const [friendList, setFriendList] = useState<any[]>();
  const { userId } = useAuth();
  const { socket } = useSocket();

  useEffect(() => {
    async function getFriendList() {
      try {
        const req = await axios.get(`${apiUrl}/friend-lists/${userId}`);
        if (req.status === 200) setFriendList(req.data);
      } catch (err) {
        console.log(err);
      }
    }

    getFriendList();
  }, [userId]);

  return (
    <div className="h-full w-1/4 min-w-[300px] bg-gray-300 flex flex-col items-center justify-between">
      <div className="text-center mt-2 font-bold">LISTA DE AMIGOS</div>
      <p>
        seu id: <code>{socket.id}</code>
      </p>

      <div className="w-full h-full mt-8 px-3">
        {friendList &&
          friendList.map((friend, idx) => (
            <>
              <FriendInfo key={idx} friend={friend} />
            </>
          ))}
      </div>
      <AddFriendInput friendList={friendList} />
    </div>
  );
};
