import Head from "next/head";
import styles from "../styles/Home.module.css";
import Content from "../components/Content";
import CreatePost from "../components/CreatePost";
import Search from "../components/Search";
import AllUser from "../components/AllUser";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chit-Chat</title>
        <meta
          name="description"
          content="Get connect to your friend with chit-chat"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="col-span-2">
          <CreatePost />
          <Content />
        </div>
        <div className="hidden lg:block">
          <Search />
          <div className="my-2">
            <AllUser />
          </div>
        </div>
      </div>
    </>
  );
}
