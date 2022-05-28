import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
  const [deleteCount, setDeleteCount] = useState(0);
  const [allOrders, setAllOrders] = useState([]);
  const [statusCount, setStatusCount] = useState(0);

  const [user] = useAuthState(auth);

  const handleDeleteOrder = (id) => {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      axios
        .post("http://localhost:5000/deleteOrder", {
          UserId: id,
        })
        .then((res) => {
          setDeleteCount(deleteCount + 1);
          console.log("Order Deleted");
        });
    }
  };

  const handleUpdateStatus = (e) => {
    e.preventDefault();
    const status = e.target.querySelector("select").value;
    const id = e.target.querySelector("select").id;

    axios
      .post("http://localhost:5000/updateStatus", {
        status: status,
        id: id,
      })
      .then((res) => {
        console.log(statusCount + 1);
        setStatusCount(statusCount + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/manageAllOrders")
      .then((res) => setAllOrders(res.data));
  }, [deleteCount, statusCount, user]);

  return (
    <div className="container">
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">USER EMAIL</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">CURRENT STATUS</th>
              <th scope="col">UPDATE STATUS</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr>
                <th>{order.email}</th>
                <th>{order.bookedSpot.item}</th>
                <td>{order.bookedSpot.price}</td>
                <td>{order.status}</td>

                <td>
                  <form
                    className="d-flex align-items-center me-4"
                    onSubmit={(e) => handleUpdateStatus(e)}
                  >
                    <select
                      defaultValue={order.status}
                      id={order._id}
                      className="border-2 border-gray-100 form-select block w-full p-2"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                    </select>
                    <button type="submit" className="btn btn-warning">
                      <i className="fas fa-check"></i>
                    </button>
                  </form>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="btn btn-danger"
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
  );
};

export default ManageAllOrders;