import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { endpoints } from 'services/digimon/endpoints';
import Box from '@mui/system/Box';
import theme from 'theme';
import Link from '@mui/material/Link';

const Detail = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ['digimon', name],
    queryFn: () => endpoints.getByName(name!),
  });

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          margin: theme.spacing(4),
        }}
      >
        <Typography variant="h2" component="h1" mt={3}>
          Digimon Detail - {name}
        </Typography>
      </Box>

      {/* add details here */}

      <Box sx={{ textAlign: 'center', margin: theme.spacing(3) }}>
        <Typography variant="caption">
          This project uses the{' '}
          <Link href="https://digimon-api.vercel.app" variant="inherit">
            Digimon API from Shadow Smith
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Detail;
