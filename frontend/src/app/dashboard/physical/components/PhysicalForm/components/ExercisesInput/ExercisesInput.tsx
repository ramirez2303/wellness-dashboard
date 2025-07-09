import { Exercise } from "@/app/dashboard/physical/types/Physical";
import ExercisesConfirm from "./components/ExercisesConfirm";
import ExercisesDuration from "./components/ExercisesDuration";
import ExercisesIntensity from "./components/ExercisesIntensity";
import ExercisesType from "./components/ExercisesType";
import { useAddExercise } from "./hooks/useAddExercise";

type ExercisesInputProps = {
    exercise: Exercise;
    index: number;
    handleConfirmClick: (index: number, value: Exercise) => void;
    handleRemoveClick: (index: number) => void;
};

const ExercisesInput = ({
    exercise,
    index,
    handleConfirmClick,
    handleRemoveClick,
}: ExercisesInputProps) => {
    const { exerciseValues, handleSetValues } = useAddExercise();

    const isConfirmed =
        !!exercise.type && !!exercise.duration && !!exercise.intensity;
    const isEmpty =
        !exerciseValues?.type ||
        !exerciseValues?.duration ||
        !exerciseValues?.intensity;

    return (
        <div className="md:min-w-[600px] md:max-w-[600px] grid grid-cols-6 md:grid-cols-16 items-center gap-x-4 gap-y-2">
            <ExercisesType
                value={exercise.type ?? exerciseValues?.type}
                handleSetValues={handleSetValues}
            />
            <ExercisesDuration
                value={exercise.duration ?? exerciseValues?.duration}
                handleSetValues={handleSetValues}
            />
            <ExercisesIntensity
                value={exercise.intensity ?? exerciseValues?.intensity}
                handleSetValues={handleSetValues}
            />
            <ExercisesConfirm
                disableCheck={isConfirmed || isEmpty}
                handleConfirm={() =>
                    exerciseValues &&
                    handleConfirmClick(index, {
                        ...exerciseValues,
                        key: exercise.key,
                    })
                }
                handleRemove={() => handleRemoveClick(index)}
            />
        </div>
    );
};

export default ExercisesInput;
