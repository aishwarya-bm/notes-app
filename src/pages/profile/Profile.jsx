import { Header, Sidenav } from "components";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <>
      <Header />
      <Sidenav />
      <section className="text-center not-found">
        <h4>Sorry this page is under construction!</h4>
        <div className="d-flex children-center img-not-found">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-128-thumb/website-builder-3523080-2946947.png"
            alt="page-under-construction"
          />
        </div>
        <Link to="/" className="fa fa-solid btn btn-primary">
          Go back to home
        </Link>
      </section>
    </>
  );
}
