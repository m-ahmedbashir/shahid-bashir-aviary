import React, { useState } from "react";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import { SignUpUserCollectionRef } from "../../firestore.collections";
import { addDoc, Timestamp } from "firebase/firestore";
const SignUp = () => {
  // useState Hooks
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [reTpyePassword, setReTypePassword] = useState("");
  let navigation = useNavigate();

  // consuming the useContext
  const { signUp } = useUserAuth();

  // toaster nofity
  const successNotify = () => {
    toast("Sign Up Successfully...!!");
  };
  const erorrEmptyNotify = () => {
    toast("Please Complete All Fields...!!");
  };
  const errorNofity = () => {
    toast("Some Error Occured...!!");
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password === "") {
        setError("Password Field Required");
        erorrEmptyNotify();
      } else if (reTpyePassword === "") {
        setError("Please Re-Type Your Password");
        erorrEmptyNotify();
      } else if (username === "") {
        setError("Username required");
        erorrEmptyNotify();
      } else if (email === "") {
        setError("Email Required");
        erorrEmptyNotify();
      } else if (
        password === reTpyePassword &&
        email !== "" &&
        username !== ""
      ) {
        await signUp(email, password);
        await addDoc(SignUpUserCollectionRef, {
          username: username,
          email: email,
          created: Timestamp.now(),
        });
        successNotify();
        setError("");
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        errorNofity();
        setError("Email already in use");
      }
    }
    console.log(username, email, password, reTpyePassword);
  };
  return (
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto ">
              <div class="auth-form-light  text-left py-5 px-4 px-sm-5 card shadow">
                <h3 className="text-center">Sign Up</h3>
                <h4>New here?</h4>
                <h6 class="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                <form class="pt-3">
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form-group mt-3">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Re-Type Password"
                      value={reTpyePassword}
                      onChange={(e) => {
                        setReTypePassword(e.target.value);
                      }}
                    />
                  </div>

                  {/* <div class="mb-4">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" />I
                        agree to all Terms & Conditions
                      </label>
                    </div>
                  </div> */}
                  <div class="mt-3">
                    <button class="btn4" onClick={hanldeSubmit}>
                      SIGN UP
                    </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Already have an account?{" "}
                    <Link to="/login">
                      <a class="text-primary">Login</a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
