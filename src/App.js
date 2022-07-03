import React from 'react';
import './App.css';
import Form from './components/contactForm/Form';
import List from './components/nameList/List';
import NumberNames from './components/numberNames/NumberNames';
import { useSelector } from 'react-redux';

function App() {

  const {contacts, initFormState} = useSelector(state => state);
  

  return (
    <div className="container">
      <div className="content">
        <header>
          <NumberNames number={contacts.length} />
        </header>
        <main>
          <List />
          <Form 
                key={initFormState.id}
                onEdit={initFormState} />
        </main>
      </div>
    </div>
  );
};


export default App;
