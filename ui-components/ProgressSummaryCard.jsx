/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ProgressSummaryCard(props) {
  const {
    students,
    activities,
    classes,
    enrollment,
    evaluation,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="850px"
      height="392px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="4px SOLID rgba(17,0,56,1)"
      borderRadius="24px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,246,209,1)"
      {...getOverrideProps(overrides, "ProgressSummaryCard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(56,0,185,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="311px"
        height="77px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="53px"
        left="177px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${students?.stuName}${"'s"}${""}`}
        {...getOverrideProps(overrides, "StudentsName")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(17,0,56,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="180px"
        height="53px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="53px"
        left="488px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={enrollment?.studentsID}
        {...getOverrideProps(overrides, "Progress39552806")}
      ></Text>
      <View
        width="207px"
        height="57px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="172px"
        left="110px"
        border="3px SOLID rgba(102,255,166,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(18,0,56,1)"
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="188px"
        left="191px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Date"
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <View
        width="207px"
        height="57px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="172px"
        left="315px"
        border="3px SOLID rgba(102,255,166,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(18,0,56,1)"
        {...getOverrideProps(overrides, "Rectangle 1165")}
      ></View>
      <View
        width="207px"
        height="57px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="172px"
        left="522px"
        border="3px SOLID rgba(102,255,166,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(18,0,56,1)"
        {...getOverrideProps(overrides, "Rectangle 1166")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="188px"
        left="582px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Progress"
        {...getOverrideProps(overrides, "Progress39552817")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="188px"
        left="391px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Class"
        {...getOverrideProps(overrides, "Class")}
      ></Text>
      <View
        width="207px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="229px"
        left="110px"
        border="3px SOLID rgba(102,255,166,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(17,0,56,1)"
        {...getOverrideProps(overrides, "Rectangle 1167")}
      ></View>
      <View
        width="207px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="229px"
        left="522px"
        border="3px SOLID rgba(102,255,166,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(17,0,56,1)"
        {...getOverrideProps(overrides, "Rectangle 1169")}
      ></View>
      <View
        width="205px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="229px"
        left="317px"
        border="3px SOLID rgba(102,255,166,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(17,0,56,1)"
        {...getOverrideProps(overrides, "Rectangle 1168")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="245px"
        left="402px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={enrollment?.enrollmentCode}
        {...getOverrideProps(overrides, "Text39602791")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="244px"
        left="204px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={evaluation?.createdAt}
        {...getOverrideProps(overrides, "Text39602790")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="245px"
        left="613px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={evaluation?.progress}
        {...getOverrideProps(overrides, "Text39602792")}
      ></Text>
    </View>
  );
}
