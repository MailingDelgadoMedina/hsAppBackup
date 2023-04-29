/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Features2x2(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="35px"
      direction="column"
      width="1447px"
      height="527px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="40px 140px 0px 931px"
      backgroundColor="rgba(0,6,66,1)"
      {...getOverrideProps(overrides, "Features2x2")}
      {...rest}
    >
      <Text
        fontFamily="Minako"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,174,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="366px"
        height="78px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Did homeschooling leave you feeling overwhelmed?"
        {...getOverrideProps(
          overrides,
          "Did homeschooling leave you feeling overwhelmed?"
        )}
      ></Text>
      <Text
        fontFamily="Mina"
        fontSize="20px"
        fontWeight="400"
        color="rgba(232,189,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="372px"
        height="141px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=" Try Homeschool Book today and empower your child to reach their full potential in a supportive and nurturing homeschool environment. Click the button below to get started."
        {...getOverrideProps(
          overrides,
          "Try Homeschool Book today and empower your child to reach their full potential in a supportive and nurturing homeschool environment. Click the button below to get started."
        )}
      ></Text>
      <Flex
        width="unset"
        height="44px"
        {...getOverrideProps(overrides, "Button")}
      ></Flex>
    </Flex>
  );
}
