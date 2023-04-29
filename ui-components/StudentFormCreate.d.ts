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
export declare type StudentFormCreateInputValues = {
    stuName?: string;
    stuLastName?: string;
    email?: string;
    age?: number;
    imageProfileStu?: string;
};
export declare type StudentFormCreateValidationValues = {
    stuName?: ValidationFunction<string>;
    stuLastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    imageProfileStu?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentFormCreateOverridesProps = {
    StudentFormCreateGrid?: PrimitiveOverrideProps<GridProps>;
    stuName?: PrimitiveOverrideProps<TextFieldProps>;
    stuLastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    imageProfileStu?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentFormCreateProps = React.PropsWithChildren<{
    overrides?: StudentFormCreateOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StudentFormCreateInputValues) => StudentFormCreateInputValues;
    onSuccess?: (fields: StudentFormCreateInputValues) => void;
    onError?: (fields: StudentFormCreateInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentFormCreateInputValues) => StudentFormCreateInputValues;
    onValidate?: StudentFormCreateValidationValues;
} & React.CSSProperties>;
export default function StudentFormCreate(props: StudentFormCreateProps): React.ReactElement;
