/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Classes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClassesUpdateFormInputValues = {
    className?: string;
    classLevel?: string;
};
export declare type ClassesUpdateFormValidationValues = {
    className?: ValidationFunction<string>;
    classLevel?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClassesUpdateFormOverridesProps = {
    ClassesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    className?: PrimitiveOverrideProps<TextFieldProps>;
    classLevel?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClassesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClassesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    classes?: Classes;
    onSubmit?: (fields: ClassesUpdateFormInputValues) => ClassesUpdateFormInputValues;
    onSuccess?: (fields: ClassesUpdateFormInputValues) => void;
    onError?: (fields: ClassesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClassesUpdateFormInputValues) => ClassesUpdateFormInputValues;
    onValidate?: ClassesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClassesUpdateForm(props: ClassesUpdateFormProps): React.ReactElement;
