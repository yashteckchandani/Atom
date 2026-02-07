import projects from "../constants/projects";
import Projects from "./Projects";

const AllProjects = ({ selectedProject, onProjectSelect }) => {
  const schemaEntries = Object.entries(projects);

  return (
    <div className="mt-6 bg-[#141414] rounded-lg p-4 h-[38rem] overflow-y-auto space-y-3">
      {schemaEntries.map(([name, description]) => (
        <Projects
          key={name}
          schema={{ name, description }}
          isSelected={selectedProject?.name === name}
          onSelect={() =>
            onProjectSelect({ name, description })
          }
        />
      ))}
    </div>
  );
};

export default AllProjects;
