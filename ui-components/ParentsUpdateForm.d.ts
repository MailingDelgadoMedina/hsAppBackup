/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Parents } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ParentsUpdateFormInputValues = {
    parentName?: string;
    parentLastName?: string;
    email?: string;
    imageProfile?: string;
};
export declare type ParentsUpdateFormValidationValues = {
    parentName?: ValidationFunction<string>;
    parentLastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    imageProfile?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParentsUpdateFormOverridesProps = {
    ParentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    parentName?: PrimitiveOverrideProps<TextFieldProps>;
    parentLastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    imageProfile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ParentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ParentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    parents?: Parents;
    onSubmit?: (fields: ParentsUpdateFormInputValues) => ParentsUpdateFormInputValues;
    onSuccess?: (fields: ParentsUpdateFormInputValues) => void;
    onError?: (fields: ParentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ParentsUpdateFormInputValues) => ParentsUpdateFormInputValues;
    onValidate?: ParentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ParentsUpdateForm(props: ParentsUpdateFormProps): React.ReactElement;
