import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../api/axiosPrivate";
import { toast } from 'react-toastify';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleDelete = id =>{

    const url = `https://pacific-stream-39209.herokuapp.com/booking/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount) {
            toast.success('Delete Successfully')
            
        }
        const remaining = bookings.filter(item => item._id !== id);
        setBookings(remaining);
    })    
    }
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://pacific-stream-39209.herokuapp.com/mybooking?email=${email}`;

      try {
        const { data } = await axiosPrivate.get(url);
        setBookings(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user]);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.name}</td>
                <td>{a.item}</td>
                <td>{a.price}</td>
                <td>
                  {a.price && !a.paid && (
                    <div>
                      <label for="my-modal-6" class="btn modal-button btn-xs">
                    Delete
                  </label>
                      <input
                        type="checkbox"
                        id="my-modal-6"
                        class="modal-toggle"
                      />
                      <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                          <h3 class="font-bold text-lg">
                            Congratulations random Interner user!
                          </h3>
                          <p class="py-4">
                            You've been selected for a chance to get one year of
                            subscription to use Wikipedia for free!
                          </p>
                          <div class="modal-action">
                            <label
                              for="my-modal-6"
                              class="btn"
                              onClick={() => handleDelete(a._id)}
                            >
                              Yay!
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <button className="btn btn-xs btn-warning" disabled>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
                {/* <td><button>Payment</button></td> */}
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
