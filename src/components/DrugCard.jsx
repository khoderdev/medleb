import React from "react";

function DrugCard(props) {
  return (
    <div className="">
      <div className="drug-card flex w-full h-auto md:h-[150px] rounded-xl border-2">
        <div className="col-1 md:w-2/6 flex justify-center items-center p-2 border-r">
          <img className=" h-auto w-28" src={props.Img} alt="Drug Image" />
        </div>
        <div className="col-2 md:w-8/12 p-2 flex flex-col justify-center md:justify-start md:flex-row items-center">
          <ul className="text-left">
            <li>
              <span className="font-bold">Name:</span>
              <span className="text-green-pri ml-2">{props.Name}</span>
            </li>
            <li>
              <span className="font-bold">Ingredients:</span>
              <span className="text-green-pri ml-2">{props.Ingredients}</span>
            </li>
            <li>
              <span className="font-bold">Dosage:</span>
              <span className="text-green-pri ml-2">{props.Dosage}</span>
            </li>
            <li>
              <span className="font-bold">Route:</span>
              <span className="text-green-pri ml-2">{props.Route}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DrugCard;
