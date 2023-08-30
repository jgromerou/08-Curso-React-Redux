import { useEffect } from 'react';
import { Button, Container, Grid } from '@mui/material';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import { TableGrid } from '../components/tables/TableGrid';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { isLoadingProduct, setProducts } from '../slice/productSlice';
import { dataProducts } from '../data/dataProducts';

export const ProductPage = () => {
  const { data } = useSelector((state) => state.products);
  // const data = useSelector((state) => state.auth);
  // console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts({ data: dataProducts }));
  }, []);

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
      <TableGrid dataRows={data} />
    </Grid>
  );
};
