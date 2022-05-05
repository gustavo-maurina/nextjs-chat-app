import { useEffect, useRef, useState } from "react";
import { FriendContextMenu } from "./FriendContextMenu";

interface Props {
  friend: Friend;
}

export const FriendInfo = ({ friend }: Props) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const friendInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const friendRef = friendInfoRef.current;
    const handleClick = (e: MouseEvent) => {
      if (friendRef?.contains(e.target as Node)) return setMenuOpened(true);
      setMenuOpened(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const closeMenu = (): void => setMenuOpened(false);

  return (
    <div
      ref={friendInfoRef}
      className="flex items-center gap-2 p-2 border-b-[1px] border-b-gray-400 relative transition cursor-pointer"
    >
      <div className="w-[40px] h-[40px] bg-blue-400 rounded-full"></div>
      <div>{friend.tag}</div>
      {menuOpened && (
        <FriendContextMenu friendId={friend.friend_id} closeMenu={closeMenu} />
      )}
    </div>
  );
};
