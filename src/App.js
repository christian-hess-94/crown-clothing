import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.page';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.page';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.page';
import CheckoutPage from './pages/checkout/checkout.page';
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';


const App = () => {
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkUserSession())
    }, [dispatch])

    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SigninAndSignup />} />
                <Route exact path='/checkout' component={CheckoutPage} />
            </Switch>
        </>
    );
}

export default App;
