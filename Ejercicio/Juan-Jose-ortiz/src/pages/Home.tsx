import Carousel from "../components/carousel/Carousel";
import ListPost from "../components/posts/ListPost";
import SidebarNotification from "../components/sidebar/SidebarNotification";
import Layout from "../layout/Index";

const Home = () => {
  return (
    <Layout>
      <div className="Main-Container">
        <div className="Main-Container--grid">
          <div>
            <Carousel />
            <ListPost />
          </div>
          <div>
            <SidebarNotification />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
