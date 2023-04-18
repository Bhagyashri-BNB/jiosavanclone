// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import axios from 'axios'
// import { useTheme } from '@emotion/react';
// import { Carousel } from 'react-responsive-carousel';
// import Slider from "react-slick";


// interface Product {
//   id: number;
//   title: string;
//   image: any;
//   cols: number,
//   rows: number,
//   gap: number,
//   loop: boolean,
//   hidearrow: boolean
// }

// export default function SimplePaper() {
//   const theme = useTheme();
//   const [data, setData] = useState<Product[]>([])
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('https://fakestoreapi.com/products/')
//       setData(response.data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <Grid container spacing={2} >
//       {data.map((mydata) => (
//         <Grid item xs={2}>
//           <Box>
//             <Paper sx={{ height: "150px", width: "150px", display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
//               <img src={mydata.image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
//             </Paper>
//             <Typography variant="h6" sx={{ fontWeight: "600", fontFamily: "Lato,sans-serif", fontSize: "12px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{mydata.title}</Typography>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//     <Slider
//   infinite={true}
//   slidesToShow={4}
//   slidesToScroll={4}
//   autoplay={true}
//   autoplaySpeed={3000}
//   dots={false}
// >
//   {data.map((mydata) => (
//     <Grid item xs={2}>
//       <Box>
//         <Paper sx={{ height: "150px", width: "150px", display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
//           <img src={mydata.image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
//         </Paper>
//         <Typography variant="h6" sx={{ fontWeight: "600", fontFamily: "Lato,sans-serif", fontSize: "12px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{mydata.title}</Typography>
//       </Box>
//     </Grid>
//   ))}
// </Slider>

//   );
// }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useTheme } from "@emotion/react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Box, Paper, Grid, Typography } from "@mui/material";

interface Product {
  id: number;
  title: string;
  image: any;
}

// export default function SimplePaper() {
//   const theme = useTheme();
//   const [data, setData] = useState<Product[]>([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get("https://fakestoreapi.com/products/");
//       setData(response.data);
//     };
//     fetchData();
//   }, []);

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 5,
//       slidesToSlide: 5, // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 3,
//       slidesToSlide: 3, // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//   };

//   return (
//     <Carousel
//       swipeable={true}
//       draggable={false}
//       responsive={responsive}
//       ssr={true} // means to render carousel on server-side.
//       infinite={false}
//       autoPlaySpeed={100}
//       keyBoardControl={true}
//       customTransition="all .5"
//       transitionDuration={1000}
//       containerClass="carousel-container"
//       removeArrowOnDeviceType={["tablet", "mobile"]}
//       dotListClass="custom-dot-list-style"
//       itemClass="carousel-item-padding-40-px"
//     >
//       {data.map((mydata) => (
//         <Grid item xs={12} sm={6} md={4} key={mydata.id}>
//           <Box>
//             <Paper
//               sx={{
//                 height: "150px",
//                 width: "150px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 mt: 2,
//               }}
//             >
//               <img
//                 src={mydata.image}
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: "100%",
//                   objectFit: "contain",
//                 }}
//               />
//             </Paper>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: "600",
//                 fontFamily: "Lato,sans-serif",
//                 fontSize: "12px",
//                 textAlign: "center",
//                 textOverflow: "ellipsis",
//                 whiteSpace: "nowrap",
//                 overflow: "hidden",
//               }}
//             >
//               {mydata.title}
//             </Typography>
//           </Box>
//         </Grid>
//       ))}
//     </Carousel>
//   );
// }


// import './styles.css';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/');
      setProducts(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className="carousel-wrapper">
            <FaArrowLeft className="arrow-icon left" />
            <FaArrowRight className="arrow-icon right" />
            <div className="carousel">
              <div className="carousel-inner">
                {products.map((product) => (
                  <Card key={product.id} className="carousel-item">
                    <Card.Img variant="top" src={product.image} />
                    <Card>
                      <Card.Title>{product.title}</Card.Title>
                    </Card>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
