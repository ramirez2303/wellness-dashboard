"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";
import SelectPhysicalButton from "./components/SelectPhysicalButton";
import ExercisesForm from "./components/ExercisesForm";
import HabitsForm from "./components/HabitsForm";

type PhysicalFormProps = {
    children?: ReactNode;
};

const PhysicalForm = ({ children }: PhysicalFormProps) => {
    const [typeSelected, setTypeSelected] = useState<
        "exercises" | "habits" | null
    >(null);
    const handleSelectType = (type: "exercises" | "habits") =>
        setTypeSelected(type);
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTypeSelected(null);
    }, [isOpen]);

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
                            Agregar entrenamiento
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
                    {/* <Form>
                        <form onSubmit={() => {}}>
                            <div className="flex flex-col gap-4 mb-6 px-6"></div>
                            <DrawerFooter className="pt-0 px-0">
                                <Button
                                    type="submit"
                                    variant="primary-filled"
                                    className="w-full px-4 py-2 text-white hover:bg-custom-primary-90 duration-300 ease-in-out cursor-pointer"
                                    disabled={false}
                                >
                                    Submit
                                </Button>
                                <DrawerClose>
                                    <Button variant="none">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </form>
                    </Form> */}
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
                        Agregar entrenamiento
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="min-w-[600px] max-w-[600px]">
                <DialogHeader className={!!typeSelected ? "visible" : "hidden"}>
                    <DialogTitle className="text-lg font-semibold">
                        Add Physical Health Record
                        <DialogDescription className="text-sm font-medium text-gray-500">
                            Please select the type of physical health record you
                            want to add.
                        </DialogDescription>
                    </DialogTitle>
                </DialogHeader>
                {!typeSelected && (
                    <SelectPhysicalButton onSelect={handleSelectType} />
                )}
                {typeSelected === "exercises" && <ExercisesForm />}
                {typeSelected === "habits" && <HabitsForm />}
            </DialogContent>
        </Dialog>
    );
};

export default PhysicalForm;
