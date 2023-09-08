import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import Hero from '../assets/Hero.png'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CV from '../assets/CV.pdf'

const About = () => {
  return (
    <main className='h-full font-primary'>
      <section id='about' className='px-4 lg:px-10 pt-4'>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='lg:flex items-center justify-center h-max bg-gradient-to-br from-transparent via-blue-950 to-transparent rounded-2xl border-2 border-gray-800'>
            <img
              src={Hero}
              alt=''
              className='w-full h-max rounded-lg overflow-hidden transform hover:rotate-10 transition-transform hidden lg:block'
            />
          </div>

          <div className='about__content h-full'>
            <div className='hidden lg:block'>
              <p className='font-bold text-4xl lg:text-6xl text-center lg:text-start text-[#ccc] mb-6 leading-tight'>
                Ashish
                <span className='text-[#eb4a4c] '> Shejwal</span>
              </p>
            </div>
            {/* Image and Name Order for Mobile */}
            <div className='lg:hidden text-center'>
              <p className='font-bold text-4xl lg:text-6xl text-[#ccc] mb-6 leading-tight'>
                Ashish
                <span className='text-[#eb4a4c] '> Shejwal</span>
              </p>
              <div className='mb-4'>
                <img
                  src={Hero}
                  alt=''
                  className='w-full h-max rounded-lg overflow-hidden transform hover:rotate-10 transition-transform'
                />
              </div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center'>
              <article className='bg-blue-950 shadow-lg p-6 rounded-lg'>
                <FaAward className='text-[#f3c623] text-2xl mb-2' />
                <h5 className='text-lg font-semibold text-[#CCC]'>
                  Experience
                </h5>
                <small className='text-sm text-white'>1.3 years Working</small>
              </article>
              <article className='bg-blue-950 shadow-lg p-6 rounded-lg'>
                <VscFolderLibrary className='text-[#f3c623] text-2xl mb-2' />
                <h5 className='text-lg font-semibold text-[#CCC]'>Projects</h5>
                <small className='text-sm text-[#CCC]'>8+ completed</small>
              </article>
              <div className='text-white flex lg:flex-col justify-center items-center gap-y-3 gap-x-4'>
                <Link
                  to='http://github.com/vayu02'
                  rel='noreferrer'
                  target='_blank'
                >
                  <BsGithub className='' size='35' />
                </Link>
                <Link
                  to='https://linkedin.com/in/vayu02'
                  rel='noreferrer'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    enableBackground='new 0 0 100 100'
                    viewBox='0 0 100 100'
                    width={'35'}
                    height={'35'}
                    id='linkedin'
                  >
                    <path
                      fill='#0077b5'
                      d='M90.479,2.513c-14.611-0.041-68.502,0.028-80.958,0C5.645,2.513,2.5,5.562,2.5,9.317v81.381 c0,3.756,3.145,6.802,7.021,6.802h80.958c3.878,0,7.021-3.046,7.021-6.803V9.317C97.5,5.562,94.357,2.513,90.479,2.513z'
                    ></path>
                    <path
                      fill='#f1f1f1'
                      d='M53.453 82.005c0 0 0-23.878 0-23.879-.139-4.388 2.484-8.483 7.762-8.667 5.143 0 7.201 3.921 7.201 9.67v22.875h14.214V57.485c0-13.135-7.012-19.247-16.365-19.247-7.668 0-11.036 4.285-12.907 7.204l.095-6.2H39.239c.185 4.012-.001 42.763-.001 42.763L53.453 82.005zM31.37 63.461v-24.22H17.154v42.763h14.217C31.368 77.514 31.376 67.888 31.37 63.461zM24.265 33.404c4.956 0 8.042-3.284 8.042-7.387-.041-9.897-16.004-9.787-15.991-.001C16.305 30.151 19.476 33.455 24.265 33.404z'
                    ></path>
                  </svg>
                </Link>

                <Link
                  to='https://twitter.com/vayuu02'
                  rel='noreferrer'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    width={'35'}
                    height={'35'}
                    id='twitter'
                  >
                    <path
                      fill='#03A9F4'
                      d='M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z'
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <p className='mt-8 text-[#CCC] text-[14.5px] leading-relaxed cursor-pointer'>
              I love learning new things, and even more, I enjoy building them.
              My passion for computers started during my school days when I got
              my first computer in the 4th grade. I would spend my time drawing
              in MS Paint and playing GTA Vice City all day long. I often
              wondered how these games were made. At that time, I had a Windows
              XP computer with a 256GB hard drive. When the games would hang,
              and the computer stopped working, a friend of my dad would come
              over and perform some magic to fix it. Miraculously, everything
              would start working again. The next time my computer hung, I
              decided to copy his steps. That's when I began learning how to
              boot or flash a drive. This is how my journey into the world of
              computers began.
              <br />
            </p>
            <div className='mt-4 mb-28 lg:mb-0 flex justify-center gap-3 text-white'>
              <a
                href={CV}
                download
                className='bg-gradient-to-r hover:underline underline-offset-2 from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 text-[#ddd] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline px-10 py-2 rounded'
              >
                Download CV
              </a>
              <Link
                to='contact'
                className='bg-gradient-to-r hover:underline underline-offset-2 from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 text-[#ddd] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline px-10 py-2 rounded'
              >
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
