export const AddFriendInput = () => {
  return (
    <form className="w-full flex">
      <input
        type="text"
        placeholder="Adicionar amigo..."
        name="friendName"
        className="px-2 w-full drop-shadow h-10"
      />
      <button className="w-12 bg-green-400 text-2xl">+</button>
    </form>
  );
};
