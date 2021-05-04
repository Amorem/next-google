import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>GoogleNext</title>
        <meta name="description" content="Google-like built with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
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
      {/* Body */}
      <form className="flex flex-col items-center flex-grow mt-44">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-200 rounded-full hover:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="flex-grow focus-within:outline-none"
          ></input>
          <MicrophoneIcon className="h-5" />
        </div>
      </form>
    </div>
  );
}
