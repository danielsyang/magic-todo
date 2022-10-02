import Head from "next/head";

import Sidebar from "../components/sidebar";

export default function Index() {
  return (
    <>
      <Head>
        <title>To-do list</title>
      </Head>
      <div className="flex">
        <Sidebar />
      </div>
    </>
  );
}
