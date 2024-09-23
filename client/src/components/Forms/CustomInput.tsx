import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";


type TInputProps={
    name: string;
    label:string;
    type: string;
    size?:"small";
    fullWidth?:boolean;
    placeholder?:string;
    toolTipText?:string |undefined;
    disabled?: boolean;
    required?: boolean;
    // size?:"small" |"medium";
}


const CustomInput = ({ name, label, type, size, fullWidth,placeholder,toolTipText='' }:TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field}) => (
        <TextField
        {...field}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          placeholder={placeholder}
          id={name}
        />

      )}
    />
  );
};

export default CustomInput;
