import { Component } from "react";
import DeveloperProfileDetails from "../DeveloperProfileDetails/DeveloperProfileDetails";
import "./DevList.css";
// import { Link } from 'react-router-dom';
class DevList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      devlist: [],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3001/api/developers`)
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
                  <p className="dev-name">{value.login}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="north-east"
                  >
                    <rect fill="none" height="24" width="24" />
                    <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
                  </svg>
                  {/* <Link to="/DeveloperProfileDetails">{value.name}</Link> */}
                  <DeveloperProfileDetails user={value.id} />
                </li>
              );
            })}
          </ul>
        </section>
      );
    }
  }
}

export default DevList;
