function Footer(){
    const year = new Date().getFullYear()
    return (
        <div className="flex items-center justify-around w-full p-12 bg-stone-900">
            <p className="text-stone-300 ">&copy; {year} Lessons by Sparrow</p>
            <a className="text-stone-300" href="mailto:earnold@outlook.com">EMAIL</a>
            <a className="text-stone-300" href="tel:239-289-3414">CALL</a>            
        </div> 
   )
}

export default Footer