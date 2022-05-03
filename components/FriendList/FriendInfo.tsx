type Props = {
  id: string;
};

export const FriendInfo = ({ friend }: any) => {
  return (
    <div className="flex items-center gap-2 p-2 border-b-[1px] border-b-gray-400">
      <div className="w-[40px] h-[40px] bg-blue-400 rounded-full"></div>
      <div>{friend.id}</div>
    </div>
  );
};
