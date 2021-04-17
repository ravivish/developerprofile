import { Component } from "react";
import "./DeveloperRepos.css";

class DeveloperRepos extends Component {
  constructor(props) {
    super(props);
    this.state = { repo: this.props.repos };
  }
  render() {
    const { repo } = this.state;
    console.log(repo);
    return (
      <div className="">
        <ul>
        {repo.map((e,index)=>
          <li key={index}>{e.name}</li>
        )}  
        </ul>
      </div>
    );
  }
}

export default DeveloperRepos;
