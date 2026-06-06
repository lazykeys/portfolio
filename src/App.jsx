import { Button } from "./components/Button.jsx";
import { Experience } from "./components/Experience.jsx";
import { Svg } from "./components/Svg.jsx";
import { Image } from "./components/Image.jsx";
import resume from "./assets/data/Jagger Walraven's Resume.pdf";

export default function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col m-6 gap-6 h-full w-auto lg:grid lg:grid-cols-2 lg:max-w-5xl lg:justify-center lg:m-8">
        <div className="flex flex-col h-full gap-6">
          <Header/>
          <Subheader/>
          <About/>
        </div>
        <div className="lg:row-span-2">
          <Experience/>
        </div>
        <div>
          <Links/>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="flex flex-col justify-between items-baseline h-48 lg:h-56">
      <h1 className="text-lk-6 font-DigitalDiscoRegular text-3xl lg:text-4xl">
        Hello! I'm
      </h1>
      <Image className="w-64 h-auto lg:w-80" src="lazykeys" width="960" height="320" alt="lazykeys logo"/>
      <h1 className="text-lk-6 font-DigitalDiscoRegular text-3xl lg:text-4xl">
        aka Jagger Walraven
      </h1>
    </header>
  )
}

function Subheader() {
  return (
    <div className="flex flex-col h-fit">
      <h2 className="text-lk-6 font-DigitalDiscoThin text-2xl lg:text-3xl">Game & Frontend Developer</h2>

      <div className="flex gap-2">
        <svg className="w-6 h-7 lg:w-8 lg:h-8" viewBox="-3 0 20 20"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-223.000000, -5399.000000)" className="fill-lk-3"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M174,5248.219 C172.895,5248.219 172,5247.324 172,5246.219 C172,5245.114 172.895,5244.219 174,5244.219 C175.105,5244.219 176,5245.114 176,5246.219 C176,5247.324 175.105,5248.219 174,5248.219 M174,5239 C170.134,5239 167,5242.134 167,5246 C167,5249.866 174,5259 174,5259 C174,5259 181,5249.866 181,5246 C181,5242.134 177.866,5239 174,5239" id="pin_fill_sharp_circle-[#000000]"> </path> </g> </g> </g> </g></svg>
        <h3 className="text-lk-6 font-DigitalDiscoThin text-2xl lg:text-3xl">Ohio, USA</h3>
      </div>
    </div>
  )
}

function About() {
  return (
    <p className="text-lk-6 font-DigitalDiscoThin text-base lg:text-xl max-w-96">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )
}

function Links() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:max-w-sm">
      <Button variant="primary" onClick={() => window.open(resume)}>
        <div className="flex justify-center items-baseline gap-2">
          <span className="text-3xl font">Resume</span>
          <svg className="w-6 h-5 fill-lk-6" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path class="st0" d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308 c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"></path> <path class="st0" d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659 c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"></path> <path class="st0" d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695 h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35 c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899 c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"></path> </g> </g></svg>
        </div>
      </Button>
      <nav className="flex items-center justify-between w-full pt-2 pl-4 pr-4">
        <Svg icon="github" href="https://github.com/lazykeys"></Svg>
        <Svg icon="itch" href="https://lazykeys.itch.io/"></Svg>
        <Svg icon="linkedin" href="https://www.linkedin.com/in/jaggerwalraven/"></Svg>
        <Svg icon="email" href="mailto:jagger.walraven.stcharlesprep@gmail.com"></Svg>
      </nav>
    </div>
  )
}