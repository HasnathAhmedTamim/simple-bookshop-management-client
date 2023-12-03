
import { Parallax } from "react-parallax";




const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 51 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[600px]"
        
      >
        <div className="hero-overlay bg-opacity-60 bg-fixed"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-center">
              You can even read free books online without downloading and free
              books online for kids!
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
