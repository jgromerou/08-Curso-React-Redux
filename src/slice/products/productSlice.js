import { createSlice } from '@reduxjs/toolkit';

const initialProductState = {
  isLoading: false,
  data: [],
};

export const productSlice = createSlice({
  name: 'products', //nombre del reducer
  initialState: initialProductState, //los datos iniciales
  reducers: {
    //son las acciones

    isLoadingProduct: (state) => {
      state.isLoading = true;
    },

    setProducts: (state, action) => {
      state.isLoading = action.payload.isLoading;
      state.data = action.payload.data;
    },

    // createProduct: (state) => {
    //   //Lógica de los cambios de estados para el crear nuevo producto
    // },

    // deleteProduct: (state) => {
    //   //Lógica de los cambios de estados para el eliminar producto
    // },
  },
});

export const { isLoadingProduct, setProducts } = productSlice.actions;
