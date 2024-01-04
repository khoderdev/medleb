import React from "react";
import GlobalPagesLayouts from "../../GlobalPagesLayouts";
import List from "./DrugCardsList";

function DrugListPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Drugs List">
        <List />
      </GlobalPagesLayouts>
    </div>
  );
}

export default DrugListPage;
