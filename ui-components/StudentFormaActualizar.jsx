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
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, SelectField, TextField, View } from "@aws-amplify/ui-react";
export default function StudentFormaActualizar(props) {
  const { parents, students, overrides, ...rest } = props;
  const [
    textFieldThreeNineThreeFourTwoNineNineZeroValue,
    setTextFieldThreeNineThreeFourTwoNineNineZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeFourTwoNineNineSevenValue,
    setTextFieldThreeNineThreeFourTwoNineNineSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeFourThreeZeroZeroFourValue,
    setTextFieldThreeNineThreeFourThreeZeroZeroFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeFourThreeZeroOneOneValue,
    setTextFieldThreeNineThreeFourThreeZeroOneOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeFourThreeZeroOneEightValue,
    setTextFieldThreeNineThreeFourThreeZeroOneEightValue,
  ] = useStateMutationAction("");
  const buttonUpdateOnClick = useDataStoreUpdateAction({
    fields: {
      stuName: textFieldThreeNineThreeFourTwoNineNineZeroValue,
      stuLastName: textFieldThreeNineThreeFourTwoNineNineSevenValue,
      email: textFieldThreeNineThreeFourThreeZeroZeroFourValue,
      age: textFieldThreeNineThreeFourThreeZeroOneOneValue,
      imageProfileStu: textFieldThreeNineThreeFourThreeZeroOneEightValue,
      parentsID: "parents.parentName",
    },
    id: students?.id,
    model: Students,
    schema: schema,
  });
  return (
    <View
      width="369px"
      height="788px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="4px SOLID rgba(255,174,0,1)"
      borderRadius="24px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(17,0,56,1)"
      {...getOverrideProps(overrides, "StudentFormaActualizar")}
      {...rest}
    >
      <TextField
        width="300px"
        height="unset"
        label="Student Name"
        position="absolute"
        top="68px"
        left="26px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeFourTwoNineNineZeroValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeFourTwoNineNineZeroValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField39342990")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Student Last Name"
        position="absolute"
        top="155px"
        left="26px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeFourTwoNineNineSevenValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeFourTwoNineNineSevenValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField39342997")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Email"
        position="absolute"
        top="249px"
        left="26px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeFourThreeZeroZeroFourValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeFourThreeZeroZeroFourValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField39343004")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Age"
        position="absolute"
        top="347px"
        left="26px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeFourThreeZeroOneOneValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeFourThreeZeroOneOneValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField39343011")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Student Image"
        position="absolute"
        top="441px"
        left="26px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeFourThreeZeroOneEightValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeFourThreeZeroOneEightValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField39343018")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        border="3px SOLID rgba(181,179,255,1)"
        borderRadius="27px"
        top="675px"
        left="39px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Clear"
        {...getOverrideProps(overrides, "ButtonClear")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        border="3px SOLID rgba(255,174,0,1)"
        borderRadius="27px"
        top="675px"
        left="234px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Update"
        onClick={() => {
          buttonUpdateOnClick();
        }}
        {...getOverrideProps(overrides, "ButtonUpdate")}
      ></Button>
      <SelectField
        width="300px"
        height="unset"
        label="Parent"
        placeholder="Parent"
        position="absolute"
        top="535px"
        left="26px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        aria-multiselectable={`${parents?.parentName}${parents?.parentLastName}`}
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </View>
  );
}
