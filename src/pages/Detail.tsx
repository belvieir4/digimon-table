import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { endpoints } from 'services/digimon/endpoints';
import Box from '@mui/system/Box';
import theme from 'theme';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from 'router';

const Detail = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ['digimon', name],
    queryFn: () => endpoints.getByName(name!),
  });
  const navigate = useNavigate();
  if (error) {
    return <div>Error</div>;
  }

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  return (
    <Stack
      direction="column"
      width="80%"
      marginLeft="auto"
      marginRight="auto"
      sx={{ flex: 1 }}
    >
      <Box
        sx={{
          textAlign: 'center',
          margin: theme.spacing(4),
        }}
      >
        <Typography variant="h2" component="h1" mt={3}>
          Digimon Detail
        </Typography>
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          backgroundColor: '#fff',
          padding: theme.spacing(4),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Stack direction="row" sx={{ flex: 1 }}>
          <img
            src={data.img}
            alt={data.name}
            style={{ objectFit: 'contain', width: '100%' }}
          />
        </Stack>
        <Grid
          container
          spacing={4}
          columns={{ xs: 4, md: 12 }}
          sx={{ marginTop: theme.spacing(2) }}
        >
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Name
            </Typography>
            <Typography variant="h4" component="h2">
              {data.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Level
            </Typography>
            <Typography variant="h4" component="div">
              {data.level}
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant="text"
          color="secondary"
          size="large"
          fullWidth
          onClick={() => navigate(routes.digimon.list)}
          sx={{ marginTop: theme.spacing(3) }}
        >
          Back
        </Button>
      </Box>
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

export default Detail;
