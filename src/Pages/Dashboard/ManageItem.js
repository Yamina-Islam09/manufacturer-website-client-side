import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import useItem from "../../hooks/useItem";
import { toast } from "react-toastify";
const ManageItem = () => {
  const [items, setItems] = useItem();

  const handleDelete = (id) => {
    const url = `https://pacific-stream-39209.herokuapp.com/item/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Delete Successfully");
        }
        const remaining = items.filter((item) => item._id !== id);
        setItems(remaining);
      });
  };

  return (
    <div>
      <h2 className="text-2xl">Manage items: {items.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img src={item.img} alt="" width={30} />
                </td>
                <td>{item.name}</td>

                <td>
                  <label for="my-modal-6" class="btn modal-button btn-xs">
                    Remove Item
                  </label>
                </td>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                  <div class="modal-box">
                    <p class="py-4">Are you sure?</p>
                    <div class="modal-action">
                      <label
                        for="my-modal-6"
                        class="btn btn-xs"
                        onClick={() => handleDelete(item._id)}
                      >
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
