import React, { Component } from "react";

class ProjectItems extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Projects">
        title:{this.props.project.title}->category:{this.props.project.category}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          X
        </a>
      </li>
    );
  }
}

export default ProjectItems;
