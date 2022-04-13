import { Link } from "react-router-dom";
import { Header } from "../../components";
import "./home.css";
export function Home() {
  return (
    <>
      <Header />
      <main className="home-main children-center">
        <main className="home-main">
          <div className="home-banner p-rel">
            <img
              // src="https://images.unsplash.com/photo-1526429450415-2b979b89d228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              // src="https://images.unsplash.com/photo-1452423668729-43a98052d3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG5vdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              // src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              src="https://images.unsplash.com/photo-1527656855834-0235e41779fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="home-img"
            />

            <div className="home-welcome p-abs">
              <div className="text-center">
                <div style={{ fontSize: "2.5rem" }}>
                  Welcome to <span className="banner-title">Notebook</span>
                </div>
                <h5>
                  {" "}
                  Write down all your notes and to-dos using this app, all in
                  one place.
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
      </main>
    </>
  );
}
