/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Parents, Students } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, SelectFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentFormaActualizarOverridesProps = {
    StudentFormaActualizar?: PrimitiveOverrideProps<ViewProps>;
    TextField39342990?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39342997?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39343004?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39343011?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39343018?: PrimitiveOverrideProps<TextFieldProps>;
    ButtonClear?: PrimitiveOverrideProps<ButtonProps>;
    ButtonUpdate?: PrimitiveOverrideProps<ButtonProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type StudentFormaActualizarProps = React.PropsWithChildren<Partial<ViewProps> & {
    parents?: Parents;
    students?: Students;
} & {
    overrides?: StudentFormaActualizarOverridesProps | undefined | null;
}>;
export default function StudentFormaActualizar(props: StudentFormaActualizarProps): React.ReactElement;
