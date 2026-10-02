import Counter from "@/compnents/HeroBanner/Counter";

const Stats = () => {
  return (
    <section className="stats mt-10 w-full bg-linear-to-r from-lime-950 via-lime-900 to-lime-950 backdrop-blur-md rounded-none dark:from-lime-800/40 dark:via-lime-800/30 dark:to-lime-800/40 py-6 px-8 sm:px-12 text-white/80 text-[clamp(0.75rem,0.5vw+0.4rem,0.85rem)] shadow-inner border-y border-lime-500/20">
      <div className="w-11/12 mx-auto sm:flex justify-between space-y-4 sm:space-y-0 gap-6 sm:gap-0">
        <div className="flex flex-col items-center pb-3 border-b-2 border-lime-500/20 sm:border-none sm:pb-0">
          <b className="text-[clamp(1rem,2.5vw,2.2rem)] font-bold font-(family-name:--font-heading) text-[#C9F35B] dark:text-white leading-none mb-1">
            <Counter to={1284} />
          </b>
          <span className="text-white/80 text-[clamp(0.70rem,0.9vw,0.9rem)] text-center whitespace-nowrap">
            Campaigns funded
          </span>
        </div>
        <div className="flex flex-col items-center pb-3 border-b-2 border-lime-500/20 sm:border-none sm:pb-0">
          <b className="text-[clamp(1rem,2.5vw,2.2rem)] font-bold font-(family-name:--font-heading) text-[#C9F35B] dark:text-white leading-none mb-1">
            <Counter from={0} to={18700} duration={2} decimals={1} />
          </b>
          <span className="text-white/80 text-[clamp(0.70rem,0.9vw,0.9rem)] text-center whitespace-nowrap">
            Supporters
          </span>
        </div>
        <div className="flex flex-col items-center pb-3 border-b-2 border-lime-500/20 sm:border-none sm:pb-0">
          <b className="text-[clamp(1rem,2.5vw,2.2rem)] font-bold font-(family-name:--font-heading) text-[#C9F35B] dark:text-white leading-none mb-1">
            <Counter from={0} to={3406} duration={2} decimals={0} />
          </b>
          <span className="text-white/80 text-[clamp(0.70rem,0.9vw,0.9rem)] text-center whitespace-nowrap">
            Creators
          </span>
        </div>
        <div className="flex flex-col items-center">
          <b className="text-[clamp(1rem,2.5vw,2.2rem)] font-bold font-(family-name:--font-heading) text-[#C9F35B] dark:text-white leading-none mb-1">
            <Counter from={0} to={2400000} duration={2} decimals={1} />
          </b>
          <span className="text-white/80 text-[clamp(0.70rem,0.9vw,0.9rem)] text-center whitespace-nowrap">
            Credits contributed
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;