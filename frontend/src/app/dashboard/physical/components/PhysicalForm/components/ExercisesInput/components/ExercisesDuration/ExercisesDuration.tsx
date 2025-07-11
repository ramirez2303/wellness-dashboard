import { Exercise } from "@/app/dashboard/physical/types/Physical";
import { Input } from "@/components/ui/input";

type ExercisesDurationProps = {
    value?: Exercise["duration"];
    handleSetValues: (key: keyof Exercise, value: string | number) => void;
};

const ExercisesDuration = ({ handleSetValues }: ExercisesDurationProps) => {
    return (
        <Input
            type="number"
            placeholder="Duration"
            className="h-[42px] border-input border border-gray-300 shadow-sm text-base rounded-lg col-span-3 md:col-span-4"
            onChange={(e) =>
                handleSetValues("duration", parseFloat(e.target.value))
            }
        />
    );
};

export default ExercisesDuration;
