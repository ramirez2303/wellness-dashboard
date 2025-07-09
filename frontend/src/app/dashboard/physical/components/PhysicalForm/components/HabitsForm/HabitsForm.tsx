import React from "react";
import { useHandleHabitsRecord } from "./hooks/useHandleHabitsRecord";
import SleepInput from "./components/SleepInput";
import Button from "@/components/common/Button";
import { Form } from "@/components/ui/form";
import EnergyInput from "./components/EnergyInput";
import WaterInput from "./components/WaterInput";
import NotesInput from "./components/NotesInput";
import DateInput from "../DateInput";

const HabitsForm = () => {
    const { form, handleSetDate, handleFormSubmit, submitDisabled } =
        useHandleHabitsRecord();

    return (
        <Form {...form}>
            <form onSubmit={handleFormSubmit}>
                <div className="w-full flex flex-col pb-4 gap-4">
                    <div className="w-full flex flex-col px-6 gap-4">
                        <div className="w-full grid grid-cols-2 gap-4">
                            <SleepInput control={form.control} />
                            <WaterInput control={form.control} />
                        </div>
                        <EnergyInput control={form.control} />
                        <DateInput
                            date={form.watch("date")}
                            handleSetDate={handleSetDate}
                        />
                        <NotesInput control={form.control} />
                    </div>
                    <Button
                        type="submit"
                        variant="primary-filled"
                        className="w-full px-4 py-2 text-white md:rounded-md hover:bg-custom-primary-90 duration-300 ease-in-out cursor-pointer"
                        disabled={submitDisabled}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default HabitsForm;
