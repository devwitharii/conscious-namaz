import Image from "next/image";
import React from "react";
import Button from "../../Button";
import Container from "../../Container";

const HomeBanner = () => {
  return (
    <section className="relative overflow-hidden h-[calc(100vh-var(--header-height))] xl:min-h-[500px] lg:flex xl:items-center">
      <figure className="relative pb-[58%] lg:pb-0 h-auto lg:absolute top-0 left-0 w-full lg:h-full">
          <Image src="/images/home-banner.jpg" alt="banner images" fill className="object-cover"/>
        </figure>
        <Container className="relative">
          <div className="py-7 xl:py-14 xl:px-14 rounded-[20px]  text-center text-primary lg:text-white bg-gradient-to-r from-[#ffffff1a] to-transparent">
            <h1 className="h1 mb-5 lg:mb-10 leading-[1.1]">Discover the power of conscious praying and witness how your life changes</h1>
            <Button className={"xl:min-w-[250px]"}>lear more</Button>
          </div>
        </Container>
    </section>
  );
};

export default HomeBanner;
