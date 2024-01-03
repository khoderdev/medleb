/* eslint-disable tailwindcss/no-custom-classname */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
// import EditSuccessPopup from "./EditSuccessPopup"; // Import the EditSuccessPopup component
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";

function EditDrug() {
  const { id } = useParams();
  const [drug, setDrug] = useState({});

  useEffect(() => {
    // Fetch drug data based on the id from the URL
    axios.get(`http://localhost:3500/drugs/${id}`).then((res) => {
      setDrug(res.data); // Set the entire data object as the drug state
    });
  }, [id]);

  // const [id, setId] = useState("");
  const [drugImage, setDrugImage] = useState("");
  const [drugName, setDrugName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [priceLB, setPrice] = useState("");
  const [dosageValueN, setDosageValueN] = useState("");
  const [presentation, setPresentation] = useState("");
  const [form, setForm] = useState("");
  const [route, setRoute] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [agent, setAgent] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [manufacturingCountry, setManufacturingCountry] = useState("");
  const [subsidyPercentage, setSubsidyPercentage] = useState("");
  const [stratum, setStratum] = useState("");
  const [atc, setAtc] = useState("");
  const [code, setCode] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(true);
  // const { id } = useParams();

  // useEffect(() => {
  //   console.log("Fetching data for ID:", id);
  //   axios
  //     .get(`"http://localhost:3500/drugs"/${id}`)
  //     .then((res) => {
  //       console.log("Fetched data:", res.data);
  //       setDrug(res.data);
  //       setDrugName(res.data.drugName);
  //       setIngredients(res.data.ingredients);
  //       setPrice(res.data.priceLB);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);getters
  //     });
  // }, [id]);

  const navigate = useNavigate();

  const data = {
    drugImage: drugImage,
    drugName: drugName,
    ingredients: ingredients,
    priceLB: priceLB,
    dosageValueN: dosageValueN,
    presentation: presentation,
    form: form,
    route: route,
    type: type,
    country: country,
    agent: agent,
    manufacturer: manufacturer,
    manufacturingCountry: manufacturingCountry,
    subsidyPercentage: subsidyPercentage,
    stratum: stratum,
    atc: atc,
    code: code,
    registrationNumber: registrationNumber,
  };

  function Update(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3500/drugs/${id}`, drug) // Use the drug state as the data
      .then(() => navigate("/list"))
      .catch((error) => {
        console.error("Update failed:", error);
        // Handle the error, such as displaying an error message to the user
      });
  }

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center pb-14">
      <Link
        to={`/list`}
        className="mb-4 inline-block self-start p-3 text-lg text-teal-600"
      >
        <ArrowBackIosIcon fontSize="medium" className="inline align-middle" />
        Back
      </Link>
      <h1 className="text-3xl font-bold">Drug Details</h1>
      <form className="mt-2 flex h-full w-[50%] flex-col">
        <label
          htmlFor="drugImage"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Drug Image:
        </label>
        <input
          value={drugImage}
          onChange={(e) => setDrugImage(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug image"
        />
        <label
          htmlFor="drugName"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Name:
        </label>
        <input
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="brand name"
        />
        <label
          htmlFor="ingredients"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Ingredients:
        </label>
        <input
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug ingredients"
        />
        <label
          htmlFor="priceLB"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Public Price:
        </label>
        <input
          value={priceLB}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="number"
          placeholder="drug priceLB"
        />
        <label
          htmlFor="dosageValueN"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Dose:
        </label>
        <input
          value={dosageValueN}
          onChange={(e) => setDosageValueN(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug dosage"
        />
        <label
          htmlFor="ingredients"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Presentation:
        </label>
        <input
          value={presentation}
          onChange={(e) => setPresentation(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug presentation"
        />
        <label
          htmlFor="ingredients"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Form:
        </label>
        <input
          value={form}
          onChange={(e) => setForm(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug form"
        />
        <label
          htmlFor="route"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Route:
        </label>
        <input
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug route"
        />
        <label
          htmlFor="ingredients"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Type:
        </label>
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug type"
        />
        <label
          htmlFor="ingredients"
          className="labels mt-4 text-left text-lg font-bold"
        >
          country:
        </label>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug country"
        />
        <label
          htmlFor="agent"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Agent:
        </label>
        <input
          value={agent}
          onChange={(e) => setAgent(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="agent"
        />
        <label
          htmlFor="ingredients"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Manufacturer:
        </label>
        <input
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug manufacturer"
        />
        <label
          htmlFor="ingredients"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Manufacturing Country:
        </label>
        <input
          value={manufacturingCountry}
          onChange={(e) => setManufacturingCountry(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="select Country"
        />
        <label
          htmlFor="subsidyPercentage"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Subsidy Percentage:
        </label>
        <input
          value={subsidyPercentage}
          onChange={(e) => setSubsidyPercentage(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="Subsidy Percentage"
        />
        <label
          htmlFor="stratum"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Stratum:
        </label>
        <input
          value={stratum}
          onChange={(e) => setStratum(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug stratum"
        />
        <label
          htmlFor="atc"
          className="labels mt-4 text-left text-lg font-bold"
        >
          ATC:
        </label>
        <input
          value={atc}
          onChange={(e) => setAtc(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="atc code"
        />
        <label
          htmlFor="code"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Code:
        </label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="drug code"
        />
        <label
          htmlFor="registrationNumber"
          className="labels mt-4 text-left text-lg font-bold"
        >
          Registration Number:
        </label>
        <input
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          className="mt-2 rounded-2xl border border-zinc-400 bg-white/10 py-4 pl-6 font-normal outline-none"
          type="text"
          placeholder="Registration Number"
        />

        <Button
          className="mt-10 w-fit self-center hover:bg-[#259F83]"
          sx={{
            backgroundColor: "#259F83",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            border: "2px solid #259F83",
            transition: "border 0.3s ease-in-out, color 0.3s ease-in-out", // Add transition for color change
          }}
          onClick={Update}
          onMouseOver={(e) => {
            e.currentTarget.style.border = "2px solid #259F83";
            e.currentTarget.style.color = "#fff"; // Change text color on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.border = "2px solid #259F83";
            e.currentTarget.style.color = "#fff"; // Restore the initial text color on hover out
          }}
        >
          UPDATE Drug
        </Button>
      </form>
    </div>
  );
}

export default EditDrug;
