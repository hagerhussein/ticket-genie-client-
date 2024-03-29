import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store'
import SignupFormContainer from './components/SignupFormContainer'
import LoginFormContainer from './components/LoginFormContainer'
import EventsContainer from './components/EventsContainer'
import EventDetailsContainer from './components/EventDetailsContainer'
import TicketDetailsContainer from './components/TicketDetailsContainer'
import CreateTicketContainer from './components/CreateTicketContainer';
import CreateEventFormContainer from './components/CreateEventFormContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Route path="/" exact component={EventsContainer} />
        <Route path="/signup" exact component={SignupFormContainer} />
        <Route path="/login" exact component={LoginFormContainer} />
        <Route path="/events/:id" exact component={EventDetailsContainer} />
        <Route path="/tickets/:id" exact component={TicketDetailsContainer} />
        <Route path="/add ticket" exact component={CreateTicketContainer} />
        <Route path="/add event" exact component={CreateEventFormContainer} />
      </div>
    </Provider>
  );
}

export default App;
