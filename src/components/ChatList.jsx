import React, { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";

const ChatList = ({ messages }) => {
  const msgEnd = useRef(null);

  useEffect(() => {
    msgEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex w-full ${
            message.isBot ? "justify-start" : "justify-end"
          }`}
        >
          <div className="max-w-[75%]">
            <ChatItem message={message} />
          </div>
        </div>
      ))}
      <div ref={msgEnd} />
    </div>
  );
};

export default ChatList;
