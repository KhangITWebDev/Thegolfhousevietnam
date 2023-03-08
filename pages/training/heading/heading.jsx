import React, { useState } from "react";
import SignUpTrial from "../../../components/Modal/SignUpTrial";
import styles from "../Course.module.scss";

function Heading({ contents }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const sectionTitlePage = contents.filter(
    (item) => item.category === "63bc373939d2a23b06d898a2"
  );
  return (
    <div className="container">
      <div className={"heading" + " " + styles.header} data-aos="fade-down">
        <span>{sectionTitlePage[0]?.sub_title}</span>
        <h2 className={styles.title_page}>{sectionTitlePage[0]?.title}</h2>
        <div className="button">
          <button onClick={() => setOpen(true)}>
            {sectionTitlePage[0]?.text_button}
          </button>
        </div>
      </div>
      {open && <SignUpTrial open={open} handleClose={handleClose} />}
    </div>
  );
}

export default Heading;
