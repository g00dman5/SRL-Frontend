/*
 *
 * TheCloud
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class TheCloud extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="TheCloud" meta={[ { name: 'description', content: 'Description of TheCloud' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
