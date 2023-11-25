import React from "react";
import Country from "./Country";
import Countrycard from "./Countrycard";

const Countrylist = ({ info }) => {
  return (
    // console.log(info)
    <ul>
      {info.map((countryObj, i) => {
        return (
          <li  className="center" key={i}>
            <Countrycard data={countryObj} />
          </li>
        );
      })}
    </ul>
  );
};

export default Countrylist;
