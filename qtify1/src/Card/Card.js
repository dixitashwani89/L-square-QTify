import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  Chip,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import styles from "../Card/Card.module.css"

const MusicCard = ({musicList,}) => {
  // return (<Box sx={{ width: '25%',height:'25%' }}><Card className={styles.Card}>
  //   <CardMedia
  //       component="img"
  //       image={musicList.image}
  //       alt="song"
  //       className={styles.cardImages}
  //     />      
  //  <CardContent>
  //  <Chip label={`${musicList.follows} Follows`} color="primary" style={{backgroundColor:'black'}} />
  //       <Typography gutterBottom variant="body2" component="div">
  //         <h3>{musicList.title}</h3>
  //       </Typography>
  //     </CardContent>
  //   </Card> 
  //   </Box>
  // );
  return (
    <div className={styles.cardsection}>
      <Card className={styles.Card} sx={{ maxWidth: 345, backgroundColor: 'white', color: 'white' }}>
        <CardMedia
          component="img"
          alt={musicList.title}
          image={musicList.image}
          sx={{ height: 200, objectFit: 'cover' }}
        />
        <CardContent sx={{ paddingBottom: 0 }}>
          <Chip
            label={`${musicList.follows} Follows`}
            color="primary"
            style={{ backgroundColor: 'black', fontSize: '14px' }}
            sx={{
              marginTop: 2,
              padding: '4px 12px',
              fontWeight: 'bold',
            }}
          />
        </CardContent>    
      </Card>
      {musicList.title}
    </div>
  );
};

export default MusicCard;
