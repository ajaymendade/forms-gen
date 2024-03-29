// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Home from './components/Home';
import CreateFormPage from './components/CreateFormPage';

function App() {
  return (
    <Router>
      <Container>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Form Generator
            </Typography>
          </Toolbar>
        </AppBar>

        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-form" element={<CreateFormPage />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;
