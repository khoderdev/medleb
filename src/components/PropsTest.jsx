
import React from "react";
import DrugCard from "./DrugCard";
import Panadol from "../images/panadol.png";
import Nexium from "../images/nexium.png";
import Zoloft from "../images/zoloft.png";
import Risperdal from "../images/risperdal.png";

function CardRender() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-5 gap-8 p-6 py-20 bg-black-contents text-white-text border-2 border-red-500">
      <DrugCard
        Name="Panadol"
        Img={Panadol}
        Ingredients="Paracetamol"
        Dosage="500 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Panadol"
        Img={Panadol}
        Ingredients="Paracetamol"
        Dosage="500 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Panadol"
        Img={Panadol}
        Ingredients="Paracetamol"
        Dosage="500 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Panadol"
        Img={Panadol}
        Ingredients="Paracetamol"
        Dosage="500 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Nexium"
        Img={Nexium}
        Ingredients="Ibuprofen"
        Dosage="200 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Zoloft"
        Img={Zoloft}
        Ingredients="Loratadine"
        Dosage="10 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Zoloft"
        Img={Zoloft}
        Ingredients="Loratadine"
        Dosage="10 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Zoloft"
        Img={Zoloft}
        Ingredients="Loratadine"
        Dosage="10 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Risperdal"
        Img={Risperdal}
        Ingredients="Loratadine"
        Dosage="10 mg"
        Route="Oral"
      />
      <DrugCard
        Name="Risperdal"
        Img={Risperdal}
        Ingredients="Loratadine"
        Dosage="10 mg"
        Route="Oral"
      />
    </div>
  );
}

export default CardRender;
