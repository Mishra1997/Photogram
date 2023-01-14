import React, { useContext } from "react";
import "./Smallview.css";
import { apidata } from "./Routing";

const Smallview = () => {
  const data = useContext(apidata);

  return (
    <>
      <div className="main_container_smallview">
        <table className="mt-4  smallviewsection">
          {data.map((pic, index) => (
            <div className="row mb-4">
              <div className="col-sm-3 mx-4">
                {
                  <img
                    src={pic.download_url}
                    width="250"
                    height="173"
                    alt="not found"
                  />
                }
              </div>
              <div className="col-sm-3 mx-5">
                {
                  <img
                    src={pic.download_url}
                    width="250"
                    height="173"
                    alt="not found"
                  />
                }
              </div>
              <div className="col-sm-3 ">
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
        </table>
      </div>
    </>
  );
};
export default Smallview;
