import{r as o,j as a,b as c}from"./index-nT-sMeGS.js";const p=()=>{const[r,s]=o.useState({code:"",levelName:"",levelNameAr:"",atcRelatedLabel:"",enabled:!0,atcGuid:""}),[u,n]=o.useState([]);o.useEffect(()=>{(async()=>{try{const e=await c.get("/api/atc");n(e.data)}catch(e){console.error("Error fetching ATC data:",e)}})()},[]);const l=t=>{const{name:e,value:d}=t.target;s({...r,[e]:d})},i=async t=>{t.preventDefault();try{await c.post("/api/atccodes",r),s({code:"",levelName:"",levelNameAr:"",atcRelatedLabel:"",enabled:!0,atcGuid:""})}catch(e){console.error("Error submitting form data:",e)}};return a.jsxs("form",{onSubmit:i,children:[a.jsxs("label",{children:["Code:",a.jsx("input",{type:"text",name:"code",value:r.code,onChange:l})]}),a.jsx("button",{type:"submit",children:"Submit"})]})};export{p as default};