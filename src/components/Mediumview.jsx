import React, { useContext } from "react";
import "./Mediumview.css";
import { apidata } from "./Routing";

const Mediumview = () => {
  const data = useContext(apidata);

  return (
    <>
      <div className=" mt-4 ">
        <div className="container  itemscontainer_mediumview">
          {data.map((pic, index) => (
            <div className="row mb-4">
              <div className="col-sm-3  firstcol">
                {
                  <img
                    src={pic.download_url}
                    width="250"
                    height="173"
                    alt="not found"
                  />
                }
              </div>
              <div className="col-sm-3 secondcol ">
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
export default Mediumview;
