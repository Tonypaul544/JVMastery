
import phase1img from './assets/phase1.png'

export default function PhaseOne() {
    return (
      <div className="discovery flex flex-col gap-6 my-10 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center py-10 h-auto bg-gray-[#010101] rounded-2xl max-w-7xl w-full">
        <p className='text-white max-sm:text-[22px] text-4xl font-bold text-center text-[#CC0000]!'>Discover the roadmap to holistic financial success</p>
        <p className='text-gray-300 text-lg text-center max-w-4xl'>The 5P Framework is a definitive roadmap designed to transform your financial understanding and capabilities. Whether you're starting from scratch or seeking to enhance your financial strategy, the 5P Framework offers step-by-step guidance</p>

        <div className="flex w-[95vw] justify-center gap-5 items-center flex-col lg:flex-row max-md:px-2!">
          <img src={phase1img} alt="Discovery" className="w-full max-w-md h-auto" />
          <div className="flex flex-col">
            <h2 className="text-3xl! font-bold text-white mb-4 text-[#CC0000]!  max-md:text-center! max-md:text-[25px]!">Phase 1: Strong Foundation</h2>
            <p className="text-gray-300 text-lg mb-4 max-w-lg lg:mb-5! max-md:text-center m-auto mb-5!">
              In this phase, we lay the groundwork for your financial success. you'll learn to understand your mindset, tackle limiting beliefs, gain the confidence in yourself to make the right decisions, and find your passions & purpose.. The journey to success begins within and we're here to help you start on the right foot
            </p>
            <h2 className="text-2xl! font-bold text-white mb-4 text-[#CC0000]!  max-md:text-center mt-5 max-md:mt-5! max-md:font-bolder!">After this phase, you will:</h2>
            <ul className="text-gray-300 text-lg max-w-lg mt-1 list-disc list-inside">
              <li className='font-semibold'>Gain Discipline & Consistency</li>
              <li className='font-semibold'>Eliminate Limiting Beliefs & Scarcity Mindset</li>
              <li className='font-semibold'>Gain Confidence, Peace, Joy & Self-Love</li>
            </ul>
          </div>
        </div>
      </div>
    )
}