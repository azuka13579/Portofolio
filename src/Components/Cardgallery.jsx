import React from "react";

export default function Cardgallery({ profile }) {
  return (
    <div data-aos="fade-up" data-aos-duration="800">
      <img
        src={profile}
        alt=""
        className="w-[300px] hover:scale-105 hover:-translate-y-2 transition duration-300"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      />
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box h-full max-w-5xl">
          <img src={profile} alt="" />
          <div className="modal-action fixed top-0 right-5">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
