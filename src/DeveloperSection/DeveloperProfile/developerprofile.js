import { Component } from "react";
import "./developerprofile.css";

class DeveloperProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="font-name">
        <button className="developer-btn">Add Developer Profile</button>
      </section>
    );
  }
}

export default DeveloperProfile;
