import React from "react";
import { useNavigate, Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import GlobalPagesLayouts from "../../GlobalPagesLayouts";
import AddDrug from "./AddDrug";

function AddDrugPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Add New Medicines">
        <div className="flex w-full justify-end mt-[-1em] pr-2">
          <Link to={`/list`} className="text-md  text-[#259f83]">
            Close
            <CloseIcon fontSize="small" className="arrowLeft" />
          </Link>
        </div>
        <AddDrug />
      </GlobalPagesLayouts>
    </div>
  );
}

export default AddDrugPage;
