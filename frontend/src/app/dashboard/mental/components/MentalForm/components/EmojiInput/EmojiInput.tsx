"use client";

import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { MentalStates } from "@/types/Mental";

import happyEmoji from "@/assets/lotties/happy.json";
import sadEmoji from "@/assets/lotties/sad.json";
import frustratedEmoji from "@/assets/lotties/frustrated.json";
import overwhelmedEmoji from "@/assets/lotties/overwhelmed.json";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Plus } from "lucide-react";

type EmojiInputProps = {
    selectedMood: MentalStates;
    handleMoodClick: (value?: string) => void;
    showSelect: boolean;
    toggleSelect: () => void;
};

const emojiData = [
    { emoji: happyEmoji, value: "HAPPY" },
    { emoji: sadEmoji, value: "SAD" },
    { emoji: frustratedEmoji, value: "FRUSTRATED" },
    { emoji: overwhelmedEmoji, value: "OVERWHELMED" },
];

const EmojiInput = ({
    selectedMood,
    handleMoodClick,
    showSelect,
    toggleSelect,
}: EmojiInputProps) => {
    const refs = useRef<Array<React.RefObject<LottieRefCurrentProps | null>>>(
        emojiData.map(() => React.createRef())
    );

    return (
        <div className="flex gap-4 items-center">
            {emojiData.map((item, ix) => (
                <div key={item.value + ix}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                onClick={() => handleMoodClick(item.value)}
                                onMouseEnter={() =>
                                    refs.current[ix]?.current?.play()
                                }
                                onMouseLeave={() =>
                                    refs.current[ix]?.current?.stop()
                                }
                                className={`cursor-pointer p-1 md:p-2 rounded-full transition-all duration-300 ease-in-out ${
                                    showSelect &&
                                    "opacity-50 pointer-events-none"
                                } ${
                                    selectedMood === item.value
                                        ? "bg-custom-primary/90"
                                        : "bg-custom-primary/40 hover:bg-custom-primary/60"
                                }`}
                            >
                                <Lottie
                                    lottieRef={refs.current[ix]}
                                    animationData={item.emoji}
                                    loop={false}
                                    autoplay={false}
                                    className="w-10 md:w-14 h-10 md:h-14"
                                />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>{capitalizeFirstLetter(item.value)}</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            ))}
            <div
                onClick={() => {
                    handleMoodClick(undefined);
                    toggleSelect();
                }}
                className={`cursor-pointer p-2 md:p-4 border-2 rounded-full transition-all duration-300 ease-in-out ${
                    showSelect ? "bg-custom-primary/90" : "bg-custom-primary/40"
                } hover:bg-custom-primary/60 border-transparent`}
            >
                <Plus
                    className={`w-8 md:w-10 h-8 md:h-10 text-white duration-300 ease-in-out ${
                        showSelect && "rotate-45"
                    }`}
                />
            </div>
        </div>
    );
};

export default EmojiInput;
