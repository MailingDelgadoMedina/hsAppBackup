/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Students } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentFormUpdateInputValues = {
    stuName?: string;
    stuLastName?: string;
    age?: number;
    email?: string;
    imageProfileStu?: string;
};
export declare type StudentFormUpdateValidationValues = {
    stuName?: ValidationFunction<string>;
    stuLastName?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    email?: ValidationFunction<string>;
    imageProfileStu?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentFormUpdateOverridesProps = {
    StudentFormUpdateGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    stuName?: PrimitiveOverrideProps<TextFieldProps>;
    stuLastName?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    imageProfileStu?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentFormUpdateProps = React.PropsWithChildren<{
    overrides?: StudentFormUpdateOverridesProps | undefined | null;
} & {
    id?: string;
    students?: Students;
    onSubmit?: (fields: StudentFormUpdateInputValues) => StudentFormUpdateInputValues;
    onSuccess?: (fields: StudentFormUpdateInputValues) => void;
    onError?: (fields: StudentFormUpdateInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StudentFormUpdateInputValues) => StudentFormUpdateInputValues;
    onValidate?: StudentFormUpdateValidationValues;
} & React.CSSProperties>;
export default function StudentFormUpdate(props: StudentFormUpdateProps): React.ReactElement;
