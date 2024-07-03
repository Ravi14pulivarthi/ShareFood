import React, { useState } from "react";
import { iteamdata } from "../data";

function Itemsdisplay() {
  const [displayitem, setdisplayitem] = useState(iteamdata);
  console.log("this is data", displayitem);

  return (
    <div className="itemsection">
      {displayitem.map((items) => {
        return (
          <div className="glarey">
            <img src={items.item_img} alt={items.item_img} />
            <p>{items.item_text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Itemsdisplay;
