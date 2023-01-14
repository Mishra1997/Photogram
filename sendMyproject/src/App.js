import "./App.css";
import React, { createContext, useEffect, useState } from "react";

import Routing from "./components/Routing";

export const getapiResponse = createContext();

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
