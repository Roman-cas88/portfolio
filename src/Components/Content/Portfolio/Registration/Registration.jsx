import React from 'react'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { FormRegLog } from './components/FormRegLog';
import { users } from './slices/users'



export const Registration = () => {
    const store = configureStore({
        reducer: {
            users: users.reducer,
        }
    }) 
  return (
    <div className='registration'>
        <Provider store={store}>
            <FormRegLog />
        </Provider>
    </div>
  )
}
