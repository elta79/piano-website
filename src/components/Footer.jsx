function Footer(){
    const year = new Date().getFullYear()
    return (
        <div className="flex items-center justify-around w-full py-12 bg-stone-900 ">
            <div className="">
                <p className=" text-stone-300">&copy; {year} Lessons by Sparrow</p>
            </div> 

            <div className="flex">
                <a className="flex items-center pr-2 text-stone-300 hover:text-amber-400" href="#">
                    <img src="../images/email.png" alt="email icon" className="w-8 h-8 m-2" />
                    EMAIL
                </a>            
                            
                <a className="flex items-center text-stone-300 hover:text-amber-400" href="#">
                    <img src="../images/phone.png" alt="phone icon" className="w-8 h-8 m-2" />
                    CALL
                </a> 
            </div>            
              
                    
            
        </div > 
   )
}

export default Footer