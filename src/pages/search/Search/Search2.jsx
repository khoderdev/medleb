import React from "react";
import GlobalPagesLayouts from "../../GlobalPagesLayouts";
import Search from "./Search";

function SearchPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Search">
        <Search />
      </GlobalPagesLayouts>
    </div>
  );
}

export default SearchPage;
