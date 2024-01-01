const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-r
        from-sky-500 to-sky-500 mb-10">
            <div className="mx-auto px-20 py-10 flex 
            flex-col gap-9 md:flex-row items-center
            justify-evenly">
                <div className="mb-10 md:mb-0 text-center">
                <h1 className="text-5xl md:text-7xl text-white mb-4 font-extrabold">Summer sale</h1>

                    <p className="text-ig md:text-x1 text-black mb-3 font-serif">Enjoy Discounts On Selected Items</p>
                    <p className="text-3xl md:text-5xl text-yellow-400 font-extrabold">GET 50% OFF</p>

                    

                </div>
                <div className="w-1/3 relative aspect-video">
                <img
                 
                 src="/banner-image.png"
                 alt="Banner Image"
                className="object-contain"
                 />
                </div>
 

                </div>
            </div>
        
     );
}
 
export default HomeBanner;