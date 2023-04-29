/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout1OverridesProps = {
    HeroLayout1?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    "Homeschool Book"?: PrimitiveOverrideProps<TextProps>;
    "The application to keep your homeschooling on track."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "https://lottiefiles.com/126604-school-background-removed"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeroLayout1Props = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "Light";
} & {
    overrides?: HeroLayout1OverridesProps | undefined | null;
}>;
export default function HeroLayout1(props: HeroLayout1Props): React.ReactElement;
