import Books from './Books';

function HomePage() {
  return (
    <div className="container">
      <h1 className="homeHeading">Welcome to the Online Library</h1>

      <div className="welcomeCont">
        <h2>Category:</h2>
        <ul>
          <li>Fiction</li>
          <li>Non-Fiction</li>
          <li>Sci-Fi</li>
        </ul>
      </div>

      <div className="booksCont">
        <h2>Popular Books</h2>
        <div className="books">
          <Books />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
