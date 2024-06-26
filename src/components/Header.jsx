// trigger Headwind cmd + shift + T

import { AnchorLink } from "react-anchor-navigation"

function Header(){
    return (
        <div className="fixed top-0 flex flex-col items-center w-full px-4 py-4 shadow-md bg-stone-900 lg:flex-row lg:items-end">
            <div className="flex items-center w-full pb-4">
                <div className="relative w-20 h-20 p-8 rounded-full bg-amber-400">
                    <svg className="absolute w-12 h-12 fill-current left-4 top-4"
                        fill="#000000" 
                        height="800px" 
                        width="800px" 
                        version="1.1" 
                        id="Layer_1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" 
                    >
                        <g>
                            <path d="M503.319,5.939c-5.506-4.705-12.783-6.767-19.958-5.635L169.555,49.852c-12.04,1.901-20.909,12.28-20.909,24.47v99.097
                                v156.903H99.097C44.455,330.323,0,371.073,0,421.161C0,471.25,44.455,512,99.097,512c54.642,0,99.097-40.75,99.097-90.839v-66.065
                                V194.588l264.258-41.725v136.169h-49.548c-54.642,0-99.097,40.75-99.097,90.839s44.455,90.839,99.097,90.839
                                S512,429.959,512,379.871v-66.065V123.871V24.774C512,17.529,508.827,10.646,503.319,5.939z"
                            />
                        </g>
                    </svg>
                </div>            
                <AnchorLink href="#" className="pl-8 text-4xl text-stone-300 ">Lessons by Sparrow</AnchorLink>
            </div>
            
            <div className="flex justify-between w-full text-xl text-stone-300 lg:w-1/3">
                <AnchorLink href="#lessons" className="hover:text-amber-400">Lessons</AnchorLink>
                <AnchorLink href="#about" className="hover:text-amber-400">About</AnchorLink>
                <AnchorLink href="#contact" className="hover:text-amber-400">Contact</AnchorLink>                
            </div>
        </div> 
    )
}

export default Header