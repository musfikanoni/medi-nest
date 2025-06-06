"use client"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form";
import { FormFieldType } from "../forms/PatientForm";
import Image from "next/image";

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dataFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}

const RenderField = ({ field, props } : { field: any; props: CustomProps }) => {
    const { fieldType, iconSrc, iconAlt, placeholder} = props;

    switch (fieldType){
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-sky-500">
                    {iconSrc && (
                        <Image 
                        src = {iconSrc}
                        height={24}
                        width={24}
                        alt={iconAlt || 'icon'}
                        className="ml-2" />
                    )}
                    <FormControl>
                        <Input 
                        placeholder={placeholder}
                        {...field}
                        className="shadow-input border-0" />
                    </FormControl>
                </div>
            )

        case FormFieldType.PHONE_INPUT:
        return (
            <div className="border border-sky-500">
                <FormControl>
                    <PhoneInput
                    defaultCountry="BD"
                    placeholder={placeholder}
                    international
                    withCountryVallingCode
                    value={field.value as E164Number | undefined}
                    onChange={field.onChange}
                    className="shadow-input ml-2 py-2 text-sm border-0"
                    />
                </FormControl>
            </div>

        );

        default: 
            break;
    }
}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label} = props;
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className="flex-1">
                {fieldType !== FormFieldType.CHECKBOX && label && (
                    <FormLabel>{label}</FormLabel>
                )}

                <RenderField field={field} props={props} />

                <FormMessage className="shad-error" />
            </FormItem>
        )}
        />
    );
};

export default CustomFormField;