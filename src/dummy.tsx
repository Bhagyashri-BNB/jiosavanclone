// import styled from "@emotion/styled"
// import { Box, Button, Typography } from "@mui/material"
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// // import { sliderItems } from "../data";
// import { useState } from 'react';

// export interface sliderItemsType {
//     bg: string,
//     img: string,
//     title: string,
//     desc: string,
//     id: number
// }

// const sliderItems: sliderItemsType[] = [
//     {
//         id: 1,
//         title: "Friends",
//         desc: "Description",
//         img: "https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef",
//         bg: '#FFFFFF'
//     },
//     {
//         id: 2,
//         title: "Friends",
//         desc: "Description",
//         img: "https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef",
//         bg: '#FFFFFF'
//     },
//     {
//         id: 3,
//         title: "Friends",
//         desc: "Description",
//         img: "https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef",
//         bg: '#FFFFFF'
//     },
//     {
//         id: 4,
//         title: "Friends",
//         desc: "Description",
//         img: "https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef",
//         bg: '#FFFFFF'
//     },
//     {
//         id: 5,
//         title: "Friends",
//         desc: "Description",
//         img: "https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef",
//         bg: '#FFFFFF'
//     },
//     {
//         id: 6,
//         title: "Friends",
//         desc: "Description",
//         img: "https://occ-0-2484-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVqlT9xl2tsdACTIAPQ_XcKlQNSEXcO4Lvyx6sH-dtU6cAC4_4_ZY251YZL5Qopltb7mTxzLqzuTI5GAwkTIB5jQKw3xZ0eVrM8.jpg?r=2ef",
//         bg: '#FFFFFF'
//     },

// ]

// interface ArrowProps {
//     direction: 'left' | 'right';
// }

// interface SlideProps {
//     bg: string
// }

// interface UserWrapperProps {
//     slideindex : number
// }

// const UserContainer = styled(Box)({
//     width: '100%',
//     height: '30vh',    // viewport height // full height of the browser window
//     // display: 'flex',

//     marginLeft: "2rem",
//     position: 'relative',   // if child uses postion absolute
//     overflow: 'hidden' // for slider
// })

// const Arrow = styled(Box)<ArrowProps>(({ direction }) => ({
//     width: '50px',
//     height: '50px',
//     backgroundColor: '#fff7f7',
//     borderRadius: '50%',
//     // to center its item horizontally and vertically
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',

//     // left and right arrow should be opposite edge
//     position: "absolute",
//     top: '0',
//     bottom: '0',
//     left: direction === 'left' ? '10px' : undefined,
//     right: direction === 'right' ? '10px' : undefined,
//     margin: 'auto',
//     cursor: 'pointer',
//     opacity: '0.5', // tansferancy
//     zIndex: '2'
// }))

// // const UserWrapper = styled(Box)({
// const UserWrapper = styled(Box)<UserWrapperProps>(({slideindex})=>({
//     display: 'flex',
//     height: '100% ',   // 100% of its parent height 
//     // marginTop: "0px",
//     // marginBottom: "0px",
//     transition : 'all 1.5s ease',   
//     transform : `TranslateX(${slideindex * -100}vw)`
// }))

// // const Slide = styled(Box)({
// const Slide = styled(Box)<SlideProps>(({ bg }) => ({
//     width: '100vw',
//     height: '40vh',
//     marginTop: "0px",
//     marginBottom: "0px",
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: `#${bg}`
// }))

// const ImgContainer = styled(Box)({
//     height: '30vh',
//     marginRight: '0.8rem',
//     marginTop: '2px',
//     flex: '1'
// })

// const UserImage = styled('img')({
//     height: '60%'
// })

// const InfoContainer = styled(Box)({
//     flex: '1',
//     padding: '50px'
// })

// const Title = styled(Typography)({
//     fontWeight: '600'
// })

// const Description = styled(Typography)({
//     margin: '50px 0px',    // top-bottm  left-right
//     fontSize: '20px',
//     fontWeight: '500',
//     letterSpacing: '3px'

// })

// const UserButton = styled(Button)({
//     padding: '10px',
//     fontSize: '20px',
//     color: 'black',
//     borderColor: 'black'
// })



// const Slider = () => {

//     const [slideindex, setSlideIndex] = useState(0);

//     const handleClick = (direction: string) => {
//         if(direction === 'left'){
//             console.log("le")
//             setSlideIndex(slideindex > 0 ? slideindex-1 : 2)    // 0 1 2 // if not first then -1 else last 2
//         }
//         else{
//             setSlideIndex(slideindex < 2 ? slideindex + 1 : 0)
//         }
//     }

//     return (
//         <UserContainer>
//             {/* passing prop to style component*/}
//             <Arrow direction="left" onClick={() => handleClick('left')}>
//                 <KeyboardArrowLeftIcon />
//             </Arrow>

//             <UserWrapper slideindex = {slideindex}>
//                 {
//                     sliderItems.map((item) => (

//                         <Slide key = {item.id} bg={item.bg}>
//                             <ImgContainer>
//                                 <UserImage src={item.img} />
//                             </ImgContainer>

//                             {/* <InfoContainer>
//                                 <Title variant="h2">{item.title}</Title>
//                                 <Description variant="body1">{item.desc}</Description>
//                                 <UserButton variant="outlined">SHOW NOW</UserButton>
//                             </InfoContainer> */}
//                         </Slide>
//                     ))
//                 }
//             </UserWrapper>

//             <Arrow direction="right" onClick={() => handleClick('right')}>
//                 <KeyboardArrowRightIcon />
//             </Arrow>
//         </UserContainer>
//     )
// }

// export default Slider
import React from 'react'

export const dummy = () => {
  return (
    <div>dummy</div>
  )
}


