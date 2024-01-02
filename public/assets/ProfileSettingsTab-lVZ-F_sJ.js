import{r as a,j as e}from"./index-CN91mxqc.js";const E=b=>{const{firstName:p="Firstname",lastName:v="Lastname",userImage:s,onFirstNameChange:N,onLastNameChange:j,onImageChange:u,onSave:y}=b,[l,k]=a.useState(p),[n,w]=a.useState(v),[i,x]=a.useState(s),[f,r]=a.useState(!1),[o,g]=a.useState(!1),[S,c]=a.useState(!1),C=t=>{const d=t.target.files[0];if(d&&d.type.startsWith("image/")){const m=new FileReader;m.onloadend=()=>{const h=m.result;x(h),u&&u(h)},m.readAsDataURL(d)}else console.error("Invalid file type. Please upload an image.")},F=t=>{f||(console.log("Avatar image clicked"),r(!0)),t.stopPropagation()};a.useEffect(()=>{x(s)},[s]);const I=async()=>{g(!0);try{await y(l,n,i),c(!0)}catch(t){console.error("Save failed:",t),c(!1)}finally{g(!1),setTimeout(()=>{c(!1)},3e3)}},U=`bg-[#259F83] w-fit text-white py-2 px-4 rounded-lg ${o?"opacity-50 cursor-not-allowed":""}`;return e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("h2",{className:"text-lg font-semibold mb-8",children:"User Settings"}),e.jsxs("div",{className:"flex items-center mb-8",children:[e.jsxs("div",{className:"avatar-container flex flex-col items-center justify-center relative rounded-full",children:[e.jsx("img",{src:i,alt:"User",className:"w-24 h-24 object-cover dark:bg-gray-200 rounded-full cursor-pointer",onClick:F}),e.jsx("input",{type:"file",id:"avatarInput",accept:"image/*",style:{display:"none"},onChange:C}),e.jsx("a",{className:"text-[#259F83] w-[5em] text-center dark:bg-black bg-white text-sm cursor-pointer mt-[-0.5em]",onClick:()=>document.getElementById("avatarInput").click(),children:"Upload"})]}),e.jsx("h2",{className:"text-lg text-gray-700 dark:text-white-text ml-3 font-semibold",children:`${l} ${n}`})]}),f&&e.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-50 dark:bg-[#1e1e1edc] flex justify-center items-center",onClick:()=>r(!1),children:[e.jsx("div",{className:"absolute top-0 right-8 cursor-pointer",onClick:()=>r(!1),children:e.jsx("span",{className:"text-[#259F83] hover:text-[#65d6bc] text-[4em]",children:"×"})}),e.jsx("div",{className:"max-w-screen-lg p-4 mt-4 relative",children:e.jsx("img",{src:i,alt:"User",className:"w-full h-auto rounded-lg"})})]}),e.jsxs("div",{className:"user-info-cont flex gap-3 sm:gap-8",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-white-text",children:"First Name"}),e.jsx("input",{type:"text",value:l,onChange:t=>{k(t.target.value),N(t.target.value)},className:"input-field mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-white-text",children:"Last Name"}),e.jsx("input",{type:"text",value:n,onChange:t=>{w(t.target.value),j(t.target.value)},className:"input-field mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"})]})]}),e.jsx("div",{className:"btn-container mt-4 flex w-full justify-end",children:e.jsx("button",{className:U,onClick:I,disabled:o,children:o?e.jsxs(e.Fragment,{children:["Saving",e.jsx("span",{className:"animate-ellipsis",children:"..."})]}):S?e.jsx(e.Fragment,{children:"Saved Successfully ✔"}):"Save"})})]})};export{E as default};