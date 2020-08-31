import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
// import ShopPage from './pages/shop/shop.page';
// import HomePage from './pages/homepage/homepage.page';
// import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.page';
// import CheckoutPage from './pages/checkout/checkout.page';
import Header from './components/header/header.component';
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyles } from './global.styles'
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.page'))
const ShopPage = lazy(() => import('./pages/shop/shop.page'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.page'))
const SigninAndSignup = lazy(() => import('./pages/signin-and-signup/signin-and-signup.page'))

const App = () => {
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkUserSession())
    }, [dispatch])

    return (
        <>
            <GlobalStyles />
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SigninAndSignup />} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </>
    );
}

export default App;
