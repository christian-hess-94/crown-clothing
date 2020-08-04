import React from "react";
import { connect } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";
import { DirectoryMenuContainer } from "./directory.styles";

export const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </DirectoryMenuContainer>
  );
};

Directory.propTypes = {};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
