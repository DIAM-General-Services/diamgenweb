import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
    return (
      <div className="relative bg-white h-screen">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-4 lg:pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <img
                className="h-11 opacity-90"
                src="DIAMLogoHorizontal.png"
                alt="The image features a horizontal logo for 'DIAM General Services, LLC'. The logo is composed of capital letters spelling out 'DIAM' in a bold, sans-serif font. The letters are colored blue with a white outline. The 'D' is stylized to incorporate a amber octagonal shape, resembling a stop sign, with a white border and a white interior. Inside this octagon, there is a negative space in the shape of the letter 'D'. The design is clean, modern, and easily readable, with a simple color palette that emphasizes blue and white. The logo conveys a sense of professionalism and reliability, and the stylized 'D' adds a unique branding element that could be associated with the company's identity."
              />
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                General services<br />for government<br />and business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From staffing and consulting to procurement and more,<br />we've got you covered.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Download Capability Statement PDF <DocumentArrowDownIcon aria-hidden="true" className='ml-2 h-4 w-4' />
              </a>
            </div>
            </div>
            <p className="md:bottom-0 lg:absolute mt-8 mb-0 lg:mb-4 text-xs lg:leading-5 text-gray-500">
              &copy; 2024 DIAM General Services, LLC. All rights reserved.
            </p>

          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover h-screen bottom-0 sm:h-full md:inset-0 md:aspect-auto"
              src="pendrawing_hero.png"
              alt="This is a highly detailed black-and-white pen drawing of a bustling cityscape filled with numerous figures and elements symbolic of business, technology, and innovation. The scene is teeming with a variety of people, depicted in business attire, engaged in different activities such as meetings, presentations, and casual discussions. Various modes of transportation like cars, an airplane, and a helicopter are illustrated. The background is a complex mesh of gears, clocks, charts, and buildings, representing a hive of industry and enterprise. The artwork is dense with information and visual metaphors, including elements like light bulbs and computer screens, indicating a vibrant environment of ideas and digital advancement. There is a central staircase leading towards a large eye, which could be interpreted as a metaphor for vision or leadership. The overall composition conveys a dynamic and interconnected world of professional human activity within a modern urban setting."
            />
          </div>
        </div>
        
      </div>
    )
  }
  