function Footer(){
    const year = new Date().getFullYear()
    return (
        <div className="flex items-center justify-around w-full p-12 bg-stone-900">
            <p className="text-stone-300 ">&copy; {year} Lessons by Sparrow</p>
            <a className="text-stone-300" href="#">EMAIL</a>
            <a className="text-stone-300" href="#">CALL</a>            
        </div> 
   )
}

export default Footer