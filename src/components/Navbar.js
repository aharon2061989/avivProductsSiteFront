import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Stack, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                קוקטיילי – כי כל קוקטייל צריך את הכוס שלו
                </Typography>

                <Button style={{fontWeight:'bold', marginRight:'5px'}} color="inherit" href="/contact">גלריית תמונות</Button>

                <Stack direction="row" spacing={2}>
                    <IconButton
                        color="inherit"
                        href="https://wa.me/0504066900"
                        target="_blank"
                        aria-label="WhatsApp"
                    >
                        <WhatsAppIcon />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        href="tel:0504066900"
                        aria-label="Phone"
                    >
                        <PhoneIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
