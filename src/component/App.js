import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
  }};

const mapDispatchToProps = dispatch => ({
});

class App extends React.Component {
  render() {
    return (
      <div>
        <span> it works! </span>
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
