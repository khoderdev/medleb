/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line import/order, import/no-unresolved
import routes from '~react-pages';
import React, { Suspense } from 'react';
import { MantineProvider } from '@mantine/core';
import { Route, Routes, useRoutes } from 'react-router-dom';

import Table from './Table';
import Test2 from './Test2';
import Login from './components/Login';
import ThemeProvider from './theme/index';
import List from './pages/drugs/list/List';
import Register from './components/Register';
import Home from './pages/home/index.tsx';
import Tracking from './pages/drugs/Tracking';
import UserProvider from './user/UserProvider';
import SingleDrug from './pages/drugs/list/View';
import AddDrug from './pages/drugs/Forms/AddDrug';
import Substitute from './pages/drugs/Substitutes';
import { UserView, NewUserView } from './user/view';
import MantineTable from './pages/tables/Table2.tsx';
import Dashboards from './pages/dashboards/index.tsx';
import StepperExample from './Stepper/StepperExample';
import UserTableOnly from './user/view/UserTableOnly';
import AuthContainer from './components/AuthContainer';
import ImportDrug from './pages/drugs/Importation/Import';
import CreateUserForm from './components/RegistrationForm';
import PIForm from './pages/drugs/Importation/test/PIForm';
import { StepperProvider } from './Stepper/StepperContext';
import Distribution from './pages/drugs/Distribution/index';
import Inspection from './pages/drugs/Inspection/Inspection';
import RFIForm from './pages/drugs/Importation/test/RFIForm';
import UserFormContainer from './components/UserFormContainer';
import LoginForm from './pages/drugs/Forms/Separated/LoginForm';
import ATCForm from './pages/drugs/Forms/Separated/atc/ATCForm';
import SwiftForm from './pages/drugs/Importation/test/SwiftForm';
import OrderForm from './pages/drugs/Importation/test/OrderForm';
import ATCsList from './pages/drugs/Forms/Separated/atc/ATCsList';
import ATCCodesForm from './pages/drugs/Forms/Separated/ATCCodesForm';
import GeosForm from './pages/drugs/Forms/Separated/country/GeosForm';
import GeosList from './pages/drugs/Forms/Separated/country/GeosList';
import ShipmentForm from './pages/drugs/Importation/test/ShipmentForm';
import DrugSearch from './pages/drugs/Forms/Separated/drugs/DrugSearch';
import BrandsForm from './pages/drugs/Forms/Separated/brands/BrandsForm';
import BrandsList from './pages/drugs/Forms/Separated/brands/BrandsList';
import AgentsList from './pages/drugs/Forms/Separated/agents/AgentsList';
import StaticDataPage from './pages/drugs/Forms/Separated/StaticDataPage';
import AddDrugForm from './pages/drugs/Forms/Separated/drugs/AddDrugForm';
import ShipmentSummary from './pages/drugs/Inspection/Forms/ShipmentSummary';
import CompanyForm from './pages/drugs/Forms/Separated/companies/CompanyForm';
import CompanyList from './pages/drugs/Forms/Separated/companies/CompanyList';
import { DrugProvider } from './pages/drugs/Forms/Separated/drugs/DrugContext';
import SubmittedOrderForm from './pages/drugs/Importation/test/SubmittedOrder';
import DrugsComponent from './pages/drugs/Forms/Separated/drugs/DrugsComponent';
import CurrencyForm from './pages/drugs/Forms/Separated/currencies/CurrencyForm';
// import DrugForm from "./pages/drugs/Forms/Separated/drugs/DrugForm";
import Currencies from './pages/drugs/Forms/Separated/currencies/CurrenciesTable';
// import { DrugProvider } from "./pages/drugs/DrugContext";
import { ImportationProvider } from './pages/drugs/Importation/ImportationContext';
import CurrencyTable from './pages/drugs/Forms/Separated/currencies/CurrencyTable';
import ParentComponent from './pages/drugs/Forms/Separated/country/ParentComponent';
import CompanyTypeForm from './pages/drugs/Forms/Separated/companies/CompanyTypeForm';
import CompanyTypeList from './pages/drugs/Forms/Separated/companies/CompanyTypeList';
import DrugSelections from './pages/drugs/Forms/Separated/drugs/DrugsSelectionInputs';
import { GeoFormProvider } from './pages/drugs/Forms/Separated/country/GeoFormContext';
import PresentationForm from './pages/drugs/Forms/Separated/presentation/PresentationForm';
import PresentationList from './pages/drugs/Forms/Separated/presentation/PresentationList';
import { ModalFormProvider } from './pages/drugs/Forms/Separated/country/GeoModalProvider';
import { CurrenciesProvider } from './pages/drugs/Forms/Separated/currencies/CurrenciesContext';
import AddName from './AddName.jsx';

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

