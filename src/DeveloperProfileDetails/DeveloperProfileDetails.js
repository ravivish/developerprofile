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
    if (error) {
      return <section>Error: {error.message}</section>;
    } else if (!isLoaded) {
      return <section className="waiting">Loading</section>;
    } else {
      return (
        <section className="dev-profile-details">
          <DevDetailHeader />
          <div className="profile-detail">
            <img
              className="dev-detail-profile"
              src={devdetails.avatar_url}
              alt="userimage"
            />
            <div className="dev-profile-name">{devdetails.name}</div>
            <div className="detail-container">
              {/* <div>{devdetails.blog}</div> */}
              <div>{devdetails.company}</div>
              <div className="dev-bio">{devdetails.bio}</div>
              <div className="platform-links">
                <span>
                  <a
                    rel="noreferrer"
                    className="link"
                    target="_blank"
                    href={`https://github.com/${devdetails.githubid}`}
                  >
                    <img
                      className="profile-icons"
                      src="/profile-icons/iconfinder_github_317712.png"
                      alt="github images"
                    />
                  </a>
                </span>
                <span>
                  <a
                    rel="noreferrer"
                    className="link"
                    target="_blank"
                    href={`https://hackerrank.com/${devdetails.githubid}`}
                  >
                    <img
                    className="profile-icons"
                    src="/profile-icons/Hackerrank_logo_4373234.png"
                    alt="github images"
                  />
                  </a>
                </span>
                <span>
                  <a
                    rel="noreferrer"
                    className="link"
                    target="_blank"
                    href={`https://codechef.com/${devdetails.githubid}`}
                  >
                    <img
                    className="profile-icons"
                    src="/profile-icons/codechef-1324440139527402917_32.png"
                    alt="codechef images"
                  />
                  </a>
                </span>
                <span>
                  <a
                    rel="noreferrer"
                    className="link"
                    target="_blank"
                    href={`https://linkedin.com/${devdetails.githubid}`}
                  >
                    <img
                  className="profile-icons"
                  src="/profile-icons/app_logo_linkedin_3225190.png"
                  alt="linkedin images"
                />
                  </a>
                </span>
                <span>
                  <a
                    rel="noreferrer"
                    className="link"
                    target="_blank"
                    href={`https://medium.com/${devdetails.githubid}`}
                  >
                     <img
                    className="profile-icons"
                    src="/profile-icons/Medium_svg5_5279113.png"
                    alt="medium images"
                  />
                  </a>
                </span>
                <span>
                  <a
                    rel="noreferrer"
                    className="link"
                    target="_blank"
                    href={`https://twitter.com/${devdetails.githubid}`}
                  >
                   <img
                    className="profile-icons"
                    src="/profile-icons/logo_twitter_3225183.png"
                    alt="twitter images"
                  />
                  </a>
                </span>
              </div>
              
              <div className="prefessional-details">
                <div className="profession-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="p-icons-margin"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="prof-text">{devdetails.location}</span>
                </div>
                <div className="profession-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="p-icons-margin"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                  </svg>
                  <span className="prof-text">{devdetails.company}</span>
                </div>
                <div className="profession-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="p-icons-margin"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                  <span className="prof-text">{devdetails.blog}</span>
                </div>
              </div>
            </div>
          </div>
          {devdetails.repos && <DeveloperRepos repos={devdetails.repos} />}

          <Footer />
        </section>
      );
    }
  }
}

export default DeveloperProfileDetails;
