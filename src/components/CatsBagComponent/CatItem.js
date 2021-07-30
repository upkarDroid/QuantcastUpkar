import React from "react";
import { IMG_BASE_URL, getIdFromCat } from "../../constants";

function getImageFromCatId(cat) {
  const catImgId = getIdFromCat(cat);
  return `${IMG_BASE_URL}${catImgId}.png`;
}

const CatItem = ({ cat, selectCat, selected }) => (
  <section className="grid-item" onClick={() => selectCat(getIdFromCat(cat))}>
    <img src={getImageFromCatId(cat)} alt="cat" />
    {selected && <div className="item-overlay"></div>}
  </section>
);

export default CatItem;
