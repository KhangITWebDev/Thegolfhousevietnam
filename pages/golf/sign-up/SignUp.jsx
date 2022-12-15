import Image from "next/image";
import React from "react";
import styles from "./SignUp.module.scss";

function SignUp(props) {
  return (
    <div className={styles.sign_up_page}>
      <div className="heading">
        <h2>Sign Up</h2>
        <div className="line" style={{ width: "100%" }}></div>
      </div>
      <div
        className={
          "m-auto col-8 d-flex justify-content-center" + " " + styles.content
        }
      >
        <div className={"col-6" + " " + styles.image}>
          <Image
            alt="Image"
            src="/images/Academy/SignUp/img.png"
            layout="fill"
          />
        </div>
        <div className={"col-6" + " " + styles.form}>
          <h5>Form</h5>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Email" />
            {/* <div className={styles.list_checkBox}>
              <div className={styles.item}>
                <input type="checkbox" name="" id="" />
                <span>85-87 Nguyen Co Thach, An Loi Đong, Q.2, TPHCM</span>
              </div>
              <div className={styles.item}>
                <input type="checkbox" name="" id="" />
                <span>Location 1</span>
              </div>
              <div className={styles.item}>
                <input type="checkbox" name="" id="" />
                <span>Location 2</span>
              </div>
            </div> */}
            <div
              className={styles.button + " " + "d-flex justify-content-center"}
            >
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
