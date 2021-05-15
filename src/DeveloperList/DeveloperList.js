import { Component } from "react";
import "./DeveloperList.css";
import { Link } from "react-router-dom";

class DeveloperList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      devlist: [],
    };
  }
  componentDidMount() {
    fetch(`/api/developers`)
      .then((response) => response.json())
      .then(
        (result) =>
          this.setState({
            isLoaded: true,
            devlist: result,
          }),
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, devlist } = this.state;
    if (error) {
      return <section>Error: {error.message}</section>;
    } else if (!isLoaded) {
      return <section>Loading</section>;
    } else if (devlist.length <= 0) {
      return (
        <section className="no-dev-found">No Developers added yet</section>
      );
    } else {
      return (
        <section className="dev-list font-name">
          <ul>
            {devlist.map((value, index) => {
              return (
                <li key={value.id} className="list">
                  <img
                    className="profile"
                    src={value.avatar_url}
                    alt={value.name}
                  />
                  <Link
                    to={`/DeveloperProfileDetails/:${value.id}`}
                    className="dev-name"
                  >
                    <p>
                      {value.login}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          className="w-3 h-3 ml-1 fill-current lg:w-5 lg:h-5 lg:ml-5 text-linkArrow"
                        >
                          <rect fill="none" height="24" width="24"></rect>
                          <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"></path>
                        </svg>
                      </span>
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      );
    }
  }
}

export default DeveloperList;
