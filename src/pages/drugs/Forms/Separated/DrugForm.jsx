import React, { useState } from "react";
import axios from "../../../../api/axios";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://192.168.10.88:3010";

const DrugForm = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const [drugData, setDrugData] = useState({
    Guid: uuidv4(),
    ATCGuid: uuidv4(),
    DosageGuid: uuidv4(),
    // ATCCodesGuid: uuidv4(),
    // DosageGuid: uuidv4(),
    PresentationGuid: uuidv4(),
    FormGuid: uuidv4(),
    RouteGuid: uuidv4(),
    StratumGuid: uuidv4(),
    // StratumTypeGuid: uuidv4(),
    AgentGuid: uuidv4(),
    BrandGuid: uuidv4(),
    ManufacturerGuid: uuidv4(),
    CountryGuid: uuidv4(),
    ResponsiblePartyGuid: uuidv4(),
    DrugLabelGuid: uuidv4(),
    Code: "123",
    RegistrationNumber: "123",
    REP_date: currentDate,
    IsDouanes: true,
    Date_dc: currentDate,
    LASTEffective_Date: currentDate,
    CIF_FOB: "FOB",
    LASTPublicABP: 10,
    LASTCurrencyGuid: uuidv4(),
    SubsidyLabel: "",
    SubsidyPercentage: 0,
    LJ_FOB_ValueUSD: 100,
    HospPricing: true,
    WJ_Leb_PubPriceHos: "90000",
    Seq: "Seq123",
    B_G: "Brand",
    Substitutable: false,
    WEBCIF_FOB: "92000",
    WEBPublicABP: 1000,
    WEBCurrency: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    NM: true,
    GTIN: "1111111111111",
    Notes: "Drug Note Test",
    Description: "Drug Description Test",
    ActiveInactiveIngredient: "Paracetamol",
    Indication: "Drug Indication",
    Posology: "Drug posology Test",
    MethodOfAdministration: "Drug method Of Administration Text",
    Contraindications: "Drug contraindications Test",
    PrecautionForUse: "Drug precaution For Use Test",
    EffectOnFGN: "Drug effect On Fgn Test",
    SideEffect: "Drug Side Effect Test",
    Toxicity: "drug toxicity Test",
    StorageCondition: "good",
    ShelfLife: "3edai",
    IngredientLabel: "Paracetamol 500",
    IsBiological: true,
    IsNarcotis: true,
    IsOTC: true,
    IsNSSF: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDrugData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server endpoint
      console.log("Drug Data:", drugData);
      const newGuid = uuidv4();

      const config = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjRhNjU3YTY0LTA1MmUtNGYyNy1hZGI0LWVjOTU1NmFiZmUzZSIsInJvbGUiOiIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWYiLCJwcml2aWxlZ2VzIjoiW3tcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiZjdiY2FiOTYtYjIyNC00OGVkLTliZTAtMGQyOTQ2YTA4OTVkXCIsXCJSb2xlUGFnZU5hbWVcIjpcInJvdXRlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYWQ2MGVkNzEtMTJjZC00NGU1LWJhMzAtZWU2YTI1MGMwODdlXCIsXCJSb2xlUGFnZU5hbWVcIjpcIkF0Y0NvZGVcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJhZWMzMzkwOC1lOGQ1LTQ3ZjUtOTBlMy1kMDcxZDZkMDk5YzdcIixcIlJvbGVQYWdlTmFtZVwiOlwiZ292ZXJub3JhdGVzXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiZjZjYTIzMzctNmNkMy00N2M0LTg2ZDYtNGI0MGMwODEzMjI4XCIsXCJSb2xlUGFnZU5hbWVcIjpcInN0cmF0dW1cIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCI5NjkxMDA2OC04NTE2LTRkYjktOWVjMy1lODZlNDE0NTJmMmNcIixcIlJvbGVQYWdlTmFtZVwiOlwiVXNlcnNcIixcIlJlYWRBbGxBY2Nlc3NcIjpmYWxzZSxcIlJlYWRPbmVBY2Nlc3NcIjpmYWxzZSxcIldyaXRlQWNjZXNzXCI6ZmFsc2UsXCJVcGRhdGVBY2Nlc3NcIjpmYWxzZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYzI4OTBjN2UtNzM0MS00Yzk0LWIyY2YtY2FhNTE1NTBkYzg4XCIsXCJSb2xlUGFnZU5hbWVcIjpcImNpdHlcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJhNGM0M2QyMC05MmRhLTQxYjktYjdlZC1jMzIyMjViNGFlN2NcIixcIlJvbGVQYWdlTmFtZVwiOlwic3RyYXR1bXR5cGVcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCI2MTQ1Nzc4NC03YmJhLTRlYTgtOWYwZS1iNGM1ODY2ZDVmNzlcIixcIlJvbGVQYWdlTmFtZVwiOlwiZHJ1Z3ByaWNpbmdcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCIxMzA3OTllNC03ZTI0LTRlZWQtOTQ5ZC1iMWIwODllYjgxYmZcIixcIlJvbGVQYWdlTmFtZVwiOlwiZHJ1Z2ltYWdlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiNGM5ODBhZTYtYzFjZi00MTVlLWFlNDktYWFiM2RjYjQxNGVlXCIsXCJSb2xlUGFnZU5hbWVcIjpcImNvbXBhbnl0eXBlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiZDdkZGMyMTktOTIzNy00ODZlLWJkZjYtYTg5MjU1MzNjNDUxXCIsXCJSb2xlUGFnZU5hbWVcIjpcImJyYW5kXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYTkxNzljNzYtYmFhMy00MjE0LTk0OTQtYTgwNTE2ZjcxODcyXCIsXCJSb2xlUGFnZU5hbWVcIjpcImNvbXBhbnlcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCI4MmM1NWE2Yi01ZmJlLTRiODYtYjg4MS1hNmNjNjI2NDk1OGJcIixcIlJvbGVQYWdlTmFtZVwiOlwiZGlzZWFzZWNhdGVnb3J5YXRjXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYzAzM2E2NWUtMzdlOS00NWUzLTg0NjAtYTM4ZjExMjU5YjlmXCIsXCJSb2xlUGFnZU5hbWVcIjpcImRpc2Vhc2VjYXRlZ29yeVwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjM2ZmE2YTAwLTk4MjQtNDlkZC05OWNmLTk0NjIzMTc5MGFiN1wiLFwiUm9sZVBhZ2VOYW1lXCI6XCJ3YXJlaG91c2VcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJiOWI2MDEzZi00YWUyLTRjMWQtOGJkYS05MDNjZWVjZmZjYWFcIixcIlJvbGVQYWdlTmFtZVwiOlwiY29udGFpbmVydHlwZVwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjZlZmVhNTM4LTA3MGMtNGUzMy04NGM0LWY3MTNiNWJmZDAwY1wiLFwiUm9sZVBhZ2VOYW1lXCI6XCJhdGNcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJiMzljZjc5Mi0wNTBmLTQwNmQtYTgyYy04ZDMwODdiZmE2MzVcIixcIlJvbGVQYWdlTmFtZVwiOlwidGhpcmRwYXJ0eVwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjgxNGE5YzY3LWQzN2YtNDExOC1hNzc0LThjZjIzZDk4NWNhMVwiLFwiUm9sZVBhZ2VOYW1lXCI6XCJkaXN0cmljdFwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjVhNTNmZGQzLTQwMjMtNDMxZS04YjhlLThiMzljZThiZjc0M1wiLFwiUm9sZVBhZ2VOYW1lXCI6XCJjdXJyZW5jeXJhdGVcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJiNWU2NjViZC0wNjA5LTQ4YTMtYjYzYy03NGFkNTg2NTE2MGNcIixcIlJvbGVQYWdlTmFtZVwiOlwiY3VycmVuY3lcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJlNmExZmQyNi1kMTYxLTQyMDUtYWI5Yi03MjdjYzAzNDBjMTVcIixcIlJvbGVQYWdlTmFtZVwiOlwidHJlYXRtZW50Y2F0ZWdvcmllc1wiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjU1M2ZmODg5LTFiMzctNDlkMS1iODQ2LTMzMmE0MWQyZGU5OVwiLFwiUm9sZVBhZ2VOYW1lXCI6XCJwcmVzZW50YXRpb250eXBlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiMTY1NDhkNzQtMjBkNy00MTllLTliZjMtMGNhMWVjZGU2MGVhXCIsXCJSb2xlUGFnZU5hbWVcIjpcImRydWdmb3JtcGFyZW50XCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiZTUyNzZlZWYtM2VhYy00ZmViLWIwYzEtMDM1ZWFiZTY2Y2EyXCIsXCJSb2xlUGFnZU5hbWVcIjpcImRvc2FnZXVuaXRcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCIxNGI0Y2Q2ZS1hYzZhLTQxYmQtYjcyZS02NDk3MTg0Yzg1NGRcIixcIlJvbGVQYWdlTmFtZVwiOlwiZHJ1Z2Zvcm1cIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCIzMjNiZWM3My1lOTFkLTRmODctYTg4YS1mOTY5ODhmOTcyZGZcIixcIlJvbGVQYWdlTmFtZVwiOlwiQ291bnRyeVwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjc0MDNlMzI0LTIyNGYtNDE1MS05NjQ2LTUwYWYyZjdlZGEzZVwiLFwiUm9sZVBhZ2VOYW1lXCI6XCJkcnVnbGFiZWxcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCI3MWEyZTI3YS02MDkxLTQxNDctYTdlNC00NmUyNmZlNDJkZGZcIixcIlJvbGVQYWdlTmFtZVwiOlwiZG9zYWdlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYmFiMDA3MGYtOWQxYi00NTAyLTgwOGQtZWI4NjM3ZTRkYmFlXCIsXCJSb2xlUGFnZU5hbWVcIjpcImRydWdcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJkY2E3ZjI0MC03MmQwLTQ5NGEtYWRiNS03Mzc5OWQ4ZTcxYmNcIixcIlJvbGVQYWdlTmFtZVwiOlwicHJlc2VudGF0aW9udW5pdFwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjFhZmUwZWVmLTdiZTUtNGQzNS1hMWY4LWM5ODc1MmIzNDFlZlwiLFwiUm9sZVBhZ2VOYW1lXCI6XCJwcmVzZW50YXRpb25cIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn1dIiwibmJmIjoxNzA0OTYzMjIxLCJleHAiOjE3MDQ5NzQwMjEsImlhdCI6MTcwNDk2MzIyMX0.8v24TYpg8vhkhe2ClnZXQLQf-UcPXbDV9BmGwt_iiYc",
        },
      };

      // console.log("testttttttttttttt");

      const response = await axios.post(
        "http://192.168.10.88:3010/api/drugs/v1.0",
        drugData,
        config
      );

      // Assuming you have different tables with dynamic endpoint names
      const BrandsEndpoind = "/table1-endpoint";
      const table2Endpoint = "/table2-endpoint";

      const response1 = await axios.post(
        `${API_URL}${table1Endpoint}`,
        { data: drugData.table1Data },
        config
      );

      const response2 = await axios.post(
        `${API_URL}${table2Endpoint}`,
        { data: drugData.table2Data },
        config
      );

      // Handle the responses as needed
      console.log("Response from Table 1:", response1.data);
      console.log("Response from Table 2:", response2.data);

      // Clear the form after successful submission
      setDrugData({
        // ... (reset your state here)
      });

      console.log("Server Response:", response);
      // Handle the response as needed
      console.log("Drug added successfully:", response.data);

      // Clear the form after successful submission
      setDrugData({
        // ATCGuid: "",
        // DosageGuid: "",
        Guid: uuidv4(),
        ATCGuid: uuidv4(),
        DosageGuid: uuidv4(),
        PresentationGuid: uuidv4(),
        FormGuid: uuidv4(),
        RouteGuid: uuidv4(),
        StratumGuid: uuidv4(),
        StratumTypeGuid: uuidv4(),
        AgentGuid: uuidv4(),
        BrandGuid: uuidv4(),
        ManufacturerGuid: uuidv4(),
        CountryGuid: uuidv4(),
        ResponsiblePartyGuid: uuidv4(),
        DrugLabelGuid: uuidv4(),
        Code: "123", // Assuming this should be a unique identifier
        RegistrationNumber: "123",
        REP_date: currentDate,
        IsDouanes: true,
        Date_dc: currentDate,
        LASTEffective_Date: currentDate,
        CIF_FOB: "FOB",
        LASTPublicABP: 10,
        LASTCurrencyGuid: uuidv4(),
        SubsidyLabel: "",
        SubsidyPercentage: 0,
        LJ_FOB_ValueUSD: 100,
        HospPricing: true,
        WJ_Leb_PubPriceHos: "90000",
        Seq: "Seq123",
        B_G: "Brand",
        Substitutable: false,
        WEBCIF_FOB: "92000",
        WEBPublicABP: 1000,
        WEBCurrency: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        NM: true,
        GTIN: "1111111111111",
        Notes: "Drug Note Test",
        Description: "Drug Description Test",
        ActiveInactiveIngredient: "Paracetamol",
        Indication: "Drug Indication",
        Posology: "Drug posology Test",
        MethodOfAdministration: "Drug method Of Administration Text",
        Contraindications: "Drug contraindications Test",
        PrecautionForUse: "Drug precaution For Use Test",
        EffectOnFGN: "Drug effect On Fgn Test",
        SideEffect: "Drug Side Effect Test",
        Toxicity: "drug toxicity Test",
        StorageCondition: "good",
        ShelfLife: "3edai",
        IngredientLabel: "Paracetamol 500",
        IsBiological: true,
        IsNarcotis: true,
        IsOTC: true,
        IsNSSF: true,
      });

      // Display a success toast notification
      toast.success("Drug added successfully");
    } catch (error) {
      // Handle errors and display an error toast notification
      console.error("Error adding drug:", error);
      toast.error("Error adding drug");
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md"
      onSubmit={handleSubmit}
    >
      <label className="block mb-2" htmlFor="registrationNumber">
        Registration Number
      </label>
      <input
        className="w-full mb-4 px-3 py-2 border rounded"
        type="text"
        id="registrationNumber"
        name="registrationNumber"
        value={drugData.registrationNumber}
        onChange={handleChange}
        // required
      />

      <label className="block mb-2" htmlFor="SubsidyPercentage">
        Subsidy Percentage
      </label>
      <input
        className="w-full mb-4 px-3 py-2 border rounded"
        type="text"
        id="SubsidyPercentage"
        name="SubsidyPercentage"
        value={drugData.SubsidyPercentage}
        onChange={handleChange}
        // required
      />

      <div className="col-2 flex flex-col">
        <label className="block mb-2" htmlFor="repDate">
          repDate
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="date"
          id="repDate"
          name="repDate"
          value={drugData.repDate}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="isDouanes">
          isDouanes:
        </label>
        <input
          className="mb-4 border cursor-pointer rounded"
          type="checkbox"
          id="isDouanes"
          name="isDouanes"
          value={drugData.isDouanes}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="dateDc">
          dateDc
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="date"
          id="dateDc"
          name="dateDc"
          value={drugData.dateDc}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="lasteffectiveDate">
          Last effective Date
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="date"
          id="lasteffectiveDate"
          name="lasteffectiveDate"
          value={drugData.lasteffectiveDate}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="cifFob">
          CIF/FOB
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="cifFob"
          name="cifFob"
          value={drugData.cifFob}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="lastpublicAbp">
          Last public Abp
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="number"
          id="lastpublicAbp"
          name="lastpublicAbp"
          value={drugData.lastpublicAbp}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="ljFobValueUsd">
          lj Fob Value Usd
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="number"
          id="ljFobValueUsd"
          name="ljFobValueUsd"
          value={drugData.ljFobValueUsd}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="hospPricing">
          Hosp Pricing
        </label>
        <input
          className="mb-4 cursor-pointer border rounded"
          type="checkbox"
          id="hospPricing"
          name="hospPricing"
          value={drugData.hospPricing}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="wjLebPubPriceHos">
          wjLeb Pub Price Hos
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="wjLebPubPriceHos"
          name="wjLebPubPriceHos"
          value={drugData.wjLebPubPriceHos}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="seq">
          Seq
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="seq"
          name="seq"
          value={drugData.seq}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="bg">
          B/G
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="bg"
          name="bg"
          value={drugData.bg}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="webcifFob">
          Web cif/Fob
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="webcifFob"
          name="webcifFob"
          value={drugData.webcifFob}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="webpublicAbp">
          Web public Abp
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="number"
          id="webpublicAbp"
          name="webpublicAbp"
          value={drugData.webpublicAbp}
          onChange={handleChange}
          // required
        />

        <label className="block mb-2" htmlFor="webcurrency">
          Web currency
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          id="webcurrency"
          name="webcurrency"
          value={drugData.webcurrency}
          onChange={handleChange}
          // required
        />
      </div>

      <div className="col-3 flex flex-col">
        <label className="block mb-2" htmlFor="nm">
          None Marketed
        </label>
        <input
          className="cursor-pointer border rounded"
          type="checkbox"
          id="nm"
          name="nm"
          value={drugData.nm}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="gtin">
          GTIN
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="gtin"
          name="gtin"
          value={drugData.gtin}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="notes">
          Notes
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="notes"
          name="notes"
          value={drugData.notes}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="ingredientLabel">
          Ingredient Label
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="ingredientLabel"
          name="ingredientLabel"
          value={drugData.ingredientLabel}
          onChange={handleChange}
          // required
        />
        <div className="checkboxes-row flex items-center justify-between my-4">
          <label className="block mb-2" htmlFor="isOtc">
            is Otc
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isOtc"
            name="isOtc"
            value={drugData.isOtc}
            onChange={handleChange}
            // required
          />
          <label className="block mb-2" htmlFor="isNssf">
            is Nssf
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isNssf"
            name="isNssf"
            value={drugData.isNssf}
            onChange={handleChange}
            // required
          />
          <label className="block mb-2" htmlFor="isNarcotis">
            is Narcotis
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isNarcotis"
            name="isNarcotis"
            value={drugData.isNarcotis}
            onChange={handleChange}
            // required
          />
          <label className="block mb-2" htmlFor="isBiological">
            is Biological
          </label>
          <input
            className="border cursor-pointer rounded"
            type="checkbox"
            id="isBiological"
            name="isBiological"
            value={drugData.isBiological}
            onChange={handleChange}
            // required
          />
        </div>
        <label className="block mb-2" htmlFor="description">
          Description
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="description"
          name="description"
          value={drugData.description}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="activeInactiveIngredient">
          Active Inactive Ingredient
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="activeInactiveIngredient"
          name="activeInactiveIngredient"
          value={drugData.activeInactiveIngredient}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="indication">
          Indication
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="indication"
          name="indication"
          value={drugData.indication}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="posology">
          Posology
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="posology"
          name="posology"
          value={drugData.posology}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="methodOfAdministration">
          Method Of Administration
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="methodOfAdministration"
          name="methodOfAdministration"
          value={drugData.methodOfAdministration}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="contraindications">
          Contraindications
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="contraindications"
          name="contraindications"
          value={drugData.contraindications}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="precautionForUse">
          Precaution For Use
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="precautionForUse"
          name="precautionForUse"
          value={drugData.precautionForUse}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="sideEffect">
          Side Effect
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="sideEffect"
          name="sideEffect"
          value={drugData.sideEffect}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="toxicity">
          Toxicity
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="toxicity"
          name="toxicity"
          value={drugData.toxicity}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="storageCondition">
          Storage Condition
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="storageCondition"
          name="storageCondition"
          value={drugData.storageCondition}
          onChange={handleChange}
          // required
        />
        <label className="block mb-2" htmlFor="shelfLife">
          Shelf Life
        </label>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          id="shelfLife"
          name="shelfLife"
          value={drugData.shelfLife}
          onChange={handleChange}
          // required
        />
      </div>

      <div className="btn-col fflex">
        <button
          className="inline-block cursor-pointer rounded-md bg-teal-600 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-teal-400"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DrugForm;
