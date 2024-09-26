import Button from "@/src/components/Button";
import HomeBanner from "@/src/components/Home/HomeBanner";
import HomeReviews from "@/src/components/Home/HomeReviews";
import HomeInsights from "@/src/components/Home/HomeInsights";
import SubscriptionPlan from "@/src/components/Home/SubscriptionPlan";
import HomeFaq from "@/src/components/Home/HomeFaq";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className="bg-primary text-white py-5 px-5">
        <div className="max-w-[1306px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:justify-between">
            <p className="lg:text-lg max-w-[780px] leading-[1.5]">JOIN US FOR THREE NIGHTS OF TAHAJJUD NAMAAZ AND WITNESS YOURSELF THE POWER OF CONSCIOUS PRAYING <span className="font-medium">(Early bird offer 99RS - Price slashed from 2999Rs) </span></p>
            <Button className={"xl:min-w-[340px]"} varient="light">register now</Button>
          </div>
        </div>
      </div>
      <SubscriptionPlan/>
      <HomeReviews/>
      <HomeInsights />
      <HomeFaq/>
    </>
  );
}
