import Image from "next/image";
import React from "react";
import SignUpTrial from "../../../components/Modal/SignUpTrial";
import styles from "./intro.module.scss";
function Intro({ contents }) {
  const contentGolf = contents.filter(
    (item) => item.category === "63bbe8a6e17e4f12eead3ec1"
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="container">
      <div className={styles.membership}>
        <div className="d-flex flex-wrap align-items-center">
          <div
            className={"col-12 col-md-6" + " " + styles.left}
            data-aos="fade-right"
          >
            <div className={styles.image1}>
              <Image
                alt="Image 1"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  contentGolf[0]?.images[contentGolf[0]?.images?.length - 2]
                    ?.source
                }
                width={547}
                height={676}
                objectFit="cover"
              />
            </div>
            <div className={styles.image2}>
              <Image
                alt="Image 2"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  contentGolf[0]?.images[contentGolf[0]?.images?.length - 1]
                    ?.source
                }
                width={300}
                height={361}
                objectFit="cover"
              />
            </div>
          </div>
          <div className={"col-12 col-md-6" + " " + styles.right}>
            <span data-aos="fade-right">{contentGolf[0]?.sub_title}</span>
            <h3 data-aos="fade-right">{contentGolf[0]?.title}</h3>
            <p
              data-aos="fade-right"
              dangerouslySetInnerHTML={{ __html: contentGolf[0]?.content }}
            ></p>
            <div className="button justify-content-start" data-aos="fade-right">
              <button onClick={handleOpen}>
                {contentGolf[0]?.text_button}
              </button>
            </div>
          </div>
          {open && <SignUpTrial open={open} handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}

export default Intro;
