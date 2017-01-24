import React from 'react';
import Layout from './layout';  

class Error extends React.Component {

  render() {
    return (
	<Layout>
        <h1>{message}</h1>
        <h2>{error.status}</h2>
        <pre>{error.stack}</pre>
	</Layout>
    );
  }
}

module.exports = Error;
