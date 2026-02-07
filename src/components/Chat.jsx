import { useEffect, useRef, useState } from "react";
import ChatList from "./ChatList";
import ChatFooter from "./ChatFooter";
import axios from "axios";

const Chat = ({ selectedProject }) => {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Auto-scroll
  useEffect(() => {
    msgEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!selectedProject) return;

    const startChat = async () => {
      // Reset chat
      setMessages([
        {
          text: `Hi, I am here to help you with ${selectedProject.name}`,
          isBot: true,
        },
      ]);

      // Notify backend
      await axios.post("http://localhost:8080/api/chat/start", {
        prompt: selectedProject.description,
      });
    };

    startChat();
  }, [selectedProject]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const response = await axios.post("http://localhost:8080/api/chat", {
      prompt: input,
    });

    setMessages((prev) => [
      ...prev,
      { text: response.data, isBot: true },
    ]);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl">
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        <ChatList messages={messages} />
        <div ref={msgEnd} />
      </div>

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
