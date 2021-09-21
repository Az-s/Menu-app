import { Grid, Box } from '@material-ui/core';
import Dishlist from '../components/DishList/Dishlist';
import InputFields from '../components/Modal/InputFields';
import OrderInfo from '../components/OrderInfo/OrderInfo';
import './App.css';


const App = () =>{
  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
                <Dishlist />
            </Grid>
            <Grid item xs={4}>
                <OrderInfo />
            </Grid>
            <InputFields />
          </Grid>
        </Box>
    </div >
  );
}

export default App;
