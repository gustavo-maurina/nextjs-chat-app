interface MessageProps {
  type: "sent" | "received";
  msg: string;
  date: string;
}

export const ChatMessage = ({ type, msg, date }: MessageProps) => {
  const align = type === "sent" ? "self-end" : "";
  return (
    <>
      <div
        className={`break-all max-w-[45%] h-fit flex bg-white w-fit py-1 pl-2 rounded ${align}`}
      >
        <p className="w-full">{msg}</p>
        <div className="flex flex-col">
          <p
            className={`text-gray-500 text-xs mt-auto mr-8 pr-2 w-[100%] text-right`}
          >
            {date}
          </p>
        </div>
      </div>
    </>
  );
};
