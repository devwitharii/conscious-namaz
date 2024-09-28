import Container from "@/src/components/Container";
import InsightListing from "@/src/components/InsightListing";
import Image from "next/image";
import Link from "next/link";

const InsightsPage = () => {
  return (
    <>
    <Container className={"pt-5 lg:pt-10"}>
      <Link href={"./"} className="inline-flex gap-3 items-center text-lg lg:text-xl">
          <Image
          src={"/images/arrow-right.svg"}
          width={12}
          height={9}
          alt="arrow"
          className="scale-x-[-1]"
          />
          Back
        </Link>
    </Container>
    <InsightListing />
    </>
  )
};

export default InsightsPage;
