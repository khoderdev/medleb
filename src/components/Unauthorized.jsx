// import { useNavigate } from "react-router-dom"

// const Unauthorized = () => {
//     const navigate = useNavigate();

//     const goBack = () => navigate(-1);

//     return (
//         <section>
//             <h1>Unauthorized</h1>
//             <br />
//             <p>You do not have access to the requested page.</p>
//             <div className="flexGrow">
//                 <button onClick={goBack}>Go Back</button>
//             </div>
//         </section>
//     )
// }

// export default Unauthorized



import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

//   const goBack = () => navigate(-1);
const goBack = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center justify-center max-h-[600px] p-4 my-10">
      <h1 className="text-4xl font-bold mb-4 text-red-500">Unauthorized</h1>
      <p className="text-lg text-gray-600 mb-8">
        You do not have access to the requested page.
      </p>
      <div className="flex-grow">
        <button
          onClick={goBack}
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default Unauthorized;
