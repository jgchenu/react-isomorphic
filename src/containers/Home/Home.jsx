import React from "react";
import { useSelector } from "react-redux";
import styles from "./style.less";
function Home() {
  const user = useSelector(state => state.user);
  return (
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
  );
}

export default Home;
