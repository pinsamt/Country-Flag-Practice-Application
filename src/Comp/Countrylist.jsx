import React from "react";
import Country from "./Country";
import Countrycard from "./Countrycard";

const Countrylist = ({ info }) => {
  return (
    // console.log(info)
    <ul className="center">
      {info.map((countryObj, i) => {
        return (
          <li key={i}>
            <Countrycard data={countryObj} />
          </li>
        );
      })}
    </ul>
  );
};

export default Countrylist;
