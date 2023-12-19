import { Box, useTheme } from "@mui/material";
import Header from "./Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";

const Notifications = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const accordionStyle = {
    borderRadius: "8px", // You can adjust the border radius as needed
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow for better visual appearance
    marginBottom: "16px", // Adjust the margin bottom to add space between Accordions
  };


  return (
    <Box m="20px">
      <Header
        // title="Notifications"
        subtitle="Check your notifications and alerts"
      />

      <Accordion
        defaultExpanded
        sx={accordionStyle}
        className="border border-[#259f83] dark:bg-[#1e1e1e] dark:text-white"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#259f83]" />}
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Notification 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded
        sx={accordionStyle}
        className="border border-[#259f83] dark:bg-[#1e1e1e] dark:text-white">
        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#259f83]" />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Notification 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded
        sx={accordionStyle}
        className="border border-[#259f83] dark:bg-[#1e1e1e] dark:text-white">
        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#259f83]" />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Notification 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded
        sx={accordionStyle}
        className="border border-[#259f83] dark:bg-[#1e1e1e] dark:text-white">
        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#259f83]" />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Notification 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded
        sx={accordionStyle}
        className="border border-[#259f83] dark:bg-[#1e1e1e] dark:text-white">
        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#259f83]" />}>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="bold"
          >
            Notification 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export { Notifications };
