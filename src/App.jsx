import React, { Suspense, createContext } from "react";
import routes from "~react-pages";
import { useRoutes, Route, Routes } from "react-router-dom";
import AddDrug from "./pages/drugs/Forms/AddDrug";
import List from "./pages/drugs/list/List";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateUserForm from "./components/RegistrationForm";
import Home from "./pages/Home/";
import Dashboards from "./pages/dashboards/";
import ImportDrug from "./pages/drugs/Importation/Import";
import Inspection from "./pages/drugs/Inspection/Inspection";
import ShipmentSummary from "./pages/drugs/Inspection/Forms/ShipmentSummary";
import Distribution from "./pages/drugs/Distribution/index";
import Tracking from "./pages/drugs/Tracking/";
import Substitute from "./pages/drugs/Substitutes/";
import LoginForm from "./pages/drugs/Forms/Separated/LoginForm";
import SingleDrug from "./pages/drugs/list/View";
import DrugForm from "./pages/drugs/Forms/Separated/DrugForm";
import DrugFormEX from "./pages/drugs/Forms/Separated/DrugFormEX";
import GetDrugs from "./pages/drugs/Forms/Separated/GetDrugs";
import ATCCodesForm from "./pages/drugs/Forms/Separated/ATCCodesForm";
import ParentComponent from "./pages/drugs/Forms/Separated/ParentComponent";
import StaticDataPage from "./pages/drugs/Forms/Separated/StaticDataPage";
import ATCForm from "./pages/drugs/Forms/Separated/atc/ATCForm";
import ATCsList from "./pages/drugs/Forms/Separated/atc/ATCsList";
// import BrandsForm from "./pages/drugs/Forms/Separated/brands/BrandsForm";
import BrandsList from "./pages/drugs/Forms/Separated/brands/BrandsList";
import PresentationForm from "./pages/drugs/Forms/Separated/presentation/PresentationForm";
import PresentationList from "./pages/drugs/Forms/Separated/presentation/PresentationList";
import GeosForm from "./pages/drugs/Forms/Separated/country/GeosForm";
import GeosList from "./pages/drugs/Forms/Separated/country/GeosList";
import AgentsList from "./pages/drugs/Forms/Separated/agents/AgentsList";
import CompanyForm from "./pages/drugs/Forms/Separated/companies/CompanyForm";
import CompanyTypeForm from "./pages/drugs/Forms/Separated/companies/CompanyTypeForm";
import CompanyList from "./pages/drugs/Forms/Separated/companies/CompanyList";
import CompanyTypeList from "./pages/drugs/Forms/Separated/companies/CompanyTypeList";
import AuthContainer from "./components/AuthContainer";
import UserFormContainer from "./components/UserFormContainer";
import Table from "./Table";
import Mersaco from "./context/test/Mersaco";
import Omnipharma from "./context/test/Omnipharma";
import BentaSAL from "./context/test/BentaSAL";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export const Khoder = createContext();

const App = () => {
  const routeElement = useRoutes(routes);

  return (
    <ErrorBoundary>
      <Khoder.Provider value="Panadol">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benta" element={<BentaSAL />} />
          <Route path="/omni" element={<Omnipharma />} />
          <Route path="/mersaco" element={<Mersaco />} />
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/table" element={<Table />} />
          <Route path="/newuser" element={<CreateUserForm />} />
          <Route path="/dynaform" element={<UserFormContainer />} />
          <Route path="/add" element={<AddDrug />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/substitute/" element={<Substitute />} />
          <Route path="/dashboard/" element={<Dashboards />} />
          <Route path="/import/" element={<ImportDrug />} />
          <Route path="/inspection/" element={<Inspection />} />
          <Route path="/shipsum/" element={<ShipmentSummary />} />
          <Route path="/distribution/" element={<Distribution />} />
          <Route path="/tracking/" element={<Tracking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newuser" element={<CreateUserForm />} />
          <Route path="/list" element={<List />} />
          <Route path="/editdrug/:drugId" element={<AddDrug />} />
          <Route path="/viewdrug/:drugId" element={<SingleDrug />} />
          <Route path="/atccodesform" element={<ATCCodesForm />} />
          <Route path="/atcform" element={<ATCForm />} />
          <Route path="/drugform" element={<DrugForm />} />
          <Route path="/parent" element={<ParentComponent />} />
          <Route path="/static" element={<StaticDataPage />} />
          <Route path="/atc/list" element={<ATCsList />} />
          <Route path="/atc/new" element={<ATCForm />} />
          <Route path="/brands/list" element={<BrandsList />} />
          {/* <Route path="/brands/new" element={<BrandsForm />} /> */}
          <Route path="/presentation/new" element={<PresentationForm />} />
          <Route path="/presentation/list" element={<PresentationList />} />
          <Route path="/geo/new" element={<GeosForm />} />
          <Route path="/geo/list" element={<GeosList />} />
          <Route path="/company/new" element={<CompanyForm />} />
          <Route path="/company/list" element={<CompanyForm />} />
          <Route path="/companyType/new" element={<CompanyTypeForm />} />
          <Route path="/companyType/list" element={<CompanyTypeList />} />
          <Route path="/agents/list" element={<AgentsList />} />
          <Route path="/drugformex" element={<DrugFormEX />} />
          <Route path="/getdrugs" element={<GetDrugs />} />
        </Routes>
        <Suspense fallback={<p>Loading...</p>}>{routeElement}</Suspense>
      </Khoder.Provider>
    </ErrorBoundary>
  );
};

export default App;

// //////////////////////////////////////////////////////////////////////////////////////

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
