import React from "react";
import { getLoggedUserId } from "../utils/getLoggedUserId";

export const LoggedUserContext = React.createContext<number | null>(null);

export const LoggedUserProvider = ({ children }) => {
  const loggedUserId = getLoggedUserId();

  return (
    <LoggedUserContext.Provider value={loggedUserId}>
      {children}
    </LoggedUserContext.Provider>
  );
};
