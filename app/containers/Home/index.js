/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import {Jumbotron } from 'react-bootstrap';

export default class Home extends React.PureComponent {
  render() {

    return(



      <Jumbotron>
     <h1>Hello, world!</h1>
     <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
     <p><Button bsStyle="primary">Learn more</Button></p>
   </Jumbotron>








    )


  }
}
