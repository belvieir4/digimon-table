import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridApiCommunity } from '@mui/x-data-grid/models/api/gridApiCommunity';
import Box from '@mui/system/Box';
import theme from 'theme';
import Link from '@mui/material/Link';
import { endpoints } from 'services/digimon/endpoints';
import { useQuery } from '@tanstack/react-query';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { routes } from 'router';
import { useRef, useState } from 'react';

const DEFAULT_PAGE_SIZE = 15;
const INITIAL_PAGE = 0;

const Home = () => {
  const [pageModel, setPageModel] = useState({
    page: INITIAL_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const ref = useRef<GridApiCommunity>({} as GridApiCommunity);
  const { data, isLoading } = useQuery({
    queryKey: ['digimon', 'list', pageModel.pageSize, pageModel.page],
    queryFn: () => {
      return endpoints.getAll({
        page: pageModel.page,
        pageSize: pageModel.pageSize,
      });
    },
  });
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      width: 80,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'img',
      headerName: 'Preview',
      width: 80,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (digimon) => {
        return (
          <img
            style={{ objectFit: 'contain' }}
            width="48"
            height="48"
            src={digimon.row.image}
            loading="lazy"
          />
        );
      },
    },
  ];

  return (
    <Stack
      direction="column"
      height="100vh"
      width="80%"
      marginLeft="auto"
      marginRight="auto"
    >
      <Box
        sx={{
          textAlign: 'center',
          margin: theme.spacing(4),
        }}
      >
        <Typography variant="h2" component="h1" mt={3}>
          The Digimon List
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          A React.js + TypeScript project using MUI components and consuming an
          API.
        </Typography>
      </Box>
      <DataGrid
        apiRef={ref}
        loading={isLoading}
        rows={data?.content || []}
        rowCount={data?.pageable.totalElements || 0}
        columns={columns}
        onRowClick={(row) => navigate(routes.digimon.detail(String(row.id)))}
        initialState={{
          pagination: { paginationModel: { pageSize: DEFAULT_PAGE_SIZE } },
        }}
        onPaginationModelChange={(args) => {
          if (args.pageSize !== pageModel.pageSize) {
            ref?.current.setPage(0);
            return setPageModel({
              page: 0,
              pageSize: args.pageSize,
            });
          }
          setPageModel(args);
        }}
        pageSizeOptions={[15, 25, 50]}
        paginationMode="server"
        sx={{
          boxShadow: 1,
          backgroundColor: '#fff',
          flex: 1,
        }}
      />
      <Box sx={{ textAlign: 'center', margin: theme.spacing(3) }}>
        <Typography variant="caption">
          This project uses the{' '}
          <Link
            href="https://digimon-api.com"
            variant="inherit"
            rel="noopener"
            target="_blank"
          >
            DAPI - Digimon API
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Home;
