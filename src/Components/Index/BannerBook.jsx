import React from 'react'

const BannerBookComponents = () => {
  return (
    <header>
    <section
      className={`relative bg-[url(./Img/Index/bookcover.png)] bg-cover w-full bg-center h-[300px] `}
    >
       
      <div className="relative  px-4 py-32 sm:px-6 text-center  lg:items-center lg:px-8">
        
          <h1 className="text-3xl  text-white sm:text-5xl">
            Liberty Shop - Where Books Are Affordable
          </h1>
        
      </div>
    </section>
     <div>
        
        
    <div className=" text-center"><br />
      <p className="text-sm font-bold text-[#000]">Liberty Reads Books</p><br />
      <h1 className="text-2xl font-bold text-[#102249]">Books</h1><br />
      <h3 className=" text-[#667085]">Let's join our famous class, the knowledge provided will definitely be useful for you.</h3><br />
      <div className="flex justify-center gap-14">
      <h1 className="text-sl font-bold text-[#000]">Children's Books</h1>
      <h1 className="text-sl font-bold text-[#000]">Non-Fiction</h1>
      <h1 className="text-sl font-bold text-[#000]">Fiction</h1>
      <h1 className="text-sl font-bold text-[#000]">Health & Lifestyle </h1>
      </div>
    </div>
        
     
    </div>
  </header>
  )
}

export default BannerBookComponents