import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      animation="foldOutAnimation"
    >
      <div id="slide1" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          className="w-full max-h-full"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-black to-purple-950 opacity-60">
          <h4 className="mb-2 text-3xl text-white">
            Get Ready For The Battle Of Examination
          </h4>
          <h4 className="mb-6 text-xl text-white">
            with
          </h4>
          
          <h1 className="mb-10 font-semibold text-white text-7xl">E-ExamPro</h1>

          <button className="mt-8 text-lg font-bold rounded-full btn btn-warning ">
            Try Demo Exam!
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full max-h-full"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-purple-950 to-black opacity-60">
        <h4 className="mb-2 text-3xl text-white">
            Get Ready For The Battle Of Examination
          </h4>
          <h4 className="mb-6 text-xl text-white">
            with
          </h4>
          
          <h1 className="mb-10 font-semibold text-white text-7xl">E-ExamPro</h1>

          <button className="mt-8 text-lg font-bold rounded-full btn btn-warning ">
            Try Demo Exam!
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full max-h-full"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-black to-purple-950 opacity-60">
        <h4 className="mb-2 text-3xl text-white">
            Get Ready For The Battle Of Examination
          </h4>
          <h4 className="mb-6 text-xl text-white">
            with
          </h4>
          
          <h1 className="mb-10 font-semibold text-white text-7xl">E-ExamPro</h1>

          <button className="mt-8 text-lg font-bold rounded-full btn btn-warning ">
            Try Demo Exam!
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full max-h-full"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-purple-950 to-black opacity-60">
          <h4 className="mb-2 text-3xl text-white">
            Get Ready For The Battle Of Examination
          </h4>
          <h4 className="mb-6 text-xl text-white">
            with
          </h4>
          
          <h1 className="mb-10 font-semibold text-white text-7xl">E-ExamPro</h1>

          <button className="mt-8 text-lg font-bold rounded-full btn btn-warning ">
            Try Demo Exam!
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
      </div>
    </AutoplaySlider>
    );
};

export default Banner;