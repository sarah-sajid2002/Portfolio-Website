import techImage from "./images/tech images for header.png";
import headerImg from "./images/header image.png";
function Header() {
  return (
    <div
      style={{ backgroundImage: `url(${headerImg})` }}
      className=" grid grid-cols-12 min-h-[160px] sm:h-[150px] md:h-[200px] bg-cover "
    >
      <div className="text col-span-6 sm:col-span-7 lg:col-span-8 mt-10  ml-5   ">
        <div className="name text-[20px] sm:text-[30px] md:text-[40px] uppercase ">
          Sarah Sajid
        </div>
        <div className="title text-black text-[15px] sm:text-[15px] md:text-[20px]">
          Mern Stack Developer
        </div>
      </div>
      <div className="col-span-6 lg:col-span-4 sm:col-span-5 ">
        <img className="h-[180px] sm:h-[200px]" src={techImage} alt="" />
      </div>
    </div>
  );
}

export default Header;
