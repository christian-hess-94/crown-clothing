import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
class App extends React.Component {

  state = {
    user: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // console.log(user);
      createUserProfileDocument(user)
      this.setState({ user })
    })
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth();
  }


  render() {
    let { user } = this.state
    return (
      <>
        <Header user={user} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignup} />
        </Switch>
      </>
    );
  }
}

export default App;
