/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function MarketingFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1442px"
      height="109px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(48,255,134,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MarketingFooter")}
      {...rest}
    >
      <View
        width="1440px"
        height="107px"
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
        backgroundColor="rgba(17,0,56,1)"
        {...getOverrideProps(overrides, "Rectangle 738")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(247,176,54,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="41px"
        left="514px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© Mailing Delgado Medina 2023. All Rights Reserved."
        {...getOverrideProps(
          overrides,
          "\u00A9 Mailing Delgado Medina 2023. All Rights Reserved."
        )}
      ></Text>
    </View>
  );
}
