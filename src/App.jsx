// import React, { Suspense } from "react";
// import LoadingSpinner from "./components/LoadingSpinner";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Admin from "./components/Admin";
// import Unauthorized from "./components/Unauthorized";
// import Home from "./pages/index";
// import Layout from "./components/Layout";
// import Editor from "./components/Editor";
// import LinkPage from "./components/LinkPage";
// import RequireAuth from "./components/RequireAuth";
// import { Routes, Route } from "react-router-dom";
// import Missing from "./components/Missing";
// import Lounge from "./components/Lounge";
// import { DarkModeProvider } from "./DarkModeContext";
// import { DrugProvider } from "./pages/drugs/DrugContext";
// import EditDrug from "./pages/drugs/EditDrug";
// import ViewDrug from "./pages/drugs/ViewDrug";
// import AddDrug from "./pages/drugs";
// import List from "./pages/drugs/list/List";
// import Dashboard from "./pages/admin/Dashboard";
// import Importation from "./pages/admin/Importation";
// import Inspection from "./pages/admin/Inspection";
// import Distribution from "./pages/admin/Distribution";
// import TrackRecords from "./pages/admin/Tracking";
// import Profile from "./pages/Profile";
// import Notifications from "./pages/Notifications";
// import Search from "./components/SearchComponent";

// const ROLES = {
//   User: 2001,
//   Editor: 1984,
//   Admin: 5150,
// };

// function App() {
//   return (
//     <DarkModeProvider>
//       <DrugProvider>
//         <Suspense fallback={<LoadingSpinner />}></Suspense>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             {/* public routes */}
//             <Route path="login" element={<Login />} />
//             <Route path="register" element={<Register />} />
//             <Route path="linkpage" element={<LinkPage />} />
//             <Route path="unauthorized" element={<Unauthorized />} />

//             {/* we want to protect these routes */}
//             <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
//               <Route path="/" element={<Home />} />
//             </Route>

//             <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
//               <Route path="list" element={<List />} />
//             </Route>

//             <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
//               <Route path="dashboard" element={<Dashboard />} />
//             </Route>

//             <Route
//               element={
//                 <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
//               }
//             >
//               <Route path="add" element={<AddDrug />} />
//             </Route>

//             <Route
//               element={
//                 <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
//               }
//             >
//               <Route path="distribution" element={<Distribution />} />
//             </Route>

//             <Route
//               element={
//                 <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
//               }
//             >
//               <Route path="importation" element={<Importation />} />
//             </Route>

//             <Route
//               element={
//                 <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
//               }
//             >
//               <Route path="inspection" element={<Inspection />} />
//             </Route>

//             <Route
//               element={
//                 <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
//               }
//             >
//               <Route path="tracking" element={<TrackRecords />} />
//             </Route>

//             <Route
//               element={
//                 <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
//               }
//             >
//               <Route path="profile" element={<Profile />} />
//             </Route>

//             <Route
//               element={
//                 <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />
//               }
//             >
//               <Route path="notifications" element={<Notifications />} />
//             </Route>

//             <Route
//               element={
//                 <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin, ROLES.User]} />
//               }
//             >
//               <Route path="Search" element={<Search />} />
//             </Route>

//             {/* <Route
//           element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
//         >
//           <Route path="lounge" element={<Lounge />} />
//         </Route> */}

//             {/* catch all */}
//             <Route path="*" element={<Missing />} />
//           </Route>
//         </Routes>
//         {/* <Suspense fallback={<p>Loading...</p>}>{routeElement}</Suspense> */}
//       </DrugProvider>
//     </DarkModeProvider>
//   );
// }

// export default App;
import React, { Suspense } from "react";
import routes from "~react-pages";
import { useRoutes, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "../src/DarkModeContext";
import { DrugProvider } from "./pages/drugs/DrugContext";
import EditDrug from "./pages/drugs/EditDrug";
import ViewDrug from "./pages/drugs/ViewDrug";
import AddDrug from "./pages/drugs/";
import List from "./pages/drugs/list/List";
import CreateUserForm from "./components/CreateUserForm";
import Login from "./components/Login";
import Dashboard from "./pages/admin/Dashboard";
import Importation from "./pages/admin/Importation";
import Inspection from "./pages/admin/Inspection";
import Distribution from "./pages/admin/Distribution";
import TrackRecords from "./pages/admin/Tracking";
import ImageGallery from "./pages/drugs/ImageGallery";
import ViewDrugPage from "./pages/ViewDrug/index";
// import ImageGallery from "./pages/drugs/ImageGallery";
import ImageUploader6 from "./components/ImageUploader";
import CenteredBoxContainer from "./Test";
import ImageUploader from "./components/ImageUploader";
const App = () => {
  const routeElement = useRoutes(routes);

  return (
    <DarkModeProvider>
      <DrugProvider>
        <Routes>
          {/* <Route path="/getimages/" element={<ImageGallery />} /> */}
          <Route path="/image6/" element={<ImageUploader6 />} />
          <Route path="/viewdrugimage/" element={<ViewDrugPage />} />
          <Route path="/Dashboard/" element={<Dashboard />} />
          <Route path="/Importation/" element={<Importation />} />
          <Route path="/Inspection/" element={<Inspection />} />
          <Route path="/Distribution/" element={<Distribution />} />
          <Route path="/tracking/" element={<TrackRecords />} />
          <Route path="/newuser/" element={<CreateUserForm />} />
          <Route path="/test/" element={<CenteredBoxContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddDrug />} />
          <Route path="/list" element={<List />} />
          <Route path="/editdrug/:id" element={<EditDrug />} />
          <Route path="/viewdrug/:id" element={<ViewDrug />} />
        </Routes>
        <Suspense fallback={<p>Loading...</p>}>{routeElement}</Suspense>
      </DrugProvider>
    </DarkModeProvider>
  );
};

export default App;
