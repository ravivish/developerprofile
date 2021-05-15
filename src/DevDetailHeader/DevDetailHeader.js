// import { Component } from "react";
import { Link } from "react-router-dom";
import "./DevDetailHeader.css";
import App from "../App";

// class DevDetailHeader extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { repo: this.props.repos };
//   }
//   render() {
//     return(
//         <div className="dev-header">
//             <Link to="/" component={App}>The Developer Profile</Link>
//             <Link to="/" component={App}>All Developer</Link>
//         </div>

//     ) 
//   }
// }
function DevDetailHeader() {
  return (
    <div className="dev-header">
      <Link to="/" className="nav-item font-name">
        The Developer Profile
        </Link>
        <Link to="/" className="nav-item font-name">
        All Developer
      </Link>
    </div>
  );
}

export default DevDetailHeader;
