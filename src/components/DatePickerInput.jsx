// import * as React from "react";
// import { DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Box from "@mui/material/Box";
// import Alert from "@mui/material/Alert";

// export default function DatePickerInput() {
//   const [cleared, setCleared] = React.useState(false);

//   React.useEffect(() => {
//     if (cleared) {
//       const timeout = setTimeout(() => {
//         setCleared(false);
//       }, 1500);

//       return () => clearTimeout(timeout);
//     }
//     return () => {};
//   }, [cleared]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box
//         sx={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           justifyContent: "center",
//           position: "relative",
//         }}
//       >
//         <DemoItem label="DatePicker">
//           <DatePicker
//             sx={{
//               borderRadius: "60px", // Border radius set to 60px
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Added shadow
//               "&:focus": {
//                 outline: "none", // Remove outline on focus
//               },
//             }}
//             slotProps={{
//               field: { clearable: true, onClear: () => setCleared(true) },
//             }}
//           />
//         </DemoItem>

//         {cleared && (
//           <Alert
//             sx={{ position: "absolute", bottom: 0, right: 0 }}
//             severity="success"
//           >
//             Field cleared!
//           </Alert>
//         )}
//       </Box>
//     </LocalizationProvider>
//   );
// }



import * as React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .customDatePicker .MuiInputBase-root {
    border-radius: 60px !important;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1) !important;

    &:focus {
      outline: none !important;
      border-color: #5cd3b7 !important;
    }
  }
`;

export default function DatePickerInput() {
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <>
      <GlobalStyle />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            paddingY: 1,
          }}
        >
          <DemoItem label="DatePicker">
            <DatePicker
              className="customDatePicker"
              sx={{
                borderRadius: "60px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                "&:focus": {
                  outline: "none",
                  borderColor: "#5cd3b7 !important",
                },
                border: "1px solid #259f835e", // Border color for normal state
              }}
              slotProps={{
                field: { clearable: true, onClear: () => setCleared(true) },
              }}
            />
          </DemoItem>

          {cleared && (
            <Alert
              sx={{ position: "absolute", bottom: 0, right: 0 }}
              severity="success"
            >
              Field cleared!
            </Alert>
          )}
        </Box>
      </LocalizationProvider>
    </>
  );
}



