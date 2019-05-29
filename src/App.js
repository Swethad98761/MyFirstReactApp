import React, { Component } from "react";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import uuid from "uuid";
const Greeting = props => <h1>{props.message}</h1>;
Greeting.defaultProps = {
  message: "hi"
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      showProjects: false,
      showAddProject: false,
      projects: []
    };
  }
  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "0",
          category: "webapp"
        },
        {
          id: uuid.v4(),
          title: "1",
          category: "webdevelopment"
        },
        {
          id: uuid.v4(),
          title: "2",
          category: "webdesign"
        }
      ]
    });
  }
  addedProject(project) {
    //  console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    });
  }
  handleShowProjects() {
    let showProjects = !this.state.showProjects;
    this.setState({ showProjects: showProjects });
  }
  handleAddproject() {
    let showAddProject = !this.state.showAddProject;
    console.log(showAddProject);
    this.setState({ showAddProject: showAddProject });
  }
  render() {
    let addProjects = null;
    console.log(this.state.showAddProject);
    if (this.state.showAddProject) {
      console.log(addProjects);
      addProjects = <AddProject addProject={this.addedProject.bind(this)} />;
    }
    let projects = null;
    if (this.state.showProjects) {
      projects = (
        <Projects
          onDelete={this.handleDeleteProject.bind(this)}
          projects={this.state.projects}
        />
      );
    }

    return (
      <div className="App">
        <button onClick={this.handleAddproject.bind(this)}>Add Project</button>
        {addProjects}
        <button onClick={this.handleShowProjects.bind(this)}>
          showProjects
        </button>
        {projects}
      </div>
    );
  }
}

export default App;
