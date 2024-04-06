import React, { createContext } from "react";
import CompoenetC from "./CompoenetC";

export const UserContext = createContext();
export const ChannelContext = createContext();
function Context() {
  return (
    <div>
      <UserContext.Provider value={"churchill"}>
        <ChannelContext value={"Codevolution"}>
          <CompoenetC />
        </ChannelContext>
      </UserContext.Provider>
    </div>
  );
}

export default Context;
