import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function handleSearch(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search/?term=${term}`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-6 text-gray-700 transition duration-100 transform cursor-pointer hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button className="hidden" type="submit" onClick={handleSearch}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://comidoc.net/assets/contributors/3d5d695d-75b5-4d4a-b276-7772bca9367b.webp"
        />
      </div>
    </header>
  );
}
export default Header;
