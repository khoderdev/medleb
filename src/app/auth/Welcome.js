// Welcome.js

import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faFileMedical,
  faUserGear,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useGetDrugImportationsQuery } from "../drugs/drugImportationsApiSlice";
import DrugImportation from "../drugs/DrugImportation";
import RFImportationForm from "../drugs/RFImportationForm";
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate, useLocation } from "react-router-dom";

export default function Welcome() {
  const { username, isManager, isAdmin, isAgent } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useTitle(`MedLeb: ${username}`);

  const {
    data: importations,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDrugImportationsQuery("importationsList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let importationsContent;

  if (isLoading) {
    importationsContent = <PulseLoader color={"#FFF"} />;
  }

  if (isError) {
    importationsContent = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = importations;

    const importationsList =
      ids?.length &&
      ids.map((importationId) => (
        <DrugImportation key={importationId} importationId={importationId} />
      ));

    importationsContent = (
      <div className="importations-list">{importationsList}</div>
    );
  }

  const handleImportationFormSubmit = (formData) => {
    // Handle the form submission logic here
    console.log("Importation Form Data:", formData);
    // You can dispatch an action to send the form data to the server/API
  };
  return (
    <>
      <div className="text-3xl text-center mb-8">
        <h1 className="font">Welcome {username}</h1>
      </div>
      <section className="dash-navs-section flex justify-center mt-16 p-8 rounded-md ">
        <div className="grid grid-cols-1 gap-8">
          {(isManager || isAdmin) && (
            <p>
              <Link
                to="/dash/drugs"
                className="flex items-center hover:ring ring-[#34ffd0] ring-opacity-50 text-lg hover:text-gray-900 hover:border-[#00a651] transition duration-300 border p-4 rounded-xl hover:bg-[#00a651] shadow-[10px_20px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-none"
              >
                <FontAwesomeIcon
                  className="mr-3 text-2xl"
                  icon={faFileMedical}
                />
                View Medicines List
              </Link>
            </p>
          )}

          <p>
            <Link
              to="/dash/drugs/new"
              className="flex items-center hover:ring ring-[#34ffd0] ring-opacity-50 text-lg hover:text-gray-900 hover:border-[#00a651] transition duration-300 border p-4 rounded-xl hover:bg-[#00a651] shadow-[10px_20px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-none"
            >
              <FontAwesomeIcon
                className="mr-3 text-2xl"
                icon={faFileCirclePlus}
              />
              Add New Medicine
            </Link>
          </p>
          {(isAdmin || isManager || isAgent) && (
            <p>
              <Link
                to="/dash/importations"
                className="flex items-center hover:ring ring-[#34ffd0] ring-opacity-50 text-lg hover:text-gray-900 hover:border-[#00a651] transition duration-300 border p-4 rounded-xl hover:bg-[#00a651] shadow-[10px_20px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-none"
              >
                <FontAwesomeIcon
                  className="mr-3 text-2xl"
                  icon={faFileCirclePlus}
                />
                View Drug Importations
              </Link>
            </p>
          )}
          {(isAdmin || isManager || isAgent) && (
            <p>
              <Link
                to="/dash/importations/new"
                className="flex items-center hover:ring ring-[#34ffd0] ring-opacity-50 text-lg hover:text-gray-900 hover:border-[#00a651] transition duration-300 border p-4 rounded-xl hover:bg-[#00a651] shadow-[10px_20px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-none"
              >
                <FontAwesomeIcon
                  className="mr-3 text-2xl"
                  icon={faFileCirclePlus}
                />
                Add New Drug Importation
              </Link>
            </p>
          )}

          {(isManager || isAdmin) && (
            <p>
              <Link
                to="/dash/users"
                className="flex items-center hover:ring ring-[#34ffd0] ring-opacity-50 text-lg hover:text-gray-900 hover:border-[#00a651] transition duration-300 border p-4 rounded-xl hover:bg-[#00a651] shadow-[10px_20px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-none"
              >
                <FontAwesomeIcon className="mr-3 text-2xl" icon={faUserGear} />
                View User Settings
              </Link>
            </p>
          )}
          {(isManager || isAdmin) && (
            <p>
              <Link
                to="/dash/users/new"
                className="flex items-center hover:ring ring-[#34ffd0] ring-opacity-50 text-lg hover:text-gray-900 hover:border-[#00a651] transition duration-300 border p-4 rounded-xl hover:bg-[#00a651] shadow-[10px_20px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-none"
              >
                <FontAwesomeIcon className="mr-3 text-2xl" icon={faUserPlus} />
                Add New User
              </Link>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
