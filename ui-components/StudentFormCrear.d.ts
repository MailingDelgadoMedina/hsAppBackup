/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, SelectFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentFormCrearOverridesProps = {
    StudentFormCrear?: PrimitiveOverrideProps<ViewProps>;
    TextField39312685?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39312692?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39312699?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39312706?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39312713?: PrimitiveOverrideProps<TextFieldProps>;
    ButtonClear?: PrimitiveOverrideProps<ButtonProps>;
    ButtonSubmit?: PrimitiveOverrideProps<ButtonProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type StudentFormCrearProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StudentFormCrearOverridesProps | undefined | null;
}>;
export default function StudentFormCrear(props: StudentFormCrearProps): React.ReactElement;
