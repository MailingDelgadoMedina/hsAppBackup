/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Enrollment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MyStudentCreateFormInputValues = {
    stuName?: string;
    stuLastName?: string;
    email?: string;
    age?: number;
    imageProfileStu?: string;
    parentsID?: string;
    StudentEnrollments?: Enrollment[];
};
export declare type MyStudentCreateFormValidationValues = {
    stuName?: ValidationFunction<string>;
    stuLastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    imageProfileStu?: ValidationFunction<string>;
    parentsID?: ValidationFunction<string>;
    StudentEnrollments?: ValidationFunction<Enrollment>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyStudentCreateFormOverridesProps = {
    MyStudentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    stuName?: PrimitiveOverrideProps<TextFieldProps>;
    stuLastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    imageProfileStu?: PrimitiveOverrideProps<TextFieldProps>;
    parentsID?: PrimitiveOverrideProps<AutocompleteProps>;
    StudentEnrollments?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MyStudentCreateFormProps = React.PropsWithChildren<{
    overrides?: MyStudentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MyStudentCreateFormInputValues) => MyStudentCreateFormInputValues;
    onSuccess?: (fields: MyStudentCreateFormInputValues) => void;
    onError?: (fields: MyStudentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MyStudentCreateFormInputValues) => MyStudentCreateFormInputValues;
    onValidate?: MyStudentCreateFormValidationValues;
} & React.CSSProperties>;
export default function MyStudentCreateForm(props: MyStudentCreateFormProps): React.ReactElement;
