import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";

const Login = () => {
  // useState Hooks

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigation = useNavigate();
  // toaster nofity
  const successNotify = () => {
    toast("Login Successfully...!!");
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
      if (email !== "503796a@gmail.com") {
        setError("Please Enter Specified Email");
        errorNofity();
      } else if (
        password !== "" &&
        email !== "" &&
        email === "503796a@gmail.com"
      ) {
        await logIn(email, password);
        setError("");
        successNotify();
        navigation("/dashboard");
      } else if (password === "" && email === "") {
        setError("Email and Password Required");
        errorNofity();
      } else if (password === "") {
        setError("Password Required");
        erorrEmptyNotify();
      } else if (email === "") {
        setError("Email Required");
        erorrEmptyNotify();
      }
    } catch (error) {
      setError(error.message);
      errorNofity();
    }
  };
  return (
    <div>
      <div className="container-scroller mt-5">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto card shadow">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <h2 className="text-center">Login</h2>

                  <form className="pt-3">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group mt-3 pt-1">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-3">
                      <button className="btn4 " onClick={hanldeSubmit}>
                        SIGN IN
                      </button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check"></div>
                      <Link to="/forgetPassword">
                        <a className="forget-link">Forgot password?</a>
                      </Link>
                    </div>
                    {/* <div className="mb-2">
                      <button
                        type="button"
                        className="btn btn-block btn-facebook auth-form-btn"
                      >
                        <i className="ti-facebook mr-2"></i>Connect using
                        facebook
                      </button>
                    </div> */}
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <Link to="/signup">
                        <a className="text-danger">Create</a>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
