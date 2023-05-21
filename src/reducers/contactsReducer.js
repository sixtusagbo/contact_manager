import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    phone: '555-555-5555',
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'karen@gmail.com',
    phone: '222-222-2222',
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '111-111-1111',
  },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

// Contacts selector
export const selectContacts = state => state.contacts;

export default contactsSlice.reducer;
