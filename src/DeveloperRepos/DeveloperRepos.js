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
      <div className="repo-list">
        <h3>Github Repositories</h3>
        <hr />
        <ul className="repo-list-item">
          {repo &&
            repo.map((e, index) => {
              return (
                <li key={index}>
                  <a rel="noreferrer" target="_blank" href={e.html_url}>
                    {e.name}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        className="redirect-arrow"
                      >
                        <rect fill="none" height="24" width="24"></rect>
                        <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"></path>
                      </svg>
                    </span>
                  </a>
                  <span className="transparent-text">
                    Updated on {e.updated_at}
                  </span>
                  <br/>
                  {e.description}
                  <hr className="bottom-line" />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default DeveloperRepos;
