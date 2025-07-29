import React from "react";

// marquee data
import { MarqueeData } from "data.js";

const HorizontalMarquee = () => {

    const doubledComponents = MarqueeData ? [...MarqueeData, ...MarqueeData] : [];

    return (
        <>

            <div
                className="slider-container w-full flex-nowrap relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

                <div className="marqueeSliderLeft flex items-center gap-5">
                    {
                        doubledComponents.map((item, index) => (
                            <a
                                href={item.url}
                                className="py-2 px-6 dark:bg-[#0FABCA]/90 bg-[#0FABCA] capitalize border dark:border-[#0FABCA]/90 border-[#0FABCA] text-white rounded font-medium whitespace-nowrap"
                                key={index}
                            >
                                {item.title}
                            </a>
                        ))
                    }
                </div>

            </div>

            <div className="slider-container w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <div className="marqueeSliderRight flex items-center gap-5 w-[50%] 1404px:w-[100%] justify-center">
                    {
                        MarqueeData?.map((item, index) => (
                            <a
                                href={item.url}
                                className="py-2 px-6 dark:bg-[#0FABCA]/90 bg-[#0FABCA] capitalize border dark:border-[#0FABCA]/90 border-[#0FABCA] text-white rounded font-medium whitespace-nowrap"
                                key={index}
                            >
                                {item.title}
                            </a>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default HorizontalMarquee;