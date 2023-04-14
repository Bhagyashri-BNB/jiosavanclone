import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useTheme } from '@emotion/react';
import { Carousel } from 'react-responsive-carousel';
// import Carousel from "react-grid-carousel";

interface Product {
  id: number;
  title: string;
  image: any;
  cols: number,
  rows: number,
  gap: number,
  loop: boolean,
  hidearrow: boolean
}


export default function SimplePaper() {
  const theme=useTheme();

  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/')
      //  const response = await axios.get('https://itunes.apple.com/search?term=rock&media=music')
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    
   
      
    <Grid container spacing={2} >
      {data.map((mydata) => (
        <Grid  item xs={2}>
          <Box>
          <Paper sx={{ height: "150px", width: "150px", display: "flex", alignItems: "center", justifyContent: "center", mt: 2  }}>
          <img src={mydata.image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          </Paper>
          <Typography variant="h6" sx={{fontWeight: "600", fontFamily: "Lato,sans-serif", fontSize: "12px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{mydata.title}</Typography>
        </Box>
        </Grid>
      ))}
    </Grid>
    
   

    
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { Grid, Typography } from '@mui/material';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useTheme } from '@emotion/react';
// import Slider from 'react-slick'
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// interface Product {
//   id: number;
//   title: string;
//   image: any;
// }

// export default function SimplePaper() {
//   const theme=useTheme();

//   const [data, setData] = useState<Product[]>([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('https://fakestoreapi.com/products/')
//       setData(response.data);
//     }
//     fetchData();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//   };

//   return (
//     <Slider {...settings}>
//       {data.map((mydata, index) => (
//         <Box key={index}>
//           <Paper sx={{ height: "150px", width: "150px", display: "flex", alignItems: "center", justifyContent: "center", mt: 2  }}>
//             <img src={mydata.image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
//           </Paper>
//           <Typography variant="h6" sx={{fontWeight: "600", fontFamily: "Lato,sans-serif", fontSize: "12px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{mydata.title}</Typography>
//         </Box>
//       ))}
//     </Slider>
//   );
// }


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { Grid, Typography } from '@mui/material';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useTheme } from '@emotion/react';

// interface Product {
//   id: number;
//   title: string;
//   image: any;
// }

// export default function SimplePaper() {
//   const theme=useTheme();

//   const [data, setData] = useState<Product[]>([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('https://fakestoreapi.com/products/')
//       setData(response.data);
//     }
//     fetchData();
//   }, []);

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const previousSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
//   }

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
//   }

//   return (
//     <Grid container spacing={2} >
//       <Grid item xs={2} >
//         <Box sx={{ position: "relative", height: "150px", overflow: "hidden" }}>
//           {data.map((mydata, index) => (
//             <Box key={index} sx={{ position: "absolute", top: 0, left: `${index * 100}%`, width: "100%", height: "100%", transition: "left 0.5s ease-in-out" }}>
//               <Paper sx={{ height: "150px", width: "150px", display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
//                 <img src={mydata.image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
//               </Paper>
//               <Typography variant="h6" sx={{fontWeight: "600", fontFamily: "Lato,sans-serif", fontSize: "12px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{mydata.title}</Typography>
//             </Box>
//           ))}
//           <Box sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 0, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
//             <button onClick={previousSlide}>Previous</button>
//             <button onClick={nextSlide}>Next</button>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

