import { Component } from "react";
// import { Link } from "react-router-dom";
import Modal from "../containers/Modal/Modal";
// import DevList from "../DeveloperList/DeveloperList";
import "./AddDeveloperProfile.css";

class AddDeveloperProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isshowModal: false,
      loading: false,
      github_id: "",
      linkedin_id: "",
      twitter_id: "",
      medium_id: "",
      codechef_id: "",
      hackerrank_id: "",
      email_id: "",
    };
  }
  showModal = () => {
    this.setState({ isshowModal: true });
  };
  closeModal = () => {
    // <Link to="/DeveloperProfile" component={DevList}></Link>;
    this.setState({ isshowModal: false });
  };

  handleChange = (e) => {
    if (e.target.name === "github_id") {
      this.setState({ github_id: e.target.value });
    }
    if (e.target.name === "linked_id") {
      this.setState({ linkedin_id: e.target.value });
    }
    if (e.target.name === "twitter_id") {
      this.setState({ twitter_id: e.target.value });
    }
    if (e.target.name === "medium_id") {
      this.setState({ medium_id: e.target.value });
    }
    if (e.target.name === "codechef_id") {
      this.setState({ codechef_id: e.target.value });
    }
    if (e.target.name === "hackerrank_id") {
      this.setState({ hackerrank_id: e.target.value });
    }
    if (e.target.name === "email_id") {
      this.setState({ email_id: e.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.github_id) {
      const request = new Request("/api/developers", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      fetch(request)
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            // console.log(res.id);
            this.setState({ isshowModal: false });
            this.props.onChange(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <section className="font-name">
        <Modal show={this.state.isshowModal} modalClosed={this.closeModal}>
          <h3 className="add-dev-heading">Add developer profile</h3>
          <div className="hrline">
            <hr />
          </div>
          <form name="add-developer-form">
            <div className="form-container">
              <div className="form-element">
                <img
                  className="profile-icons"
                  src="/profile-icons/iconfinder_github_317712.png"
                  alt="github images"
                />
                <label>
                  Github<span>*</span>
                </label>
              </div>
              <div className="form-input">
                <input
                  className="input-box"
                  type="text"
                  value={this.state.github_id}
                  name="github_id"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-element">
                <img
                  className="profile-icons"
                  src="/profile-icons/app_logo_linkedin_3225190.png"
                  alt="linkedin images"
                />
                <label>Linkedin</label>
              </div>
              <div className="form-input">
                <input
                  className="input-box"
                  type="text"
                  value={this.state.linked_id}
                  name="linkedin_id"
                />
              </div>
              <div className="form-element">
                <img
                  className="profile-icons"
                  src="/profile-icons/codechef-1324440139527402917_32.png"
                  alt="codechef images"
                />
                <label>Codechef</label>
              </div>
              <div className="form-input">
                <input
                  className="input-box"
                  type="text"
                  value={this.state.codechef_id}
                  name="codechef_id"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-element">
                <img
                  className="profile-icons"
                  src="/profile-icons/Hackerrank_logo_4373234.png"
                  alt="github images"
                />
                <label>Hackrank</label>
              </div>
              <div className="form-input">
                <input
                  className="input-box"
                  type="text"
                  value={this.state.hackerrank_id}
                  name="hackerrank_id"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-element">
                <img
                  className="profile-icons"
                  src="/profile-icons/logo_twitter_3225183.png"
                  alt="twitter images"
                />
                <label>Twitter</label>
              </div>
              <div className="form-input">
                <input
                  className="input-box"
                  type="text"
                  value={this.state.twitter_id}
                  name="twitter_id"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-element">
                <img
                  className="profile-icons"
                  src="/profile-icons/Medium_svg5_5279113.png"
                  alt="medium images"
                />
                <label>Medium</label>
              </div>
              <div className="form-input">
                <input
                  className="input-box"
                  type="text"
                  value={this.state.medium_id}
                  name="medium_id"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-element">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  className="profile-icons"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <label>Email</label>
              </div>
              <div className="form-input">
                <input
                  className="input-box"
                  type="text"
                  value={this.state.email_id}
                  name="email_id"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </form>
          <hr />
          <div className="add-dev-btn">
            <button className="cancel-btn" onClick={this.closeModal}>
              Cancel
            </button>
            <button className="btn btn-submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </Modal>
        <button className="developer-btn" onClick={this.showModal}>
          Add developer info
        </button>
      </section>
    );
  }
}

export default AddDeveloperProfile;
