import { useEffect } from "react"


function AboutMe() {

    useEffect(()=>{
        function OnMouseMove(e){
        document.documentElement.style.setProperty('--cursor-x' , e.clientX + 'px')
        document.documentElement.style.setProperty('--cursor-y' , e.clientY + 'px')
    }
    window.addEventListener("mousemove" , OnMouseMove);

    return() =>{
        window.addEventListener("mousemove" , OnMouseMove);
    }
    },[])

    function OnMouseEnter(){
        document.documentElement.style.setProperty('--cursor-size' , '350px');
    }
    function OnMouseLeave(){
        document.documentElement.style.setProperty('--cursor-size' , '32px');
    }
return (
    <div className="">
    <main className="">
    <div className="flex h-screen bg-[#212121] items-center justify-center relative">
        <div className="dark_layer h-full w-full bg-[#212121] absolute flex items-center justify-center">
            <div className="text text_one w-[700px] text-center cursor-default select-none text-white">
                <p className="text-bold text-[50px] leading-none"
                onMouseEnter={OnMouseEnter}
                onMouseLeave={OnMouseLeave}
                > im a selectively skilled product designer with strong
                designer high quality & impactful digital experience.

                </p>
            </div>
        </div>

        <div className="red_layer h-full w-full bg-red-500 absolute flex items-center justify-center">
            <div className="text text_one w-[700px] text-center cursor-default select-none text-black">
            <p className="text-bold text-[50px] leading-none"
                onMouseEnter={OnMouseEnter}
                onMouseLeave={OnMouseLeave}
                > A visual designer - with skills and creactive ideas - making good work only if the paycheck is equally good. 
                </p>
            </div>
        </div>
    </div>
    </main>
    </div>
)
}

export default AboutMe