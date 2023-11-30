import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <Typography variant="h2" component="h1" gutterBottom>
      Digimon Detail - {id}
    </Typography>
  );
};

export default Detail;
