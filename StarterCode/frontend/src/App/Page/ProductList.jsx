import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get('http://localhost:5001/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
    axios.delete(`http://localhost:5001/api/products/${id}`)
      .catch(error => {
        console.error("There was an error deleting the product!", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 5 }}>
        Simple Card List
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.imageUrl}
                alt={product.name}
              />
              <IconButton
                onClick={() => handleDelete(product.id)}
                aria-label="delete"
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  color: 'red',
                }}
              >
                <DeleteIcon />
              </IconButton>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{ fontSize: '1.2rem' }}>
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;