
import pfp1 from './assets/pfp1.jpg'
import pfp4 from './assets/pfp4.jpg'
import pfp3 from './assets/pfp3.jpg'
// import pfp4 from './assets/pfp4.jpg'
import pfp5 from './assets/pfp5.jpg'

export default function Opinion() {
    return (
      <div className="discovery flex flex-col gap-6 my-10 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center py-3 h-auto bg-gray-[#010101] rounded-2xl max-w-7xl w-full">
        <h1 className='text-white max-sm:text-[22px] text-3xl! font-bold text-center text-[#fff]!'>
          Over 12,000 financial warriors have taken the <b className="text-[#CC0000]!">5P Framework</b> and transformed their financial lives. <br /> <br />
        <small className="text-gray-300 text-lg text-center max-w-4xl mt-[-20px]!">
          Now it's your turn! Join the movement and take control of your financial future today!
        </small>

        </h1>
        <div className="flex flex-wrap w-[95vw] justify-center gap-5 items-center flex-col lg:flex-row max-md:px-2!">

         <div className="testimonialCard flex flex-col w-[400px]! h-4[430px] gap-4 items-center justify-center text-center bg-gray-500/15! gap-7 p-5 rounded-lg max-w-md py-5 pb-10">
          <img src={pfp1} alt="Logan Mitchell" className='w-50 h-50 rounded-[50%]' />
          <h2 className="text-3xl! font-bold text-white mb-4 text-[#CC0000]! ">Logan Mitchell</h2>
          <p className="text-gray-300 text-lg mb-4 max-w-lg">
            "The 5P Framework completely changed my financial outlook. I went from struggling to make ends meet to building a thriving business and achieving financial freedom. Coach JV's guidance and support were invaluable throughout the journey."
          </p>
         </div>

         <div className="testimonialCard flex flex-col w-[400px]! h-4[430px] gap-4 items-center justify-center text-center bg-gray-500/15! gap-7 p-5 rounded-lg max-w-md py-5 pb-10">
          <img src={pfp4} alt="Jane Smith" className='w-50 h-50 rounded-[50%]' />
          <h2 className="text-3xl! font-bold text-white mb-4 text-[#CC0000]! ">Chloe Bennett</h2>
          <p className="text-gray-300 text-lg mb-4 max-w-lg">
            "Joining the #3TWarriorAcademy and the 120 Day Challenge has been one of the best decisions I've made. CJV, I can't thank you enough for changing my life and being such an inspiration to all of us. "
          </p>
         </div>

         <div className="testimonialCard flex flex-col w-[400px]! h-4[430px] gap-4 items-center justify-center text-center bg-gray-500/15! gap-7 p-5 rounded-lg max-w-md py-5 pb-10">
          <img src={pfp3} alt="Logan Mitchell" className='w-50 h-50 rounded-[50%]' />
          <h2 className="text-3xl! font-bold text-white mb-4 text-[#CC0000]! ">Dylan Parker</h2>
          <p className="text-gray-300 text-lg mb-4 max-w-lg">
            "This community has shown me that I have untapped potential and something to offer. I am still growing, learning and falling, but this Warrior Community has my back and I believe it."
          </p>
         </div>

         <div className="testimonialCard flex flex-col w-[400px]! h-4[430px] gap-4 items-center justify-center text-center bg-gray-500/15! gap-7 p-5 rounded-lg max-w-md py-5 pb-10">
          <img src={pfp5} alt="Jane Smith" className='w-50 h-50 rounded-[50%]' />
          <h2 className="text-3xl! font-bold text-white mb-4 text-[#CC0000]! ">Owen Carter</h2>
          <p className="text-gray-300 text-lg mb-4 max-w-lg">
            What I find most valuable in the 3T Warrior Academy is I get to meet new friends all over this world. that have similar stories and was able to rise and not give up
          </p>

         </div>
        </div>
      </div>
    )
}