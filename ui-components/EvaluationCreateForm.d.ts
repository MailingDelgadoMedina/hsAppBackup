/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Activities as Activities0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EvaluationCreateFormInputValues = {
    behavior?: number;
    followalong?: number;
    organization?: number;
    participation?: number;
    problemSolving?: number;
    rulesRutines?: number;
    timeManagement?: number;
    transition?: number;
    evaluationValue?: number;
    evaluationScore?: number;
    progress?: number;
    Activities?: Activities0;
};
export declare type EvaluationCreateFormValidationValues = {
    behavior?: ValidationFunction<number>;
    followalong?: ValidationFunction<number>;
    organization?: ValidationFunction<number>;
    participation?: ValidationFunction<number>;
    problemSolving?: ValidationFunction<number>;
    rulesRutines?: ValidationFunction<number>;
    timeManagement?: ValidationFunction<number>;
    transition?: ValidationFunction<number>;
    evaluationValue?: ValidationFunction<number>;
    evaluationScore?: ValidationFunction<number>;
    progress?: ValidationFunction<number>;
    Activities?: ValidationFunction<Activities0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvaluationCreateFormOverridesProps = {
    EvaluationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    behavior?: PrimitiveOverrideProps<TextFieldProps>;
    followalong?: PrimitiveOverrideProps<TextFieldProps>;
    organization?: PrimitiveOverrideProps<TextFieldProps>;
    participation?: PrimitiveOverrideProps<TextFieldProps>;
    problemSolving?: PrimitiveOverrideProps<TextFieldProps>;
    rulesRutines?: PrimitiveOverrideProps<TextFieldProps>;
    timeManagement?: PrimitiveOverrideProps<TextFieldProps>;
    transition?: PrimitiveOverrideProps<TextFieldProps>;
    evaluationValue?: PrimitiveOverrideProps<TextFieldProps>;
    evaluationScore?: PrimitiveOverrideProps<TextFieldProps>;
    progress?: PrimitiveOverrideProps<TextFieldProps>;
    Activities?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EvaluationCreateFormProps = React.PropsWithChildren<{
    overrides?: EvaluationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EvaluationCreateFormInputValues) => EvaluationCreateFormInputValues;
    onSuccess?: (fields: EvaluationCreateFormInputValues) => void;
    onError?: (fields: EvaluationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EvaluationCreateFormInputValues) => EvaluationCreateFormInputValues;
    onValidate?: EvaluationCreateFormValidationValues;
} & React.CSSProperties>;
export default function EvaluationCreateForm(props: EvaluationCreateFormProps): React.ReactElement;
