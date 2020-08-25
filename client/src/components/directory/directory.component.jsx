import React from "react";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import { DirectoryMenuContainer } from "./directory.styles";

export const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <DirectoryMenuContainer>
            {sections.map((section) => (
                <MenuItem key={section.id} {...section} />
            ))}
        </DirectoryMenuContainer>
    );
};

export default Directory;
