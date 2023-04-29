/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function FAQItem(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1284px"
      height="133px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      border="2px SOLID rgba(48,255,134,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FAQItem")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(48,255,134,1)"
        padding="23px 23px 23px 23px"
        backgroundColor="rgba(17,0,56,1)"
        {...getOverrideProps(overrides, "Container")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(255,174,0,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="What’s the company?"
            {...getOverrideProps(overrides, "Title")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(232,125,232,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="A general overview that includes the name of the company, year it was founded and its goal. For example: Company was founded in 2019, with a goal to bring better products to every home across the US."
            {...getOverrideProps(overrides, "Paragraph")}
          ></Text>
        </Flex>
      </Flex>
      <Divider
        width="unset"
        height="1px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
