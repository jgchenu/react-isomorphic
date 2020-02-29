import React from "react";
import { useSelector } from "react-redux";
import Helmet from "react-helmet";

import styles from "./style.less";
function Home() {
  const user = useSelector(state => state.user);
  return (
    <>
      <Helmet>
        <title>这是一个SSR架子，仅供学习参考</title>
        <meta name="description" content="当前是Home页面" />
      </Helmet>
      <div className={styles.home}>
        <p>this is react home page</p>
        <p>my name is {user.name}</p>
        <p>my std number is {user.number}</p>

        <button
          onClick={() => {
            console.log("click!!!!!");
          }}
        >
          click
        </button>
      </div>
    </>
  );
}

export default Home;
