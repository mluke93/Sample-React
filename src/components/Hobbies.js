import React from 'react';

class Hobbies extends React.Component {
  constructor() {
    super();
  }

  render() {
      var hobbies = this.props.hobbyList.map (function (hobby, index) {
        return (<li key={index}>{hobby}</li>)
      });

    return (
      <div>
          <h5>My Hobbies:</h5>
          <ul>
            {hobbies}
          </ul>
      </div>
    );
  }
}
export default Hobbies;
