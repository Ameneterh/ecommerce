import { Button } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditUser from "../EditUser";

export default function UserProfilePage() {
  const { user } = useSelector((state) => state.users);
  const [showEditUser, setShowEditUser] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto px-2">
      <div className="flex justify-end">
        <Button
          type="default"
          onClick={() => {
            setShowEditUser(true);
          }}
        >
          Update User
        </Button>
      </div>

      {/* display user details */}
      <div className="flex items-start justify-between mt-8 border-t border-t-gray-400">
        <img
          src={user.avatar}
          alt={user.fullname}
          className="w-56 h-56 rounded-full"
        />
        <div className="flex-1 flex flex-col gap-3">
          <div className="grid grid-cols-[1.5fr_2fr]">
            <p>User Full Name:</p>
            <p className="px-2 py-1 rounded bg-gray-100 font-semibold">
              {user.fullname}
            </p>
          </div>
          <div className="grid grid-cols-[1.5fr_2fr]">
            <p>User Email:</p>
            <p className="px-2 py-1 rounded bg-gray-100 font-semibold">
              {user.email}
            </p>
          </div>
          <div className="grid grid-cols-[1.5fr_2fr]">
            <p>User Phone Number:</p>
            <p className="px-2 py-1 rounded bg-gray-100 font-semibold">
              {user.phone}
            </p>
          </div>
          <div className="grid grid-cols-[1.5fr_2fr]">
            <p>User Role:</p>
            <p className="px-2 py-1 rounded bg-gray-100 font-semibold uppercase">
              {user.role}
            </p>
          </div>
          <div className="grid grid-cols-[1.5fr_2fr]">
            <p>User Status:</p>
            <p className="px-2 py-1 rounded bg-gray-100 font-semibold uppercase">
              {user.status}
            </p>
          </div>
          <div className="grid grid-cols-[1.5fr_2fr]">
            <p>Date Registered:</p>
            <p className="px-2 py-1 rounded bg-gray-100 font-semibold">
              {moment(user.createdAt).format("MMM D, YYYY - hh:mm:ss A")}
            </p>
          </div>
          <div className="grid grid-cols-[1.5fr_2fr]">
            <p>Last Updated On:</p>
            <p className="px-2 py-1 rounded bg-gray-100 font-semibold">
              {moment(user.updatedAt).format("MMM D, YYYY - hh:mm:ss A")}
            </p>
          </div>
        </div>
      </div>

      {showEditUser && (
        <EditUser
          showEditUser={showEditUser}
          setShowEditUser={setShowEditUser}
          selectedUser={user}
        />
      )}
    </div>
  );
}
