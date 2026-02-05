import Header from "../components/Header";
import AllProjects from "../components/AllProjects";
import Chat from "../components/Chat";

const ChatPage = () => {
  return (
    <section id='chatpage' className="min-h-screen bg-black text-white flex flex-col mt-5">
         <div className="flex h-screen bg-blackfont-[Poppins]">
      
      {/* Sidebar */}
      <aside className="w-80 bg-black text-white border-r-4 border-white p-6">

        <div className="mt-4">
        <AllProjects />
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col p-8 overflow-hidden">
        <Chat />
      </main> 

    </div>
    </section>
  );
};

export default ChatPage;