const App = () => {
  const routeElement = useRoutes(routes);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <UserProvider>
          <DrugProvider>
            <MantineProvider>
              <ImportationProvider>
                <CurrenciesProvider>
                  <GeoFormProvider>
                    <ModalFormProvider>
                      <StepperProvider>
                        <Routes>
                          {/* //////////IMPORTATION FORMS/////////////// */}

                          <Route path="/khara" element={<AddName />} />
                          <Route path="/rfi" element={<RFIForm />} />
                          <Route path="/pi" element={<PIForm />} />
                          <Route path="/order" element={<OrderForm />} />
                          <Route path="/swift" element={<SwiftForm />} />
                          <Route path="/shipment" element={<ShipmentForm />} />
                          <Route path="/submitted-order" element={<SubmittedOrderForm />} />
                          {/* ///////////////////////// */}
                          <Route path="/user" element={<UserView />} />
                          <Route path="/new-user" element={<NewUserView />} />
                          <Route path="/user-table" element={<UserTableOnly />} />

                          <Route path="/stepper" element={<StepperExample />} />

                          <Route path="/" element={<Home />} />
                          <Route path="/get-auths" element={<DrugsComponent />} />
                          <Route path="/auth" element={<AuthContainer />} />
                          <Route path="/table" element={<Table />} />
                          <Route path="/table2" element={<MantineTable />} />
                          <Route path="/test2" element={<Test2 />} />
                          {/* <Route path="/search" element={<Search />} /> */}
                          <Route path="/newuser" element={<CreateUserForm />} />
                          <Route path="/dynaform" element={<UserFormContainer />} />
                          <Route path="/add" element={<AddDrug />} />
                          <Route path="/drugs-selections" element={<DrugSelections />} />
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
                          <Route path="/drugform" element={<AddDrugForm />} />
                          <Route path="/currencyForm" element={<CurrencyForm />} />
                          <Route path="/currencyTable" element={<CurrencyTable />} />
                          <Route path="/currencies" element={<Currencies />} />
                          <Route path="/parent" element={<ParentComponent />} />
                          <Route path="/static" element={<StaticDataPage />} />
                          <Route path="/atc/list" element={<ATCsList />} />
                          <Route path="/atc/new" element={<ATCForm />} />
                          <Route path="/brands/list" element={<BrandsList />} />
                          <Route path="/brands/new" element={<BrandsForm />} />
                          <Route path="/presentation/new" element={<PresentationForm />} />
                          <Route path="/presentation/list" element={<PresentationList />} />
                          <Route path="/geo/new" element={<GeosForm />} />
                          <Route path="/geo/newmain" element={<ParentComponent />} />
                          <Route path="/geo/list" element={<GeosList />} />
                          <Route path="/company/new" element={<CompanyForm />} />
                          <Route path="/company/list" element={<CompanyList />} />
                          <Route path="/companyType/new" element={<CompanyTypeForm />} />
                          <Route path="/companyType/list" element={<CompanyTypeList />} />
                          <Route path="/agents/list" element={<AgentsList />} />
                          {/* <Route path="/drugs/add" element={<DrugForm />} /> */}
                          <Route path="/drugs-search" element={<DrugSearch />} />
                          {/* <Route path="/drugs-search" element={<SearchBar />} /> */}
                        </Routes>
                      </StepperProvider>
                    </ModalFormProvider>
                  </GeoFormProvider>
                </CurrenciesProvider>
                <Suspense fallback={<p>Loading...</p>}>{routeElement}</Suspense>
              </ImportationProvider>
            </MantineProvider>
          </DrugProvider>
        </UserProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;

// ------------------------------------------------------------------------------------------------

// import React, { Suspense, createContext } from "react";
// import routes from "~react-pages";
// import { useRoutes, Route, Routes } from "react-router-dom";
// import AddDrug from "./pages/drugs/Forms/AddDrug";
// import List from "./pages/drugs/list/List";
// // import Login from "./components/Login";
// // import Register from "./components/Register";
// // import PropsTest from "./components/PropsTest";
// import CreateUserForm from "./components/RegistrationForm";
// // import Home from "./pages/home/new/";
// // import Home from "./pages/Home/";
// import Dashboards from "./pages/dashboards/";
// import ImportDrug from "./pages/drugs/Importation/Import";
// import ImportDrugs from "./pages/drugs/Importation/test/RFIForm";
// import Inspection from "./pages/drugs/Inspection/Inspection";
// import ShipmentSummary from "./pages/drugs/Inspection/Forms/ShipmentSummary";
// import Distribution from "./pages/drugs/Distribution/index";
// import Tracking from "./pages/drugs/Tracking/";
// import Substitute from "./pages/drugs/Substitutes/";
// import LoginForm from "./pages/drugs/Forms/Separated/LoginForm";
// import SingleDrug from "./pages/drugs/list/View";
// // import DrugForm from "./pages/drugs/Forms/Separated/drugs/DrugForm";
// import Currencies from "./pages/drugs/Forms/Separated/currencies/CurrenciesTable";
// import ATCCodesForm from "./pages/drugs/Forms/Separated/ATCCodesForm";
// import StaticDataPage from "./pages/drugs/Forms/Separated/StaticDataPage";
// import ATCForm from "./pages/drugs/Forms/Separated/atc/ATCForm";
// import ATCsList from "./pages/drugs/Forms/Separated/atc/ATCsList";
// import BrandsForm from "./pages/drugs/Forms/Separated/brands/BrandsForm";
// import BrandsList from "./pages/drugs/Forms/Separated/brands/BrandsList";
// import PresentationForm from "./pages/drugs/Forms/Separated/presentation/PresentationForm";
// import PresentationList from "./pages/drugs/Forms/Separated/presentation/PresentationList";
// import GeosForm from "./pages/drugs/Forms/Separated/country/GeosForm";
// import GeosList from "./pages/drugs/Forms/Separated/country/GeosList";
// import ParentComponent from "./pages/drugs/Forms/Separated/country/ParentComponent";
// import AgentsList from "./pages/drugs/Forms/Separated/agents/AgentsList";
// import CompanyForm from "./pages/drugs/Forms/Separated/companies/CompanyForm";
// import CompanyTypeForm from "./pages/drugs/Forms/Separated/companies/CompanyTypeForm";
// import CompanyList from "./pages/drugs/Forms/Separated/companies/CompanyList";
// import CompanyTypeList from "./pages/drugs/Forms/Separated/companies/CompanyTypeList";
// import AuthContainer from "./components/AuthContainer";
// import UserFormContainer from "./components/UserFormContainer";
// import Table from "./Table";
// import Test from "./Test";
// import Test2 from "./Test2";
// import { GeoFormProvider } from "./pages/drugs/Forms/Separated/country/GeoFormContext";
// import { ModalFormProvider } from "./pages/drugs/Forms/Separated/country/GeoModalProvider";
// import { DrugProvider } from "./pages/drugs/Forms/Separated/drugs/DrugContext";
// // import { DrugProvider } from "./pages/drugs/DrugContext";
// import { ImportationProvider } from "./pages/drugs/Importation/ImportationContext";
// import { CurrenciesProvider } from "./pages/drugs/Forms/Separated/currencies/CurrenciesContext";
// import CurrencyForm from "./pages/drugs/Forms/Separated/currencies/CurrencyForm";
// import CurrencyTable from "./pages/drugs/Forms/Separated/currencies/CurrencyTable";
// import AddDrugForm from "./pages/drugs/Forms/Separated/drugs/AddDrugForm";
// import Notifications from "./pages/notifications";
// import Profile from "./pages/profile";
// import RFIForm from "./pages/drugs/Importation/test/RFIForm";
// import PIForm from "./pages/drugs/Importation/test/PIForm";
// import SwiftForm from "./pages/drugs/Importation/test/SwiftForm";
// import ShipmentForm from "./pages/drugs/Importation/test/ShipmentForm";
// import SubmittedOrderForm from "./pages/drugs/Importation/test/SubmittedOrder";
// import OrderForm from "./pages/drugs/Importation/test/OrderForm";
// import SearchBar from "./pages/drugs/Forms/Separated/SearchBar";
// import DrugsComponent from "./pages/drugs/Forms/Separated/drugs/DrugsComponent";
// import MantineTable from "./pages/tables/Table2.tsx";
// import { MantineProvider } from "@mantine/core";
// import StepperExample from "./Stepper/StepperExample";
// import { StepperProvider } from "./Stepper/StepperContext";
// import DrugSearch from "./pages/drugs/Forms/Separated/drugs/DrugSearch";
// import DrugSelections from "./pages/drugs/Forms/Separated/drugs/DrugsSelectionInputs";
// // /////////////////////////////////////////////////////////////////////////////////////////
// import Register from "./auth/Register";
// import Login from "./auth/Login";
// import Home from "./auth/Home";
// import Layout from "./auth/Layout";
// import Editor from "./auth/Editor";
// import Admin from "./auth/Admin";
// import Missing from "./auth/Missing";
// import Unauthorized from "./auth/Unauthorized";
// import Lounge from "./auth/Lounge";
// import LinkPage from "./auth/LinkPage";
// import RequireAuth from "./auth/RequireAuth";

// const ROLES = {
//   User: 2001,
//   Editor: 1984,
//   Admin: 5150,
// };

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Something went wrong.</div>;
//     }

//     return this.props.children;
//   }
// }

// const App = () => {
//   const routeElement = useRoutes(routes);

//   return (
//     <ErrorBoundary>
//       <DrugProvider>
//         <MantineProvider>
//           <ImportationProvider>
//             <CurrenciesProvider>
//               <GeoFormProvider>
//                 <ModalFormProvider>
//                   <StepperProvider>
//                     <Routes>
//                       <Route path="/" element={<Layout />}>
//                         {/* public routes */}
//                         <Route path="login" element={<Login />} />
//                         <Route path="register" element={<Register />} />
//                         <Route path="linkpage" element={<LinkPage />} />
//                         <Route path="unauthorized" element={<Unauthorized />} />

//                         {/* we want to protect these routes */}
//                         <Route
//                           element={<RequireAuth allowedRoles={[ROLES.User]} />}
//                         >
//                           <Route path="/" element={<Home />} />
//                         </Route>

//                         <Route
//                           element={
//                             <RequireAuth allowedRoles={[ROLES.Editor]} />
//                           }
//                         >
//                           <Route path="editor" element={<Editor />} />
//                         </Route>

//                         <Route
//                           element={<RequireAuth allowedRoles={[ROLES.Admin]} />}
//                         >
//                           <Route path="admin" element={<Admin />} />
//                         </Route>

//                         <Route
//                           element={
//                             <RequireAuth
//                               allowedRoles={[ROLES.Editor, ROLES.Admin]}
//                             />
//                           }
//                         >
//                           <Route path="lounge" element={<Lounge />} />
//                         </Route>

//                         {/* catch all */}
//                         <Route path="*" element={<Missing />} />
//                       </Route>
//                       {/* //////////IMPORTATION FORMS/////////////// */}
//                       <Route
//                         path="/rfi"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.Editor]}>
//                             <RFIForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/pi"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.Editor]}>
//                             <PIForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/order"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.Editor]}>
//                             <OrderForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/swift"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.Editor]}>
//                             <SwiftForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/shipment"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.Editor]}>
//                             <ShipmentForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/submitted-order"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.Editor]}>
//                             <SubmittedOrderForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/submitted-order"
//                         element={<SubmittedOrderForm />}
//                       />
//                       {/* ///////////////////////// */}

//                       <Route
//                         path="/stepper"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <StepperExample />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Home />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/get-auths"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <DrugsComponent />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/auth"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <AuthContainer />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/table"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Table />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/table2"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <MantineTable />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/test"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Test />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/test2"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Test2 />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/newuser"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <CreateUserForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/dynaform"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <UserFormContainer />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/add"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <AddDrug />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/drugs-selections"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <DrugSelections />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/loginform"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <LoginForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/substitute/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Substitute />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/dashboard/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Dashboards />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/import/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ImportDrug />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/import2/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ImportDrugs />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/inspection/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Inspection />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/shipsum/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ShipmentSummary />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/distribution/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Distribution />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/tracking/"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Tracking />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/list"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <List />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/editdrug/:drugId"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <AddDrug />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/viewdrug/:drugId"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <SingleDrug />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/atccodesform"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ATCCodesForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/atcform"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ATCForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/drugform"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <AddDrugForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/currencyForm"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <CurrencyForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/currencyTable"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <CurrencyTable />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/currencies"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Currencies />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/parent"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ParentComponent />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/static"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <StaticDataPage />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/atc/list"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ATCsList />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/atc/new"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ATCForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/brands/list"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <BrandsList />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/brands/new"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <BrandsForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/presentation/new"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <PresentationForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/presentation/list"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <PresentationList />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/geo/new"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <GeosForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/geo/newmain"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <ParentComponent />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/geo/list"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <GeosList />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/company/new"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <CompanyForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/company/list"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <CompanyList />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/companyType/new"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <CompanyTypeForm />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/companyType/list"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <CompanyTypeList />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/agents/list"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <AgentsList />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/drugs-search"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <DrugSearch />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/search"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <SearchBar />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/notifications"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Notifications />
//                           </RequireAuth>
//                         }
//                       />
//                       <Route
//                         path="/profile"
//                         element={
//                           <RequireAuth allowedRoles={[ROLES.User]}>
//                             <Profile />
//                           </RequireAuth>
//                         }
//                       />
//                     </Routes>
//                   </StepperProvider>
//                 </ModalFormProvider>
//               </GeoFormProvider>
//             </CurrenciesProvider>
//             <Suspense fallback={<p>Loading...</p>}>{routeElement}</Suspense>
//           </ImportationProvider>
//         </MantineProvider>
//       </DrugProvider>
//     </ErrorBoundary>
//   );
// };

// export default App;

// //////////////////////////////////////////////////////////////////////////////////////
