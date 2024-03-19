
import { useEffect, useState } from "react"
function Eyes() {

    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180);
        })
    })
    return (
        <div className='flex items-center justify-center cursor-pointer relative w-full h-screen bg-cover bg-center bg-[url("./images/Green-bg.jpg")]'>
            <div className="absolute flex items-center justify-center gap-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-1/2">
                <div className="bg-[#F1F1F1] rounded-full h-[15vw] w-[15vw] flex items-center justify-center">
                    <div className="relative bg-[#212121] w-2/3 h-2/3 rounded-full flex items-center justify-center">
                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full h-10 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <div className="w-10 h-10 bg-[#F1F1F1] rounded-full border-8 border-[#10574F]"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F1F1F1] rounded-full h-[15vw] w-[15vw] flex items-center justify-center">
                    <div className="relative bg-[#212121] w-2/3 h-2/3 rounded-full flex items-center justify-center">
                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full h-10 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <div className="w-10 h-10 bg-[#F1F1F1] rounded-full border-8 border-[#10574F]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes;