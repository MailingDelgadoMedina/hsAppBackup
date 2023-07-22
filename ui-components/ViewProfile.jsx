/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Students } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ViewProfile(props) {
  const { students, classes, overrides, ...rest } = props;
  const ionColontrashsharpOnClick = useDataStoreDeleteAction({
    id: students?.id,
    model: Students,
    schema: schema,
  });
  const vectorThreeNineSixZeroTwoSevenSevenNineOnClick =
    useDataStoreDeleteAction({
      id: students?.id,
      model: Students,
      schema: schema,
    });
  const vectorThreeNineSixZeroTwoSevenEightZeroOnClick =
    useDataStoreDeleteAction({
      id: students?.id,
      model: Students,
      schema: schema,
    });
  const vectorThreeNineSixZeroTwoSevenEightOneOnClick =
    useDataStoreDeleteAction({
      id: students?.id,
      model: Students,
      schema: schema,
    });
  const buttonThreeNineSixZeroTwoSevenNineThreeOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const buttonThreeNineSixZeroTwoSevenNineSevenOnClick = useNavigateAction({
    type: "url",
    url: '"/ActivityProgress"',
  });
  return (
    <View
      width="590px"
      height="393px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="4px SOLID rgba(17,0,56,1)"
      borderRadius="28px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,246,209,1)"
      {...getOverrideProps(overrides, "ViewProfile")}
      {...rest}
    >
      <View
        width="50px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="28px"
        left="496px"
        border="4px SOLID rgba(255,174,0,1)"
        borderRadius="54px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(17,0,56,1)"
        onClick={() => {
          ionColontrashsharpOnClick();
        }}
        {...getOverrideProps(overrides, "ion:trash-sharp")}
      >
        <Icon
          width="7.88px"
          height="2.5px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 7.875,
            height: 2.500030517578125,
          }}
          paths={[]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="81.25%"
          left="40.62%"
          right="40.62%"
          onClick={() => {
            vectorThreeNineSixZeroTwoSevenSevenNineOnClick();
          }}
          {...getOverrideProps(overrides, "Vector39602779")}
        ></Icon>
        <Icon
          width="6.56px"
          height="2.5px"
          viewBox={{ minX: 0, minY: 0, width: 6.5625, height: 2.5 }}
          paths={[]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="81.25%"
          left="42.19%"
          right="42.19%"
          onClick={() => {
            vectorThreeNineSixZeroTwoSevenEightZeroOnClick();
          }}
          {...getOverrideProps(overrides, "Vector39602780")}
        ></Icon>
        <Icon
          width="31.5px"
          height="35px"
          viewBox={{ minX: 0, minY: 0, width: 31.5, height: 35 }}
          paths={[
            {
              d: "M31.4631 5L22.3125 5L22.3125 1.25C22.3125 0.918479 22.1742 0.600537 21.9281 0.366116C21.6819 0.131696 21.3481 8.32667e-16 21 0L10.5 0C10.1519 5.55112e-16 9.81806 0.131696 9.57192 0.366116C9.32578 0.600537 9.1875 0.918479 9.1875 1.25L9.1875 5L0.0369138 5L0 8.125L2.70703 8.125L4.35504 32.6562C4.39675 33.2906 4.69062 33.8861 5.17687 34.3214C5.66313 34.7568 6.30525 34.9995 6.97266 35L24.5273 35C25.1944 34.9999 25.8363 34.758 26.3228 34.3234C26.8093 33.8888 27.1039 33.2941 27.1466 32.6602L28.793 8.125L31.5 8.125L31.4631 5ZM9.1875 30L8.44922 10L11.1562 10L11.8945 30L9.1875 30ZM17.0625 30L14.4375 30L14.4375 10L17.0625 10L17.0625 30ZM19.0312 5L12.4688 5L12.4688 2.8125C12.4688 2.72962 12.5033 2.65013 12.5649 2.59153C12.6264 2.53292 12.7099 2.5 12.7969 2.5L18.7031 2.5C18.7901 2.5 18.8736 2.53292 18.9351 2.59153C18.9967 2.65013 19.0312 2.72962 19.0312 2.8125L19.0312 5ZM22.3125 30L19.6055 30L20.3438 10L23.0508 10L22.3125 30Z",
              fill: "rgba(102,255,166,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="6.25%"
          bottom="6.25%"
          left="12.5%"
          right="12.5%"
          onClick={() => {
            vectorThreeNineSixZeroTwoSevenEightOneOnClick();
          }}
          {...getOverrideProps(overrides, "Vector39602781")}
        ></Icon>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(56,0,185,1)"
        lineHeight="22px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="135px"
        left="410px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={students?.stuLastName}
        {...getOverrideProps(overrides, "Lastname")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(56,0,185,1)"
        lineHeight="22px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="135px"
        left="288px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={students?.stuName}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Image
        width="188px"
        height="183px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="37px"
        left="51px"
        border="1px SOLID rgba(255,174,0,1)"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={students?.imageProfileStu}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="22px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="209px"
        left="303px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={students?.age}
        {...getOverrideProps(overrides, "Age")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="22px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="91px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="209px"
        left="434px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={classes?.classLevel}
        {...getOverrideProps(overrides, "Grade")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        border="3px SOLID rgba(102,255,166,1)"
        borderRadius="23px"
        top="301px"
        left="48px"
        backgroundColor="rgba(17,0,56,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Update"
        onClick={() => {
          buttonThreeNineSixZeroTwoSevenNineThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button39602793")}
      ></Button>
      <Button
        width="97px"
        height="46px"
        position="absolute"
        border="3px SOLID rgba(17,0,56,1)"
        borderRadius="23px"
        top="301px"
        left="194px"
        backgroundColor="rgba(102,255,166,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Progress"
        onClick={() => {
          buttonThreeNineSixZeroTwoSevenNineSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button39602797")}
      ></Button>
    </View>
  );
}
