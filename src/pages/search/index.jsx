import React from "react";
import GlobalPagesLayouts from "../GlobalPagesLayouts";
import Search from "./SearchComponent";
// import { useDrugContext } from "../../pages/drugs/Forms/Separated/drugs/DrugContext";

function SearchPage() {
  return (
    <div>
      {/* <DrugProvider> */}
        <GlobalPagesLayouts title="Search">
          <Search />
        </GlobalPagesLayouts>
      {/* </DrugProvider> */}
    </div>
  );
}

export default SearchPage;
