import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import {
  addDoc,
  getDocs,
  orderBy,
  onSnapshot,
  doc,
  Timestamp,
  query,
  deleteDoc,
} from "firebase/firestore";
import {
  birdsDataCollectionRef,
  toDoCollectionRef,
} from "../../firestore.collections";
import "./ToDo.css";
import { toast, ToastContainer } from "react-toastify";
import { async } from "@firebase/util";
import { InputGroup } from "react-bootstrap";
const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoiId, setTodoId] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  // toaster nofity
  const successNotify = () => {
    toast("Todo Added Successfully...!!");
  };
  const erorrEmptyNotify = () => {
    toast("Please Complete All Fields...!!");
  };
  const errorNofity = () => {
    toast(`Erorr Occured at ${error}`);
  };

  // getting todo from firestore

  // function fetching data from firebase

  useEffect(() => {
    const q = query(toDoCollectionRef, orderBy("created", "desc"));

    onSnapshot(q, (querysnapShot) => {
      const data = querysnapShot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setFetchedData(data);
    });
  }, []);
  // handle todo add
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(todo);
    console.log(check);

    try {
      if (todo === "") {
        erorrEmptyNotify();
      } else {
        await addDoc(toDoCollectionRef, {
          todo: todo,
          created: Timestamp.now(),
        });
        successNotify();
        setTodo("");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // handle todo delete
  const handleDelete = (id) => {
    const taskDocRef = doc(toDoCollectionRef, id);

    try {
      deleteDoc(taskDocRef);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="text-center">To Do Tasks </h5>
        <div
          className="overflow-auto me-2 bg-white "
          style={{ maxWidth: " 100%", maxHeight: "200px", minHeight: "200px" }}
        >
          <table
            className="table"
            data-bs-spy="scroll"
            tabIndex="0"
            data-bs-target="#todo"
          >
            <tbody className="" id="todo">
              {fetchedData.map((fetchdata) => (
                <tr key={fetchdata.id}>
                  <td>
                    <input
                      className="form-check-input todo-btn2"
                      type="checkbox"
                      value={check}
                    />
                  </td>
                  <td
                    className={
                      !check && fetchdata.id === todoiId
                        ? "text-decoration-line-through"
                        : ""
                    }
                  >
                    {fetchdata.data.todo}
                  </td>
                  <td>
                    {" "}
                    <span
                      className="badge bg-danger todo-btn3 ms-2 float-end pe-auto"
                      onClick={() => handleDelete(fetchdata.id)}
                    >
                      <AiOutlineDelete className="lead pe-auto " />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer d-flex bg-white border-0">
          <input
            className="form-control rounded border-black"
            placeholder="Add To Do"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button className="todo-btn1 mx-2" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ToDo;

{
  /* <div className="card">
<div className="card-body">
  <h4 className="card-title">To Do Lists</h4>
  <div className="list-wrapper pt-2">
    <ul className="list-group" data-bs-spy="scroll" role="tablist">
      <li className="list-group-item d-flex justify-content-between">
        <input
          className="mt-2 form-check-input todo-btn2"
          type="checkbox"
          value={check}
          onClick={checkToggler}
        />
        <p className="pt-2">todo</p>

        <button
          className="btn badge text-danger todo-btn3 ms-2 float-end "
          // onClick={() => handleDelete(fetchdata.id)}
        >
          <AiOutlineDelete className="lead " />
        </button>
      </li>
      <li className="list-group-item">A second item</li>
    </ul>
  </div>
  <div className="add-items d-flex mb-0 mt-2">
    <input
      type="text"
      className="form-control todo-list-input"
      placeholder="Add new task"
    />
    <button className="add btn btn-icon text-primary todo-list-add-btn bg-transparent">
      <i className="icon-circle-plus"></i>
    </button>
  </div>
</div>
</div> */
}
