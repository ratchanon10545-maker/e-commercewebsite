import Banner from "./components/banner";
import BestSell from "./components/bestsell";
import Categories from "./components/categories";
import Featured from "./components/featured";
import Header from "./components/header";
import { OurProducts } from "./components/ourproduct";
import Policy from "./components/policy";
import Today from "./components/today";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="mb-[140px] ">
        <Header />
      </div>
      {/* today's deals */}
      <div className="mb-[80px]">
        <Today />
      </div>
      {/* categories */}
      <div className="mb-[80px]">
        <Categories />
      </div>
      {/* best selling products */}
      <div className="mb-[140px]">
        <BestSell />
      </div>
      {/* banner */}
      <div className="mb-[70px]">
        <Banner />
      </div>
      {/*  Our Products */}
      <div className="mb-[140px]">
        <OurProducts />
      </div>
      {/* featured products */}
      <div className="mb-[140px]">
          <Featured />
      </div>
      {/* policy */}
      <div className="mb-[140px]">
          <Policy />
      </div>
    </div>
  );
}
