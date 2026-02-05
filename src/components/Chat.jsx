import React, { useEffect, useRef, useState } from "react";
import ChatList from "./ChatList";
import ChatFooter from "./ChatFooter";
import mockReplies from "../constants/mockMessages";

const Chat = () => {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    { text: "Hi, I am AI", isBot: true }
  ]);

  useEffect(() => {
    msgEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getRandomReply = () => {
    return mockReplies[Math.floor(Math.random() * mockReplies.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    const botMessage = { text: getRandomReply(), isBot: true };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSend();
  };

return (
  <div className="flex flex-col h-full w-full max-w-4xl">
    {/* Messages area */}
    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
      <ChatList messages={messages} />
      <div ref={msgEnd} />
    </div>

    {/* Footer pinned to bottom */}
    <ChatFooter
      input={input}
      setInput={setInput}
      handleEnter={handleEnter}
      handleSend={handleSend}
    />
  </div>
);

};

export default Chat;
