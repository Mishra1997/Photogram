import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Largeview from "./Largeview";
import Smallview from "./Smallview";
import Mediumview from "./Mediumview";
import Sorryb from "./Sorryb";
import Homegrid from "./Homegrid";

export const apidata = createContext();
const Routing = () => {
  const [data, setdata] = useState([]);
  const url = "https://picsum.photos/v2/list";

  useEffect(() => {
    callApi();
  }, []);
  const callApi = async () => {
    const response = await fetch(url);
    const dataresponse = await response.json();
    setdata(dataresponse);
  };
  const getresponse = data;
  return (
    <>
      <apidata.Provider value={getresponse}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}>
              <Route index element={<Homegrid />} />
              <Route path="largeview" element={<Largeview />} />
              <Route path="smallview" element={<Smallview />} />
              <Route path="mediumview" element={<Mediumview />} />
              <Route path="sorryBabu" element={<Sorryb />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </apidata.Provider>
    </>
  );
};
export default Routing;
