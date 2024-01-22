const Data = [
  {
    id: "1",
    drugName: "Panadol",
    ingredients: "Paracetamol",
    agent: "Benta SAL",
    type: "Brand",
  },
  {
    id: "2",
    drugName: "Zolof",
    ingredients: "Sertraline",
    agent: "Omnipharma",
    type: "Generic",
  },
  {
    id: "3",
    drugName: "Nexium",
    ingredients: "Esomeprazole",
    agent: "Pharmaline",
    type: "Biological Human",
  },
  {
    id: "4",
    drugName: "Risperdal",
    ingredients: "Risperdirone",
    agent: "Mersaco",
    type: "Biological Similar",
  },
];

const drugTypes = [
  { label: "Brand", value: "brand" },
  { label: "Generic", value: "generic" },
  { label: "Chicago", value: "Chic" },
  { label: "Los Angelos", value: "LA" },
  { label: "", value: "" }, // Add an empty string option
];

export { Data, drugTypes };
