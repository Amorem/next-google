import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>GoogleNext</title>
        <meta name="description" content="Google-like built with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between w-full p-5 text-sm text-gray-700">
        <div className="flex items-center space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />
          <Avatar url="https://comidoc.net/assets/contributors/3d5d695d-75b5-4d4a-b276-7772bca9367b.webp" />
        </div>
      </header>
    </div>
  );
}
