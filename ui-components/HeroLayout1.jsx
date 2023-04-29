/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useRouter } from "next/router";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";




export default function HeroLayout1(props) {
const router = useRouter();


  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Homeschool Book": {},
        "The application to keep your homeschooling on track.": {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        "https://lottiefiles.com/126604-school-background-removed": {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Light" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="-104px"
      direction="row"
      width="100%"
      height="472px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="4px SOLID rgba(102,255,166,1)"
      padding="0px 634px 0px 416px"
      backgroundColor="rgba(17,0,56,1)"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout1")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="884px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 151px 120px 120px"
        backgroundColor="rgba(0,6,66,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="41px"
          direction="column"
          width="457px"
          height="380px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Minako"
              fontSize="96px"
              fontWeight="400"
              color="rgba(254,148,42,1)"
              lineHeight="158px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="726px"
              height="173px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Homeschool Book"
              {...getOverrideProps(overrides, "Homeschool Book")}
            ></Text>
            <Text
              fontFamily="Mina"
              fontSize="32px"
              fontWeight="400"
              color="rgba(232,189,255,1)"
              lineHeight="40px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="The application to keep your homeschooling on track."
              {...getOverrideProps(
                overrides,
                "The application to keep your homeschooling on track."
              )}
            ></Text>
          </Flex>
            
        
          <Button
            onClick={() => router.push("/hsapp")}
            fontFamily="Minako"
            width="unset"
            height="unset"
            border="4px SOLID rgba(255,174,0,1)"
            borderRadius="25px"
            padding="4px 12px 4px 12px"
            shrink="0"
            size="large"
            isDisabled={false}
            color="#110038"
            backgroundColor="#57FF73"
            children="Get Started"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
       

        </Flex>
      </Flex>
      <Image
        src="https://res.cloudinary.com/programandoconmei/image/upload/v1682276099/Hackthon/Untitled_design_szi8if.png"
        width="550px"
        height="750px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="250px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "https://lottiefiles.com/126604-school-background-removed"
        )}
      ></Image>
    </Flex>
  );
}
