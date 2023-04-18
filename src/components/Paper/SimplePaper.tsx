import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Theme } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface Product {
  id: number;
  title: string;
  image: any;
  tracks: any;
  cols: number,
  rows: number,
  gap: number,
  loop: boolean,
  hidearrow: boolean
}

export default function SimplePaper() {
  // const theme = useTheme();
  const [data, setData] = useState<Product[]>([])
  // const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  // const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/')
      setData(response.data);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch("https://genius-song-lyrics1.p.rapidapi.com/search/?q=" + searchQuery, {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
  //       "x-rapidapi-key": "86d0b16485msh7c8b0cdee1afd95p1ee59fjsn9025710ba692"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setSearchResults(data);
  //       console.log("jii");
  //     })
     
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [searchQuery]);

  return (
    <Grid container spacing={2} >
      {data.map((mydata, id ) => (
        <Grid item xs={2} key={id}>
          <Box>
            <Paper sx={{ height: "150px", width: "150px", display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
              <img src={mydata.image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </Paper>
            <Typography variant="h6" sx={{ fontWeight: "600", fontFamily: "Lato,sans-serif", fontSize: "12px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{mydata.title}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>

    // <Grid container spacing={2}>
    //   {searchResults.map((result, index) => (
    //     <Grid item xs={2} key={index}>
    //       <Box>
    //         <Paper sx={{ height: "150px", width: "150px", display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
    //           <img src={result.tracks} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
    //         </Paper>
    //         <Typography variant="h6" sx={{ fontWeight: "600", fontFamily: "Lato,sans-serif", fontSize: "12px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{result.artists}</Typography>
    //       </Box>
    //     </Grid>
    //   ))}
    // </Grid>
  );
}

