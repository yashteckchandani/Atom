import React from "react";
import sendBtn from "../assets/send.svg";

const ChatFooter = ({ input, setInput, handleEnter, handleSend }) => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex items-center w-full max-w-4xl bg-[#262525] rounded-xl px-4 py-3 shadow-md">
        <input
          type="text"
          placeholder="Send a message..."
          value={input}
          onKeyDown={handleEnter}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent font-sans text-white placeholder-gray-400 outline-none text-sm"
        />

        <button
          onClick={handleSend}
          className="ml-3 p-2 rounded-lg hover:bg-white/10 transition"
        >
          <img src={sendBtn} alt="Send" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
