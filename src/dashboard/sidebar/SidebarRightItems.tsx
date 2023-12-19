// import { Link, useLocation } from "react-router-dom";
// import { SideBarRightItems } from "./SideBarItemsData";
// import { useDashboardContext } from "../Provider";

// const SidebarRightItems = () => {
//   const { pathname } = useLocation();
//   const { sidebarRightOpen } = useDashboardContext();

//   // Split data into two columns
//   const middleIndex = Math.ceil(SidebarRightItems.length / 2);
//   const firstColumn = SidebarRightItems.slice(0, middleIndex);

//   return (
//     <div className={`${style.column} md:pl-3`}>
//       <div className="flex-1">
//         <ul>
//           {firstColumn.map((item) => (
//             <li key={item.title}>
//               <Link to={item.link}>
//                 <span className={style.link}>
//                   <div
//                     className={`p-2 ${
//                       item.link === pathname ? style.active : ""
//                     }`}
//                   >
//                     <span>{item.icon}</span>
//                   </div>
//                   <span
//                     className={`${style.title} ${
//                       sidebarRightOpen ? style.open : style.close
//                     }`}
//                   >
//                     {item.title}
//                   </span>
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SidebarRightItems;
