import { getAllContacts, addContact, deleteContact } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getAllContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [getAllContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [getAllContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [deleteContact.fulfilled](state, { payload: { id } }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { addFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
