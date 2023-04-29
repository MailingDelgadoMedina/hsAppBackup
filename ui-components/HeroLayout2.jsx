/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import HeroLayout3 from "./HeroLayout3";
export default function HeroLayout2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="858px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeroLayout2")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <HeroLayout3
        display="flex"
        gap="10px"
        direction="column"
        width="1440px"
        height="858px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="3px SOLID rgba(102,255,166,1)"
        padding="157px 237px 157px 237px"
        backgroundColor="rgba(0,0,0,0.5)"
        {...getOverrideProps(overrides, "HeroLayout3")}
      ></HeroLayout3>
    </View>
  );
}
