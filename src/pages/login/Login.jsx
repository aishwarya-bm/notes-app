import { useState } from "react";
import { Header, Signin, Signup } from "components";

export function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="signup-body">
      <Header showSearchBox={false} />

      <main className="signup-container children-center">
        {isSignUp ? (
          <Signup setIsSignUp={setIsSignUp} />
        ) : (
          <Signin setIsSignUp={setIsSignUp} />
        )}
      </main>
    </div>
  );
}
