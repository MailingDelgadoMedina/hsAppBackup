/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Evaluation as Evaluation0, PottyLog as PottyLog0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RewardsCreateFormInputValues = {
    goodBehavior?: boolean;
    completedActivities?: boolean;
    desctiptionRewardGiven?: string;
    rewardDate?: string;
    rewardTime?: string;
    Evaluation?: Evaluation0;
    PottyLog?: PottyLog0;
};
export declare type RewardsCreateFormValidationValues = {
    goodBehavior?: ValidationFunction<boolean>;
    completedActivities?: ValidationFunction<boolean>;
    desctiptionRewardGiven?: ValidationFunction<string>;
    rewardDate?: ValidationFunction<string>;
    rewardTime?: ValidationFunction<string>;
    Evaluation?: ValidationFunction<Evaluation0>;
    PottyLog?: ValidationFunction<PottyLog0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RewardsCreateFormOverridesProps = {
    RewardsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    goodBehavior?: PrimitiveOverrideProps<SwitchFieldProps>;
    completedActivities?: PrimitiveOverrideProps<SwitchFieldProps>;
    desctiptionRewardGiven?: PrimitiveOverrideProps<TextFieldProps>;
    rewardDate?: PrimitiveOverrideProps<TextFieldProps>;
    rewardTime?: PrimitiveOverrideProps<TextFieldProps>;
    Evaluation?: PrimitiveOverrideProps<AutocompleteProps>;
    PottyLog?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RewardsCreateFormProps = React.PropsWithChildren<{
    overrides?: RewardsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RewardsCreateFormInputValues) => RewardsCreateFormInputValues;
    onSuccess?: (fields: RewardsCreateFormInputValues) => void;
    onError?: (fields: RewardsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RewardsCreateFormInputValues) => RewardsCreateFormInputValues;
    onValidate?: RewardsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RewardsCreateForm(props: RewardsCreateFormProps): React.ReactElement;
