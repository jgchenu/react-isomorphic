import loadable from "@loadable/component";
const Home = loadable(() => import("./Home.jsx"));
Home.preloadData = async function() {
  // 这个函数负责在服务端渲染之前拉去数据进行服务端渲染
  return [
    {
      id: 1,
      name: "jgchen",
      number: 2016130201
    },
    {
      id: 2,
      name: "chenyinjun",
      number: 2016130202
    }
  ];
};
export default Home;
