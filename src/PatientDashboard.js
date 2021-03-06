import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {/* {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'} */}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <HealthAndSafetyIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Healthcare Management System
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Healthcare Management System
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Patient Dashboard
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button onClick={() => navigate("/appoinmentform")}
                                color="success" variant="contained">Patient Appoinment</Button>
                            <Button onClick={() => navigate("/doctorconfirmation")} color="error" variant="contained">Doctor Confirmation</Button>
                            <Button onClick={() => navigate("/doctordescription")} color="primary" variant="contained">Doctor Description</Button>
                            <Button onClick={() => navigate("/patientreportrequest")} color="secondary" variant="contained">Report Request</Button>
                            {/* <Button color="error" variant="contained">Consultant View</Button> */}
                            {/* <Button color="success" variant="contained">Appointment Page</Button> */}
                            {/* <Button color="primary" variant="contained">Doctor Activation </Button> */}
                        </Stack>
                    </Container>
                </Box>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                {/* <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography> */}
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}