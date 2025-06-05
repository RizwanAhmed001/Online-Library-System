import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      <div className="error">
        <h1>Please Check Your Path and use Correct Path!</h1>
        <button>
          <Link className="errorLink" to="/">
            Go To Home
          </Link>
        </button>
      </div>
    </>
  );
}
export default Error;
