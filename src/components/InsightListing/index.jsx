import BlogCard from "../BlogCard"
import Container from "../Container"

const InsightListing = () => {
  return (
    <section className="py-10 lg:py-14">
        <Container>
            <h1 className="h2 mb-2 text-primary text-center">Namaaz Insights</h1>
            <p className="lg:text-xl leading-[1.5] text-center text-primary mb-12 lg:mb-14">Unlock the full potential of your spiritual journey with our Conscious Namaaz Subscription Plan.</p>
            <div className="-mx-2 lg:-mx-4 flex flex-wrap -my-5">
                {
                    data?.map((item, index)=>(
                        <div className="px-2 w-full lg:w-1/3 lg:px-4 mt-5" key={index}>
                            <BlogCard
                            title={item.title}
                            description={item.description}
                            img={item.img}
                            time={item.time}
                            url={item.url}
                            />
                        </div>
                    ))
                }
            </div>
                <div className="border-b border-black mt-8 lg:mt-20 xl:mt-[100px]"></div>
        </Container>
    </section>
  )
}

export default InsightListing


const data = [
    {
      title : "Why is conscious Namaaz more powerful compared to the way it is offered by many?",
      description : "The human mind runs on two modes, one is conscious and the other is subconscious. For an average human being, 95% of the time during their state of wakefulness, the subconscious mind operates, and barely 5% the conscious mind comes to play. To understand the conscious mind, we need to first understand the subconscious mind a little deeper. Let’s look into the activities that the subconscious mind operates with,",
      img: "/images/insights/img-1.jpg",
      time : "15 min read",
      url :"/insights/article-one"
    },
    {
      title : "Discover the Profound Benefits and Transformative Power of a Consistent Prayer Routine",
      description : "Delve into the numerous benefits of maintaining a consistent prayer routine. From mental well-being to spiritual growth, see how regular prayer can positively impact various aspects of your life.",
      img: "/images/insights/img-2.jpg",
      time : "15 min read",
      url :"/insights/article-two",
    },
    {
      title : "The benefits of consistent prayer",
      description : "Learn about the mental and spiritual benefits of maintaining a consistent prayer routine.",
      img: "/images/insights/img-3.jpg",
      time : "8 min read",
      url :"/insights/article-three",
    },
  ]