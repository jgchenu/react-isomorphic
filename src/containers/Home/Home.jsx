import React from "react";
import { useSelector } from "react-redux";
import styles from "./style.less";
function Home() {
  const state = useSelector(state => state);
  return (
    <div className={styles.home}>
      <p>this is react home page</p>
      <p>my name is {state.name}</p>
      <button
        onClick={() => {
          console.log("click!!!!!");
        }}
      >
        click
      </button>
    </div>
  );
}

export default Home;
