import React from 'react';


class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
            <h3>{this.props.name}</h3>
            <img src={this.props.imgURL} />
        </div>
    );
  }
}
export default Profile;
