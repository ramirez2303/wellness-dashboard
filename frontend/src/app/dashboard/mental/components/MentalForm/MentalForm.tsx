"use client";

import { useCreateMentalRecord } from "@/app/dashboard/mental/hooks/useCreateMentalRecord";
import Button from "@/components/common/Button";
import { Form } from "@/components/ui/form";
import { ReactNode } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { useIsMobile } from "@/hooks/use-mobile";
import { Plus } from "lucide-react";
import { useState } from "react";
import EmojiInput from "./components/EmojiInput";
import MoodInput from "./components/MoodInput";
import NotesInput from "./components/NotesInput";
import DateInput from "@/components/common/DateInput";

type MentalFormProps = {
    children?: ReactNode;
};

const MentalForm = ({ children }: MentalFormProps) => {
    const {
        form,
        handleFormSubmit,
        submitDisabled,
        selectedMood,
        handleMoodClick,
        handleSetDate,
        showSelect,
        toggleSelect,
    } = useCreateMentalRecord();
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);

    if (isMobile) {
        return (
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                    {children ? (
                        children
                    ) : (
                        <Button
                            variant="primary-filled"
                            className="flex justify-center items-center gap-1 px-3 py-5 text-white text-xl fixed bottom-0 left-0 w-full"
                            icon={<Plus />}
                        >
                            Agregar estado
                        </Button>
                    )}
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="px-6 mt-2 mb-4 gap-1">
                        <DrawerTitle className="text-lg font-semibold text-left">
                            Add Mental Health Record
                        </DrawerTitle>
                        <DrawerDescription className="text-sm font-medium text-gray-500 text-left">
                            Please fill out the form below to add your mental
                            health record.
                        </DrawerDescription>
                    </DrawerHeader>
                    <Form {...form}>
                        <form
                            onSubmit={(e) => {
                                handleFormSubmit(e).then(() =>
                                    setIsOpen(false)
                                );
                            }}
                        >
                            <div className="flex flex-col gap-4 mb-6 px-6">
                                <EmojiInput
                                    selectedMood={selectedMood}
                                    handleMoodClick={handleMoodClick}
                                    showSelect={showSelect}
                                    toggleSelect={toggleSelect}
                                />
                                {showSelect && (
                                    <MoodInput control={form.control} />
                                )}
                                <DateInput
                                    date={form.watch("date")}
                                    handleSetDate={handleSetDate}
                                />
                                <NotesInput control={form.control} />
                            </div>
                            <DrawerFooter className="pt-0 px-0">
                                <Button
                                    type="submit"
                                    variant="primary-filled"
                                    className="w-full px-4 py-2 text-white hover:bg-custom-primary-90 duration-300 ease-in-out cursor-pointer"
                                    disabled={submitDisabled}
                                >
                                    Submit
                                </Button>
                                <DrawerClose asChild>
                                    <Button variant="none">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </form>
                    </Form>
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children ? (
                    children
                ) : (
                    <Button
                        variant="primary-outlined"
                        className="flex md:justify-start items-center gap-1 px-3 py-2 rounded-lg border-2 text-black hover:text-white cursor-pointer "
                        icon={<Plus />}
                    >
                        Agregar estado
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">
                        Add Mental Health Record
                        <DialogDescription className="text-sm font-medium text-gray-500">
                            Please fill out the form below to add your mental
                            health record.
                        </DialogDescription>
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={(e) => {
                            handleFormSubmit(e).then(() => setIsOpen(false));
                        }}
                    >
                        <div className="flex flex-col gap-4 mb-6">
                            <EmojiInput
                                selectedMood={selectedMood}
                                handleMoodClick={handleMoodClick}
                                showSelect={showSelect}
                                toggleSelect={toggleSelect}
                            />
                            {showSelect && <MoodInput control={form.control} />}
                            <DateInput
                                date={form.watch("date")}
                                handleSetDate={handleSetDate}
                            />
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
            </DialogContent>
        </Dialog>
    );
};

export default MentalForm;
