import Image from "next/image";
import React from "react";
import styles from "./benefit.module.scss";

function Benefit({ contents }) {
  const sectionIntroduction = contents.filter(
    (item) => item.category === "63bc39c139d2a23b06d8a316"
  );
  return (
    <div className={styles.training} id="training" data-aos="fade-right">
      <div className={styles.list + " " + "d-flex flex-wrap"}>
        <div
          className={
            "col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center" +
            " " +
            styles.item
          }
        >
          <h2>
            Lợi ích học Golf tại <span>The Golf House?</span>
          </h2>
        </div>
        <div
          className={
            "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
            " " +
            styles.item
          }
        >
          <div className={styles.content}>
            <div className={styles.image_container}>
              <Image
                alt="item 1"
                src="/images/Course/bg.png"
                width={142}
                height={136}
                objectFit="cover"
              />
              <div className={styles.image}>
                <Image
                  alt="item 1"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionIntroduction[0]?.images[
                      sectionIntroduction[0]?.images?.length - 1
                    ]?.source
                  }
                  width={66}
                  height={66}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="info d-flex flex-column align-items-center">
              <h5 className="text-center">{sectionIntroduction[0]?.title}</h5>
              <p
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: sectionIntroduction[0]?.content,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div
          className={
            "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
            " " +
            styles.item
          }
        >
          <div className={styles.content}>
            <div className={styles.image_container}>
              <Image
                alt="item 1"
                src="/images/Course/bg.png"
                width={142}
                height={136}
                objectFit="cover"
              />
              <div className={styles.image}>
                <Image
                  alt="item 1"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionIntroduction[1]?.images[
                      sectionIntroduction[1]?.images?.length - 1
                    ]?.source
                  }
                  width={66}
                  height={66}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="info d-flex flex-column align-items-center">
              <h5 className="text-center">{sectionIntroduction[1]?.title}</h5>
              <p
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: sectionIntroduction[1]?.content,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div
          className={
            "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
            " " +
            styles.item
          }
        >
          <div className={styles.content}>
            <div className={styles.image_container}>
              <Image
                alt="item 1"
                src="/images/Course/bg.png"
                width={142}
                height={136}
                objectFit="cover"
              />
              <div className={styles.image}>
                <Image
                  alt="item 1"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionIntroduction[2]?.images[
                      sectionIntroduction[2]?.images?.length - 1
                    ]?.source
                  }
                  width={66}
                  height={66}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="info d-flex flex-column align-items-center">
              <h5 className="text-center">{sectionIntroduction[2]?.title}</h5>
              <p
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: sectionIntroduction[2]?.content,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div
          className={
            "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
            " " +
            styles.item
          }
        >
          <div className={styles.content}>
            <div className={styles.image_container}>
              <Image
                alt="item 1"
                src="/images/Course/bg.png"
                width={142}
                height={136}
                objectFit="cover"
              />
              <div className={styles.image}>
                <Image
                  alt="item 1"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionIntroduction[3]?.images[
                      sectionIntroduction[3]?.images?.length - 1
                    ]?.source
                  }
                  width={66}
                  height={66}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="info d-flex flex-column align-items-center">
              <h5 className="text-center">{sectionIntroduction[3]?.title}</h5>
              <p
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: sectionIntroduction[3]?.content,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div
          className={
            "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
            " " +
            styles.item
          }
        >
          <div className={styles.content}>
            <div className={styles.image_container}>
              <Image
                alt="item 1"
                src="/images/Course/bg.png"
                width={142}
                height={136}
                objectFit="cover"
              />
              <div className={styles.image}>
                <Image
                  alt="item 1"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionIntroduction[4]?.images[
                      sectionIntroduction[4]?.images?.length - 1
                    ]?.source
                  }
                  width={66}
                  height={66}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="info d-flex flex-column align-items-center">
              <h5 className="text-center">{sectionIntroduction[4]?.title}</h5>
              <p
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: sectionIntroduction[4]?.content,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
