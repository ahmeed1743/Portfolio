// import { motion } from "framer-motion"

function Marquee() {


    return (
        <div data-scroll data-scroll-speed="0.9" className="w-full bg-[#004D43] py-10 overflow-hidden">
            <div className=" MarqueeText flex  relative gap-5">
                <h1 className="text-[#F1F1F1] font-['FoundersGrotesk'] text-bold text-[200px] md:text-[400px] leading-none pb-5 md:pb-10 select-none whitespace-nowrap uppercase border-b-2 border-t-2 border-[#F1F1F1]">We are Ochi</h1>
                <h1 className="text-[#F1F1F1] font-['FoundersGrotesk'] text-bold text-[200px] md:text-[400px] leading-none pb-5 md:pb-10 select-none whitespace-nowrap uppercase border-b-2 border-t-2 border-[#F1F1F1]">We are Ochi</h1>
                <h1 className="text-[#F1F1F1] font-['FoundersGrotesk'] text-bold text-[200px] md:text-[400px] leading-none pb-5 md:pb-10 select-none whitespace-nowrap uppercase border-b-2 border-t-2 border-[#F1F1F1]">We are Ochi</h1>
                <h1 className="text-[#F1F1F1] font-['FoundersGrotesk'] text-bold text-[200px] md:text-[400px] leading-none pb-5 md:pb-10 select-none whitespace-nowrap uppercase border-b-2 border-t-2 border-[#F1F1F1]">We are Ochi</h1>
            </div>
        </div>
    )
}

export default Marquee