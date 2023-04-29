/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Breaks } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BreaksUpdateFormInputValues = {
    breaksStart?: string;
    breaksEnd?: string;
    breaksBehavior?: string;
    breaksDescription?: string;
    breaksDate?: string;
};
export declare type BreaksUpdateFormValidationValues = {
    breaksStart?: ValidationFunction<string>;
    breaksEnd?: ValidationFunction<string>;
    breaksBehavior?: ValidationFunction<string>;
    breaksDescription?: ValidationFunction<string>;
    breaksDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BreaksUpdateFormOverridesProps = {
    BreaksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    breaksStart?: PrimitiveOverrideProps<TextFieldProps>;
    breaksEnd?: PrimitiveOverrideProps<TextFieldProps>;
    breaksBehavior?: PrimitiveOverrideProps<TextFieldProps>;
    breaksDescription?: PrimitiveOverrideProps<TextFieldProps>;
    breaksDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BreaksUpdateFormProps = React.PropsWithChildren<{
    overrides?: BreaksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    breaks?: Breaks;
    onSubmit?: (fields: BreaksUpdateFormInputValues) => BreaksUpdateFormInputValues;
    onSuccess?: (fields: BreaksUpdateFormInputValues) => void;
    onError?: (fields: BreaksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BreaksUpdateFormInputValues) => BreaksUpdateFormInputValues;
    onValidate?: BreaksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BreaksUpdateForm(props: BreaksUpdateFormProps): React.ReactElement;
