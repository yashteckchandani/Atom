import axios from "axios";

const Projects = ({ schema, isSelected, onSelect }) => {

  const handleChat = () => {
    onSelect(); // mark this project as selected

    axios.post("http://localhost:8080/api/chat/start", {
      prompt: schema.description,
    });
  };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={handleChat}
        className={`
          w-64
          rounded-lg
          py-4
          px-3
          text-lg
          border
          transition-colors
          duration-300
          font-sans 

          ${
            isSelected
              ? "bg-[#CC2B9F] text-white border-[#CC2B9F]"
              : "bg-white text-black border-black hover:bg-[#CC2B9F] hover:text-white"
          }
        `}
      >
        {schema.name}
      </button>
    </div>
  );
};

export default Projects;
