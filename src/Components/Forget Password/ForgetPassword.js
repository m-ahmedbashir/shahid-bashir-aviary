import React, { useState } from "react";
import "./ForgetPassword.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
const ForgetPassword = () => {
  // toaster nofity
  const successNotify = () => {
    toast("Reset Link Send Successfully...!!");
  };
  const erorrEmptyNotify = () => {
    toast("Please Complete All Fields...!!");
  };
  const errorNofity = () => {
    toast("Some Error Occured...!!");
  };

  // hooks

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { resetPassword } = useUserAuth();
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === "") {
        setError("Email Required");
        erorrEmptyNotify();
      } else if (email !== "") {
        resetPassword(email);
        successNotify();
        setSuccess("Check Your Mail Box");
        setError("");
      }
    } catch (error) {
      setError(error.message);
      errorNofity();
    }
  };
  return (
    <div class="container-scroller mt-5">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto ">
              <div class="auth-form-light  text-left py-5 px-4 px-sm-5 card shadow">
                <h3 className="text-center">Forget Password?</h3>
                <form class="pt-3">
                  <div class="form-group">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && (
                      <div className="alert alert-success">{success}</div>
                    )}
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

                  <div class="mt-3">
                    <button class="btn4" onClick={hanldeSubmit}>
                      Rest Password
                    </button>
                  </div>

                  <div class="text-center mt-4 font-weight-light">
                    Remembered Your Password?{" "}
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

export default ForgetPassword;
