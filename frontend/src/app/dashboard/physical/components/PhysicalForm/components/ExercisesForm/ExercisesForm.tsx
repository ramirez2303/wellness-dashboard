import React from "react";
import { Form } from "@/components/ui/form";
import Button from "@/components/common/Button";
import ExercisesInput from "../ExercisesInput";
import { useHandleExercisesRecord } from "@/app/dashboard/physical/hooks/useHandleExercisesRecord";
import NotesInput from "../NotesInput";
import { Plus } from "lucide-react";

const ExercisesForm = () => {
    const {
        form,
        submitDisabled,
        handleAddExercise,
        handleConfirmClick,
        handleRemoveClick,
        canAddExercises,
    } = useHandleExercisesRecord();

    const exercises = form.watch("exercises");

    return (
        <Form {...form}>
            <form onSubmit={() => {}}>
                <div className="flex flex-col gap-4 mb-4">
                    <div className="flex flex-col gap-4">
                        <h4>Exercises record</h4>
                        {exercises.map((exercise, index) => (
                            <ExercisesInput
                                key={exercise.key}
                                exercise={exercise}
                                index={index}
                                handleConfirmClick={handleConfirmClick}
                                handleRemoveClick={handleRemoveClick}
                            />
                        ))}
                        <Button
                            variant="primary-outlined"
                            className="w-full border-2 py-2 rounded-lg flex justify-center items-center text-custom-primary hover:text-white cursor-pointer"
                            onClick={handleAddExercise}
                            disabled={!canAddExercises}
                        >
                            <Plus />
                        </Button>
                    </div>
                    <NotesInput control={form.control} />
                </div>

                <Button
                    type="submit"
                    variant="primary-filled"
                    className="w-full px-4 py-2 text-white rounded-md hover:bg-custom-primary-90 duration-300 ease-in-out cursor-pointer"
                    disabled={submitDisabled}
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default ExercisesForm;
