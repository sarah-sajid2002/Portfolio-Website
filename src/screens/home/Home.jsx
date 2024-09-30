import servicesData from "./ServicesData";
import AboutMePoints from "./AboutMePoints";
function Home() {
  return (
    <div className=" sm:m-10 m-3 ">
      <div className="aboutMe">
        <h1 className="uppercase text-[20px] font-bold font-serif my-5 sm:my-0 underline decoration-orange-300 decoration-1 underline-offset-8">
          About Me
        </h1>
        <ul className="text-[16px]  list-none sm:p-5  list-outside">
          {AboutMePoints.map((value, index) => {
            return (
              <>
                <li key={index}>{value}</li>
              </>
            );
          })}
        </ul>
      </div>

      <div className="services">
        <h1 className="uppercase text-[20px] font-bold font-serif my-5 sm:my-3 underline decoration-orange-300 decoration-1 underline-offset-8">
          Services
        </h1>
        <div className=" grid md:grid-cols-12 grid-cols-4 font-serif">
          {servicesData.map((value, index) => {
            return (
              <div className="md:col-span-6 col-span-4 sm:m-3 my-2 bg-orange-300 rounded-3xl overflow-hidden p-3">
                <div className="headerOfServices  flex justify-start align-middle ">
                  <img
                    className="w-[80px] h-[50px] mr-3"
                    src={value.img}
                    alt=""
                  />
                  <h1 className=" md:text-[25px] text-[20px] font-bold mt-2">
                    {value.title}
                  </h1>
                </div>
                <div className="textOfServices mt-3">{value.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
