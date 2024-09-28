"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sytle from "./HomeReviews.module.css";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper";

const HomeReviews = () => {
    
    const [activeIndex, setactiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const thumbSlideRef = useRef(null);

    const handleSlideChange = ( index ) =>{                
        setactiveIndex(index);
        if(swiperRef?.current){
            swiperRef.current?.swiper?.slideTo(index)
        }
    }

    useEffect(() => {        
            thumbSlideRef.current?.swiper?.slideTo(activeIndex);  
                  
    }, [activeIndex, thumbSlideRef])
    

  return (
    <section className="p-5 lg:pt-[100px] lg:pb-14">
        <div className="px-5 xl:max-w-[1090px] mx-auto">
            <h2 className="h2 mb-10 lg:mb-14 text-center">Reviews</h2>
            <div className="lg:px-20 xl:px-[130px] relative">
                <span className="review-prev size-10 absolute top-[50%] z-[3] cursor-pointer hover:opacity-75 transition-opacity left-0 -translate-y-1/2 rounded-full hidden lg:flex items-center justify-center border border-gray-200 bg-[#F5F5F5]">
                    <Image
                    src={"/images/arrow-right.svg"}
                    width={20}
                    height={15}
                    alt="arow"
                    className="scale-x-[-1]"
                    />
                </span>
                <span className="review-next size-10 absolute top-[50%] z-[3] cursor-pointer hover:opacity-75 transition-opacity right-0 -translate-y-1/2 rounded-full hidden lg:flex items-center justify-center border border-gray-200 bg-[#F5F5F5]">
                    <Image
                    src={"/images/arrow-right.svg"}
                    width={20}
                    height={15}
                    alt="arow"
                    />
                </span>

                <Swiper
                ref={swiperRef}
                centeredSlides
                loop={true}
                spaceBetween={20}
                navigation= {{
                    prevEl: ".review-prev",
                    nextEl: ".review-next",
                }}
                modules={[Navigation]}
                slidesPerView={3}
                className={`${Sytle.swiper} mb-10 lg:mb-14`}
                slideActiveClass={Sytle.slide_active}
                slideNextClass={Sytle.slide_near}
                slidePrevClass={Sytle.slide_near}
                onInit={(e)=>setactiveIndex(e?.activeIndex)}
                onSlideChange={(e)=>handleSlideChange(e?.activeIndex)}
                breakpoints={{
                    992 : {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    }
                }}
                >
                    {
                        data?.map((item, index)=>(
                            <SwiperSlide
                            onClick={()=>handleSlideChange(index)}
                            key={index} className={`flex items-center justify-center ${Sytle.slide}`}>
                                <div className="size-[90px] lg:size-[120px] rounded-full overflow-hidden relative">
                                    <figure className="mb-0">
                                        <Image
                                        src={item?.img || ""}
                                        alt={item.name || ""}
                                        fill
                                        className="object-cover"
                                        />
                                    </figure>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <Swiper
            ref={thumbSlideRef}
            spaceBetween={50}
            onSlideChange={(e)=>swiperRef?.current?.swiper?.slideTo(e?.activeIndex)}
            >
                {
                    data?.map((item, i)=>(
                        <SwiperSlide key={i} className={`flex items-center justify-center ${Sytle.slide}`}>
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-6 gap-1">
                                    {[...Array(item.star)].map((star, index)=>(
                                        <Image 
                                        alt="star"
                                        key={index}
                                        src={"/images/reviews/star.svg"}
                                        width={20}
                                        height={20}
                                        />
                                    ))}
                                </div>
                                <p className="text-primary lg:text-black text-xl leading-6 mb-6">
                                    {item.content}
                                </p>
                                    <p className="text-primary lg:text-black text-xl leading-6">{item.name}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="flex lg:hidden justify-center gap-10 mt-10">
            <span className="review-prev size-10 rounded-full flex items-center justify-center border border-gray-200 bg-[#F5F5F5]">
                    <Image
                    src={"/images/arrow-right.svg"}
                    width={20}
                    height={15}
                    alt="arow"
                    className="scale-x-[-1]"
                    />
                </span>
                <span className="review-next size-10 rounded-full flex items-center justify-center border border-gray-200 bg-[#F5F5F5]">
                    <Image
                    src={"/images/arrow-right.svg"}
                    width={20}
                    height={15}
                    alt="arow"
                    />
                </span>
            </div>
            <div className="border-b border-primary lg:border-black mt-10 lg:mt-14"></div>
        </div>
    </section>
  )
}

export default HomeReviews


const data = [
    {
        img : "/images/reviews/img-4.jpg",
        star : 5,
        name : "- Zahid pathan - Businessman",
        content : "Firstly, I was thrilled by the knowledge I got to learn from the course, secondly it made me realise the right way to pray and ask Allah for my wishes and dwas. It's impossible to believe the success i achieved in my life after the program."
    },
    {
        img : "/images/reviews/img-2.png",
        star : 5,
        name : "- Zahid pathan - Businessman",
        content : "Firstly, I was thrilled by the knowledge I got to learn from the course, secondly it made me realise the right way to pray and ask Allah for my wishes and dwas. It's impossible to believe the success i achieved in my life after the program."
    },
    {
        img : "/images/reviews/img-4.jpg",
        star : 5,
        name : "- Zahid pathan - Businessman",
        content : "Firstly, I was thrilled by the knowledge I got to learn from the course, secondly it made me realise the right way to pray and ask Allah for my wishes and dwas. It's impossible to believe the success i achieved in my life after the program."
    },
    {
        img : "/images/reviews/img-3.png",
        star : 5,
        name : "- Zahid pathan - Businessman",
        content : "Firstly, I was thrilled by the knowledge I got to learn from the course, secondly it made me realise the right way to pray and ask Allah for my wishes and dwas. It's impossible to believe the success i achieved in my life after the program."
    },
    {
        img : "/images/reviews/img-2.png",
        star : 5,
        name : "- Zahid pathan - Businessman",
        content : "Firstly, I was thrilled by the knowledge I got to learn from the course, secondly it made me realise the right way to pray and ask Allah for my wishes and dwas. It's impossible to believe the success i achieved in my life after the program."
    },
    {
        img : "/images/reviews/img-4.jpg",
        star : 5,
        name : "- Zahid pathan - Businessman",
        content : "Firstly, I was thrilled by the knowledge I got to learn from the course, secondly it made me realise the right way to pray and ask Allah for my wishes and dwas. It's impossible to believe the success i achieved in my life after the program."
    },
]