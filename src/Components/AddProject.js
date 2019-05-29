import React, { Component } from "react";
import uuid from "uuid";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      storedData: {}
    };
  }
  static defaultProps = {
    categories: ["Web Development", "Web Design", "Web App"]
  };
  handleSubmit(e) {
    if (this.refs.title.value === "") {
      alert("Title is required");
    } else {
      this.setState(
        {
          storedData: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        function() {
          this.props.addProject(this.state.storedData);
        }
      );
    }
    e.preventDefault();
  }
  render() {
    //console.log(this.props.project);
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <div>
        <h3>AddProject</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">{categoryOptions}</select>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
