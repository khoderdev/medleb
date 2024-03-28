import React from "react";

import Search from "./SearchComponent";
import GlobalPagesLayouts from "../GlobalPagesLayouts";
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
