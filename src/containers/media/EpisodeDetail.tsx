import React from "react";

interface Props {
  genres: string[];
  shares: string[];
}

export const EpisodeDetail: React.FC<Props> = ({ genres, shares }) => {
  return (
    <div className="mt-10">
      <div className="text-lg text-white mt-3 mb-3">Genres</div>
      <div className="flex gap-2">
        {genres.map((item) => (
          <a
            href="#"
            className="py-1 px-4 bg-[#151f30ff] text-white rounded-2xl hover:bg-blue-500 transition duration-700"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="text-lg text-white mt-8 mb-3">Share</div>
      <div className="flex gap-5">
        {shares.map((item) =>
          item === "facebook" ? (
            <img
              className="w-8 h-8 cursor-pointer"
              src="https://imgs.search.brave.com/jgZp2Mw8CFV0-c7Swzb3i0jLRRXfHjBLtwRAWFGAfTE/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I5LzIw/MjNfRmFjZWJvb2tf/aWNvbi5zdmcvNTEy/cHgtMjAyM19GYWNl/Ym9va19pY29uLnN2/Zy5wbmc"
              alt=""
            />
          ) : item === "twitter" ? (
            <img
              className="w-8 h-8 cursor-pointer"
              src="https://imgs.search.brave.com/XsUOP9_i5HjJ_fZkWodCFAKvJIO2hVfwWggfbyu7uYA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NzA0NTkw/M3R3aXR0ZXItbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LnBuZw"
              alt=""
            />
          ) : (
            <img
              className="w-8 h-8 cursor-pointer"
              src="https://imgs.search.brave.com/L6okuc3c98Z3uxIG9fOvUOd80m3NtR-1Nh3tKbEq7s4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzUx/MnB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw"
              alt=""
            />
          )
        )}
      </div>
    </div>
  );
};
