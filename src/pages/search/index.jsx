import React from "react";
import GlobalPagesLayouts from "../GlobalPagesLayouts";
import Search from "./SearchComponent";
import { DrugProvider } from "../drugs/DrugContext";

function SearchPage() {
  return (
    <div>
      <DrugProvider>
        <GlobalPagesLayouts title="Search">
          <Search />
        </GlobalPagesLayouts>
      </DrugProvider>
    </div>
  );
}

export default SearchPage;
