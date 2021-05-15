import { Component } from "react";
import "./DeveloperProfileDetails.css";
import DeveloperRepos from "../DeveloperRepos/DeveloperRepos";
import DevDetailHeader from "../DevDetailHeader/DevDetailHeader";
import Footer from "../Footer/Footer";

class DeveloperProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, devdetails: {} };
  }
  componentDidMount() {
    fetch(`/api/developers/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then(
        (result) =>
          this.setState({
            isLoaded: true,
            devdetails: result,
          }),
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, devdetails } = this.state;
    console.log(devdetails);
    if (error) {
      return <section>Error: {error.message}</section>;
    } else if (!isLoaded) {
      return <section>Loading</section>;
    } else if (devdetails) {
      return (
        <section className="">
          <DevDetailHeader />
          <div className="profile-detail">
            <img
              className="dev-detail-profile"
              src={devdetails.avatar_url}
              alt="userimage"
            />
            {devdetails.name}
          </div>
          <DeveloperRepos repos={devdetails.repos} />
          <Footer />
        </section>
      );
    }
  }
}

export default DeveloperProfileDetails;
