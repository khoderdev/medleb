import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import api from './slices/apiSlice';
import geoReducer from './slices/geoSlice';
import formSlice from './slices/BrandsFormSlice';
import companiesFormReducer from './slices/CompaniesFormSlice';
import AddDrugAndImportReducer from './reducers/AddDrugAndImportReducer';
import { drugImportationsApiSlice } from './slices/drugImportationsApiSlice';
import drugRegistrationFormReducer from './reducers/drugRegistrationFormReducer';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
    AddDrugImport: AddDrugAndImportReducer,
    drugReg: drugRegistrationFormReducer,

    brandsForm: formSlice.reducer,
    geo: geoReducer,
    companiesForm: companiesFormReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export default store;
