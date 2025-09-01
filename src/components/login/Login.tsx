import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";

type LoginProps = {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
};
function Login({ setView, view }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Get role from Firestore
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const role = docSnap.data().role;

      if (role === "admin") {
        setMessage("Welcome Admin!");
        setView("admin");
        console.log(view);
        navigate("/adminView");
      } else if (role === "customer") {
        setMessage("Welcome Customer!");
        setView("customer");
        console.log(view);
        navigate("/home");
      } else {
        setMessage("Role not defined!");
      }
    } else {
      setMessage("No user profile found!");
    }
  };

  return (
    <div className="container m-5">
      <div className="row justify-content-center align-items-center ms-5">
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h3 className="text-center mb-3">Login</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Login
              </button>
            </form>
            {message && (
              <p className="mt-3 text-center text-danger">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
