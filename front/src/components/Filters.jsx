import React, { useState } from "react";

const Filters = () => {
  return (
    <>
      <select
        name=""
        id=""
        className="w-full p-2 border border-gray-300 rounded mt-1"
      >
        <option value="Bed">Lit</option>
        <option value="Sofa">Canapé</option>
        <option value="Cabinet">Armoire</option>
        <option value="Chair">Chaise</option>
        <option value="Table">Table</option>
        <option value="Others">Autre</option>
      </select>
    </>
  );
};

export default Filters;
