// // import { useDashboardContext } from "./Provider";
// // import { useState } from "react";
// // import IconButton from "@mui/material/IconButton";
// // import Menu from "@mui/material/Menu";
// // import MenuItem from "@mui/material/MenuItem";
// // import Stack from "@mui/material/Stack";
// // import Brightness4Icon from "@mui/icons-material/Brightness4";
// // import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// // export function TopBar() {
// //   const { openSidebar } = useDashboardContext();
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [anchorEl, setAnchorEl] = useState(null);

// //   const toggleDarkMode = () => {
// //     setDarkMode(!darkMode);
// //     // Implement your dark mode logic here
// //   };

// //   const handleUserMenuClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleUserMenuClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <header
// //       className={`relative z-10 h-20 items-center ${darkMode ? "dark" : ""}`}
// //     >
// //       <div className="relative bg-blue-600 z-10 mx-auto flex h-full flex-col justify-center px-3 text-white">
// //         <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
// //           <div className="group relative flex h-full w-12 items-center">
// //             <IconButton
// //               onClick={openSidebar}
// //               color="inherit"
// //               edge="start"
// //               aria-label="Toggle sidenav"
// //             >
// //               ☰
// //             </IconButton>
// //           </div>
// //           <div className="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
// //             <IconButton onClick={toggleDarkMode} color="inherit">
// //               <Brightness4Icon />
// //             </IconButton>

// //             <IconButton onClick={handleUserMenuClick} color="inherit">
// //               <AccountCircleIcon />
// //             </IconButton>
// //           </div>
// //         </div>
// //       </div>
// //       <Menu
// //         id="user-menu"
// //         anchorEl={anchorEl}
// //         open={Boolean(anchorEl)}
// //         onClose={handleUserMenuClose}
// //         anchorOrigin={{
// //           vertical: "top",
// //           horizontal: "right",
// //         }}
// //         transformOrigin={{
// //           vertical: "top",
// //           horizontal: "right",
// //         }}
// //         sx={{
// //           "& .MuiPaper-root": {
// //             maxHeight: "200px",
// //             width: "200px",
// //             marginTop:"40px",
// //           },
// //         }}
// //       >
// //         <Stack spacing={1} p={2}>
// //           <MenuItem onClick={handleUserMenuClose}>User Settings</MenuItem>
// //           <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
// //         </Stack>
// //       </Menu>
// //     </header>
// //   );
// // }
// import React from "react";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../theme";
// import { useTheme, Box, IconButton, InputBase } from "@mui/material";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// // import { useProSidebar } from "react-pro-sidebar";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import WestIcon from "@mui/icons-material/West";
// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);
//   const { collapseSidebar, toggleSidebar, collapsed, broken, rtl } =
//     useProSidebar();

//   return (
//     <>
//       <Box display="flex" justifyContent="flex-start" paddingLeft={2}>
//         {/* <Box display="flex">
//           {broken && !rtl && (
//             <IconButton
//               sx={{ margin: "0 6 0 2" }}
//               onClick={() => toggleSidebar()}
//             >
//               <MenuOutlinedIcon />
//             </IconButton>
//           )}
//           {collapsed ? (
//             <IconButton onClick={() => collapseSidebar()}>
//               <MenuOutlinedIcon />
//             </IconButton>
//           ) : (
//             <IconButton
//               onClick={broken ? () => toggleSidebar() : () => collapseSidebar()}
//             >
//               <WestIcon className="ml-[-50px] p-1 bg-[#259f83] rounded-lg" />
//             </IconButton>
//           )}
//         </Box> */}
//         {/* <Box display="flex">
//           <IconButton onClick={colorMode.toggleColorMode}>
//             {theme.palette.mode === "dark" ? (
//               <LightModeOutlinedIcon />
//             ) : (
//               <DarkModeOutlinedIcon />
//             )}
//           </IconButton>
//         </Box> */}
//         {/* <div
//           className="arrow-toggle hidden md:block absolute w-fit  top-0  -mr-2 -translate-x-1/2 cursor-pointer items-center justify-start"
//           onClick={() => toggleSidebar()}
//         >
//           <svg
//             className={`  -rotate-90 rounded-md bg-[#259f83a1] text-gray-900 transition-transform duration-300 ${
//               collapsed ? "mt-2" : "mt-2"
//             } text-white ease-in-out dark:text-white`}
//             width="20"
//             height="25"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             onClick={() => collapseSidebar()}
//           >
//             {collapsed ? (
//               // Show expand arrow when collapsed
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 15l7-7 7 7"
//               ></path>
//             ) : (
//               // Show collapse arrow when expanded
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               ></path>
//             )}
//           </svg>
//         </div> */}
//       </Box>
//     </>
//   );
// };

// export default Topbar;
