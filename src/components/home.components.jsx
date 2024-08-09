export const Hero = ({title, subtitle, subtitle_two, iconButton, textButton}) => {
    return (
        <div className="relative p-6 md:px-16 pt-10 lg:h-500 md:h-460 h-470">
             <div className="relative w-full h-full bg-hero bg-no-repeat bg-center bg-cover rounded-52">
                  <div className="absolute px-25 top-0 w-full h-full flex flex-col gap-10.5 items-center justify-center">
                       <div className="flex flex-col gap-4.5 items-center justify-center">
                          <div className="flex gap-3 items-center md:px-32 px-6">
                              <p className='w-66 h-0 rounded-50 border border-white'></p> 
                              <p className="font-archivo text-white text-center md:text-sm text-xs">{subtitle}</p>
                              <p className='w-66 h-0 rounded-50 border border-white'></p> 
                          </div>
                          <p className="lg:text-5xl md:text-4xl text-3xl md:px-16 px-6 text-white font-chillaxBold uppercase text-center">{title}</p>
                          <p className="font-archivo md:px-32 px-6 md:text-base text-xs text-white text-center">{subtitle_two}</p>
                       </div>
                       <div className="flex">
                          <a href="/" className="bg-white rounded-3xl px-6 py-3 text-black text-sm font-archivo font-semibold">{textButton}</a>
                          <a href="/" className="bg-white rounded-full px-3 pt-3 flex">
                              <img src={iconButton} alt="arrow" className='w-5 h-5' />
                          </a>
                       </div>
                  </div>
             </div>
        </div>
    )
}


