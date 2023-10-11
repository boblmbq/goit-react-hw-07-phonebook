const { createSlice, nanoid } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      return state.filter(e => e.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
