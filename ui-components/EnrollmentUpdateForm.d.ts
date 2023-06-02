/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Enrollment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EnrollmentUpdateFormInputValues = {
    enrollmentCode?: string;
};
export declare type EnrollmentUpdateFormValidationValues = {
    enrollmentCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnrollmentUpdateFormOverridesProps = {
    EnrollmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    enrollmentCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EnrollmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: EnrollmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    enrollment?: Enrollment;
    onSubmit?: (fields: EnrollmentUpdateFormInputValues) => EnrollmentUpdateFormInputValues;
    onSuccess?: (fields: EnrollmentUpdateFormInputValues) => void;
    onError?: (fields: EnrollmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EnrollmentUpdateFormInputValues) => EnrollmentUpdateFormInputValues;
    onValidate?: EnrollmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EnrollmentUpdateForm(props: EnrollmentUpdateFormProps): React.ReactElement;
