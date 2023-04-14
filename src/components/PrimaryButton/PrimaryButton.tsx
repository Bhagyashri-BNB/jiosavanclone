import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const PrimaryButton = styled(Button)(({ theme }) => ({
    color: theme.status.navbar,
    backgroundColor: theme.status.navbar,
    // '&:hover': {
    //   backgroundColor: theme.palette.prime.hover,
      
    // },      
  }));

export default PrimaryButton