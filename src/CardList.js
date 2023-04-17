import React from 'react'

import { 
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Box,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';

import MDTypography from "components/MDTypography";

import FavoriteIcon from '@mui/icons-material/Favorite';

const CardList = ({cards}) => {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState('')
  
    const handleClickOpen = (card) => {
      setOpen(true);
      setSelectedValue(card)
    }
  
    const handleClose = (value) => {
      setOpen(false);
    }
  
    //const [isHover, setIsHover] = useState(false)
    // {"name":"nagisas_leisure","level":1,"animated":false,"col":"clannad"}
    const cap = (str) => str.split('_').map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(' ')

    return (
      <Box sx={{ m: 6 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4, lg: 6 }}>
          {cards.map((card) => (
              <Grid item key={card.url} xs={1} sm={1} md={1} lg={1}>
                <Card sx={{transition: "transform 0.15s ease-in-out", "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }, cursor: 'pointer'}}>
                  <CardMedia component="img" src={card.url} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {cap(card.name)}
                    </Typography>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {card.colName}
                    </MDTypography>
                  </CardContent>
                  <CardActions>
                    {card.fav && 
                      <IconButton aria-label="is favorited">
                        <FavoriteIcon />
                      </IconButton>
                    }
                    {card.amount && 
                    <Typography variant="body3" color="text.secondary">
                      x{card.amount}
                    </Typography>
                    }
                    {/* <IconButton aria-label="share">
                      
                    </IconButton> */}
                  </CardActions> 
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    )
  }
  
  export default CardList