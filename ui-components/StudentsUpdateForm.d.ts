/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Students } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentsUpdateFormInputValues = {
    stuName?: string;
    stuLastName?: string;
    email?: string;
    age?: number;
    imageProfileStu?: string;
};
export declare type StudentsUpdateFormValidationValues = {
    stuName?: ValidationFunction<string>;
    stuLastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    imageProfileStu?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentsUpdateFormOverridesProps = {
    StudentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    stuName?: PrimitiveOverrideProps<TextFieldProps>;
    stuLastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    imageProfileStu?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: StudentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    students?: Students;
    onSubmit?: (fields: StudentsUpdateFormInputValues) => StudentsUpdateFormInputValues;
    onSuccess?: (fields: StudentsUpdateFormInputValues) => void;
    onError?: (fields: StudentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentsUpdateFormInputValues) => StudentsUpdateFormInputValues;
    onValidate?: StudentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StudentsUpdateForm(props: StudentsUpdateFormProps): React.ReactElement;
