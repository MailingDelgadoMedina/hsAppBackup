/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, SelectField, TextField, View } from "@aws-amplify/ui-react";
export default function StudentFormCrear(props) {
  const { overrides, ...rest } = props;
  return (
    <View
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
        width="300px"
        height="unset"
        label="Student Name"
        position="absolute"
        top="72px"
        left="41px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39312685")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Student Last Name"
        position="absolute"
        top="159px"
        left="41px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39312692")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Email"
        position="absolute"
        top="255px"
        left="41px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39312699")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Age"
        position="absolute"
        top="357px"
        left="41px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39312706")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Student Image"
        position="absolute"
        top="453px"
        left="41px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
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
        backgroundColor="rgba(17,0,56,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Submit"
        {...getOverrideProps(overrides, "ButtonSubmit")}
      ></Button>
      <SelectField
        width="300px"
        height="unset"
        label="Parent"
        position="absolute"
        top="540px"
        left="41px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </View>
  );
}
