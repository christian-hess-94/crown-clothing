// import React, { Component } from "react";
// import "./directory.styles.scss";
// import MenuItem from "../menu-item/menu-item.component";
// export default class Directory extends Component {
//   render() {
//     let { sections } = this.state;
//     return (

//     );
//   }
// }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";

export const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

Directory.propTypes = {};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
