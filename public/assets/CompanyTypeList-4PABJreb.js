import{r as s,j as r,g as t,A as x}from"./index-huJj_8wr.js";const m=()=>{const[o,d]=s.useState([]),[c,n]=s.useState(!0);if(s.useEffect(()=>{(async()=>{try{const e=await x.get("/api/CompanyType/v1.0/CompanyTypes?Enabled=true&sortOrder=desc");d(e.data.data)}catch(e){console.error("Error fetching data:",e)}finally{n(!1)}})()},[]),c)return r.jsx("div",{children:"Loading..."});const l=s.useMemo(()=>[{Header:"GUID",accessor:"guid"},{Header:"Name",accessor:"name"},{Header:"Arabic Name",accessor:"nameAr"},{Header:"Enabled",accessor:"enabled"},{Header:"Created Date",accessor:"createdDate"}],[]),{getTableProps:i,getTableBodyProps:p,headerGroups:g,rows:h,prepareRow:u}=t.useTable({columns:l,data:o},t.useFilters,t.useGlobalFilter,t.useSortBy);return r.jsxs("table",{...i(),children:[r.jsx("thead",{children:g.map(a=>r.jsx("tr",{...a.getHeaderGroupProps(),children:a.headers.map(e=>r.jsxs("th",{...e.getHeaderProps(e.getSortByToggleProps()),children:[e.render("Header"),r.jsx("span",{children:e.isSorted?e.isSortedDesc?" 🔽":" 🔼":""})]}))}))}),r.jsx("tbody",{...p(),children:h.map(a=>(u(a),r.jsx("tr",{...a.getRowProps(),children:a.cells.map(e=>r.jsx("td",{...e.getCellProps(),children:e.render("Cell")}))})))})]})};export{m as default};
