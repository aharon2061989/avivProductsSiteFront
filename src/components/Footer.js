import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

function Footer() {

    return(
        <Box component="footer" sx={{ backgroundColor: "#2c3e50", color: "#ffffff", textAlign: "center", direction:"rtl" }}>
        <Container>
            <Typography variant="h6" gutterBottom>צור קשר:</Typography>
            <Typography variant="body1">
                <Link href="mailto:info@avivitzhaki.com" color="inherit" underline="none">info@avivitzhaki.com</Link>
            </Typography>
            <Typography variant="body1">טלפון: 052-1234567</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>© כל הזכויות שמורות לאביב יצחקי</Typography>
        </Container>
    </Box>
    )

}

export default Footer;