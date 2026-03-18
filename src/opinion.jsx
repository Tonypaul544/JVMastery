
export default function Opinion() {
    return (
      <div className="discovery flex flex-col gap-6 my-10 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center py-3 h-auto bg-gray-[#010101] rounded-2xl max-w-7xl w-full">
        <h1 className='text-white max-sm:text-[22px] text-3xl font-bold text-center text-[#CC0000]!'>
          Over 12,000 financial warriors have taken the <b className="text-[#CC0000]">5P Framework</b> and transformed their financial lives. Join the movement and take control of your financial future today!
          </h1>
          <p className="text-center m-auto mb-5! max-w-lg">
            Now it's your turn! Check out some of our Warriors' testimonials, then take the next step and join us today!
          </p>
        <div className="flex flex-wrap w-[95vw] justify-center gap-5 items-center flex-col lg:flex-row max-md:px-2!">
         <div className="testimonialCard">
          <img src="#" alt="" />
          <h2 className="text-2xl font-bold text-white mb-4 text-[#CC0000]">John Doe</h2>
          <p className="text-gray-300 text-lg mb-4 max-w-lg">
            "The 5P Framework completely changed my financial outlook. I went from struggling to make ends meet to building a thriving business and achieving financial freedom. Coach JV's guidance and support were invaluable throughout the journey."
          </p>
         </div>
         <div className="testimonialCard">
          <img src="#" alt="" />
          <h2 className="text-2xl font-bold text-white mb-4 text-[#CC0000]">Jane Smith</h2>
          <p className="text-gray-300 text-lg mb-4 max-w-lg">
            "The 5P Framework helped me break free from my financial struggles and build a solid foundation for my future. Coach JV's expertise and personalized approach made all the difference in my journey towards financial independence."
          </p>

         </div>
        </div>
      </div>
    )
}