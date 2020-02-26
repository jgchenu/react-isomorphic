import loadable from "@loadable/component";
import { setUser } from "./../../redux/actions/user";
const Home = loadable(() => import("./Home.jsx"));
Home.preloadData = async function({ dispatch }) {
  // 这个函数负责在服务端渲染之前拉去数据进行服务端渲染
  dispatch(
    setUser({
      name: "jgchenun",
      number: 1314520
    })
  );
};
export default Home;
