/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';

export default class Home extends React.PureComponent {
  render() {

    const navFull={
      border: "1px solid #bbbbbb",
      backgroundColor:"rgba(0, 0, 0, 0.55)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      zIndex:"99999",
    }

    const navMobile={
      border: "1px solid #bbbbbb",
      backgroundColor:"rgba(0, 0, 0, 0.55)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      zIndex:"99999",
    }

    const linkStyle={
      textDecoration:"none",
      color:"#ffffff",
      fontSize:"45px",
      fontFamily:"'Squada One', cursive",
      textTransform:"uppercase",

    }

    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>


          <div style={navFull}>
            <Link style={linkStyle} to= '/'> Home </Link>
            <Link style={linkStyle} to= '/about'> About </Link>
            <Link style={linkStyle} to= '/shop'> Shop </Link>
            <Link style={linkStyle} to= 'https://cloud.sumorobotleague.com/'> The Cloud </Link>
            <Link style={linkStyle} to= '/tournament'> Tournament </Link>
            <Link style={linkStyle} to= '/contact'> Contact </Link>
          </div>


      </div>
    );
  }
}
