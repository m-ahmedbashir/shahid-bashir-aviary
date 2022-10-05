import React, { useEffect, useState } from "react";
import "./AddBirdsDetails.css";
import { Link } from "react-router-dom";
import SideNavBar from "../Side navBar/SideNavBar";
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { birdsDataCollectionRef } from "../../firestore.collections";
import { toast, ToastContainer } from "react-toastify";
const UpdateBirdsDetails = () => {
  const [id, setId] = useState("");
  const [ringNo, setRingNo] = useState("");
  const [birdName, setBirdName] = useState("");
  const [details, setDetails] = useState("");
  const [updated, setDate] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  // toaster nofity
  const successNotify = () => {
    toast("Data Saved Successfully...!!");
  };
  const erorrEmptyNotify = () => {
    toast("Please Complete All Fields...!!");
  };
  const errorNofity = () => {
    toast("Some Error Occured...!!");
  };
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setRingNo(localStorage.getItem("ringNo"));
    setBirdName(localStorage.getItem("birdName"));
    setDetails(localStorage.getItem("details"));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ringNo === "") {
      setError("Ring No required");
      erorrEmptyNotify();
    } else if (birdName === "") {
      setError("Bird Name Required");
      erorrEmptyNotify();
    } else if (ringNo === "" && birdName === "") {
      setError("Bird Ring No and Name Required");
      erorrEmptyNotify();
    } else {
      const taskDocRef = doc(birdsDataCollectionRef, id);
      try {
        await updateDoc(taskDocRef, {
          ringNo: ringNo,
          birdName: birdName,
          details: details,
          updatedOn: Timestamp.now(),
        });
        successNotify();
        setError("");
      } catch (error) {
        setError(error.message);
        errorNofity();
      }
    }
  };
  return (
    <div className="">
      <div className="row">
        <div className="col-3 d-none d-lg-block">
          <SideNavBar />
        </div>
        <div className="col-lg-6 col-12">
          <div className="row">
            <div className="col-lg-8 col-9 mx-auto">
              <div className="card shadow">
                <div className="card-body">
                  <h4 className="card-title text-center">
                    Add Bird Image In Gallery
                  </h4>
                  <p className="card-description">Add Bird Details</p>
                  <form className="forms-sample">
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="form-group ">
                      <label for="exampleInputName1" className="mb-1">
                        Ring No:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ringNo"
                        placeholder="Ring No"
                        value={ringNo}
                        onChange={(e) => {
                          setRingNo(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group mt-2">
                      <label for="exampleInputName1" className="mb-1">
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        placeholder="Name"
                        value={birdName}
                        onChange={(e) => {
                          setBirdName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleTextarea1" className="my-1">
                        Details:
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleTextarea1"
                        rows="3"
                        placeholder="Enter Details"
                        value={details}
                        onChange={(e) => {
                          setDetails(e.target.value);
                        }}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label for="exampleSelectFile" className="my-2">
                        Choose File
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        value={image}
                        onChange={(e) => {
                          setImage(e.target.value);
                        }}
                      />
                    </div>

                    <div className="mt-3 text-center">
                      <button
                        type="submit"
                        className=" mr-2 boxed-btn4 "
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                      <Link to="/dashboard">
                        <button className="boxed-btn1 mx-3  mt-3 ">Back</button>
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

// render(<Example />);

export default UpdateBirdsDetails;
