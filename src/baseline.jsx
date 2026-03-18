import yahoo from './assets/yahoo.png'
import digitaljournal from './assets/digitaljournal.png'
import thesun from './assets/thesun.png'

export default function Baseline() {
    return (
      <div className="baseline flex flex-col gap-6 max-sm:my-2 my-10 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center py-10 h-auto bg-[#010101] rounded-2xl max-w-7xl w-full">
        <p className='text-white max-sm:text-[22px] text-3xl font-bold text-center'>Take Control of Your Future with Coach JV Academy</p>
        <div className="list flex gap-2 flex-wrap justify-center items-center w-full px-5 h-auto max-sm:flex-wrap">
          <img src={yahoo} alt="" className="logo w-[80px] sm:w-[100px] h-16 sm:h-20" />
          <img src={digitaljournal} alt="" className="logo w-[120px] sm:w-[150px] h-16 sm:h-20" />
          <img src={thesun} alt="" className="logo w-[120px] sm:w-[150px] h-8 sm:h-10" />
          <img src={digitaljournal} alt="" className="logo w-[120px] sm:w-[150px] h-16 sm:h-20" />
          <img src={yahoo} alt="" className="logo w-[80px] sm:w-[100px] h-16 sm:h-20" />
          <img src={thesun} alt="" className="logo w-[120px] sm:w-[150px] h-8 sm:h-10" />
        </div>
      </div>
    )
}