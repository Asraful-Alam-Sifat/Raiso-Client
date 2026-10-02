
import HeroBanner from "@/compnents/HeroBanner/HeroBanner";
import Stats from "@/compnents/HeroBanner/Stats";
import Navbar from "@/compnents/Navbar/Navbar";

export default function Home() {
  return (
    <div className="relative">
        <Navbar/>
        <HeroBanner />
        <Stats/>
    </div>
  );
}
