import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.page';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.page';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.page';
import CheckoutPage from './pages/checkout/checkout.page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            console.log('Auth state changed');
            if (userAuth) {
                const userRef = createUserProfileDocument(userAuth);
                (await userRef).onSnapshot(snapshot => {//Updates in real time with firebase data
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            }
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        // this.unsubscribeFromAuth(); //retira atualizal realtime do usuario
    }


    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SigninAndSignup />} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                </Switch>
            </>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
