import React from "react";
import GlobalPagesLayouts from "../../GlobalPagesLayouts";
import ImportedDrugsList from "./ImportedDrugs/ImportedDrugsList";

function ImportedDrugsListPage() {
  return (
    <div>
      <GlobalPagesLayouts title="Importations List">
        <ImportedDrugsList className="p-3" />
      </GlobalPagesLayouts>
    </div>
  );
}

export default ImportedDrugsListPage;
