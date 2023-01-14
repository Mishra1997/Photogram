import React, { useContext } from "react";
import "./Homegrid.css";
import { apidata } from "./Routing";
const Homegrid = () => {
  const data = useContext(apidata);
  return (
    <>
      <div className="main_container_homegrid">
        <div className="container text-center mt-4 itemscontainer">
          {data.map((pic, index) => (
            <div className="row mb-4">
              <div className="col-sm-3">
                {
                  <img
                    src={pic.download_url}
                    width="250"
                    height="173"
                    alt="not found"
                  />
                }
              </div>
              <div className="col-sm-3">
                {
                  <img
                    src={pic.download_url}
                    width="250"
                    height="173"
                    alt="not found"
                  />
                }
              </div>
              <div className="col-sm-3">
                {
                  <img
                    src={pic.download_url}
                    width="250"
                    height="173"
                    alt="not found"
                  />
                }
              </div>
              <div className="col-sm-3">
                {
                  <img
                    src={pic.download_url}
                    width="250"
                    height="173"
                    alt="not found"
                  />
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Homegrid;
