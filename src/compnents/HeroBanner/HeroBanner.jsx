import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <main className="mt-10 sm:mt-15 ">
     <section className="w-[clamp(50%,92vw,80rem)] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-[clamp(2rem,4vw,4rem)] py-[clamp(2rem,5vw,5rem)]">
  
  {/* Left Text Column */}
  <div className="md:col-span-6 flex flex-col justify-center">
    {/* Eyebrow span */}
    <span className="font-(family-name:--font-heading) text-gray-500/70 dark:text-gray-400/80 text-[clamp(0.7rem,0.6vw+0.4rem,0.9rem)] tracking-wider mb-2">
      COMMUNITY-POWERED FUNDING
    </span>
    
    {/* Main heading */}
    <h1 className="font-(family-name:--font-heading) text-[clamp(2rem,3.2vw+1rem,3.8rem)] font-extrabold leading-[1.15] mb-[clamp(1rem,1.5vw,1.5rem)] text-lime-950 dark:text-white">
      Big ideas <br className="hidden md:block"/> deserve{" "}
      <span className="text-lime-950/60 dark:text-lime-300/75">
        a <br className="hidden md:block"/> chance to grow.
      </span>
    </h1>

    {/* Paragraph description */}
    <p className="text-lime-950/80 dark:text-white/80 text-[clamp(0.9rem,0.8vw+0.5rem,1.15rem)] leading-relaxed mb-[clamp(1.2rem,2vw,2rem)] max-w-xl">
      Discover meaningful projects, support creators with simple credits,
      and help turn ambitious ideas into reality.
    </p>

    {/* Action buttons */}
    <div className="hero-actions flex flex-wrap gap-[clamp(0.5rem,1vw,1rem)] mb-[clamp(1.5rem,2vw,2rem)]">
      <Link
        className="btn primary text-[clamp(0.8rem,0.5vw+0.5rem,1rem)] py-[clamp(0.6rem,0.8vw,0.85rem)] px-[clamp(1rem,1.5vw,1.5rem)] bg-lime-300/75 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 font-(family-name:--font-heading) rounded-lg shadow-sm"
        href="explore.html"
      >
        Explore Campaigns →
      </Link>
      <Link
        className="btn border-2 text-[clamp(0.8rem,0.5vw+0.5rem,1rem)] py-[clamp(0.6rem,0.8vw,0.85rem)] px-[clamp(1rem,1.5vw,1.5rem)] border-neutral-content transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 font-(family-name:--font-heading) rounded-lg hover:glass"
        href="creator-create.html"
      >
        Start a Campaign
      </Link>
    </div>

    {/* Trust badges */}
    <div className="hero-trust text-[clamp(0.6rem,0.5vw+0.4rem,0.85rem)] flex flex-wrap gap-[clamp(0.75rem,1.5vw,1.5rem)] text-gray-600/80 dark:text-gray-300/80">
      <span>✓ Secure payments</span>
      <span>✓ Verified campaigns</span>
      <span>✓ Transparent funding</span>
    </div>
  </div>

  {/* Right Image Column */}
  <div className="md:col-span-6 relative w-full h-[clamp(280px,38vw,460px)] max-w-[600px] mx-auto mt-6 md:mt-0">
    <Image
      src="https://i.postimg.cc/hv3dNDxg/Gemini-Generated-Image-z4umarz4umarz4um.jpg"
      alt="Team collaborating"
      fill
      className="object-cover rounded-2xl shadow-lg"
    />
    
    {/* Floating Stat Box */}
    <div className="float absolute -bottom-7 -left-3 sm:-left-6 max-w-[125px] lg:max-w-[145px]   w-full bg-lime-950/80 dark:bg-lime-800/30 backdrop-blur-md rounded-2xl py-3 px-5 flex flex-col justify-center items-center shadow-xl border border-lime-500/20">
      <b className="text-[clamp(0.8rem,2.5vw,2.2rem)] font-bold font-(family-name:--font-heading) text-[#C9F35B] dark:text-white leading-none mb-1">
        $48.2K
      </b>
      <small className="text-white/80 text-[clamp(0.70rem,0.9vw,0.9rem)] text-center whitespace-nowrap">
        raised this month
      </small>
    </div>
  </div>

</section>

    
    </main>
  );
};

export default HeroBanner;
