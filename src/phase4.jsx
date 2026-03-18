

import phase4img from './assets/phase4.webp'

export default function PhaseFour() {
    return (
      <div className="discovery flex flex-col gap-6 my-10 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center py-3 h-auto bg-gray-[#010101] rounded-2xl max-w-7xl w-full">

        <div className="flex w-[95vw] justify-center gap-5 items-center flex-col lg:flex-row max-md:px-2!">
          
          <div className="flex flex-col">
            <h2 className="text-3xl! font-bold text-white mb-4 text-[#CC0000]!  max-md:text-center! max-md:text-[25px]!">Phase 4: Mastery & Growth</h2>
            <p className="text-gray-300 text-lg mb-4 max-w-lg lg:mb-5! max-md:text-center m-auto mb-5!">
              You've made significant progress, and now it's time to take your financial journey to the next level. In this phase, you’ll learn advanced strategies for maximizing your income, building wealth, and creating sustainable financial systems.
            </p>
            <h2 className="text-2xl! font-bold text-white mb-4 text-[#CC0000]!  max-md:text-center mt-5 max-md:mt-5! max-md:font-bolder!">After this phase, you will:</h2>
            <ul className="text-gray-300 text-lg max-w-lg mt-1 list-disc list-inside">
              <li className='font-semibold'> Identify Income & Expenses</li>
              <li className='font-semibold'> Inventory & organize current debt and non-negotiables</li>
              <li className='font-semibold'>Learn to budget effectively and optimize for growth.</li>
            </ul>
          </div>
          <img src={phase4img} alt="Discovery" className="w-full max-w-md h-auto" />
        </div>
      </div>
    )
}