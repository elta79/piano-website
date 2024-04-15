import { AnchorSection } from "react-anchor-navigation"
import Form from "./Form"


function Body(){
    return(
        <div className="flex flex-col items-center h-full m-0 bg-gray-700">
            <section className="flex flex-col-reverse border-2 border-red-400 h-dvh lg:flex-row lg:pt-48">
                <div className="p-6 lg:w-1/2">
                    <h1 className="pt-6 text-6xl text-gray-200">Unlock Your Musical Potential!</h1>
                    <p className="pt-6 text-3xl text-gray-400">Learn to play piano with personalized lessons tailored to your skill level and musical goals. From beginners to advanced players, we offer individual sessions designed to nurture your passion for music.</p>
                    <div className="flex items-center justify-between py-8 ">
                        <p className="text-white">Enroll in lessons now!</p>
                        <a href="#" className="p-2 bg-yellow-400">Request a Date</a>
                    </div>                    
                </div>  
                <img src="../public/pianokeys.jpg" className="" />
            </section>

            <AnchorSection id="lessons" />
            <section className="flex flex-col items-center justify-center border-2 border-red-500 h-dvh">
                <h2 className="pb-8 text-4xl text-gray-200 ">Lesson Information</h2>
                <div className="flex flex-col lg:flex-row">                    
                    <img src="../public/pianokeys.jpg" className="p-6 " /> 
                    <h3 className="px-6 pt-6 text-gray-200">Offering In-Home Lessons</h3>       
                    <ul>
                        <li className="px-6 pt-6 text-gray-200">blah blah</li>
                        <li className="px-6 pt-6 text-gray-200">blah blah</li>   
                        <li className="px-6 pt-6 text-gray-200">blah blah</li>   
                    </ul>             
                </div>
            </section>

            <AnchorSection id="about" />
            <section className="flex flex-col items-center justify-center h-full pt-48 border-2 border-red-600">
                <h2 className="pb-6 text-4xl text-gray-200">About Earl</h2>
                <div className="flex flex-col lg:flex-row">
                    <img src="../public/placeholder.png" className="w-2/3 m-auto my-6 border-8 border-blue-900"/>               
                    <p className="px-6 pt-6 text-gray-200">Earl boasts over two decades of experience as a music educator. He earned his Bachelor&apos;s degree in music education with a vocal emphasis from Florida A&M University in 2002, followed by a Master&apos;s degree in Music Education from the University of Florida in 2010.</p>
                    <p className="px-6 pt-6 text-gray-200">With a remarkable tenure of 35 years, Earl has been instrumental as a music director in various ministries. His expertise extends to directing music for numerous productions, including recent successes such as <q>Sistas the Musical</q> ,<q>Avenue Q</q>, and <q>The Color Purple</q>.</p>
                    <p className="px-6 pt-6 text-gray-200">Earl&apos;s teaching philosophy revolves around making music lessons enjoyable by incorporating popular music that resonates with his students. Whether they&apos;re learning drums, piano, or vocal techniques, Earl ensures that his students have fun while mastering their craft.</p> 
                    <p className="px-6 pt-6 text-gray-200">Beyond his professional endeavors, Earl Sparrow Jr. is also community activist promoting social justice and change through community services and working with charity organizations in Lee County, including Fort Myers, FL and Lehigh Acres, FL.  Earl is an active member of Phi Mu Alpha SINFONIA, Alpha Phi Alpha Fraternity, Inc., and proudly affiliates with the Prince Hall Masons.</p>
                </div>    
            </section>
            
            <AnchorSection id="contact" />
            <section className="flex flex-col items-center justify-center border-2 border-red-700 h-dvh">
                <h2 className="text-4xl text-gray-200">Contact</h2>
                <Form />
            </section>
            
            
        </div>
    )
}
export default Body