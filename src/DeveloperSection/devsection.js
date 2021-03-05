import { Component } from "react";
import "./devsection.css";
import DeveloperList from "./DeveloperList/DevList";
import DeveloperProfile from "./DeveloperProfile/developerprofile";

class DevSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="font-name">
        <h2>
          Explore developer profiles
          <hr />
        </h2>
        <div className="">
          <input type="text" name="search" placeholder="search for username" />
          <img src="/images/search-24px.svg" alt="search logo" />
        </div>
        <DeveloperList />
        <h3>Could not find what you were looking for?</h3>
        <DeveloperProfile />
      </section>
    );
  }
}

export default DevSection;
