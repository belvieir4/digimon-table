import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/system/Box';
import theme from 'theme';
import Link from '@mui/material/Link';
import { endpoints } from 'services/digimon/endpoints';
import { useQuery } from '@tanstack/react-query';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { routes } from 'router';

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['digimon', 'list'],
    queryFn: endpoints.getAll,
  });
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: 'img',
      headerName: '',
      width: 80,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (digimon) => {
        return (
          <img
            style={{ objectFit: 'contain' }}
            width="48"
            height="48"
            src={digimon.row.img}
            loading="lazy"
          />
        );
      },
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'level', headerName: 'Level', width: 200 },
  ];

  return (
    <Stack direction="column" height="100vh">
      <Box
        sx={{
          textAlign: 'center',
          margin: theme.spacing(4),
        }}
      >
        <Typography variant="h2" component="h1" mt={3}>
          Digimon List Table
        </Typography>
      </Box>
      <DataGrid
        loading={isLoading}
        rows={data || []}
        columns={columns}
        onRowClick={(row) => navigate(routes.digimon.detail(String(row.id)))}
        getRowId={(row) => row.name}
        initialState={{
          pagination: { paginationModel: { pageSize: 15 } },
        }}
        pageSizeOptions={[15, 25, 50]}
        sx={{
          boxShadow: 1,
          backgroundColor: '#fff',
          marginLeft: theme.spacing(4),
          marginRight: theme.spacing(4),
          flex: 1,
        }}
      />
      <Box sx={{ textAlign: 'center', margin: theme.spacing(3) }}>
        <Typography variant="caption">
          This project uses the{' '}
          <Link href="https://digimon-api.vercel.app" variant="inherit">
            Digimon API from Shadow Smith
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Home;
