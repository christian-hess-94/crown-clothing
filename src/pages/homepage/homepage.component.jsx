import React from "react";
import PropTypes from "prop-types";
import "./homepage.styles.scss";
import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";
const HomePage = (props) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;