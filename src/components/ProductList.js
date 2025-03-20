import React, { useState } from "react";
import { Card, CardContent, Typography, CardMedia, Grid, Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const products = [
    { id: 1, name: " קוקטייל ציפור קריסטל 200 מ'ל", price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img1.jpg" },
    { id: 2, name: " קוקטייל שופר זכוכית 410 מ'ל", price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img14.jpg" },
    { id: 3, name: " קוקטייל גלובוס זכוכית 330 מ'ל",price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img13.jpg" },
    { id: 3, name: " קוקטייל פטריה זכוכית 270 מ'ל",price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img4.jpg" },
    { id: 3, name: " קוקטייל נבל זכוכית 190 מ'ל",price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img2.jpg" },
    { id: 3, name: " קוקטייל נבל זכוכית 340 מ'ל",price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img11.jpg" },
    { id: 3, name: " קוקטייל דובי זכוכית 320 מ'ל",price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img9.jpg" },
    { id: 3, name: " קוקטייל מרטיני זכוכית 230 מ'ל",price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img12.jpg" },
    { id: 3, name: " כוס יין מעוצבת זכוכית 450 מ'ל",price1:"50 ₪", quantity1: " 1 - 50 יחידות", price2: " 39 ₪ ", quantity2:" 51 - 100 יחידות" , image: "/photos/img8.jpg" }
];

function ProductList() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={3}>
            <Grid container spacing={4} maxWidth={1200} justifyContent="center">
                {products.map((product) => (
                    <Grid item xs={4} sm={4} md={4} key={product.id}>
                        <Card
                            sx={{
                                width: '100%',
                                boxShadow: 6,
                                borderRadius: '20px',
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'scale(1.05)' },
                                direction: 'rtl'
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                image={product.image}
                                alt={product.name}
                                onClick={() => handleOpen(product.image)}
                            />
                            <CardContent>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>{product.name}</Typography>
                                {product.price1 && product.price2 && (
                                    <Box display="flex" justifyContent="space-evenly" mt={1} paddingTop="10px">
                                        <Box>
                                            <Typography variant="h5" fontWeight="bold">{product.price1}</Typography>
                                            <Typography variant="p" fontWeight="bold">{product.quantity1}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" fontWeight="bold">{product.price2}</Typography>
                                            <Typography variant="p" fontWeight="bold">{product.quantity2}</Typography>
                                        </Box>
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <Box display="flex" flexDirection="column" alignItems="center" p={2} position="relative">
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            zIndex: 1000,
                            color: 'white',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected Product"
                            style={{ maxWidth: "150vw", maxHeight: "100vh", objectFit: "contain" }}
                        />
                    )}
                </Box>
            </Dialog>
        </Box>
    );
}

export default ProductList;
