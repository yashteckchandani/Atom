import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      {isBot ? (
        <div className="prose prose-invert font-sans max-w-none text-sm leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.text}
          </ReactMarkdown>
        </div>
      ) : (
        <p className="text-sm font-sans leading-relaxed break-words">
          {message.text}
        </p>
      )}
    </div>
  );
};

export default ChatItem;
