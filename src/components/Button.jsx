import React from "react";
import "./Button.css";

const Button = (props) => {
  const buttonTypes = [
    "BORRAR",
    "C",
    "CE",
    "%",
    9,
    8,
    7,
    "/",
    6,
    5,
    4,
    "x",
    3,
    2,
    1,
    "-",
    0,
    ",",
    "=",
    "+",
  ];

  // const handleClick = (props) => {
  //   return console.log(props.type);
  // };

  return (
    <div className="btn btn-info m-2">
      <div className="bg-primary row row-cols-5 p-3">
        {buttonTypes.map((type, index) => (
          <div key={index} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Button;
