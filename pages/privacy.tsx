import type { NextPage } from "next";
import Layout from "../components/Layout";

const Privacy: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className="container mx-auto py-3">
          <h1 className="text-3xl">プライバシーポリシー</h1>
          <h2 className="text-2xl mt-3">広告について</h2>
          <p className="mt-3">
            本サービスでは、第三者配信の広告サービス（AdMob）を利用しています。この広告事業者は、広告表示のためにお客様の情報の一部を送信する場合があります。
          </p>
          <p>Google 広告に関するポリシー</p>
          <a href="https://policies.google.com/technologies/ads?hl=ja">
            https://policies.google.com/technologies/ads?hl=ja
          </a>
        </div>
      </Layout>
    </div>
  );
};

export default Privacy;
