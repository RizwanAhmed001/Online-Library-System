# 📚 Online Library System

An interactive React + Redux application to browse, add, and view books in an online library. Built with Vite, React Router v6, and Redux Toolkit, it features dynamic routing, live search, global state management, and graceful error handling.

---

## 🚀 Features

- **Home Page** — Welcome page showing book categories and popular books.
- **Browse Books** — View all books with live search by title or author.
- **Book Details** — View detailed information about each book.
- **Add Book** — Add a new book through a form with validation.
- **Error Page** — Displayed for invalid URLs with navigation back home.
- **Navigation Header** — Persistent links for easy app navigation.

---

## 🧩 Component Overview

- **`App.jsx`** — Main layout with header and route outlet.
- **`main.jsx`** — Sets up React Router and Redux Provider.
- **`Header.jsx`** — Navigation links to Home, Browse Books, and Add Book.
- **`HomePage.jsx`** — Shows categories and popular books.
- **`Books.jsx`** — Displays book cards on home and browse pages.
- **`BrowseBooks.jsx`** — Lists books with a search input for filtering.
- **`BooksDetails.jsx`** — Shows detailed book info based on route params.
- **`AddBook.jsx`** — Controlled form to add new books with validation.
- **`Error.jsx`** — Shown on invalid paths with a button to return home.

---

## 🌐 Routes

| Route                   | Component       | Description                  |
|-------------------------|-----------------|------------------------------|
| `/`                     | HomePage        | Welcome & popular books       |
| `/browseBooks`          | BrowseBooks     | List all books with search    |
| `/browseBooks/book/:name` | BooksDetails  | Book detail from browse page  |
| `/book/:name`           | BooksDetails    | Book detail from home page    |
| `/addBook`              | AddBook         | Form to add new books         |
| `*`                     | Error           | Fallback for invalid routes   |

---

## 🗃️ Redux State Management

- **Slice:** `booksSlice`  
- **Initial State:** Books loaded from `../data/books.js`.  
- **Reducers:**  
  - `addBook`: Adds a new book to the store.  

Example slice snippet:

```js
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
Store configured with:

js
Copy
Edit
const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
Store is passed to the app using <Provider> in main.jsx.

🛠️ Installation & Setup
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/online-library.git
cd online-library
Install dependencies:

bash
Copy
Edit
npm install
Run the dev server:

bash
Copy
Edit
npm run dev
Open the app at http://localhost:5173 (or as indicated in your terminal).

📁 Project Structure
css
Copy
Edit
src/
├── App.jsx
├── main.jsx
├── index.css
├── App.css
├── store/
│   ├── store.js
│   └── booksSlice.js
├── data/
│   └── books.js          # Initial book data
└── components/
    ├── Header.jsx
    ├── HomePage.jsx
    ├── BrowseBooks.jsx
    ├── Books.jsx
    ├── BooksDetails.jsx
    ├── AddBooks.jsx
    └── Error.jsx
📚 Usage
Navigate through the app using the header links.

Use the Browse Books page to search books by title or author.

Click on a book’s View Details link to see more information.

Use the Add Book page to add new entries to the library.

If you navigate to a non-existent page, you’ll be redirected to an error page with a link back home.

🧰 Technologies Used
React 18

React Router v6

Redux Toolkit

Vite

CSS Modules / Custom CSS