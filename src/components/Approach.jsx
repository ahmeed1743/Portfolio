import { Link } from 'react-router-dom'

function Approach() {
    function TopPage() {
        scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <div className="bg-[#CDEA68] px-6 md:px-14 py-20">
            <p className=" text-black font-light text-[30px]  md:text-[54px] md:leading-[54px]">Ochi is a strategic partner for fast-grow­ing tech
                businesses that need to <span className="UnderLine relative">raise funds</span>,<span className="UnderLine relative">sell prod­ucts</span>,
                <span className="UnderLine relative">ex­plain com­plex ideas</span>, <span className="UnderLine relative">and hire great peo­ple.</span>
            </p>
            <div className="w-full bg-slate-700 h-[0.5px] mt-16"></div>
            <div className="flex gap-10 md:gap-20 mt-6 justify-between">
                <p className="font-light w-full md:w-1/2 text-[19px]">What you can expect :</p>
                <div className="flex flex-wrap gap-10 justify-around items-center">
                    <p className="w-full md:w-1/2">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                        <br /><br /><br />We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </p>
                    <div className=""><p>S:</p>
                        <a href="https://www.facebook.com/profile.php?id=100024717672487" className="block w-fit UnderLine relative">Facebook</a>
                        <a href="https://www.instagram.com/ahmed_el.sayed74/" className="block w-fit UnderLine relative">Instagram</a>
                        <a href="https://github.com/ahmeed1743" className="block w-fit UnderLine relative">Github</a>
                        <a href="https://www.linkedin.com/in/ahmed-elsayed-34737823b/" className="block w-fit UnderLine relative">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="w-full bg-slate-700 h-[0.5px] mt-16"></div>

            <div className="flex flex-wrap gap-20 mt-6 justify-between">
                <div className="">
                    <h1 className="font-light text-[50px]">Our approach:</h1>
                    <Link onClick={TopPage} to='/About' className="ApproachLink bg-[#212121] text-[#F1F1F1] flex gap-5 items-center w-fit py-2 px-5 pr-10 rounded-full relative">
                        <p className="text-[14px] font-light">Read More</p>
                        <div className="Circle w-2 h-2 rounded-full bg-[#F1F1F1] absolute right-3">
                        </div>
                    </Link>
                </div>
                <div className="w-[600px] h-[450px] rounded-3xl bg-cover bg-right-center bg-[url('./images/ochi-bg.webp')] cursor-pointer duration-1000 hover:scale-[0.95] "></div>
            </div>

        </div>
    )
}

export default Approach