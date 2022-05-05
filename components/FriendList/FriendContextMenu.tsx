import { MessageSquare, Trash2 } from "react-feather";

interface Props {
  friendId: number;
  closeMenu: () => void;
}

export const FriendContextMenu = ({ friendId, closeMenu }: Props) => {
  function sendMessage() {
    console.log(friendId);
    closeMenu();
  }

  function removeFriend() {
    console.log(friendId);
    closeMenu();
  }

  return (
    <div className="ctx-menu absolute z-30 w-fit bg-zinc-900 text-slate-300 -bottom-[50%] right-2 drop-shadow">
      <ul>
        <li onClick={sendMessage} className="context-menu-item">
          <MessageSquare size={17} /> Enviar mensagem
        </li>
        <li onClick={removeFriend} className="context-menu-item">
          <Trash2 size={17} /> Remover amigo
        </li>
      </ul>
    </div>
  );
};
