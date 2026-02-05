// import axios from "axios";

const Projects = ({ schema }) => {

//   const handleChat = () => {
//     axios.put("http://localhost:8080/api/chat", {
//       prompt: schema.description,
//     });
//   };

  return (
<div className="w-full flex justify-center">
  <button
    className="
      w-64
      bg-[white]
      text-black
      rounded-lg
      py-4
      px-3
      text-lg
      border border-black
      transition-colors
      duration-300
      hover:bg-[#CC2B9F]
      hover:text-white
    "
  >
    {schema.name}
  </button>
</div>

  );
};

export default Projects;
