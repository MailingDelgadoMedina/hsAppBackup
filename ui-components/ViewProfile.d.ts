/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Students, Classes } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ViewProfileOverridesProps = {
    ViewProfile?: PrimitiveOverrideProps<ViewProps>;
    "ion:trash-sharp"?: PrimitiveOverrideProps<ViewProps>;
    Vector39602779?: PrimitiveOverrideProps<IconProps>;
    Vector39602780?: PrimitiveOverrideProps<IconProps>;
    Vector39602781?: PrimitiveOverrideProps<IconProps>;
    Lastname?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Age?: PrimitiveOverrideProps<TextProps>;
    Grade?: PrimitiveOverrideProps<TextProps>;
    Button39602793?: PrimitiveOverrideProps<ButtonProps>;
    Button39602797?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ViewProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    students?: Students;
    classes?: Classes;
} & {
    overrides?: ViewProfileOverridesProps | undefined | null;
}>;
export default function ViewProfile(props: ViewProfileProps): React.ReactElement;
