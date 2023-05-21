import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const initialState = {
  contacts: null,
  status: 'idle',
  error: null,
};

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    return res.data.map(contact => {
      return {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      };
    });
  }
);

export const submitNewContact = createAsyncThunk(
  'contacts/submitNewContact',
  async contact => {
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      contact
    );

    return {
      ...res.data,
      // Solves the problem of jsonplaceholder always returning 11 as new id
      id: uuid(),
    };
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    return id;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        /**
         * [Immer - German for always](https://immerjs.github.io/immer) does the
         * immutability heavy lifting for me.
         */
        state.status = 'loading';
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.status = 'successful';
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(submitNewContact.fulfilled, (state, action) => {
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          ),
        };
      });
  },
});

// Contacts selector
export const selectContacts = state => state.contacts.contacts;

export default contactsSlice.reducer;
