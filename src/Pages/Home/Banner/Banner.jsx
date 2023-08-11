import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import "./Banner.css";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
    return (
       <div className="w-full ">
         <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* slide-1 */}
      <div id="slide1" className="relative h-full w-full  object-fill carousel-item">
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          className="w-full h-full"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-[#582f6e] to-[rgba(151, 40, 202, 0.9)] ">
          <h4 className="mb-2 md:mb-6 text-lg md:text-3xl text-white text-center">
            Get Ready For The Battle Of Examination
          </h4>
          <h4 className="md:mb-6 text-sm md:text-xl text-white">
            with
          </h4>
          
          <h1 className="md:mb-10 font-semibold text-white text-2xl  md:text-7xl">E-ExamPro</h1>

          <button className="mt-4 md:mt-8 text-sm md:text-lg font-bold rounded-full btn btn-sm md:btn-md navigation-bar">
            Explore Exams 
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      {/* slide-2 */}
      <div id="slide2" className="relative w-full h-full object-fill carousel-item">
        <img
          src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full h-full"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r  from-[#582f6e] to-[rgba(21, 21, 21, 0)]">
        <h4 className="mb-2 md:mb-6 text-lg md:text-3xl text-white text-center">
            Get Ready For The Battle Of Examination
          </h4>
          <h4 className="md:mb-6 text-sm md:text-xl text-white">
            with
          </h4>
          
          <h1 className="md:mb-10 font-semibold text-white text-2xl  md:text-7xl">E-ExamPro</h1>

          <button className="mt-4 md:mt-8 text-sm md:text-lg font-bold rounded-full btn btn-sm md:btn-md navigation-bar">
            Explore Exams 
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      {/* slide-3 */}
      <div id="slide3" className="relative w-full h-full object-fill carousel-item">
        <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full h-full"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r  from-[#582f6e] to-[rgba(21, 21, 21, 0)]">
        <h4 className="mb-2 md:mb-6 text-lg md:text-3xl text-white text-center">
            Get Ready For The Battle Of Examination
          </h4>
          <h4 className="md:mb-6 text-sm md:text-xl text-white">
            with
          </h4>
          
          <h1 className="md:mb-10 font-semibold text-white text-2xl  md:text-7xl">E-ExamPro</h1>

          <button className="mt-4 md:mt-8 text-sm md:text-lg font-bold rounded-full btn btn-sm md:btn-md navigation-bar">
            Explore Exams 
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      {/* slide-4 */}
      <div id="slide4" className="relative w-full  h-full object-fill  carousel-item">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full h-full"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r  from-[#582f6e] to-[rgba(21, 21, 21, 0)]">
          <h4 className="mb-2 md:mb-6 text-lg md:text-3xl text-white text-center">
            Get Ready For The Battle Of Examination
          </h4>
          <h4 className="md:mb-6 text-sm md:text-xl text-white">
            with
          </h4>
          
          <h1 className="md:mb-10 font-semibold text-white text-2xl  md:text-7xl">E-ExamPro</h1>

          <button className="mt-4 md:mt-8 text-sm md:text-lg font-bold rounded-full btn btn-sm md:btn-md navigation-bar">
            Explore Exams 
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
    </AutoplaySlider>
       </div>
    );
};

export default Banner;