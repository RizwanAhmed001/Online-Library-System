import { createSlice } from '@reduxjs/toolkit';
import BookCont from '../data/books.js';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: BookCont,
  },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;