import React, { useState, createContext, useContext } from "react";
import { PropTypes } from "prop-types";

export const ActiveSectionContext = createContext();

export default function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("About Me");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};

ActiveSectionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
