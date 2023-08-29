import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import { TableGrid } from '../components/tables/TableGrid';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

export const ProductPage = () => {
  const { name } = useSelector((state) => state.products);
  console.log(name);
  const data = useSelector((state) => state.auth);
  console.log(data);

  return (
    <Grid container spacing={2}>
      <Grid item mb={5}>
        <Link to={'/product/add'}>
          <Button
            variant="contained"
            startIcon={<ProductionQuantityLimitsIcon />}
          >
            Nuevo Producto
          </Button>
        </Link>
      </Grid>
      <TableGrid />
    </Grid>
  );
};
