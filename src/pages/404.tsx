import { useNavigate } from "react-router-dom";
import { Logo } from "../components";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background:
          "url(https://flixtv.volkovdesign.com/main/img/bg().jpg) center center / cover no-repeat",
      }}
    >
      <div className="w-96 p-10 flex flex-col justify-center rounded-xl border border-[#2f80ed1a] bg-[#141821ff]">
        <Logo className="text-center mb-8" />

        <div className="text-blue-500 font-black text-center text-9xl">404</div>
        <div className="text-white text-center text-lg">
          The page you are looking for not available!
        </div>

        <div
          onClick={() => navigate(-1)}
          className="w-full bg-blue-500 py-3 mt-8 rounded-2xl text-center text-white cursor-pointer"
        >
          Go Back
        </div>
      </div>
    </div>
  );
};

export default Page404;
