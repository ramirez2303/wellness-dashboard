import Lottie, { LottieRefCurrentProps } from "lottie-react";
import React, { useRef } from "react";
import armLottie from "@/assets/lotties/arm.json";
import clockLottie from "@/assets/lotties/clock.json";
import { capitalizeFirstLetter } from "../../../../../../../lib/utils";

const typeData = [
    { lottie: armLottie, value: "exercises" },
    { lottie: clockLottie, value: "habits" },
];

type SelectPhysicalButtonProps = {
    onSelect: (type: "exercises" | "habits") => void;
};

const SelectPhysicalButton = ({ onSelect }: SelectPhysicalButtonProps) => {
    const refs = useRef<Array<React.RefObject<LottieRefCurrentProps | null>>>(
        typeData.map(() => React.createRef())
    );

    return (
        <div className="flex flex-col justify-center items-center gap-8 md:gap-12 pt-0 pb-12 px-6 md:py-8 md:px-12">
            <h4 className="text-xl font-medium">
                Elige un tipo de entrada fisica
            </h4>
            <div className="flex justify-center items-center gap-4 md:gap-8">
                {typeData.map((item, ix) => (
                    <div key={item.value + ix}>
                        <div
                            onClick={() =>
                                onSelect?.(item.value as "exercises" | "habits")
                            }
                            onMouseEnter={() =>
                                refs.current[ix]?.current?.play()
                            }
                            onMouseLeave={() =>
                                refs.current[ix]?.current?.stop()
                            }
                            className={`flex flex-col justify-center items-center cursor-pointer hover:text-white py-8 px-12 gap-6 rounded-lg transition-all duration-300 ease-in-out bg-custom-primary/30 hover:bg-custom-primary/90`}
                        >
                            <Lottie
                                lottieRef={refs.current[ix]}
                                animationData={item.lottie}
                                loop={false}
                                autoplay={false}
                                className="w-16 md:w-24 h-16 md:h-24"
                            />
                            <span className="text-lg font-medium">
                                {capitalizeFirstLetter(item.value)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectPhysicalButton;
