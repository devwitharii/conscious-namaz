import Image from 'next/image'
import Button from '../../Button'
import ProgramContainer from '../ProgramContainer'
import Animate from '../../Animate'
const ProgramTwo = () => {
  return (
    <>
        <div className='-mx-2 lg:-mx-7 flex flex-wrap -mt-14 lg:items-center'>
            <Animate className='px-2 w-full lg:w-2/3 lg:px-7 mt-14'>
                <h3 className='text-[32px] ff-2 mb-5 lg:mb-8 leading-[1.2]'>Personalised and Guided Islamic Meditation (5999Rs) (3 sessions of one hour each)</h3>
                {/* <p className='lg:text-lg leading-[1.5]'>We are all aware of the miracles TAHAJJUD prayer can offer, but sadly we have underestimated its power to an extent we almost neglected this moon-light prayer. The soul purpose of Conscious Namaaz is to call every Muslim and also non-Muslim to reap maximum benefits of this sacred time and conscious prayer.</p> */}
            </Animate>
            <div className='px-2 w-full lg:w-1/3 lg:px-7 mt-14'>
                <div className='flex flex-col rounded-md overflow-hidden shadow-xl'>
                    <figure className='relative overflow-hidden pb-[69.98%]'>
                        <Image
                        src={"/images/home-sub-img-2.jpg"}
                        fill
                        alt='program images'
                        className='object-cover'
                        />
                    </figure>
                    <div className='bg-white p-5'>
                        <p className='text-lg lg:text-xl mb-5'>Personalised and Guided Islamic Meditation<strong> (3 sessions of one hour each)@ (5999Rs)</strong></p>
                        <Button className={`w-full`}>BUY NOW</Button>
                    </div>
                </div>
            </div>
        </div>
        <ProgramContainer>
            <h3>What is an Islamic Meditation?</h3>
            <p>In Islam meditation refers to Zikr (recitation) and Muraqabah (mindfulness). Often zikr and Muraqabah are performed with eyes closed and sitting in a comfortable position. The scientific benefits of Zikr and Muraqabah outlined by modern science are countless. While Zikr when done consciously has a very powerful impact on our body, mind and spirit, Muraqabah is all about reaching an empty space within and attaining a point of self-realising our ego and sins. It is said when you reach to a place within, beyond your mind and body while in the state of meditation, a sense of closeness with Allah is experienced, and every prayer with a pure intent that you desire to manifest, Allah will make sure he grants that to you in the most magical way. </p>
            <p>At Conscious Namaaz we design a guided Islamic meditation precisely for you combining the power of Zikr and Muraqabah and with a prayer of what you desire to manifest in life.</p>
        </ProgramContainer>
        <ProgramContainer>
            <h3>BLUEPRINT OF THE PROGRAM:</h3>
            <p>This program consists of three one on one sessions, in which we will look in to three most important areas of your life and outline what changes you desire to see. Once we pen down these three things that you like to achieve and manifest in your life, we turn that into a powerful Dua (a prayer asking Allah what you desire to manifest). We then choose a zikr that connects deeply to your heart and blend that with a powerful Muraqabah. A combination of Muraqabah, Zikr and Dua in the right way is what makes your manifestation even more powerful.  Once we are done with creating your personalised meditation, we will turn that into an audio file, that you will simply have to plug on your ear phones, sit in a comfortable position and play when you find the right time during your day, simply and precisely to manifest a life that you always deeply desired of.       </p>
        </ProgramContainer>
    </>
  )
}

export default ProgramTwo

