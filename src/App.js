import React from 'react';
import Profile from './components/Profile';
import Hobbies from './components/Hobbies';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <Profile
            name={this.props.profileData.name}
            imgURL={this.props.profileData.imgURL}
          />
          <Hobbies
            hobbyList={this.props.profileData.hobbyList}
          />
      </div>
    );
  }
}
export default App;
