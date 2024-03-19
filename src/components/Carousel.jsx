import { useState, useEffect, useRef } from 'react';

const Carousel = () => {
    // State variables
    const [progress, setProgress] = useState(50);
    const [active, setActive] = useState(0);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);

    // Constants
    const speedWheel = 0.02;
    const speedDrag = -0.1;


    // Function to calculate zIndex
    const getZindex = (array, index) =>
        array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

    // Refs for DOM elements
    const carouselRef = useRef(null);


    // Function to display items
    const displayItems = (item, index, active) => {
        const zIndex = getZindex([...carouselRef.current.children], active)[index];
        item.style.setProperty('--zIndex', zIndex);
        item.style.setProperty('--active', (index - active) / carouselRef.current.children.length);
    };

    // Animation function
    const animate = () => {
        const newProgress = Math.max(0, Math.min(progress, 100));
        setActive(Math.floor(newProgress / 100 * (carouselRef.current.children.length - 1)));
        [...carouselRef.current.children].forEach((item, index) => displayItems(item, index, active));
    };

    // Event listeners
    useEffect(() => {
        document.addEventListener('wheel', handleWheel);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchend', handleMouseUp);

        // Cleanup on unmount
        return () => {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [progress, isDown]);  // Adding progress and isDown to the dependency array


    // Event handler for arrow click
    const handleArrowClick = direction => {
        if (direction === 'left') {
            setProgress(prevProgress => prevProgress - 10);
        } else if (direction === 'right') {
            setProgress(prevProgress => prevProgress + 10);
        }
        animate();
    };

    const handleWheel = e => {
        const wheelProgress = e.deltaX * speedWheel; // Use deltaX for horizontal scroll
        setProgress(prevProgress => prevProgress + wheelProgress);
        animate();
        if (!isDown) return;
        const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        const mouseProgress = (x - startX) * speedDrag;
        setProgress(prevProgress => prevProgress + mouseProgress);
        setStartX(x);
        animate();
    };


    const handleMouseUp = () => {
        setIsDown(false);
    };
    return (
        <div className=''>
            <div className="carousel dark:bg-[#212121]" ref={carouselRef} >
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">01</div>
                        <img src="https://c1.wallpaperflare.com/preview/467/43/821/italy-milan-milano-street-architecture-lombardy.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">02</div>
                        <img src="https://c0.wallpaperflare.com/preview/107/501/95/italy-milano-duomo-di-milano-italy-clouds.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">03</div>
                        <img src="https://c1.wallpaperflare.com/preview/806/892/932/architecture-art-baroque-fountain.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">04</div>
                        <img src="https://c0.wallpaperflare.com/preview/988/735/798/italy-roma-trevi-fountain-rome.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">05</div>
                        <img src="https://c0.wallpaperflare.com/preview/672/111/603/egypt-alexandria-governorate-sky-cloud.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">06</div>
                        <img src="https://c1.wallpaperflare.com/preview/497/530/479/ancient-architecture-artistic-arts.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">07</div>
                        <img src="https://c4.wallpaperflare.com/wallpaper/968/907/818/architecture-old-building-town-street-wallpaper-preview.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">08</div>
                        <img src="https://c0.wallpaperflare.com/preview/413/416/887/egypt-alexandria-rain-raining.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">09</div>
                        <img src="https://c1.wallpaperflare.com/preview/916/205/183/alexandria-building-egypt-photos.jpg" />
                    </div>
                </div>
                <div className="carousel-item" >
                    <div className="carousel-box">
                        <div className="carousel-num">10</div>
                        <img src="https://c0.wallpaperflare.com/preview/226/352/929/italy-milano-corso-vittorio-emanuele-ii-milan.jpg" />
                    </div>
                </div>
                <div className="flex w-fit absolute bottom-5 left-5 gap-5">
                    {/* Arrow icons for navigation */}
                    <div className="arrow-icon cursor-pointer border-2 border-[#CDEA68] bg-[rgba(0,0,0,0.3)] flex rounded-full p-2 dark:bg-[rgba(255,255,255,0.3)]" onClick={() => handleArrowClick('left')} ><box-icon type='solid' name='chevron-left'></box-icon></div>
                    <div className="arrow-icon cursor-pointer border-2 border-[#CDEA68] bg-[rgba(0,0,0,0.3)] flex rounded-full p-2 dark:bg-[rgba(255,255,255,0.3)]" onClick={() => handleArrowClick('right')} ><box-icon type='solid' name='chevron-right'></box-icon></div>
                </div>

                <div className="SlideText absolute bottom-5 right-10 flex items-center gap-5">
                    <p className="bg-gradient-to-l from-[#004D43] to-[#CDEA68] bg-clip-text text-transparent uppercase text-[8vw] font-['FoundersGrotesk']">slide <b className='text-[5vw]'>&gt;&gt;</b></p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
