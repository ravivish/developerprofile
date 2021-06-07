import { Component } from "react";
import "./DeveloperSection.css";
import DeveloperList from "../DeveloperList/DeveloperList";
import AddDeveloperProfile from "../AddDeveloperProfile/AddDeveloperProfile";

class DevSection extends Component {
  constructor(props) {
    super(props);
    this.state = { reRender: false,searchedName:'ravi vishwakarma' };
  }
  handler = (status) => {
    this.setState({ reRender: status });
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchedName: e.target.value });
    // fetch(`/api/developers?`)
    //   .then((response) => response.json())
    //   .then(
    //     (result) =>
    //       this.setState({
    //         isLoaded: true,
    //         devlist: result,
    //       }),
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       });
    //     }
    //   );
  }
  render() {
    return (
      <section className="font-name">
        <h3 className="dev-heading">
          Explore developer profiles
          <div className="hrline">
            <hr />
          </div>
        </h3>
        <div className="search-wrapper">
          <input
            type="text"
            name="search"
            className="search-dev"
            placeholder="search for username"
            onChange={this.handleChange}
          />
          {/* <img src="/images/search-24px.svg" className="" alt="search logo" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 24 24"
            width="58"
            className="search-icon"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        <DeveloperList name={this.state.searchedName}/>
        <div className="hrline">
          <hr />
        </div>
        <h3 className="dev-heading">
          Could not find what you were looking for?
        </h3>
        <AddDeveloperProfile onChange={this.handler} />
      </section>
    );
  }
}

export default DevSection;
