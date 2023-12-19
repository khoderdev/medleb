import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "./Header";
import LineChart from "./LineChart";
import GeographyChart from "./GeographyChart";
import BarChart from "./BarChart";
import StatBox from "./StatBox";
import ProgressCircle from "./ProgressCircle";
import PieChart from "./PieChart";
import LoadingSpinner from "./LoadingSpinner";

const Dashboard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px ">
      {/* HEADER */}

      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            className="hover:bg-[#259F83]"
            sx={{
              backgroundColor: colors.greenAccent[500],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              border: "2px solid transparent",
              transition: "border 0.3s ease-in-out, color 0.3s ease-in-out", // Add transition for color change
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.border = "2px solid #259F83";
              e.currentTarget.style.color = "#259F83"; // Change text color on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.border = "2px solid transparent";
              e.currentTarget.style.color = colors.grey[100]; // Restore the initial text color on hover out
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={6}>
          <Box
            className="dark:bg-black"
            backgroundColor={colors.primary[400]}
            borderRadius="30px"
          >
            <Typography
              className="dark:text-white"
              variant="h5"
              fontWeight="600"
              sx={{ padding: "10px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="480px" mt="-20px">
              <PieChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <Box
            className="dark:bg-black"
            backgroundColor={colors.primary[400]}
            borderRadius="30px"
          >
            <Typography
              className="dark:text-white"
              variant="h5"
              fontWeight="600"
              sx={{ padding: "10px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="480px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={8}
          lg={8}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid xs={12}>
            <Box
              className="dark:bg-black"
              backgroundColor={colors.primary[400]}
              borderRadius="30px"
              padding="5px"
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="30px"
              >
                <Box>
                  <Typography
                    className="dark:text-white"
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                    borderRadius="30px"
                  >
                    Revenue Generated
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[500]}
                    borderRadius="30px"
                  >
                    $58,373,698
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
              </Box>
            </Box>
            {/* <LoadingSpinner /> */}
          </Grid>

          <Grid xs={12}>
            <Box
              backgroundColor={colors.primary[400]}
              padding="30px"
              borderRadius="30px"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
              >
                Geography Based Traffic
              </Typography>
              <Box height="26em">
                <PieChart isDashboard={true} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            className="dark:bg-black dark:text-white"
            backgroundColor={colors.primary[400]}
            maxHeight="100vh"
            overflow="auto"
            borderRadius="30px"
            m="25px 0 0 0"
          >
            <Box
              className="dark:text-white"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p="15px"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Resent Transaction
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => {
              return (
                <Box
                  key={`${transaction}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      color={colors.greenAccent[100]}
                    >
                      {transaction.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {transaction.user}
                    </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    ${transaction.cost}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
