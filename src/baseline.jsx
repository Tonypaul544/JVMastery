import heroImg from './assets/hero.png'
import yahoo from './assets/yahoo.png'
import digitaljournal from './assets/digitaljournal.png'
import thesun from './assets/thesun.png'

export default function Baseline() {
    return (
      <div className="baseline flex flex-col gap-6 max-sm:my-2 my-10 mx-10 px-20 w-full max-sm:px-2 items-center justify-center m-auto my-10 py-10 px-5 h-auto bg-gray-400/15 rounded-3xl">
        <p className='text-white max-sm:text-lg max-sm:m-auto text-3xl font-bold text-center flex items-center m-auto'>Take Control of Your Future with The Warrior Academy</p>
        <div className="list flex gap-2 wrap justify-between items-center m-auto w-[100%] px-5 h-auto">
          <img src={yahoo} alt="" className="logo logo w-[100px] h-20" />
          <img src={digitaljournal} alt="" className="logo logo w-[150px] h-20" />
          <img src={thesun} alt="" className="logo logo w-[150px] h-10" />
          <img src={digitaljournal} alt="" className="logo logo w-[150px] h-20" />
          <img src={yahoo} alt="" className="logo logo w-[150px] h-20" />
          <img src={thesun} alt="" className="logo logo w-[150px] h-10" />
        </div>
      </div>
    )
}