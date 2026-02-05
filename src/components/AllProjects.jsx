import projects from "../constants/projects";
import Projects from "./Projects";

const AllProjects = () => {
  const schemaEntries = Object.entries(projects);

  return (
 <div className="mt-6 bg-[#141414] rounded-lg p-4 h-[35rem] overflow-y-auto space-y-3">
      {schemaEntries.length > 0 ? (
        schemaEntries.map(([name, description]) => (
          <Projects
            key={name}
            schema={{ name, description }}
          />
        ))
      ) : (
        <div className="text-center text-teal-900 font-medium">
          No Schemas Found
        </div>
      )}
    </div>
  );
};

export default AllProjects;
