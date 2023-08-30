import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  id: 1,
  name: 'Jesus',
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'products',
  initialState: initialAuthState,
  reducers: {
    //son las acciones
    login: (state) => {
      //Lógica de los estados.
    },

    logout: (state) => {},
  },
});

export const { login, logout } = authSlice.actions;
