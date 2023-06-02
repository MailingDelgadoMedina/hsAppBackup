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
export declare type ActivitiesUpdateFormInputValues = {
    actName?: string;
    actType?: string;
    actDate?: string;
    actStart?: string;
    actEnd?: string;
    actDescription?: string;
    actDocument?: string;
    enrollmentID?: string;
};
export declare type ActivitiesUpdateFormValidationValues = {
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
export declare type ActivitiesUpdateFormOverridesProps = {
    ActivitiesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    actName?: PrimitiveOverrideProps<TextFieldProps>;
    actType?: PrimitiveOverrideProps<TextFieldProps>;
    actDate?: PrimitiveOverrideProps<TextFieldProps>;
    actStart?: PrimitiveOverrideProps<TextFieldProps>;
    actEnd?: PrimitiveOverrideProps<TextFieldProps>;
    actDescription?: PrimitiveOverrideProps<TextFieldProps>;
    actDocument?: PrimitiveOverrideProps<TextFieldProps>;
    enrollmentID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ActivitiesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActivitiesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    activities?: Activities;
    onSubmit?: (fields: ActivitiesUpdateFormInputValues) => ActivitiesUpdateFormInputValues;
    onSuccess?: (fields: ActivitiesUpdateFormInputValues) => void;
    onError?: (fields: ActivitiesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivitiesUpdateFormInputValues) => ActivitiesUpdateFormInputValues;
    onValidate?: ActivitiesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActivitiesUpdateForm(props: ActivitiesUpdateFormProps): React.ReactElement;
