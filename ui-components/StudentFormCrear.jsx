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
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, SelectField, TextField, View } from "@aws-amplify/ui-react";
export default function StudentFormCrear(props) {
  const { parents, students, overrides, ...rest } = props;
  const [
    textFieldThreeNineThreeOneTwoSixEightFiveValue,
    setTextFieldThreeNineThreeOneTwoSixEightFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeOneTwoSixNineTwoValue,
    setTextFieldThreeNineThreeOneTwoSixNineTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeOneTwoSixNineNineValue,
    setTextFieldThreeNineThreeOneTwoSixNineNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeOneTwoSevenZeroSixValue,
    setTextFieldThreeNineThreeOneTwoSevenZeroSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeOneTwoSevenOneThreeValue,
    setTextFieldThreeNineThreeOneTwoSevenOneThreeValue,
  ] = useStateMutationAction("");
  const buttonSubmitOnClick = useDataStoreCreateAction({
    fields: {
      stuName: textFieldThreeNineThreeOneTwoSixEightFiveValue,
      stuLastName: textFieldThreeNineThreeOneTwoSixNineTwoValue,
      email: textFieldThreeNineThreeOneTwoSixNineNineValue,
      age: textFieldThreeNineThreeOneTwoSevenZeroSixValue,
      imageProfileStu: textFieldThreeNineThreeOneTwoSevenOneThreeValue,
      parentsID: "parents.parentName",
    },
    model: Students,
    schema: schema,
  });
  return (
    <View
    color="#110038"
    marginTop="75px"
      width="390px"
      height="788px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="4px SOLID rgba(17,0,56,1)"
      borderRadius="24px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "StudentFormCrear")}
      {...rest}
    >
      <TextField
        color="#110038"
        width="300px"
        height="unset"
  
        position="absolute"
        top="72px"
        left="41px"
        placeholder="Name"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeOneTwoSixEightFiveValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeOneTwoSixEightFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField39312685")}
      ></TextField>
      <TextField
        color="#110038"
        width="300px"
        height="unset"
  
        position="absolute"
        top="159px"
        left="41px"
        placeholder="Last Name"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeOneTwoSixNineTwoValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeOneTwoSixNineTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField39312692")}
      ></TextField>
      <TextField
        color="#110038"
        width="300px"
        height="unset"
    
        position="absolute"
        top="255px"
        left="41px"
        placeholder="Email"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeOneTwoSixNineNineValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeOneTwoSixNineNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField39312699")}
      ></TextField>
      <TextField
        color="#110038"
        width="300px"
        height="unset"
        
        position="absolute"
        top="357px"
        left="41px"
        placeholder="age"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeOneTwoSevenZeroSixValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeOneTwoSevenZeroSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField39312706")}
      ></TextField>
      <TextField
        color="#110038"
        width="300px"
        height="unset"

        position="absolute"
        top="453px"
        left="41px"
        placeholder="Image URL"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeNineThreeOneTwoSevenOneThreeValue}
        onChange={(event) => {
          setTextFieldThreeNineThreeOneTwoSevenOneThreeValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField39312713")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        border="3px SOLID rgba(17,0,56,1)"
        borderRadius="23px"
        top="685px"
        left="43px"
        backgroundColor="rgba(255,174,0,1)"
        color="#110038"
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
        border="3px SOLID rgba(102,255,166,1)"
        borderRadius="23px"
        top="685px"
        left="234px"
        color="rgba(102,255,166,1)"
        backgroundColor="rgba(17,0,56,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        onClick={() => {
          buttonSubmitOnClick();
        }}
        {...getOverrideProps(overrides, "ButtonSubmit")}
      ></Button>
      <SelectField
        color="#110038"
        width="300px"
        height="unset"

        position="absolute"
        top="540px"
        left="41px"
        placeholder="Parent"
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
