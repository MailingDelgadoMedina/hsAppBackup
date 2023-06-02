/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Rewards } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RewardsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    goodBehavior: false,
    completedActivities: false,
    desctiptionRewardGiven: "",
    rewardDate: "",
    rewardTime: "",
  };
  const [goodBehavior, setGoodBehavior] = React.useState(
    initialValues.goodBehavior
  );
  const [completedActivities, setCompletedActivities] = React.useState(
    initialValues.completedActivities
  );
  const [desctiptionRewardGiven, setDesctiptionRewardGiven] = React.useState(
    initialValues.desctiptionRewardGiven
  );
  const [rewardDate, setRewardDate] = React.useState(initialValues.rewardDate);
  const [rewardTime, setRewardTime] = React.useState(initialValues.rewardTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGoodBehavior(initialValues.goodBehavior);
    setCompletedActivities(initialValues.completedActivities);
    setDesctiptionRewardGiven(initialValues.desctiptionRewardGiven);
    setRewardDate(initialValues.rewardDate);
    setRewardTime(initialValues.rewardTime);
    setErrors({});
  };
  const validations = {
    goodBehavior: [],
    completedActivities: [],
    desctiptionRewardGiven: [],
    rewardDate: [],
    rewardTime: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          goodBehavior,
          completedActivities,
          desctiptionRewardGiven,
          rewardDate,
          rewardTime,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Rewards(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RewardsCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Good behavior"
        defaultChecked={false}
        isDisabled={false}
        isChecked={goodBehavior}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              goodBehavior: value,
              completedActivities,
              desctiptionRewardGiven,
              rewardDate,
              rewardTime,
            };
            const result = onChange(modelFields);
            value = result?.goodBehavior ?? value;
          }
          if (errors.goodBehavior?.hasError) {
            runValidationTasks("goodBehavior", value);
          }
          setGoodBehavior(value);
        }}
        onBlur={() => runValidationTasks("goodBehavior", goodBehavior)}
        errorMessage={errors.goodBehavior?.errorMessage}
        hasError={errors.goodBehavior?.hasError}
        {...getOverrideProps(overrides, "goodBehavior")}
      ></SwitchField>
      <SwitchField
        label="Completed activities"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completedActivities}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              goodBehavior,
              completedActivities: value,
              desctiptionRewardGiven,
              rewardDate,
              rewardTime,
            };
            const result = onChange(modelFields);
            value = result?.completedActivities ?? value;
          }
          if (errors.completedActivities?.hasError) {
            runValidationTasks("completedActivities", value);
          }
          setCompletedActivities(value);
        }}
        onBlur={() =>
          runValidationTasks("completedActivities", completedActivities)
        }
        errorMessage={errors.completedActivities?.errorMessage}
        hasError={errors.completedActivities?.hasError}
        {...getOverrideProps(overrides, "completedActivities")}
      ></SwitchField>
      <TextField
        label="Desctiption reward given"
        isRequired={false}
        isReadOnly={false}
        value={desctiptionRewardGiven}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodBehavior,
              completedActivities,
              desctiptionRewardGiven: value,
              rewardDate,
              rewardTime,
            };
            const result = onChange(modelFields);
            value = result?.desctiptionRewardGiven ?? value;
          }
          if (errors.desctiptionRewardGiven?.hasError) {
            runValidationTasks("desctiptionRewardGiven", value);
          }
          setDesctiptionRewardGiven(value);
        }}
        onBlur={() =>
          runValidationTasks("desctiptionRewardGiven", desctiptionRewardGiven)
        }
        errorMessage={errors.desctiptionRewardGiven?.errorMessage}
        hasError={errors.desctiptionRewardGiven?.hasError}
        {...getOverrideProps(overrides, "desctiptionRewardGiven")}
      ></TextField>
      <TextField
        label="Reward date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={rewardDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodBehavior,
              completedActivities,
              desctiptionRewardGiven,
              rewardDate: value,
              rewardTime,
            };
            const result = onChange(modelFields);
            value = result?.rewardDate ?? value;
          }
          if (errors.rewardDate?.hasError) {
            runValidationTasks("rewardDate", value);
          }
          setRewardDate(value);
        }}
        onBlur={() => runValidationTasks("rewardDate", rewardDate)}
        errorMessage={errors.rewardDate?.errorMessage}
        hasError={errors.rewardDate?.hasError}
        {...getOverrideProps(overrides, "rewardDate")}
      ></TextField>
      <TextField
        label="Reward time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={rewardTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodBehavior,
              completedActivities,
              desctiptionRewardGiven,
              rewardDate,
              rewardTime: value,
            };
            const result = onChange(modelFields);
            value = result?.rewardTime ?? value;
          }
          if (errors.rewardTime?.hasError) {
            runValidationTasks("rewardTime", value);
          }
          setRewardTime(value);
        }}
        onBlur={() => runValidationTasks("rewardTime", rewardTime)}
        errorMessage={errors.rewardTime?.errorMessage}
        hasError={errors.rewardTime?.hasError}
        {...getOverrideProps(overrides, "rewardTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
