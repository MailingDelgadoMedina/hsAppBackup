/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Activities } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BreaksCreateFormInputValues = {
    breaksStart?: string;
    breaksEnd?: string;
    breaksBehavior?: string;
    breaksDescription?: string;
    breaksDate?: string;
    ActivitiesBreak?: Activities;
};
export declare type BreaksCreateFormValidationValues = {
    breaksStart?: ValidationFunction<string>;
    breaksEnd?: ValidationFunction<string>;
    breaksBehavior?: ValidationFunction<string>;
    breaksDescription?: ValidationFunction<string>;
    breaksDate?: ValidationFunction<string>;
    ActivitiesBreak?: ValidationFunction<Activities>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BreaksCreateFormOverridesProps = {
    BreaksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    breaksStart?: PrimitiveOverrideProps<TextFieldProps>;
    breaksEnd?: PrimitiveOverrideProps<TextFieldProps>;
    breaksBehavior?: PrimitiveOverrideProps<TextFieldProps>;
    breaksDescription?: PrimitiveOverrideProps<TextFieldProps>;
    breaksDate?: PrimitiveOverrideProps<TextFieldProps>;
    ActivitiesBreak?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BreaksCreateFormProps = React.PropsWithChildren<{
    overrides?: BreaksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BreaksCreateFormInputValues) => BreaksCreateFormInputValues;
    onSuccess?: (fields: BreaksCreateFormInputValues) => void;
    onError?: (fields: BreaksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BreaksCreateFormInputValues) => BreaksCreateFormInputValues;
    onValidate?: BreaksCreateFormValidationValues;
} & React.CSSProperties>;
export default function BreaksCreateForm(props: BreaksCreateFormProps): React.ReactElement;
