import "@/utils/Loading.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader">
        <li className="ball"></li>
        <li className="ball"></li>
        <li className="ball"></li>
      </div>
    </div>
  );
};

export default Loading;
