/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PottyLogCreateFormInputValues = {
    pottyDate?: string;
    pottyTime?: string;
    urine?: boolean;
    bowel?: boolean;
    underwareAccident?: boolean;
    toilet?: boolean;
    selfInitiated?: boolean;
    prompted?: boolean;
    exactTime?: string;
};
export declare type PottyLogCreateFormValidationValues = {
    pottyDate?: ValidationFunction<string>;
    pottyTime?: ValidationFunction<string>;
    urine?: ValidationFunction<boolean>;
    bowel?: ValidationFunction<boolean>;
    underwareAccident?: ValidationFunction<boolean>;
    toilet?: ValidationFunction<boolean>;
    selfInitiated?: ValidationFunction<boolean>;
    prompted?: ValidationFunction<boolean>;
    exactTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PottyLogCreateFormOverridesProps = {
    PottyLogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pottyDate?: PrimitiveOverrideProps<TextFieldProps>;
    pottyTime?: PrimitiveOverrideProps<TextFieldProps>;
    urine?: PrimitiveOverrideProps<SwitchFieldProps>;
    bowel?: PrimitiveOverrideProps<SwitchFieldProps>;
    underwareAccident?: PrimitiveOverrideProps<SwitchFieldProps>;
    toilet?: PrimitiveOverrideProps<SwitchFieldProps>;
    selfInitiated?: PrimitiveOverrideProps<SwitchFieldProps>;
    prompted?: PrimitiveOverrideProps<SwitchFieldProps>;
    exactTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PottyLogCreateFormProps = React.PropsWithChildren<{
    overrides?: PottyLogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PottyLogCreateFormInputValues) => PottyLogCreateFormInputValues;
    onSuccess?: (fields: PottyLogCreateFormInputValues) => void;
    onError?: (fields: PottyLogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PottyLogCreateFormInputValues) => PottyLogCreateFormInputValues;
    onValidate?: PottyLogCreateFormValidationValues;
} & React.CSSProperties>;
export default function PottyLogCreateForm(props: PottyLogCreateFormProps): React.ReactElement;
