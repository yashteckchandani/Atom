import { useState } from "react";
import AllProjects from "../components/AllProjects";
import Chat from "../components/Chat";

const ChatPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col mt-5">
      <div className="flex h-screen bg-black font-[Poppins]">

        {/* Sidebar */}
        <aside className="w-80 bg-black text-white border-r-4 border-white p-6">
          <AllProjects
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
          />
        </aside>

        {/* Chat */}
        <main className="flex-1 flex flex-col p-8 overflow-hidden">
          <Chat selectedProject={selectedProject} />
        </main>

      </div>
    </section>
  );
};

export default ChatPage;
