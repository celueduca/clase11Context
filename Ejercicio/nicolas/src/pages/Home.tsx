
import Content from "../components/Content";
import ListPost from "../components/ListPost";
import Status from "../components/Status";
import Layout from "../layout/index";

const Home = () => {
    return (
      <Layout>
        <div className="Main-Container">
          <div className="Main-Container--grid">
            <div>
              <Status />
              <ListPost />
            </div>
            <div>
              <Content />
            </div>
          </div>
        </div>
      </Layout>
    );
  };
  export default Home;