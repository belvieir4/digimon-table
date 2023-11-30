import Typography from "@mui/material/Typography";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/system/Box";
import theme from "../theme";
import Link from "@mui/material/Link";

const Home = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1" },
    { field: "col2", headerName: "Column 2" },
  ];

  return (
    <>
      <Box sx={{ textAlign: "center", margin: theme.spacing(3) }}>
        <Typography variant="h2" component="h1" mt={4}>
          Digimon List Table
        </Typography>
      </Box>
      <div style={{ height: 300, width: "auto", margin: theme.spacing(3) }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={(row) => console.log(row)}
          sx={{
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        />
      </div>
      <Box sx={{ textAlign: "center", margin: theme.spacing(3) }}>
        <Typography variant="caption" m={2}>
          This project uses the{" "}
          <Link href="https://digimon-api.com" variant="inherit">
            DAPI - Digimon API
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Home;
