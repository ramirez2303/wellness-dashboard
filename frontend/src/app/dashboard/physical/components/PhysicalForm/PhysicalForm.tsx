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
import { ChevronLeft, Plus } from "lucide-react";
import SelectPhysicalButton from "./components/SelectPhysicalButton";
import ExercisesForm from "./components/ExercisesForm";
import HabitsForm from "./components/HabitsForm";
import usePhysicalStore from "../../store/usePhysicalStore";

type PhysicalFormProps = {
    children?: ReactNode;
};

const PhysicalForm = ({ children }: PhysicalFormProps) => {
    const { isFormOpen, toggleFormOpen, setTabSelected } = usePhysicalStore();
    const [typeSelected, setTypeSelected] = useState<
        "exercises" | "habits" | null
    >(null);
    const handleSelectType = (type: "exercises" | "habits") => {
        setTabSelected(type);
        setTypeSelected(type);
    };
    const isMobile = useIsMobile();

    useEffect(() => {
        setTypeSelected(null);
    }, [isFormOpen]);

    if (isMobile) {
        return (
            <Drawer open={isFormOpen} onOpenChange={() => toggleFormOpen()}>
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
                        <DrawerTitle className="text-xl font-medium text-left">
                            <div className="flex items-center gap-1">
                                {typeSelected && (
                                    <ChevronLeft
                                        className="cursor-pointer"
                                        onClick={() => setTypeSelected(null)}
                                    />
                                )}
                                Add Physical Health Record
                            </div>
                        </DrawerTitle>
                        <DrawerDescription className="text-lg font-medium text-gray-500 text-left">
                            Please select the type of physical health record you
                            want to add.
                        </DrawerDescription>
                    </DrawerHeader>
                    {!typeSelected && (
                        <SelectPhysicalButton onSelect={handleSelectType} />
                    )}
                    {typeSelected === "exercises" && <ExercisesForm />}
                    {typeSelected === "habits" && <HabitsForm />}
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Dialog open={isFormOpen} onOpenChange={() => toggleFormOpen()}>
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
                        <div className="flex items-center gap-1">
                            {typeSelected && (
                                <ChevronLeft
                                    className="cursor-pointer"
                                    onClick={() => setTypeSelected(null)}
                                />
                            )}
                            Add Physical Health Record
                        </div>
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
