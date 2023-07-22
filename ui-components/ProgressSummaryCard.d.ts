/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Students, Activities, Term, Enrollment, Evaluation } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgressSummaryCardOverridesProps = {
    ProgressSummaryCard?: PrimitiveOverrideProps<ViewProps>;
    StudentsName?: PrimitiveOverrideProps<TextProps>;
    Progress39552806?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1165"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1166"?: PrimitiveOverrideProps<ViewProps>;
    Progress39552817?: PrimitiveOverrideProps<TextProps>;
    Class?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1167"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1169"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1168"?: PrimitiveOverrideProps<ViewProps>;
    Text39602791?: PrimitiveOverrideProps<TextProps>;
    Text39602790?: PrimitiveOverrideProps<TextProps>;
    Text39602792?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProgressSummaryCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    students?: Students;
    activities?: Activities;
    classes?: Term;
    enrollment?: Enrollment;
    evaluation?: Evaluation;
} & {
    overrides?: ProgressSummaryCardOverridesProps | undefined | null;
}>;
export default function ProgressSummaryCard(props: ProgressSummaryCardProps): React.ReactElement;
