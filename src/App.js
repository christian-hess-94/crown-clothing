import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.page';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.page';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.page';
import CheckoutPage from './pages/checkout/checkout.page';
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';


class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { checkUserSession } = this.props
        checkUserSession();
    }
    componentWillUnmount() {
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
    checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
