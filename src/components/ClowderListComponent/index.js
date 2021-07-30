import React from "react";
import { IMG_BASE_URL } from "../../constants";
import "./clowder.css";

const ClowderListComponent = ({ clowder }) => {
  const blankRows = 4 - clowder.length;
  const displayClowders = [...clowder];

  //below code is just for displaying Clowder table skeleton as shown in specs
  //TODO::Upkar : add proper logic if time permits
  if (blankRows > 0) {
    for (let index = 0; index < blankRows; index++) {
      displayClowders.push([null, null, null]);
    }
  }
  return (
    <section className="clowder">
      <h4 className="clowder-intro">Clowders Found</h4>
      <section className="clowder-grid">
        {displayClowders.map((cl) => {
          return cl.map((imgId, index) => (
            <div className="clowder-item" key={`clowder-item${index}`}>
              {imgId && (
                <img
                  className="item-image"
                  src={`${IMG_BASE_URL}${imgId}.png`}
                  alt="cat"
                />
              )}
            </div>
          ));
        })}
      </section>
    </section>
  );
};

export default ClowderListComponent;
