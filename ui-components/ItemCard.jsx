/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Text } from "@aws-amplify/ui-react";

const navigation = [
  
  { name: 'Students', href: '/students', description: "You can create and view your student", current: false },
  { name: 'Enrollments', href: '/enrollments', description: "Here you can manage your enrollments ", current: false },
  { name: 'Activities', href: '/activities', description: "Manage your student activities", current: false },
  { name: 'Evaluations', href: '/evalutations', description: "Evaluate your students", current: false },
  { name: 'Reports', href: '/reports', description: "Print your reports", current: false },
]
const necessities = [
  { id: 1, name: 'Breaks', href: '/breaks', initial: 'B', current: false },
  { id: 2, name: 'Potty Log', href: '/pottylog', initial: 'P', current: false },
  { id: 3, name: 'Rewards', href: 'rewards', initial: 'R', current: false },
]


export default function ItemCard(props) {
  const { overrides, ...rest } = props;
  return (

    <Flex
      gap="16px"
      direction="column"
      width="322px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(17,0,56,1)"
      borderRadius="28px"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,246,209,1)"
      {...getOverrideProps(overrides, "ItemCard")}
      {...rest}
    >
   
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Product Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(56,0,185,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="T-Shirt"
            {...getOverrideProps(overrides, "T-Shirt")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(17,0,56,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Classic Long Sleeve"
            {...getOverrideProps(overrides, "Classic Long Sleeve")}
          ></Text>
        </Flex>
        
      </Flex>
    </Flex>


  );
}
