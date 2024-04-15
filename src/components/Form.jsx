function Form(){
    return(
        <div className="p-4 my-8 bg-gray-300  xl:w-1/3">
            <form className="flex flex-col items-stretch">
                <h2 className="text-xl">Contact me to get started today.</h2>
                <div className="flex flex-col md:flex-row md:items:stretch md:justify-around">
                    <label htmlFor="firstName"></label>
                    <input className="p-2 mt-2 border-2 border-gray-500" type="text" id="firstName" placeholder="First Name" required />
                    <label htmlFor="lastName"></label>
                    <input className="p-2 mt-2 border-2 border-gray-500" type="text" id="lastName" placeholder="Last Name" required />
                </div>
                <div className="flex flex-col md:flex-row md:items:stretch md:justify-around">
                    <label htmlFor="phone"></label>
                    <input className="p-2 mt-2 border-2 border-gray-500" type="phone" id="phone" placeholder="Phone Number" required />
                    <label htmlFor="email"></label>
                    <input className="p-2 mt-2 border-2 border-gray-500" type="email" id="email" placeholder="Email" required />
                </div>
                <div className="flex flex-col pt-2 md:flex-row md:items:stretch md:justify-around">
                    <label htmlFor="message"></label>
                    <textarea className="w-full p-2 border-2 border-gray-500" id="message" placeholder="Type your message here"></textarea>                    
                </div>  
                <button className="w-full p-3 mt-4 bg-yellow-500">Submit</button>                            
                
            </form>
        </div>
    )
}

export default Form