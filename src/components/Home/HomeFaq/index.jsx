import Accordion from "../../Accordion"
import Style from "./HomeFaq.module.css"

const HomeFaq = () => {
  return (
    <section className={`py-10 pb-14 lg:pb-28 ${Style.root}`} id="faq">
      <div className="px-5 mx-auto max-w-[1086px]">
        <h2 className="mb-10 lg:mb-14 h2 text-center">Frequently asked Questions</h2>
        <div className="space-y-2">
          <Accordion
            title="What is your return policy?"
            isOpen = {true}
          >
            As the contemporary way of subconsciously reciting and offering Namaaz barely touches the spirit, being extremely present while reciting every verse and absorbing the vibration of every Aayah makes a world of a difference in our mind body and spirit. Whatever “halaal” you desire shall be brought into your world by the powerful laws of nature Allah has created, only if you surrender your mind to emptiness and let Allah shower upon you wealth, health, prosperity and happiness.  
          </Accordion>
          <Accordion
            title="How do I track my order?"
          >
          The course requires three nights of dedication from your side for one hour each at 02am Tahajjud time along with a session at 0830pm for one hour for three days which makes it a total of six sessions. This course is normally hosted on Monday, Tuesday and Wednesday of the week.        
          <table>
            <tbody>
              <tr>
                <td>0830 PM (IST)</td>
                <td>Live session</td>
              </tr>
              <tr>
                <td>0200 AM (IST)</td>
                <td>Tahajjud Namaaz & <br/> Meditation</td>
              </tr>
            </tbody>
          </table>
          </Accordion>
          <Accordion
            title="Is any prior experience needed before joining this course?"
          >
            As the contemporary way of subconsciously reciting and offering Namaaz barely touches the spirit, being extremely present while reciting every verse and absorbing the vibration of every Aayah makes a world of a difference in our mind body and spirit. Whatever “halaal” you desire shall be brought into your world by the powerful laws of nature Allah has created, only if you surrender your mind to emptiness and let Allah shower upon you wealth, health, prosperity and happiness.  
          </Accordion>
          <Accordion
            title="Can I join this course if I am a non-Muslim?"
          >
            As the contemporary way of subconsciously reciting and offering Namaaz barely touches the spirit, being extremely present while reciting every verse and absorbing the vibration of every Aayah makes a world of a difference in our mind body and spirit. Whatever “halaal” you desire shall be brought into your world by the powerful laws of nature Allah has created, only if you surrender your mind to emptiness and let Allah shower upon you wealth, health, prosperity and happiness.  
          </Accordion>
          <Accordion
            title="How often is this course conducted?"
          >
            As the contemporary way of subconsciously reciting and offering Namaaz barely touches the spirit, being extremely present while reciting every verse and absorbing the vibration of every Aayah makes a world of a difference in our mind body and spirit. Whatever “halaal” you desire shall be brought into your world by the powerful laws of nature Allah has created, only if you surrender your mind to emptiness and let Allah shower upon you wealth, health, prosperity and happiness.  
          </Accordion>
          <Accordion
            title="Would this course be pre-recorded or hosted Live?"
          >
            As the contemporary way of subconsciously reciting and offering Namaaz barely touches the spirit, being extremely present while reciting every verse and absorbing the vibration of every Aayah makes a world of a difference in our mind body and spirit. Whatever “halaal” you desire shall be brought into your world by the powerful laws of nature Allah has created, only if you surrender your mind to emptiness and let Allah shower upon you wealth, health, prosperity and happiness.  
          </Accordion>
          <Accordion
            title="Will there be any assistance provided post the course completion?"
          >
            As the contemporary way of subconsciously reciting and offering Namaaz barely touches the spirit, being extremely present while reciting every verse and absorbing the vibration of every Aayah makes a world of a difference in our mind body and spirit. Whatever “halaal” you desire shall be brought into your world by the powerful laws of nature Allah has created, only if you surrender your mind to emptiness and let Allah shower upon you wealth, health, prosperity and happiness.  
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default HomeFaq