"use client";

import React, { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import DateInput from "@/components/common/DateInput";

const EditPersonalData = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="primary-outlined"
                    className="top-0 right-0 absolute p-2 rounded-lg border-2 cursor-pointer hover:text-white"
                >
                    Editar Perfil
                </Button>
            </DialogTrigger>
            <DialogContent className="!px-0">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold px-4">
                        Editar Datos Personales
                    </DialogTitle>
                </DialogHeader>
                {/* <Form {...form}><></></Form> */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 max-h-[400px] w-[600px] overflow-auto px-4 pb-4">
                    <Input
                        id="firstName"
                        type="text"
                        label={{ text: "First Name" }}
                        placeholder="Enter your first name"
                    />
                    <Input
                        id="lastName"
                        type="text"
                        label={{ text: "Last Name" }}
                        placeholder="Enter your last name"
                    />
                    <Input
                        id="email"
                        type="email"
                        label={{ text: "Email" }}
                        placeholder="Enter your email"
                    />
                    <Input
                        id="phone"
                        type="tel"
                        label={{ text: "Phone" }}
                        placeholder="Enter your phone number"
                    />
                    <Input
                        id="country"
                        type="text"
                        label={{ text: "Country" }}
                        placeholder="Enter your country"
                    />
                    <DateInput handleSetDate={() => {}} />
                </div>
                <div className="px-4">
                    <Button
                        variant="primary-filled"
                        className="w-full px-4 py-2 text-white duration-300 ease-in-out cursor-pointer rounded-lg"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        Guardar Cambios
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EditPersonalData;
