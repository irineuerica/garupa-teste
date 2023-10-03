import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';



export default function BeerCard({beer}: any) {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 400, minHeight:400, maxHeight: 400 }}>
      <CardHeader
        title={beer.name}
        titleTypographyProps={{fontSize: 16, color: theme.palette.primary.dark, fontWeight: 'bold'}}
        subheader={beer.tagline}
        subheaderTypographyProps={{fontSize: 13, fontWeight: 'bold'}}
      />
      <CardMedia
        component="img"
        height="200"
        image={beer.image_url}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography  sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 4,
        fontSize: 14
    }}
>
          {beer.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
