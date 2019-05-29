import React, { Component } from "react";
import ProjectItems from "./ProjectItems";
class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    //console.log(this.props.project);
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItems
            onDelete={this.deleteProject.bind(this)}
            key={project.id}
            project={project}
          />
        );
      });
    }
    return <div className="Projects">{projectItems}</div>;
  }
}

export default Projects;
