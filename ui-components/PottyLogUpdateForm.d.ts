/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PottyLog, Students } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PottyLogUpdateFormInputValues = {
    pottyDate?: string;
    pottyTime?: string;
    urine?: boolean;
    bowel?: boolean;
    underwareAccident?: boolean;
    toilet?: boolean;
    selfInitiated?: boolean;
    prompted?: boolean;
    exactTime?: string;
    PottyStudents?: Students;
};
export declare type PottyLogUpdateFormValidationValues = {
    pottyDate?: ValidationFunction<string>;
    pottyTime?: ValidationFunction<string>;
    urine?: ValidationFunction<boolean>;
    bowel?: ValidationFunction<boolean>;
    underwareAccident?: ValidationFunction<boolean>;
    toilet?: ValidationFunction<boolean>;
    selfInitiated?: ValidationFunction<boolean>;
    prompted?: ValidationFunction<boolean>;
    exactTime?: ValidationFunction<string>;
    PottyStudents?: ValidationFunction<Students>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PottyLogUpdateFormOverridesProps = {
    PottyLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pottyDate?: PrimitiveOverrideProps<TextFieldProps>;
    pottyTime?: PrimitiveOverrideProps<TextFieldProps>;
    urine?: PrimitiveOverrideProps<SwitchFieldProps>;
    bowel?: PrimitiveOverrideProps<SwitchFieldProps>;
    underwareAccident?: PrimitiveOverrideProps<SwitchFieldProps>;
    toilet?: PrimitiveOverrideProps<SwitchFieldProps>;
    selfInitiated?: PrimitiveOverrideProps<SwitchFieldProps>;
    prompted?: PrimitiveOverrideProps<SwitchFieldProps>;
    exactTime?: PrimitiveOverrideProps<TextFieldProps>;
    PottyStudents?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PottyLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: PottyLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pottyLog?: PottyLog;
    onSubmit?: (fields: PottyLogUpdateFormInputValues) => PottyLogUpdateFormInputValues;
    onSuccess?: (fields: PottyLogUpdateFormInputValues) => void;
    onError?: (fields: PottyLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PottyLogUpdateFormInputValues) => PottyLogUpdateFormInputValues;
    onValidate?: PottyLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PottyLogUpdateForm(props: PottyLogUpdateFormProps): React.ReactElement;
