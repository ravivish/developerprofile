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
    const url = "/api/developers";
    fetch(url)
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
  componentDidUpdate() {
    if (this.props.name.length > 0) {
      let url = `/api/developers/users/:${this.props.name}`;      
      fetch(url)
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
  }
  render() {
    const { error, isLoaded, devlist } = this.state;
    if (error) {
      return <section>Error: {error.message}</section>;
    } else if (!isLoaded) {
      return <section>Loading</section>;
    } else if (devlist.length <= 0) {
      return <section className="no-dev-found">No developers found</section>;
    } else {
      return (
        <section className="dev-list font-name">
          {devlist &&
            devlist.map((value, index) => {
              return (
                <div key={index} className="list-item">
                  <img
                    className="profile"
                    src={value.avatar_url}
                    alt={value.name}
                  />
                  <Link
                    to={`/DeveloperProfileDetails/:${value.id}`}
                    className="dev-name"
                  >
                    <span className="dev-list-name">{value.login}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      className="redirect-arrow-list"
                    >
                      <rect fill="none" height="24" width="24"></rect>
                      <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"></path>
                    </svg>
                  </Link>
                </div>
              );
            })}
        </section>
      );
    }
  }
}

export default DeveloperList;
