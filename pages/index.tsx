import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className="mx-auto text-center">
          <img
            src={`/${process.env.NEXT_PUBLIC_APP_NAME_EN}/img/screenshot.png`}
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold m-3">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
          <div>
            <a href={process.env.NEXT_PUBLIC_PLAY_STORE_LINK}>
              <img
                src="/img/playstore.png"
                className="mx-auto my-3 bg-black rounded p-3"
              />
            </a>
            <a href={process.env.NEXT_PUBLIC_APP_STORE_LINK}>
              <img
                src="/img/appstore.png"
                className="mx-auto my-3 bg-black rounded p-3"
              />
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
