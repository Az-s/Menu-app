import { Container, Grid, Paper, Box } from '@material-ui/core';
// import { styled } from '@mui/material/styles';
import { styled } from '@material-ui/system';
import Dishlist from '../components/DishList/Dishlist';
import OrderInfo from '../components/OrderInfo/OrderInfo';
import './App.css';


const App = () =>{
  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid  xs={8}>
                <Dishlist />
            </Grid>
            <Grid  xs={4}>
                <OrderInfo />
            </Grid>
          </Grid>
        </Box>
    </div >
  );
}

export default App;
