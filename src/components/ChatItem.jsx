

const ChatItem = ({ message }) => {
  const isBot = message.isBot;

  return (
    <div
      className={`flex items-start gap-4 px-5 py-4 rounded-lg max-w-3xl ${
        isBot
          ? "bg-[#262525] text-white"
          : "bg-white text-black ml-auto border"
      }`}
    >
      {/* <img
        src={isBot ? logo : userIcon}
        alt=""
        className="w-10 h-10 object-cover rounded-md"
      /> */}

      {isBot ? (
        <pre className="text-sm leading-relaxed whitespace-pre-wrap break-words overflow-x-auto">
          {message.text}
        </pre>
      ) : (
        <p className="text-sm leading-relaxed break-words">
          {message.text}
        </p>
      )}
    </div>
  );
};

export default ChatItem;
