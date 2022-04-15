import { Link } from "react-router-dom";
import { Header } from "../../components";
import "./home.css";
export function Home() {
  return (
    <>
      <main className="home-main">
        <div className="home-banner p-rel">
          <img
            src="https://images.unsplash.com/photo-1518665750801-883c188a660d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="home-img"
            alt="banner"
          />

          <div className="home-welcome p-abs">
            <div className="text-center">
              <span className="home-welcome-msg">
                Welcome to
                <span className="home-title"> Slate</span>
              </span>
              <h5>
                Chalk out your daily tasks and workflow in a new way & boost
                your efficiency effortlessly.
              </h5>
              <div>
                <Link to="/notes" className="btn btn-primary">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
