const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:4/12 my-10 bg-pink-200 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <p className=" text-orange-700 mb-4 font-semibold p-2">
        ***{subHeading}***
      </p>
      <h3 className="text-4xl uppercase border-y-4 p-4 font-bold text-red-800">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
