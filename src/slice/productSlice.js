import { createSlice } from '@reduxjs/toolkit';

const initialProductState = {
  id: 1,
  name: 'Nike Air',
};

export const productSlice = createSlice({
  name: 'products', //nombre del reducer
  initialState: initialProductState, //los datos iniciales
  reducers: {
    //son las acciones
    createProduct: (state) => {
      //Lógica de los cambios de estados para el crear nuevo producto
    },

    deleteProduct: (state) => {
      //Lógica de los cambios de estados para el eliminar producto
    },
  },
});

export const { createProduct, deleteProduct } = productSlice.actions;
