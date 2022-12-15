import Image from "next/image";
import React from "react";
import styles from "./SignIn.module.scss";

function SignIn(props) {
  return (
    <div className={styles.sign_up_page}>
      <div className="heading">
        <h2>Sign In</h2>
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
            <input type="text" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <div className={styles.list_checkBox}>
              <div className={styles.item}>
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </div>
            </div>
            <div
              className={styles.button + " " + "d-flex justify-content-center"}
            >
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
