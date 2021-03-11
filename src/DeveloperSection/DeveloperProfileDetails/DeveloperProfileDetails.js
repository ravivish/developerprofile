import { Component } from "react";
import "./DeveloperProfileDetails.css";

class DeveloperProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = this.props;
    return (
      <section className="font-name">
        {user.id}
      </section>
    );
  }
}

export default DeveloperProfileDetails;
