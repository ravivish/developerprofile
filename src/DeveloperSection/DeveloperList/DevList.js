import { Component } from "react";
import "./DevList.css";

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
    } else {
      return (
        <section className="dev-list font-name">
          <ul>
            {devlist.map((value,index) => {
                return <li key={index}>
                  <img className="profile" src={value.avatar_url} alt={value.name}/>
                  <span>{value.name}</span>
                  </li>;
              })}
          </ul>
        </section>
      );
    }
  }
}

export default DevList;
