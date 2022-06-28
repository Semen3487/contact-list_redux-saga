import React from 'react';
import './App.css';
import Form from './components/contactForm/Form';
import List from './components/nameList/List';
import NumberNames from './components/numberNames/NumberNames';

function App() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <NumberNames />
        </header>
        <main>
          <List />
          <Form />
        </main>
      </div>
    </div>
  );
}

export default App;
