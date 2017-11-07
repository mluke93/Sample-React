import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var DATA = {
    name: 'John Smith',
    imgURL: 'http://lorempixel.com/200/200/',
    hobbyList: ['coding', 'writing', 'skiing']
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
      <App profileData={DATA} />,
      document.getElementById('mount')
  );
});
