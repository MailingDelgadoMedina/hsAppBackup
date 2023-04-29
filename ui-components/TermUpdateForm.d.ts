/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Term } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TermUpdateFormInputValues = {
    winter?: boolean;
    summer?: boolean;
    fall?: boolean;
    year?: string;
    termId?: string;
};
export declare type TermUpdateFormValidationValues = {
    winter?: ValidationFunction<boolean>;
    summer?: ValidationFunction<boolean>;
    fall?: ValidationFunction<boolean>;
    year?: ValidationFunction<string>;
    termId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TermUpdateFormOverridesProps = {
    TermUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    winter?: PrimitiveOverrideProps<SwitchFieldProps>;
    summer?: PrimitiveOverrideProps<SwitchFieldProps>;
    fall?: PrimitiveOverrideProps<SwitchFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    termId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TermUpdateFormProps = React.PropsWithChildren<{
    overrides?: TermUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    term?: Term;
    onSubmit?: (fields: TermUpdateFormInputValues) => TermUpdateFormInputValues;
    onSuccess?: (fields: TermUpdateFormInputValues) => void;
    onError?: (fields: TermUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TermUpdateFormInputValues) => TermUpdateFormInputValues;
    onValidate?: TermUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TermUpdateForm(props: TermUpdateFormProps): React.ReactElement;
