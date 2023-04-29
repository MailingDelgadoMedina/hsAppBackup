/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ParentsCreateFormInputValues = {
    parentName?: string;
    parentLastName?: string;
    email?: string;
    imageProfile?: string;
};
export declare type ParentsCreateFormValidationValues = {
    parentName?: ValidationFunction<string>;
    parentLastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    imageProfile?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParentsCreateFormOverridesProps = {
    ParentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    parentName?: PrimitiveOverrideProps<TextFieldProps>;
    parentLastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    imageProfile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ParentsCreateFormProps = React.PropsWithChildren<{
    overrides?: ParentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ParentsCreateFormInputValues) => ParentsCreateFormInputValues;
    onSuccess?: (fields: ParentsCreateFormInputValues) => void;
    onError?: (fields: ParentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ParentsCreateFormInputValues) => ParentsCreateFormInputValues;
    onValidate?: ParentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ParentsCreateForm(props: ParentsCreateFormProps): React.ReactElement;
