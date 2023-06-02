/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Rewards, Evaluation as Evaluation0, PottyLog as PottyLog0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RewardsUpdateFormInputValues = {
    goodBehavior?: boolean;
    completedActivities?: boolean;
    desctiptionRewardGiven?: string;
    rewardDate?: string;
    rewardTime?: string;
    Evaluation?: Evaluation0;
    PottyLog?: PottyLog0;
};
export declare type RewardsUpdateFormValidationValues = {
    goodBehavior?: ValidationFunction<boolean>;
    completedActivities?: ValidationFunction<boolean>;
    desctiptionRewardGiven?: ValidationFunction<string>;
    rewardDate?: ValidationFunction<string>;
    rewardTime?: ValidationFunction<string>;
    Evaluation?: ValidationFunction<Evaluation0>;
    PottyLog?: ValidationFunction<PottyLog0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RewardsUpdateFormOverridesProps = {
    RewardsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    goodBehavior?: PrimitiveOverrideProps<SwitchFieldProps>;
    completedActivities?: PrimitiveOverrideProps<SwitchFieldProps>;
    desctiptionRewardGiven?: PrimitiveOverrideProps<TextFieldProps>;
    rewardDate?: PrimitiveOverrideProps<TextFieldProps>;
    rewardTime?: PrimitiveOverrideProps<TextFieldProps>;
    Evaluation?: PrimitiveOverrideProps<AutocompleteProps>;
    PottyLog?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RewardsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RewardsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rewards?: Rewards;
    onSubmit?: (fields: RewardsUpdateFormInputValues) => RewardsUpdateFormInputValues;
    onSuccess?: (fields: RewardsUpdateFormInputValues) => void;
    onError?: (fields: RewardsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RewardsUpdateFormInputValues) => RewardsUpdateFormInputValues;
    onValidate?: RewardsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RewardsUpdateForm(props: RewardsUpdateFormProps): React.ReactElement;
