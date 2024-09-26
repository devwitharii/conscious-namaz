"use client"
import Container from "../../Container";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../../BlogCard";

const HomeInsights = () => {
  return(
    <section className="py-10">
      <Container>
        <div className="mb-10 lg:mb-14 text-center">
          <h2 className="h2 mb-2 text-primary">Namaaz Insights</h2>
          <p className="mb-2 text-xl leading-6 text-primary">Explore articles and reflections to enhance your prayer practice and deepen your spiritual connection.</p>
          <Link href={"insights"} className="inline-flex gap-1 items-start leading-none">
          View all
          <Image
          src={"/images/arrow-top.svg"}
          width={9}
          height={9}
          alt="arrow-top"
          />
          </Link>
        </div>
        <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        breakpoints={{
          768 :{
            spaceBetween : 30,
            slidesPerView : 2.5
          },
          992 :{
            spaceBetween : 30,
            slidesPerView : 3
          },
        }}
        >
          {
            data?.map((insight, index)=>(
              <SwiperSlide
              className="!h-auto"
              key={index}>
                <BlogCard
                title={insight.title}
                description={insight.description}
                img={insight.img}
                time={insight.time}
                url={insight.url}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
    </section>
  )
};

export default HomeInsights;



const data = [
  {
    title : "Why is conscious Namaaz more powerful compared to the way it is offered by many?",
    description : "The human mind runs on two modes, one is conscious and the other is subconscious. For an average human being, 95% of the time during their state of wakefulness, the subconscious mind operates, and barely 5% the conscious mind comes to play. To understand the conscious mind, we need to first understand the subconscious mind a little deeper. Let’s look into the activities that the subconscious mind operates with,",
    img: "/images/insights/img-1.jpg",
    time : "15 min read",
    url :"#"
  },
  {
    title : "Discover the Profound Benefits and Transformative Power of a Consistent Prayer Routine",
    description : "Delve into the numerous benefits of maintaining a consistent prayer routine. From mental well-being to spiritual growth, see how regular prayer can positively impact various aspects of your life.",
    img: "/images/insights/img-2.jpg",
    time : "15 min read",
    url :"#",
  },
  {
    title : "The benefits of consistent prayer",
    description : "Learn about the mental and spiritual benefits of maintaining a consistent prayer routine.",
    img: "/images/insights/img-3.jpg",
    time : "8 min read",
    url :"#",
  },
]