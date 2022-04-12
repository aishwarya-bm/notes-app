import { Link } from "react-router-dom";
import "./error.css";

export function Error() {
  return (
    <>
      <section className="text-center not-found">
        <h4>Sorry this page is not found!</h4>
        <div className="d-flex children-center img-not-found">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/404-page-not-found-456876.png"
            alt="error-404"
          />
        </div>
        <Link to="/" className="fa fa-solid btn btn-primary">
          Go back to home
        </Link>
      </section>
    </>
  );
}
