import { AnchorSection } from "react-anchor-navigation"
import Form from "./Form"


function Body(){
    return(
        <div className="flex flex-col flex-grow w-full bg-stone-700 no-scrollbar">
            <section className="flex flex-col-reverse pt-40 h-dvh lg:flex-row lg:pt-24">
                <div className="flex flex-col p-6 lg:w-1/2 lg:justify-around">
                    <h1 className="pt-6 text-6xl text-stone-200">Unlock Your Musical Potential!</h1>
                    <p className="pt-6 text-3xl text-stone-400 lg:leading-normal lg:text-4xl lg:pr-20">Learn to play piano with personalized lessons tailored to your skill level and musical goals. From beginners to advanced players, we offer individual sessions designed to nurture your passion for music.</p>
                    <div className="flex items-center justify-between py-8 lg:justify-start">
                        <p className="text-lg text-white lg:text-4xl lg:pr-20">Enroll in lessons now!</p>
                        <a href="#" className="p-2 font-semibold tracking-widest border-t-2 border-l-2 bg-amber-400 text-amber-950 border-amber-300">Contact Me</a>
                    </div>                    
                </div>    
                <div className="border-2 border-red-400 lg:overflow-hidden lg:w-1/2">
                <img src="../images/fullPiano2.png" className="lg:object-contain" />
                </div>             
                
            </section>

            <AnchorSection id="lessons" />
            <section className="flex flex-col items-center justify-center h-dvh">
                <h2 className="pb-8 text-4xl text-stone-200 ">Lesson Information</h2>
                <div className="flex flex-col lg:flex-row">                    
                    <img src="../images/sheetmusic.jpg" className="p-6 lg:w-1/2" /> 
                    <div>
                        <h3 className="px-6 pt-6 text-3xl text-stone-300 lg:leading-relaxed">Offering In-Home Lessons</h3>       
                        <ul>
                            <li className="px-20 pt-6 text-xl text-stone-200 lg:text-2xl"><strong>Personalized Instruction</strong> - Lessons tailored to learning style and goals of student.</li>
                            <li className="px-20 pt-6 text-xl text-stone-200 lg:text-2xl"><strong>One-on-One Attention</strong> - Allows for focused attention leading to faster skill development.</li>
                            <li className="px-20 pt-6 text-xl text-stone-200 lg:text-2xl"><strong>Flexible Scheduling</strong> - Homeschool? Lets schedule during the weekday.</li>
                            <li className="px-20 pt-6 text-xl text-stone-200 lg:text-2xl"><strong>Comfortable Learning Environment</strong> - Enhances focus and learning.</li>   
                            <li className="px-20 pt-6 text-xl text-stone-200 lg:text-2xl"><strong>Convenience</strong> - No need to travel!</li>
                        </ul> 
                    </div>                     
                               
                </div>
                <p className="px-6 pt-16 text-center text-stone-200 lg:text-3xl">Want a change of scenery? Meet me at <a href="https://www.ensembleschools.com/fort-myers/staff/earl-s/" className="text-amber-400" >FORT MYERS SCHOOL OF MUSIC</a> for studio lessons.</p>
            </section>

            <AnchorSection id="about" />
            <section className="flex flex-col items-center justify-center h-dvh">
                <h2 className="pb-6 text-4xl text-stone-200">About Earl</h2>
                <div className="flex flex-col lg:flex-row">
                    <img src="../images/earl.png" className="w-2/3 m-auto my-6 border-8 border-stone-600"/>  
                    <div className>
                    <p className="px-6 pt-6 text-lg text-stone-200">Earl boasts over two decades of experience as a music educator. He earned his Bachelor&apos;s degree in music education with a vocal emphasis from Florida A&M University in 2002, followed by a Master&apos;s degree in Music Education from the University of Florida in 2010.</p>
                    <p className="px-6 pt-6 text-lg text-stone-200">With a remarkable tenure of 35 years, Earl has been instrumental as a music director in various ministries. His expertise extends to directing music for numerous productions, including recent successes such as <q>Sistas the Musical</q>, <q>Avenue Q</q>, and <q>The Color Purple</q>.</p>
                    <p className="px-6 pt-6 text-lg text-stone-200">Earl&apos;s teaching philosophy revolves around making music lessons enjoyable by incorporating popular music that resonates with his students. Whether they&apos;re learning drums, piano, or vocal techniques, Earl ensures that his students have fun while mastering their craft.</p> 
                    <p className="px-6 pt-6 text-lg text-stone-200">Beyond his professional endeavors, Earl Sparrow Jr. is also community activist promoting social justice and change through community services and working with charity organizations in Lee County, including Fort Myers, FL and Lehigh Acres, FL.  Earl is an active member of Phi Mu Alpha SINFONIA, Alpha Phi Alpha Fraternity, Inc., and proudly affiliates with the Prince Hall Masons.</p>
                    </div>             
                    
                </div>    
            </section>
            
            <AnchorSection id="contact" />
            <section className="flex flex-col items-center justify-center h-dvh">
                <h2 className="text-4xl text-stone-200">Contact</h2>
                <Form />
            </section>
            
            
        </div>
    )
}
export default Body