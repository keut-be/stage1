import { Box, FormGroup, Paper, Typography } from '@mui/material';
import React from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import SignpostIcon from '@mui/icons-material/Signpost';

const Dashboard = () => {
  return (
    <Box
      sx={{
        display:{xs:'flex', md:'grid'},
        gridTemplateColumns:'repeat(3,1)',
        gridAutoRows:'minmax(100px, auto)',
        gap:3,
        textAlign:'center',
        flexDirection:'colum'
      }}
    >
      <Paper elevation={3}  sx={{height:220, width:255}} >
        <Typography variant='h4'>Total Category</Typography>
        <Box 
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <CategoryIcon sx={{height:100, width:100, opacity:0.3, mr:1}} />
          <Typography variant='h4'>23</Typography> 
        </Box>
      </Paper>
      <Paper elevation={3}  sx={{height:220, width:255}}>
        <Typography variant='h4'>Total Post</Typography>
        <Box 
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <SignpostIcon sx={{height:100, width:100, opacity:0.3, mr:1}} />
          <Typography variant='h4'>200</Typography> 
        </Box>
      </Paper>
    </Box>
  );
}

export default Dashboard;
