import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const inputRef = useRef(null);
  function search(event) {
    event.preventDefault();
    const term = inputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
      <form className="flex flex-col items-center flex-grow w-4/5 mt-44">
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
            ref={inputRef}
          ></input>
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col justify-center w-1/2 mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm feeling lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
