/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TermCreateFormInputValues = {
    winter?: boolean;
    summer?: boolean;
    fall?: boolean;
    year?: string;
    termId?: string;
};
export declare type TermCreateFormValidationValues = {
    winter?: ValidationFunction<boolean>;
    summer?: ValidationFunction<boolean>;
    fall?: ValidationFunction<boolean>;
    year?: ValidationFunction<string>;
    termId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TermCreateFormOverridesProps = {
    TermCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    winter?: PrimitiveOverrideProps<SwitchFieldProps>;
    summer?: PrimitiveOverrideProps<SwitchFieldProps>;
    fall?: PrimitiveOverrideProps<SwitchFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    termId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TermCreateFormProps = React.PropsWithChildren<{
    overrides?: TermCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TermCreateFormInputValues) => TermCreateFormInputValues;
    onSuccess?: (fields: TermCreateFormInputValues) => void;
    onError?: (fields: TermCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TermCreateFormInputValues) => TermCreateFormInputValues;
    onValidate?: TermCreateFormValidationValues;
} & React.CSSProperties>;
export default function TermCreateForm(props: TermCreateFormProps): React.ReactElement;
