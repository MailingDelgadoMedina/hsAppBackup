/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Evaluation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EvaluationUpdateFormInputValues = {
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
};
export declare type EvaluationUpdateFormValidationValues = {
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
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvaluationUpdateFormOverridesProps = {
    EvaluationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
} & EscapeHatchProps;
export declare type EvaluationUpdateFormProps = React.PropsWithChildren<{
    overrides?: EvaluationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    evaluation?: Evaluation;
    onSubmit?: (fields: EvaluationUpdateFormInputValues) => EvaluationUpdateFormInputValues;
    onSuccess?: (fields: EvaluationUpdateFormInputValues) => void;
    onError?: (fields: EvaluationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EvaluationUpdateFormInputValues) => EvaluationUpdateFormInputValues;
    onValidate?: EvaluationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EvaluationUpdateForm(props: EvaluationUpdateFormProps): React.ReactElement;
