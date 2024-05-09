function Footer(){
    const year = new Date().getFullYear()
    return (
        <div className="flex items-center justify-around w-full py-12 lg:justify-between lg:px-48 bg-stone-900 ">
            <p className=" text-stone-300">&copy; {year} Lessons by Sparrow</p>
            
            <div className="flex flex-col lg:flex-row">
                <a className="flex items-center pl-6 text-stone-300 hover:text-amber-400" href="#">
                    <img src="../images/email.png" alt="email icon" className="w-8 h-8 m-2" />
                    EMAIL
                </a>            
                            
                <a className="flex items-center pt-6 pl-6 lg:pt-0 text-stone-300 hover:text-amber-400" href="#">
                    <img src="../images/phone.png" alt="phone icon" className="w-8 h-8 m-2" />
                    CALL
                </a> 
            </div>       
            
        </div > 
   )
}

export default Footer