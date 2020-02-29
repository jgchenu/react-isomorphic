import React from "react";
import styles from "./style.less";
import PropTypes from "prop-types";

NotFound.propTypes = {
  staticContext: PropTypes.object
};

function NotFound(props) {
  if (props.staticContext) {
    props.staticContext.status = 404;
  }
  return <div className={styles["not-found"]}>Not Found 404</div>;
}

export default NotFound;
