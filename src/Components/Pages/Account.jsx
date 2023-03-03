import React from "react";

const Account = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-8 rounded-xl bg-stone-400 grid gap-4">
        <h5 className="text-xl text-center">Account</h5>
        <p>User Email : </p>
          <button type="button" className="w-full bg-rose-400 text-white">
            Logout
          </button>
      </div>
    </div>
  );
};

export default Account;
