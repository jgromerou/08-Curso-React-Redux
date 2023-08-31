import { isLoadingProduct, setProducts } from './productSlice';

export const getProducts = () => {
  return async (dispatch, getState) => {
    //console.log(getState().auth.name); //me permite buscar otras variables del store.
    dispatch(isLoadingProduct());
    const resp = await fetch(`https://fakestoreapi.com/products`);
    const data = await resp.json();
    dispatch(setProducts({ isLoading: false, data }));
  };
};
