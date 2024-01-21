// // import { useNavigate, Link } from "react-router-dom";
// // import { useContext } from "react";
// // import AuthContext from "../context/AuthProvider";

// // const Home = () => {
// //     const { setAuth } = useContext(AuthContext);
// //     const navigate = useNavigate();

// //     const logout = async () => {
// //         // if used in more components, this should be in context
// //         // axios to /logout endpoint
// //         setAuth({});
// //         navigate('/linkpage');
// //     }

// //     return (
// //         <section>
// //             <h1 className="title">Home</h1>
// //             <br />
// //             <h2 className="welcome">You are logged in!</h2>
// //             <br />
// //             <Link to="/editor">Go to the Editor page</Link>
// //             <br />
// //             <Link to="/admin">Go to the Admin page</Link>
// //             {/* <br /> */}
// //             {/* <Link to="/lounge">Go to the Lounge</Link> */}
// //             <br />
// //             <Link to="/linkpage">Go to the link page</Link>
// //             <div className="flexGrow">
// //                 <button onClick={logout}>Sign Out</button>
// //             </div>
// //         </section>
// //     )
// // }

// // export default Home

// import { useState } from "react";
// import emil2 from "../images/emil2.png";

// export default function Home() {
//   return (
//     <div>
//       <div className="image-container flex w-full flex-col items-center justify-center p-6 sm:h-screen sm:p-0">
//         <img
//           className="bitar-image max-h-full max-w-full object-cover"
//           src={emil2}
//           alt="Emil"
//         />
//       </div>
//     </div>
//   );
// }
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section>
            <h1 className="title">Home</h1>
            <br />
            <h2 className="welcome">You are logged in!</h2>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            {/* <br /> */}
            {/* <Link to="/lounge">Go to the Lounge</Link> */}
            <br />
            <Link to="/linkpage">Go to the link page</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
