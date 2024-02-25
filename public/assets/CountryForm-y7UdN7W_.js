import{r as p,c as h,d as c,e as u,j as e,k as C,v as x,b as f,Q as l}from"./index-CZxsDede.js";const N=()=>{const[r,i]=p.useState({guid:"",code:"",name:"",nameAr:"",enabled:!0,createdDate:new Date().toISOString(),isNearByCountry:!0,isReferenceCountry:!0,isComparative:!0}),d=h().shape({code:c().required("Code is required"),name:c().required("Name is required"),nameAr:c().matches(/^[\u0621-\u064A\s]*$/,"Please use Arabic letters (أ ب ت) for the Name (Arabic)").required("Name (Arabic) is required"),isNearByCountry:u().required("Please select Is Near By Country"),isReferenceCountry:u().required("Please select Is Reference Country"),isComparative:u().required("Please select Is Comparative")}),m=async o=>{o.preventDefault();try{await d.validate(r,{abortEarly:!1});const a=x(),t=new Date().toISOString(),n=await f.post("http://1.1.1.250:3500/api/country/v1.0",{...r,guid:a,createdDate:t});console.log("Country data submitted successfully:",n.data),i({guid:"",code:"",name:"",nameAr:"",enabled:!0,createdDate:t,isNearByCountry:!0,isReferenceCountry:!0,isComparative:!0}),l.success("Country data submitted successfully.")}catch(a){a.name==="ValidationError"?a.errors.forEach(t=>{l.error(t)}):console.error("Error submitting country data:",a.message)}},s=o=>{const{name:a,value:t,type:n,checked:b}=o.target;i(y=>({...y,[a]:n==="checkbox"?b:t}))};return e.jsxs("div",{children:[e.jsxs("form",{onSubmit:m,className:"max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-md",children:[e.jsxs("label",{className:"block mb-2",children:["Code:",e.jsx("input",{type:"text",name:"code",value:r.code,onChange:s,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"})]}),e.jsxs("label",{className:"block mb-2",children:["Name:",e.jsx("input",{type:"text",name:"name",value:r.name,onChange:s,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"})]}),e.jsxs("label",{className:"block mb-2",children:["Name Ar:",e.jsx("input",{type:"text",name:"nameAr",value:r.nameAr,onChange:s,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"})]}),e.jsxs("label",{className:"block mb-2",children:["Is Near By Country:",e.jsx("input",{type:"checkbox",name:"isNearByCountry",checked:r.isNearByCountry,onChange:s})]}),e.jsxs("label",{className:"block mb-2",children:["Is Reference Country:",e.jsx("input",{type:"checkbox",name:"isReferenceCountry",checked:r.isReferenceCountry,onChange:s})]}),e.jsxs("label",{className:"block mb-2",children:["Is Comparative:",e.jsx("input",{type:"checkbox",name:"isComparative",checked:r.isComparative,onChange:s})]}),e.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300",children:"Submit"})]}),e.jsx(C,{position:"top-right",autoClose:3e3})]})};export{N as default};
