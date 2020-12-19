import React, { useState } from "react";
import "./styles.css";
import { BoxComponent } from "./BoxComponent";

export default function BoxContainer() {
  const [countP, setCount] = useState(0);

  let myArr = [];
  let colors = [
    "#99b433",
    "#1e7145",
    "#00a300",
    "#ff0097",
    "#7e3878",
    "#9f00a7",
    "#1d1d1d",
    "#e3a21a",
    "#da532c",
    "#b91d47",
    "#99b433",
    "lime",
    "blue",
    "#ff0097",
    "orange",
    "cyan",
    "yellow"
  ];

  for (let i = 0; i < 16; i++) {
    let rand = Math.floor(Math.random() * 16) + 1;
    let clrRand = Math.floor(Math.random() * 16) + 1;
    let boxClr = colors[clrRand];
    let obj = {
      rand,
      boxClr
    };
    myArr.push(obj);
  }

  const getClickCountP = () => {
    //setCount(countP + 1);
    console.log(countP);
  };

  return (
    <div className="App">
      {myArr.map((v, i) => {
        return (
          <>
            <BoxComponent
              onClick={() => setCount(countP + 1)}
              count={countP}
              getClickCount={getClickCountP}
              clr={v.boxClr}
              value={v.rand}
              index={i}
              key={i + "d"}
            />
          </>
        );
      })}
    </div>
  );
}
