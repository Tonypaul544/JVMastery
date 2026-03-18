

import phase4img from './assets/phase3.webp'

export default function PhaseThree() {
    return (
      <div className="discovery flex flex-col gap-6 my-10 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center py-3 h-auto bg-gray-[#010101] rounded-2xl max-w-7xl w-full">

        <div className="flex w-[95vw] justify-center gap-5 items-center flex-col lg:flex-row max-md:px-2!">
          <img src={phase4img} alt="Discovery" className="w-full max-w-md h-auto" />
          <div className="flex flex-col">
            <h2 className="text-3xl! font-bold text-white mb-4 text-[#CC0000]!  max-md:text-center! max-md:text-[25px]!">Phase 3: Advanced Implementation</h2>
            <p className="text-gray-300 text-lg mb-4 max-w-lg lg:mb-5! max-md:text-center m-auto mb-5!">
              With a firm understanding of the rules to the game and the inner work you’re doing from phase 1, it’s time to get practical...and honest. Here you’ll learn the truth of your current situation and be guided to identify areas of weakness so you can get your house in order.
            </p>
            <h2 className="text-2xl! font-bold text-white mb-4 text-[#CC0000]!  max-md:text-center mt-5 max-md:mt-5! max-md:font-bolder!">After this phase, you will:</h2>
            <ul className="text-gray-300 text-lg max-w-lg mt-1 list-disc list-inside">
              <li className='font-semibold'> Identify Income & Expenses</li>
              <li className='font-semibold'> Inventory & organize current debt and non-negotiables</li>
              <li className='font-semibold'>Learn to budget effectively and optimize for growth.</li>
            </ul>
          </div>
        </div>
      </div>
    )
}