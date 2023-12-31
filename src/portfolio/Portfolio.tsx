import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/P3.png'

import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    // <div className='h-[100vh] w-[100vw]  px-20 py-6 '>
    //   <div className=' '>
    //     <h1 className='text-white text-2xl mb-6 text-center underline underline-offset-4 font-semibold tracking-wide'>
    //       Portfolio
    //     </h1>
    //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white'>
    //       <div className='relative p-10 overflow-hidden border-2 border-blue-950  bg-gradient-to-br from-transparent via-blue-950 to-transparent rounded-lg'>
    //         <img src={P3} alt='-' className='w-[300px] object-cover  h-full' />
    //         <div className='absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100'>
    //           <p className='text-[#ccc] font-semibold text-center mb-2'>
    //             Google DOC Clone
    //           </p>
    //           <div className='flex justify-between'>
    //             <Link
    //               to={'https://github.com/vayu02/GDOC-Server/'}
    //               rel='noreferrer'
    //               target='_blank'
    //               className='px-4 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
    //             >
    //               Github
    //             </Link>
    //             <Link
    //               to={'https://v-gdoc.netlify.app/'}
    //               rel='noreferrer'
    //               target='_blank'
    //               className='px-4 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
    //             >
    //               Preview
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='relative p-10 overflow-hidden border-2 border-blue-950  bg-gradient-to-br from-transparent via-blue-950 to-transparent rounded-lg'>
    //         <img src={P1} alt='-' className='w-[300px] object-cover  h-full' />
    //         <div className='absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100'>
    //           <p className='text-[#ccc] font-semibold text-center mb-2'>
    //             After Movie Research App
    //           </p>
    //           <div className='flex justify-between'>
    //             <Link
    //               to={'https://github.com/vayu02/tictactoe/'}
    //               rel='noreferrer'
    //               target='_blank'
    //               className='px-4 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
    //             >
    //               Github
    //             </Link>
    //             <Link
    //               to={'https://v-tictactoe.netlify.app/'}
    //               rel='noreferrer'
    //               target='_blank'
    //               className='px-4 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
    //             >
    //               Preview
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='relative overflow-hidden p-10 border-2 border-blue-950 bg-gradient-to-br from-transparent via-blue-950 to-transparent rounded-lg'>
    //         <img src={P2} alt='-' className='object-cover w-[300px] h-full' />
    //         <div className='absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100'>
    //           <p className='text-[#ccc] font-semibold text-center mb-2'>
    //             After Movie Research App
    //           </p>
    //           <div className='flex justify-between'>
    //             <Link
    //               to={'https://github.com/vayu02/after-movie-research-app'}
    //               rel='noreferrer'
    //               target='_blank'
    //               className='px-4 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
    //             >
    //               Github
    //             </Link>
    //             <Link
    //               to={'https://vayu02.github.io/after-movie-research-app/#/'}
    //               rel='noreferrer'
    //               target='_blank'
    //               className='px-4 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
    //             >
    //               Preview
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='h-screen w-screen px-4 md:px-8 lg:px-16 py-6'>
      <div className=''>
        <h1 className='text-white text-2xl md:text-3xl lg:text-4xl mb-6 text-center underline underline-offset-4 font-semibold tracking-wide'>
          Portfolio
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white'>
          <div className='relative p-4 md:p-6 lg:p-10 overflow-hidden border-2 border-blue-950 bg-gradient-to-br from-transparent via-blue-950 to-transparent rounded-lg'>
            <img src={P3} alt='-' className='w-full object-cover h-full' />
            <div className='absolute inset-0 flex flex-col justify-between p-2 md:p-4 lg:p-6 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100'>
              <p className='text-[#ccc] font-semibold text-center mb-2'>
                Google DOC Clone
              </p>
              <div className='flex justify-between'>
                <Link
                  to={'https://github.com/vayu02/GDOC-Server/'}
                  rel='noreferrer'
                  target='_blank'
                  className='px-3 md:px-4 lg:px-6 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
                >
                  Github
                </Link>
                <Link
                  to={'https://v-gdoc.netlify.app/'}
                  rel='noreferrer'
                  target='_blank'
                  className='px-3 md:px-4 lg:px-6 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
                >
                  Preview
                </Link>
              </div>
            </div>
          </div>
          <div className='relative p-4 md:p-6 lg:p-10 overflow-hidden border-2 border-blue-950 bg-gradient-to-br from-transparent via-blue-950 to-transparent rounded-lg'>
            <img src={P2} alt='-' className='w-full object-cover h-full' />
            <div className='absolute inset-0 flex flex-col justify-between p-2 md:p-4 lg:p-6 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100'>
              <p className='text-[#ccc] font-semibold text-center mb-2'>
                After Movie Research App
              </p>
              <div className='flex justify-between'>
                <Link
                  to={'https://github.com/vayu02/after-movie-research-app'}
                  rel='noreferrer'
                  target='_blank'
                  className='px-3 md:px-4 lg:px-6 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
                >
                  Github
                </Link>
                <Link
                  to={'https://vayu02.github.io/after-movie-research-app/#/'}
                  rel='noreferrer'
                  target='_blank'
                  className='px-3 md:px-4 lg:px-6 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
                >
                  Preview
                </Link>
              </div>
            </div>
          </div>
          <div className='relative p-4 md:p-6 lg:p-10 overflow-hidden border-2 border-blue-950 bg-gradient-to-br from-transparent via-blue-950 to-transparent rounded-lg'>
            <img src={P1} alt='-' className='w-full object-cover h-full' />
            <div className='absolute inset-0 flex flex-col justify-between p-2 md:p-4 lg:p-6 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100'>
              <p className='text-[#ccc] font-semibold text-center mb-2'>
                TIC TAC TOE
              </p>
              <div className='flex justify-between'>
                <Link
                  to={'https://github.com/vayu02/tictactoe/'}
                  rel='noreferrer'
                  target='_blank'
                  className='px-3 md:px-4 lg:px-6 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
                >
                  Github
                </Link>
                <Link
                  to={'https://v-tictactoe.netlify.app/'}
                  rel='noreferrer'
                  target='_blank'
                  className='px-3 md:px-4 lg:px-6 py-2 bg-blue-500 text-[#ccc] rounded hover:bg-blue-700'
                >
                  Preview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
