import { HabitsRecord } from "@/app/dashboard/physical/types/Physical";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

type SleepInputProps = {
    control: Control<HabitsRecord, unknown, HabitsRecord>;
};

const SleepInput = ({ control }: SleepInputProps) => {
    return (
        <FormField
            control={control}
            name="sleepHours"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Sleeped Hours</FormLabel>
                    <FormControl>
                        <Input
                            type="number"
                            placeholder="Enter sleep hours"
                            className="h-[42px] w-full border-input border border-gray-300 shadow-sm text-base rounded-lg"
                            {...field}
                            onChange={(e) =>
                                field.onChange(e.target.valueAsNumber)
                            }
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

export default SleepInput;
