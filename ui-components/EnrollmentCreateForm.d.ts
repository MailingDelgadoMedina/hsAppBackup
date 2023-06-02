/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Classes, Term, Activities } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EnrollmentCreateFormInputValues = {
    ClassesEnrollment?: Classes;
    TermEnrollment?: Term;
    ActivitiesEnrollment?: Activities[];
    studentsID?: string;
    enrollmentCode?: string;
};
export declare type EnrollmentCreateFormValidationValues = {
    ClassesEnrollment?: ValidationFunction<Classes>;
    TermEnrollment?: ValidationFunction<Term>;
    ActivitiesEnrollment?: ValidationFunction<Activities>;
    studentsID?: ValidationFunction<string>;
    enrollmentCode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnrollmentCreateFormOverridesProps = {
    EnrollmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ClassesEnrollment?: PrimitiveOverrideProps<AutocompleteProps>;
    TermEnrollment?: PrimitiveOverrideProps<AutocompleteProps>;
    ActivitiesEnrollment?: PrimitiveOverrideProps<AutocompleteProps>;
    studentsID?: PrimitiveOverrideProps<AutocompleteProps>;
    enrollmentCode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EnrollmentCreateFormProps = React.PropsWithChildren<{
    overrides?: EnrollmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EnrollmentCreateFormInputValues) => EnrollmentCreateFormInputValues;
    onSuccess?: (fields: EnrollmentCreateFormInputValues) => void;
    onError?: (fields: EnrollmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EnrollmentCreateFormInputValues) => EnrollmentCreateFormInputValues;
    onValidate?: EnrollmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function EnrollmentCreateForm(props: EnrollmentCreateFormProps): React.ReactElement;
