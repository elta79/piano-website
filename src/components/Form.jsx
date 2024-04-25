function Form(){
    return(
        <div className="p-4 my-8 bg-stone-300 xl:w-1/3">
            <form className="flex flex-col items-stretch px-4">
                <h2 className="py-6 text-xl">Contact me to get started today.</h2>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <label htmlFor="firstName"></label>
                    <input className="w-full p-2 mt-2 mr-2 border-2 border-stone-400 focus:outline-amber-400" type="text" id="firstName" placeholder="First Name" required />
                    <label htmlFor="lastName"></label>
                    <input className="w-full p-2 mt-2 border-2 border-stone-400 focus:outline-amber-400" type="text" id="lastName" placeholder="Last Name" required />
                </div>
                <div className="flex flex-col md:flex-row md:items-stretch md:justify-around">
                    <label htmlFor="phone"></label>
                    <input className="w-full p-2 mt-2 mr-2 border-2 border-stone-400 focus:outline-amber-400" type="phone" id="phone" placeholder="Phone Number" required />
                    <label htmlFor="email"></label>
                    <input className="w-full p-2 mt-2 border-2 border-stone-400 focus:outline-amber-400" type="email" id="email" placeholder="Email" required />
                </div>
                <div className="flex flex-col pt-2 md:flex-row md:items-stretch md:justify-around">
                    <label htmlFor="message"></label>
                    <textarea className="w-full p-2 border-2 border-stone-400 focus:outline-amber-400" id="message" placeholder="Type your message here"></textarea>                    
                </div>  
                <button className="w-full p-3 my-4 text-xl font-semibold tracking-widest border-t-2 border-l-2 bg-amber-400 text-amber-950 border-amber-300 hover:bg-amber-300 hover:border-amber-400">Submit</button>                            
                
            </form>
        </div>
    )
}

export default Form

// md:items-stretch md:justify-around