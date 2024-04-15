import { title } from "process";

const HeaderMenuComponent = ({ title }) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center font-semibold text-xl text-[#fd1b44]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default HeaderMenuComponent;
