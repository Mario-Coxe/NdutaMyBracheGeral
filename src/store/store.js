import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import AuthReducer from '../features/authentication/slices/authSlice';
import UserReducer from '../features/user/slices/userSlice';

import {userApi} from '../features/user/services/userService';

import {locationApi} from '../features/location/services/localizacoesService';
import locationReducer from '../features/location/slices/localizacoesSlice';

import {servicosApi} from '../features/servico/services/servicoService';
import servicoReducer from '../features/servico/slices/servicoSlice';

import {veiculoApi} from '../features/veiculo/services/veiculoService';
import veiculoReducer from '../features/veiculo/slices/veiculoSlice';

//import {tokenMiddleware} from './middlewares/middleware';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
    location: locationReducer,
    servico: servicoReducer,
    veiculo: veiculoReducer,

    [userApi.reducerPath]: userApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [servicosApi.reducerPath]: servicosApi.reducer,
    [veiculoApi.reducerPath]: veiculoApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      /* serializableCheck: {
        ignoredPaths: ['auth'],
      }, */
    }).concat(
      userApi.middleware,
      locationApi.middleware,
      servicosApi.middleware,
      veiculoApi.middleware,
    ),
});

setupListeners(store.dispatch);
export default store;

/* That one call to configureStore did all the work for us:

It combined todosReducer and filtersReducer into the root reducer function, which will handle a root state that looks like {todos, filters}
It created a Redux store using that root reducer
It automatically added the thunk middleware
It automatically added more middleware to check for common mistakes like accidentally mutating the state
It automatically set up the Redux DevTools Extension connection

*/
