// import { Link } from "react-router-dom";
// import Dashboard from "../src/components/Dashboard";
// const Admin = () => {
//   return (
//     <section>
//       <h1>Admins Page</h1>
//       <br />

//       <div className="flexGrow">
//         <Dashboard />
//       </div>
//     </section>
//   );
// };

// export default Admin;
import { Link } from "react-router-dom"

const Admin = () => (
        <section>
            <h1>Admins Page</h1>
            <br />
            <p>You must have been assigned an Admin role.</p>
            <div className="flexGrow">
                <Link to="/dashbaord">Admin Dashboard</Link>
            </div>
        </section>
    )

export default Admin
