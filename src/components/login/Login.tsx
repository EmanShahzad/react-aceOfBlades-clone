import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";

type LoginProps = {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
};

function Login({ setView }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        setMessage("No user profile found!");
        return;
      }

      const role = docSnap.data().role;
      localStorage.setItem("user", JSON.stringify({ uid: user.uid, role }));

      if (role === "admin") {
        setView("admin");
        setMessage("Welcome Admin!");
        navigate("/adminView");
      } else if (role === "customer") {
        setView("customer");
        setMessage("Welcome Customer!");
        navigate("/");
      } else {
        setMessage("Role not defined!");
      }
    } catch (error: any) {
      // ✅ Handle common Firebase errors
      if (error.code === "auth/user-not-found") {
        setMessage("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setMessage("Wrong password. Try again.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Invalid email format.");
      } else {
        setMessage("Login failed. Please try again.");
      }
      console.error(error);
    } finally {
      setLoading(false);
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

              <button
                type="submit"
                className="btn btn-dark w-100"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
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
