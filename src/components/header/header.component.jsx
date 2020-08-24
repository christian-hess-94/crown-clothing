import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
    HeaderContainer,
    LogoContainer,
    OptionLink,
    OptionsContainer,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink
                        as="div"
                        onClick={() => dispatch(signOutStart())}
                    >
                        SIGN OUT ({currentUser && currentUser.displayName})
                    </OptionLink>
                ) : (
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                )}
                <CartIcon />
                {!hidden && <CartDropdown />}
            </OptionsContainer>
        </HeaderContainer>
    );
};
export default Header;
