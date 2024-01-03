import React from "react";
import GlobalPagesLayouts from "../../GlobalPagesLayouts";
import Substitute from "./Substitute";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function DrugSubstitutePage() {
  return (
    <div>
      <Link
        to={`/list`}
        className="inline-block absolute top-8 left-20 self-start p-3 text-lg text-teal-600"
      >
        <ArrowBackIosIcon fontSize="medium" className="inline align-middle" />
        Back
      </Link>
      <GlobalPagesLayouts title="Drugs Substitutes">
        <Substitute />
      </GlobalPagesLayouts>
    </div>
  );
}

export default DrugSubstitutePage;
