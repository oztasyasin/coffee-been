import { Controller } from "react-hook-form";
import CustomTimePicker from "./input/CustomTimePicker";

export const DateTimePickerField = ({ control, name, mode, rules, placeholder, error, style }) => (
    <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
            <CustomTimePicker
                minimumDate={new Date()}
                style={style}
                error={error}
                mode={mode}
                placeholder={placeholder}
                value={value}
                onTimeChange={onChange}
            />
        )}
    />
);