import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { DataProps } from "@/types";

const Project = ({ project }: Pick<DataProps, "project">) => {
  const teamProjects = project.filter((project) => project.isTeam);
  const personalProjects = project.filter((project) => !project.isTeam);
  return (
    <>
      {/* Team Project 섹션: 데이터가 있을 때만 표시 */}
      {teamProjects.length > 0 && (
        <div>
          <SectionTitle>Team Project</SectionTitle>
          <div className="flex flex-col gap-24">
            {teamProjects
              .reverse()
              .map((project) => (
                <ProjectItem key={project.id} {...project} />
              ))}
          </div>
        </div>
      )}

      {/* Personal Project 섹션: 데이터가 있을 때만 표시 */}
      {personalProjects.length > 0 && (
        <div>
          <SectionTitle>Personal Project</SectionTitle>
          <div className="flex flex-col gap-24">
            {personalProjects
              .reverse()
              .map((project) => (
                <ProjectItem key={project.id} {...project} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
