import React from "react";
import GlobalPagesLayouts from "../../GlobalPagesLayouts";
import List from "./DrugCardsList";

function DrugListPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Medicines List">
        <List className="p-3" />
      </GlobalPagesLayouts>
    </div>
  );
}

export default DrugListPage;
