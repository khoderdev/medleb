// import { faker } from "@faker-js/faker";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import AppTasks from "./app-tasks";

// ----------------------------------------------------------------------

export default function TaskView() {
  return (
    <Container maxWidth="xl" sx={{ fontFamily: "Roboto, sans-serif" }}>
      {/* <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography> */}

      <Grid container spacing={3}>
        <Grid xs={12} md={12} lg={12}>
          <AppTasks
            title="Tasks"
            list={[
              { id: "1", name: "Create FireStone Logo" },
              { id: "2", name: "Add SCSS and JS files if required" },
              { id: "3", name: "Stakeholder Meeting" },
              { id: "4", name: "Scoping & Estimations" },
              { id: "5", name: "Sprint Showcase" },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
