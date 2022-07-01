import React from 'react';
import './App.css';
import Form from './components/contactForm/Form';
import List from './components/nameList/List';
import NumberNames from './components/numberNames/NumberNames';
import { connect } from 'react-redux';

function App({contacts, initFormState}) {
  return (
    <div className="container">
      <div className="content">
        <header>
          <NumberNames contacts ={contacts.length} />
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

const mapStateToProps = (initialState) => {
  return initialState 
}

export default connect(mapStateToProps)(App);
