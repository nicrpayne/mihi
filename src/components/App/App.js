import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

// import AboutPage from '../AboutPage/AboutPage';
// import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import RegisterPage from '../RegisterPage/RegisterPage'
import JournalEntries from '../JournalEntries/JournalEntries'
import JournalEntryForm from '../JournalEntryForm/JournalEntryForm'
import PrimaryEmotionSelector from '../PrimaryEmotionSelector/PrimaryEmotionSelector'
import SecondaryEmotionSelector from '../SecondaryEmotionSelector/SecondaryEmotionSelector'
import TertiaryEmotionSelector from '../TertiaryEmotionSelector/TertiaryEmotionSelector'
import JournalEntryItem from '../JournalEntryItem/JournalEntryItem'
import Edit from '../EntryEditForm/EntryEditForm'

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* <Route
              exact
              path="/about"
              component={AboutPage}
            /> */}
            <Route
              exact
              path="/register"
              component={RegisterPage}
            />
            {/* <Route
              exact
              path="/entries"
              component={JournalEntries}
            /> */}
            <ProtectedRoute
              exact
              path="/form"
              component={JournalEntryForm}
            />
            
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={JournalEntries}
            />
            <ProtectedRoute
              exact
              path="/journalentry/:id"
              component={JournalEntryItem}
            />
            {/* <ProtectedRoute
              exact
              path="/primary"
              component={PrimaryEmotionList}
            /> */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/emotions/"
              component={PrimaryEmotionSelector}
            />
            <ProtectedRoute
              exact
              path="/emotions2/:id"
              component={SecondaryEmotionSelector}
            />
            <ProtectedRoute
              exact
              path="/emotions3/:id"
              component={TertiaryEmotionSelector}
            />
            <ProtectedRoute
              exact
              path="/info/:id"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/edit/:id"
              component={Edit}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
