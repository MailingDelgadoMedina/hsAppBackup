/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActivitiesCreateFormInputValues = {
    actName?: string;
    actType?: string;
    actDate?: string;
    actStart?: string;
    actEnd?: string;
    actDescription?: string;
    actDocument?: string;
    enrollmentID?: string;
};
export declare type ActivitiesCreateFormValidationValues = {
    actName?: ValidationFunction<string>;
    actType?: ValidationFunction<string>;
    actDate?: ValidationFunction<string>;
    actStart?: ValidationFunction<string>;
    actEnd?: ValidationFunction<string>;
    actDescription?: ValidationFunction<string>;
    actDocument?: ValidationFunction<string>;
    enrollmentID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivitiesCreateFormOverridesProps = {
    ActivitiesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    actName?: PrimitiveOverrideProps<TextFieldProps>;
    actType?: PrimitiveOverrideProps<TextFieldProps>;
    actDate?: PrimitiveOverrideProps<TextFieldProps>;
    actStart?: PrimitiveOverrideProps<TextFieldProps>;
    actEnd?: PrimitiveOverrideProps<TextFieldProps>;
    actDescription?: PrimitiveOverrideProps<TextFieldProps>;
    actDocument?: PrimitiveOverrideProps<TextFieldProps>;
    enrollmentID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ActivitiesCreateFormProps = React.PropsWithChildren<{
    overrides?: ActivitiesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActivitiesCreateFormInputValues) => ActivitiesCreateFormInputValues;
    onSuccess?: (fields: ActivitiesCreateFormInputValues) => void;
    onError?: (fields: ActivitiesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivitiesCreateFormInputValues) => ActivitiesCreateFormInputValues;
    onValidate?: ActivitiesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActivitiesCreateForm(props: ActivitiesCreateFormProps): React.ReactElement;
