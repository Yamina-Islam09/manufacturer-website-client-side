import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const ManageAllOrders = () => {
  const [deleteCount, setDeleteCount] = useState(0);
  const [allOrders, setAllOrders] = useState([]);
  const [statusCount, setStatusCount] = useState(0);

  const [user] = useAuthState(auth);

  const handleDeleteOrder = (id) => {
    
      axios
        .post("https://pacific-stream-39209.herokuapp.com/deleteOrder", {
          UserId: id,
        })
        .then((res) => {
          setDeleteCount(deleteCount + 1);
          console.log("Order Deleted");
        });
    
  };

  const handleUpdateStatus = (e) => {
    e.preventDefault();
    const status = e.target.querySelector("select").value;
    const id = e.target.querySelector("select").id;

    axios
      .post("https://pacific-stream-39209.herokuapp.com/updateStatus", {
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
    fetch("https://pacific-stream-39209.herokuapp.com/manageAllOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [deleteCount, statusCount, user]);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Price</th>
              <th>CurrentStatus</th>
              
              <th>UpdateStatus</th>
              <th>Check</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <th>{order.email}</th>
                <th>{order.item}</th>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>
                <form
                    className="flex items-center me-4"
                    onSubmit={(e) => handleUpdateStatus(e)}
                  >
                    <select
                      defaultValue={order.status}
                      id={order._id}
                      class="select input-bordered w-full max-w-xs"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                    </select>
                    <button type="submit" className="btn bt-xs btn-warning">
                      <i className="fas fa-check"></i>
                    </button>
                  </form> 
                </td>
                <td>
                {order.price && !order.paid && (
    <Link to={`/dashboard/payment/${order._id}`}   >
      
      <label for="my-modal-6" class="btn modal-button btn-xs">
                    Delete
                  </label>
      
    </Link>
  )}
  {order.price && order.paid && (
    <div>
      <button className="btn btn-xs btn-warning" disabled>Delete</button>
    </div>
  )}
                
                  
                  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                  <div class="modal-box">
                    <p class="py-4">Are you sure?</p>
                    <div class="modal-action">
                      <label
                        for="my-modal-6"
                        class="btn btn-xs"
                        onClick={() => handleDeleteOrder(order._id)}
                      >
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
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

// {order.price && !order.paid && (
//     <Link to={`/dashboard/payment/${order._id}`} onClick={() => handleDeleteOrder(order._id)}  className="btn btn-xs btn-success">
      
//         Delete
      
//     </Link>
//   )}
//   {order.price && order.paid && (
//     <div>
//       <button className="btn btn-xs btn-warning" disabled>Delete</button>
//     </div>
//   )}


 