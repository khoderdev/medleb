import{r as h,j as e}from"./index-Wq-t1_Ee.js";const c=()=>{const[i,l]=h.useState({child1:"",child2:"",child3:"",child4:""}),n=(t,o)=>{l(d=>({...d,[t]:o}))};return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("input",{type:"text",placeholder:"Child 1 (Text)",value:i.child1,onChange:t=>n("child1",t.target.value)})}),e.jsx("div",{children:e.jsxs("select",{value:i.child2,onChange:t=>n("child2",t.target.value),children:[e.jsx("option",{value:"option1",children:"Option 1"}),e.jsx("option",{value:"option2",children:"Option 2"}),e.jsx("option",{value:"option3",children:"Option 3"})]})}),e.jsx("div",{children:e.jsx("input",{type:"text",placeholder:"Child 3 (Text)",value:i.child3,onChange:t=>n("child3",t.target.value)})}),e.jsx("div",{children:e.jsxs("select",{value:i.child4,onChange:t=>n("child4",t.target.value),children:[e.jsx("option",{value:"optionA",children:"Option A"}),e.jsx("option",{value:"optionB",children:"Option B"}),e.jsx("option",{value:"optionC",children:"Option C"})]})})]})};export{c as default};
