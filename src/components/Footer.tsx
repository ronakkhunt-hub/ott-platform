import React from "react";
import { classNames } from "../utils/common";

const Footer: React.FC = () => {
  return (
    <div className="relative bg-[#131720] mt-20 pt-20 --gradient-top">
      <footer className={`${classNames.container} relative z-10`}>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 pb-20">
          <div className="flex flex-col col-start-1 col-end-3 row-start-5 xl:row-start-1 md:col-span-1 lg:col-span-2">
            <div className="text-white text-3xl font-bold uppercase">
              Vue
              <span className="text-sm text-sky-600 font-bold ml-1">TV</span>
            </div>
            <h5 className="text-white mt-4">
              Movies & TV Shows, Online cinema,
              <br /> Movie database HTML Template.
            </h5>
            <ul className="flex gap-5 mt-5">
              <li>
                <img
                  className="w-8 h-8"
                  src="https://imgs.search.brave.com/jgZp2Mw8CFV0-c7Swzb3i0jLRRXfHjBLtwRAWFGAfTE/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I5LzIw/MjNfRmFjZWJvb2tf/aWNvbi5zdmcvNTEy/cHgtMjAyM19GYWNl/Ym9va19pY29uLnN2/Zy5wbmc"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-8 h-8"
                  src="https://imgs.search.brave.com/XsUOP9_i5HjJ_fZkWodCFAKvJIO2hVfwWggfbyu7uYA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NzA0NTkw/M3R3aXR0ZXItbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LnBuZw"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-8 h-8"
                  src="https://imgs.search.brave.com/L6okuc3c98Z3uxIG9fOvUOd80m3NtR-1Nh3tKbEq7s4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzUx/MnB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-8 h-8"
                  src="https://imgs.search.brave.com/Pl_IYYRz75Vc17riYC4PVUjeW1hariL-VcXTnGfrZqU/rs:fit:500:0:0/g:ce/aHR0cDovL3d3dy5l/ZGlnaXRhbGFnZW5j/eS5jb20uYXUvd3At/Y29udGVudC91cGxv/YWRzL1Rpa1Rvay1s/b2dvLWJsYWNrLWNp/cmNsZS1wbmcucG5n"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 lg:col-span-1 text-white">
            <h3 className="text-sm font-bold mb-4">CineFlixTV</h3>
            <ul>
              <li className="mb-2">About us</li>
              <li className="mb-2">My profile</li>
              <li className="mb-2">Pricing plans</li>
              <li className="mb-2">Contacts</li>
            </ul>
          </div>
          <div className="md:col-span-1 lg:col-span-1 text-white">
            <h3 className="text-sm font-bold mb-4">Browse</h3>
            <ul>
              <li className="mb-2">Live TV</li>
              <li className="mb-2">Live News</li>
              <li className="mb-2">Live Sports</li>
              <li className="mb-2">Streaming Library</li>
            </ul>
          </div>
          <div className="md:col-span-1 lg:col-span-1 md:mt-9 text-white">
            <ul>
              <li className="mb-2">TV Shows</li>
              <li className="mb-2">Movies</li>
              <li className="mb-2">Kids</li>
              <li className="mb-2">Collections</li>
            </ul>
          </div>
          <div className="md:col-span-1 lg:col-span-1 text-white">
            <h3 className="text-sm font-bold mb-4">Help</h3>
            <ul>
              <li className="mb-2">Account & Billing</li>
              <li className="mb-2">Plans & Pricing</li>
              <li className="mb-2">Supported devices</li>
              <li className="mb-2">Accessibility</li>
            </ul>
          </div>
        </div>
        <div className={`border-b h-[1px] w-5/5 border-[#2f80ed1a]`}></div>
        <div className="flex gap-3 flex-col-reverse md:flex-row justify-between py-8">
          <h1 className="text-white">
            © CineFlixTV, 2021. Created by Ronak Khunt.
          </h1>
          <ul className="flex gap-4 text-white">
            <li>Privacy policy</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
