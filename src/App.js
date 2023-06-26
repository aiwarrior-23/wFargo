import React from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS
import logo from './logo.svg';
import './App.css';
import PredictForm from './PredictForm';

function App() {
  return (
    <div className="App">
      <Menu inverted className="menu">
        <Menu.Item name='home' />
        <Menu.Item name='about' />
        <Menu.Item name='contact' />
      </Menu>
      <PredictForm />
    </div>
  );
}

export default App;
