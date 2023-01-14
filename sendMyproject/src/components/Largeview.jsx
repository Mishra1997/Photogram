import React, { useContext } from "react";
import "./Largeview.css";
import { apidata } from "./Routing";
const Largeview = () => {
  const data = useContext(apidata);
  return (
    <>
      <div className="main_container">
        {data.map((pic, id) => (
          <>
            <div className="singleItem">
              <img
                src={pic.download_url}
                width="750"
                height="500"
                alt="not found"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Largeview;
