"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useCreateMentalRecord } from "@/app/dashboard/hooks/useCreateMentalRecord";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { moodOptions } from "@/lib/Schemas";
import { capitalizeFirstLetter } from "@/lib/utils";

const MentalForm = () => {
    const { form, handleFormSubmit, submitDisabled } = useCreateMentalRecord();
    return (
        <Form {...form}>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-4 mb-6 max-w-sm">
                    <FormField
                        control={form.control}
                        name="mood"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="">Mood</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Enter your mood" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="max-h-80">
                                        {moodOptions.map((option, ix) => (
                                            <SelectItem key={ix} value={option}>
                                                {capitalizeFirstLetter(option)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {/* <FormDescription>
                                    You can manage email addresses in your{" "}
                                    <Link href="/examples/forms">
                                        email settings
                                    </Link>
                                    .
                                </FormDescription>
                                <FormMessage /> */}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="note"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        id="notes"
                                        type="textarea"
                                        label={{ text: "Notes" }}
                                        required
                                        placeholder="Enter your notes"
                                        onChange={field.onChange}
                                        defaultValue={field.value}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    variant="primary-filled"
                    className="px-4 py-2 text-white rounded-md hover:bg-custom-primary-90 duration-300 ease-in-out cursor-pointer"
                    disabled={submitDisabled}
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default MentalForm;
