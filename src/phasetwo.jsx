
import phase2img from './assets/phase2img.png'

export default function PhaseTwo() {
    return (
      <div className="discovery flex flex-col gap-6 my-10 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center py-10 h-auto bg-gray-[#010101] rounded-2xl max-w-7xl w-full max-md:mt-10!  max-md:mt-20!">
        <p className=' max-sm:text-[22px] text-3xl font-bold text-center! text-[#CC0000]!'>Continue your journey to financial mastery</p>
        <p className='text-gray-300 text-lg text-center max-w-4xl'>Build upon your strong foundation with advanced strategies and practical implementation. Phase 2 focuses on actionable steps to accelerate your financial growth.</p>

        <div className="flex w-[95vw] justify-center gap-5 items-center flex-col lg:flex-row max-md:px-2!">
          <div className="flex flex-col">
            <h2 className="text-3xl! font-bold text-white mb-4 text-[#CC0000]! max-md:text-center! max-md:text-[25px]!">Phase 2: Strategic Implementation</h2>
            <p className="text-gray-300 text-lg mb-4 max-w-lg  max-md:text-center m-auto mb-5!">
              Now that you have a solid foundation, it's time to put your knowledge into action. Learn proven strategies, develop multiple income streams, and master the art of wealth building through strategic planning and consistent execution.
            </p>
            <h2 className="text-2xl! font-bold text-white mb-4 text-[#CC0000]!  max-md:text-center mt-5 max-md:mt-5! max-md:font-bolder!">After this phase, you will:</h2>
            <ul className="text-gray-300 text-lg max-w-lg mt-1 list-disc list-inside max-md:mt-1 max-md:px-1">
              <li className='font-semibold'>Master Multiple Income Strategies</li>
              <li className='font-semibold'>Develop Strategic Wealth-Building Plans</li>
              <li className='font-semibold'>Build Sustainable Financial Systems</li>
            </ul>
          </div>
          <img src={phase2img} alt="Strategic Implementation" className="w-full max-w-md h-auto order-first lg:order-last" />
        </div>
      </div>
    )
}
