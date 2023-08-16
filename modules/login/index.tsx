import type { NextPage } from "next";
import styles from "./modules/index.module.css";
import { Image } from "react-bootstrap";

const Login: NextPage = () => {
  return (
    <div className={styles.signUpPage}>
      <div className={styles.dObjects}>
        <div className={styles.dObjectsChild} />
        <div
          className={styles.find3dObjects}
        >{`Find 3D Objects , Mockups and illustration here `}</div>
        <Image className={styles.vectorIcon} alt="" src="/vector.svg" />
        <Image
          className={styles.abstractionIcon}
          alt=""
          src="/abstraction@2x.png"
        />
        <Image
          className={styles.abstractionIcon1}
          alt=""
          src="/abstraction1@2x.png"
        />
        <Image
          className={styles.abstractionIcon2}
          alt=""
          src="/abstraction2@2x.png"
        />
      </div>
      <div className={styles.language}>
        <div className={styles.englishUk}>{`English ( UK ) `}</div>
        <Image className={styles.languageChild} alt="" src="/polygon-1.svg" />
      </div>
      <div className={styles.loginDetails}>
        <div className={styles.or}>-OR-</div>
        <div className={styles.fullName}>{`Full Name `}</div>
        <div className={styles.eMailAddress}>{`E-mail Address `}</div>
        <Image className={styles.loginDetailsChild} alt="" src="/line-1.svg" />
        <Image className={styles.loginDetailsItem} alt="" src="/line-1.svg" />
        <Image className={styles.loginDetailsInner} alt="" src="/line-1.svg" />
        <div className={styles.frame}>
          <div className={styles.password}>{`Password `}</div>
          <Image className={styles.blind1Icon} alt="" src="/blind-1.svg" />
        </div>
      </div>
      <div className={styles.createAccount}>
        <b className={styles.createAccount1}>{`Create Account `}</b>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <Image
              className={styles.googleLogoIconPng}
              alt=""
              src="/googlelogoiconpngtransparentbackgroundosteopathy16-1@2x.png"
            />
            <div className={styles.signUpWith}>Sign up with Google</div>
          </div>
          <div className={styles.frame3}>
            <Image
              className={styles.facebook5121Icon}
              alt=""
              src="/facebook512-1@2x.png"
            />
            <div className={styles.signUpWith}>Sign up with Facebook</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.frame4}>
          <b className={styles.signUpWith}>Create Account</b>
        </div>
        <div className={styles.alreadyHaveAnContainer}>
          <span>Already have an account ?</span>
          <b className={styles.logIn}>
            <span className={styles.span}>{` `}</span>
            <span>Log in</span>
          </b>
          <span className={styles.span1}>{` `}</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
