import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AddBirdsDetails.css";
import {
  getDoc,
  doc,
  orderBy,
  query,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { birdsDataCollectionRef } from "../../firestore.collections";
import { async } from "@firebase/util";

const ViewBirdsDetails = () => {
  const [birdsData, setBirdsData] = useState([]);
  let serialNumber = 1;
  useEffect(() => {
    const q = query(birdsDataCollectionRef, orderBy("created", "desc"));
    onSnapshot(q, (querySnapShot) => {
      const data = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      // await setBirdsData(data)
      setBirdsData(data);
    });
  }, []);

  const handleDelete = (id) => {
    const taskDocRef = doc(birdsDataCollectionRef, id);
    try {
      deleteDoc(taskDocRef);
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = (data, id) => {
    let { ringNo, birdName, created, details } = data;
    console.log(ringNo, birdName, created, details);
    localStorage.setItem("id", id);
    localStorage.setItem("ringNo", ringNo);
    localStorage.setItem("birdName", birdName);
    localStorage.setItem("created", created);
    localStorage.setItem("details", details);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Birds Details</h4>
          <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr className="bg-danger text-white">
                    <th scope="col">#</th>
                    <th scope="col">Bird Name</th>
                    <th scope="col">Ring No</th>
                    <th scope="col">Details</th>
                    <th scope="col">Date</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {birdsData.map((birdsData) => (
                    <tr key={birdsData.id}>
                      <th scope="row">{serialNumber++}</th>
                      <td>{birdsData.data.birdName}</td>
                      <td>{birdsData.data.ringNo}</td>
                      <td>{birdsData.data.details}</td>
                      <td>{new Date().getDate()}</td>
                      <td>Feature Comming Soon</td>
                      {/* <td>{birdsData.data.imageUrl}</td> */}
                      <td>
                        <Link to="/updateBirdsDetails">
                          <button
                            className=" boxed-btn2 ms-2"
                            onClick={() => {
                              handleUpdate(birdsData.data, birdsData.id);
                            }}
                          >
                            Update
                          </button>
                        </Link>
                        <button
                          className=" boxed-btn-delete ms-2"
                          onClick={() => {
                            handleDelete(birdsData.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBirdsDetails;
