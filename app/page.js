import Button from "@/src/components/Button";
import HomeBanner from "@/src/components/Home/HomeBanner";
import HomeReviews from "@/src/components/Home/HomeReviews";
import HomeInsights from "@/src/components/Home/HomeInsights";
import SubscriptionPlan from "@/src/components/Home/SubscriptionPlan";
import HomeFaq from "@/src/components/Home/HomeFaq";

export const metadata = {
  title: "Home - Conscious Namaz",
  description: "Welcome to the homepage of Conscious Namaz",
};


export default function Home() {
  return (
    <>
      {/* <HomeBanner /> */}
      <SubscriptionPlan/>
      <HomeReviews/>
      <HomeInsights />
      <HomeFaq/>
    </>
  );
}
