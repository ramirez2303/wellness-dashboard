import { Check, X } from "lucide-react";
import React from "react";

type ExercisesConfirmProps = {
    disableCheck: boolean;
    handleConfirm: () => void;
    handleRemove: () => void;
};

const ExercisesConfirm = ({
    disableCheck,
    handleConfirm,
    handleRemove,
}: ExercisesConfirmProps) => {
    return (
        <div className="flex justify-center md:justify-start items-center gap-2 col-span-2">
            <Check
                className={`w-full h-full max-w-[26px] max-h-[26px] bg-green-500 hover:bg-green-500/70 text-white duration-300 ease-in-out cursor-pointer rounded-full p-1 ${
                    disableCheck
                        ? "opacity-50 pointer-events-none select-none"
                        : ""
                }`}
                onClick={handleConfirm}
            />
            <X
                className="w-full h-full max-w-[26px] max-h-[26px] bg-red-500 hover:bg-red-500/70 text-white duration-300 ease-in-out cursor-pointer rounded-full p-1"
                onClick={handleRemove}
            />
        </div>
    );
};

export default ExercisesConfirm;
