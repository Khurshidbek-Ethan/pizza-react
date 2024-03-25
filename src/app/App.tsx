import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './materialTheme/MaterialTheme/styled';


function App() {
  return (
   <Container maxWidth = "sm" >
    <Stack flexDirection={"column"}>
    <Box sx={{my:4}}>
      <Typography variant = "h4"  component = {"h4"} >
        Create React App on TypeScript with REDUX
      </Typography>
    </Box>
    <Box>
      <RippleBadge badgeContent = {4}>
            <Button variant="contained" >Contained</Button>
      </RippleBadge>
    </Box>
    </Stack>
   </Container>
  );
}

export default App;


// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import './index.css';

// const container = document.getElementById('root')!;
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
