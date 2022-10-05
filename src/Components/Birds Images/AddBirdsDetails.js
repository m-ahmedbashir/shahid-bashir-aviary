import React, { useEffect, useState } from "react";
import "./AddBirdsDetails.css";
import { Link } from "react-router-dom";
import SideNavBar from "../Side navBar/SideNavBar";
import { birdsDataCollectionRef } from "../../firestore.collections";
import { addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import { registerVersion } from "firebase/app";

const AddBirdsDetails = () => {
  const [ringNo, setRingNo] = useState("");
  const [birdName, setBirdName] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState();
  let progress;

  useEffect(() => {
    setUploadProgress(progress);
  }, [progress]);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ringNo, birdName, details, file);
    try {
      if (ringNo !== "" && birdName !== "" && uploadProgress === 100) {
      }
      if (ringNo === "") {
        setError("Ring no required");
        erorrEmptyNotify();
      } else if (birdName === "") {
        setError("Bird name required");
        erorrEmptyNotify();
      } else if (file === "") {
        setError("Image required");
        erorrEmptyNotify();
      } else if (uploadProgress < 100) {
        setError("Please wait for Image to upload");
        errorNofity();
      } else {
        await addDoc(birdsDataCollectionRef, {
          ringNo: ringNo,
          birdName: birdName,
          details: details,
          created: Timestamp.now(),
          // imageUrl: imageUrl,
        });
        setError("");
        successNotify();

        let fileRef = ref(storage, `birdsImage/${birdName}-${ringNo}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        // track progress
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
            console.log(`upload is ${progress} % done`);
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at ", downloadURL);
              setImageUrl(downloadURL);
              console.log("image url", imageUrl);
            });
          }
        );
      }
    } catch (error) {
      console.log(error.message);
    }
    // let file = e.target.files[0];
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
                  <p className="text-danger ">
                    Note: Please double check before uploading an image
                  </p>
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
                        Choose File{" "}
                        <span
                          className="progress"
                          style={{ height: "4px", width: "100%" }}
                        >
                          <span
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${uploadProgress}%` }}
                            // style="width: 25%;"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></span>
                        </span>
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
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

export default AddBirdsDetails;
