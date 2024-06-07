const TrackYourProgres = () => {
  return (
    <div className="bg-base-200 h-[400px] ">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-full ">
          <h2 className=" text-xl px-3 font-bold text-blue-950 ">
            What You’ll Find
          </h2>
          <ul className="w-full flex flex-col gap-3 p-4 ">
            <li className="px-3 w-full py-2 bg-slate-700 text-white ">
              Personal Goals
            </li>
            <li className="px-3 w-full py-2 bg-slate-700 text-white ">
              Achievements
            </li>
            <li className="px-3 w-full py-2 bg-slate-700 text-white ">
              Milestones
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-5xl font-bold">
            {" "}
            Track Your Progress and Celebrate Your Successes
          </h1>
          <p className="py-6">
            Stay motivated and focused with our "Track Your Progress and
            Celebrate Your Successes" section. Here, you can monitor your
            personal and professional growth with ease
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackYourProgres;
