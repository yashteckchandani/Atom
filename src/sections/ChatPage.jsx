import Header from "../components/Header";

const ChatPage = () => {
  return (
    <section id='chatpage' className="min-h-screen bg-black text-white flex flex-col mt-5">
      {/* Header (fixed height based on its content) */}

      {/* Main Chat Area (takes remaining height) */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Panel – 20% */}
        <div className="w-1/5 h-full border-r border-white p-4 overflow-y-auto">
          <h2 className="text-xl font-light mb-4">Project</h2>
          <h2 className="text-xl font-light mb-4">Project</h2>
          <h2 className="text-xl font-light mb-4">Project</h2>
          <h2 className="text-xl font-light mb-4">Project</h2>
          <h2 className="text-xl font-light mb-4">Project</h2>
          <h2 className="text-xl font-light mb-4">Project</h2>
          <h2 className="text-xl font-light mb-4">Project</h2>
          <h2 className="text-xl font-light mb-4">Project</h2>
          {/* Chat list / sidebar content goes here */}
        </div>

        {/* Right Panel – 80% */}
        <div className="w-4/5 h-full p-6 flex flex-col overflow-hidden">
          <h2 className="text-xl font-light mb-4">Conversation</h2>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {/* Messages will go here */}
          </div>

          {/* Input Area */}
          <div className="mt-4 border-t border-white pt-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-transparent border border-white px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChatPage;
