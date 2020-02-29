import React from "react";
import Helmet from "react-helmet";

import styles from "./style.less";

function Login() {
  return (
    <>
      <Helmet>
        <title>这是一个SSR架子，仅供学习参考</title>
        <meta name="description" content="当前是Home页面" />
      </Helmet>
      <div className={styles["login-container"]}>login</div>
    </>
  );
}

export default Login;
