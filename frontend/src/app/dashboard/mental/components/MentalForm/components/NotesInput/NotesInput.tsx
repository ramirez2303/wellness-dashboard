import Input from "@/components/common/Input";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { MentalRecord } from "@/types/Mental";
import React from "react";
import { Control } from "react-hook-form";

type NotesInputProps = {
    control: Control<MentalRecord, unknown, MentalRecord>;
};

const NotesInput = ({ control }: NotesInputProps) => {
    return (
        <FormField
            control={control}
            name="note"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input
                            id="notes"
                            type="textarea"
                            label={{ text: "Notes" }}
                            placeholder="Enter your notes"
                            onChange={field.onChange}
                            defaultValue={field.value}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

export default NotesInput;
