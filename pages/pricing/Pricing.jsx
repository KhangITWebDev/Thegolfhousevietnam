import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

function Pricing(props) {
  const router = useRouter();
  return (
    <div className="cotainer py-5">
      <div className="button d-flex justify-content-center">
        <h2 className="text-black text-capitalize">
          We are updating please come back later
        </h2>
      </div>
      <div className="button d-flex justify-content-center">
        <button className="px-5" onClick={() => router.back()}>
          <i
            className="fa-light fa-arrow-left"
            style={{
              marginRight: 10,
            }}
          ></i>
          Back to previous page
        </button>
      </div>
    </div>
  );
}

export default Pricing;
