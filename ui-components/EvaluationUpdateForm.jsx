/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, useTheme } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Evaluation } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EvaluationUpdateForm(props) {
  const {
    id: idProp,
    evaluation: evaluationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    behavior: "",
    followalong: "",
    organization: "",
    participation: "",
    problemSolving: "",
    rulesRutines: "",
    timeManagement: "",
    transition: "",
    evaluationValue: "",
    evaluationScore: "",
    progress: "",
  };
  const [behavior, setBehavior] = React.useState(initialValues.behavior);
  const [followalong, setFollowalong] = React.useState(
    initialValues.followalong
  );
  const [organization, setOrganization] = React.useState(
    initialValues.organization
  );
  const [participation, setParticipation] = React.useState(
    initialValues.participation
  );
  const [problemSolving, setProblemSolving] = React.useState(
    initialValues.problemSolving
  );
  const [rulesRutines, setRulesRutines] = React.useState(
    initialValues.rulesRutines
  );
  const [timeManagement, setTimeManagement] = React.useState(
    initialValues.timeManagement
  );
  const [transition, setTransition] = React.useState(initialValues.transition);
  const [evaluationValue, setEvaluationValue] = React.useState(
    initialValues.evaluationValue
  );
  const [evaluationScore, setEvaluationScore] = React.useState(
    initialValues.evaluationScore
  );
  const [progress, setProgress] = React.useState(initialValues.progress);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = evaluationRecord
      ? { ...initialValues, ...evaluationRecord }
      : initialValues;
    setBehavior(cleanValues.behavior);
    setFollowalong(cleanValues.followalong);
    setOrganization(cleanValues.organization);
    setParticipation(cleanValues.participation);
    setProblemSolving(cleanValues.problemSolving);
    setRulesRutines(cleanValues.rulesRutines);
    setTimeManagement(cleanValues.timeManagement);
    setTransition(cleanValues.transition);
    setEvaluationValue(cleanValues.evaluationValue);
    setEvaluationScore(cleanValues.evaluationScore);
    setProgress(cleanValues.progress);
    setErrors({});
  };
  const [evaluationRecord, setEvaluationRecord] =
    React.useState(evaluationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Evaluation, idProp)
        : evaluationModelProp;
      setEvaluationRecord(record);
    };
    queryData();
  }, [idProp, evaluationModelProp]);
  React.useEffect(resetStateValues, [evaluationRecord]);
  const validations = {
    behavior: [],
    followalong: [],
    organization: [],
    participation: [],
    problemSolving: [],
    rulesRutines: [],
    timeManagement: [],
    transition: [],
    evaluationValue: [],
    evaluationScore: [],
    progress: [],
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
      rowGap={tokens.space.medium.value}
      columnGap={tokens.space.medium.value}
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          behavior,
          followalong,
          organization,
          participation,
          problemSolving,
          rulesRutines,
          timeManagement,
          transition,
          evaluationValue,
          evaluationScore,
          progress,
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
          await DataStore.save(
            Evaluation.copyOf(evaluationRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EvaluationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Behavior"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={behavior}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior: value,
              followalong,
              organization,
              participation,
              problemSolving,
              rulesRutines,
              timeManagement,
              transition,
              evaluationValue,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.behavior ?? value;
          }
          if (errors.behavior?.hasError) {
            runValidationTasks("behavior", value);
          }
          setBehavior(value);
        }}
        onBlur={() => runValidationTasks("behavior", behavior)}
        errorMessage={errors.behavior?.errorMessage}
        hasError={errors.behavior?.hasError}
        {...getOverrideProps(overrides, "behavior")}
      ></TextField>
      <TextField
        label="Followalong"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={followalong}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong: value,
              organization,
              participation,
              problemSolving,
              rulesRutines,
              timeManagement,
              transition,
              evaluationValue,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.followalong ?? value;
          }
          if (errors.followalong?.hasError) {
            runValidationTasks("followalong", value);
          }
          setFollowalong(value);
        }}
        onBlur={() => runValidationTasks("followalong", followalong)}
        errorMessage={errors.followalong?.errorMessage}
        hasError={errors.followalong?.hasError}
        {...getOverrideProps(overrides, "followalong")}
      ></TextField>
      <TextField
        label="Organization"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={organization}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization: value,
              participation,
              problemSolving,
              rulesRutines,
              timeManagement,
              transition,
              evaluationValue,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.organization ?? value;
          }
          if (errors.organization?.hasError) {
            runValidationTasks("organization", value);
          }
          setOrganization(value);
        }}
        onBlur={() => runValidationTasks("organization", organization)}
        errorMessage={errors.organization?.errorMessage}
        hasError={errors.organization?.hasError}
        {...getOverrideProps(overrides, "organization")}
      ></TextField>
      <TextField
        label="Participation"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={participation}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization,
              participation: value,
              problemSolving,
              rulesRutines,
              timeManagement,
              transition,
              evaluationValue,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.participation ?? value;
          }
          if (errors.participation?.hasError) {
            runValidationTasks("participation", value);
          }
          setParticipation(value);
        }}
        onBlur={() => runValidationTasks("participation", participation)}
        errorMessage={errors.participation?.errorMessage}
        hasError={errors.participation?.hasError}
        {...getOverrideProps(overrides, "participation")}
      ></TextField>
      <TextField
        label="Problem solving"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={problemSolving}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization,
              participation,
              problemSolving: value,
              rulesRutines,
              timeManagement,
              transition,
              evaluationValue,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.problemSolving ?? value;
          }
          if (errors.problemSolving?.hasError) {
            runValidationTasks("problemSolving", value);
          }
          setProblemSolving(value);
        }}
        onBlur={() => runValidationTasks("problemSolving", problemSolving)}
        errorMessage={errors.problemSolving?.errorMessage}
        hasError={errors.problemSolving?.hasError}
        {...getOverrideProps(overrides, "problemSolving")}
      ></TextField>
      <TextField
        label="Rules rutines"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rulesRutines}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization,
              participation,
              problemSolving,
              rulesRutines: value,
              timeManagement,
              transition,
              evaluationValue,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.rulesRutines ?? value;
          }
          if (errors.rulesRutines?.hasError) {
            runValidationTasks("rulesRutines", value);
          }
          setRulesRutines(value);
        }}
        onBlur={() => runValidationTasks("rulesRutines", rulesRutines)}
        errorMessage={errors.rulesRutines?.errorMessage}
        hasError={errors.rulesRutines?.hasError}
        {...getOverrideProps(overrides, "rulesRutines")}
      ></TextField>
      <TextField
        label="Time management"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={timeManagement}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization,
              participation,
              problemSolving,
              rulesRutines,
              timeManagement: value,
              transition,
              evaluationValue,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.timeManagement ?? value;
          }
          if (errors.timeManagement?.hasError) {
            runValidationTasks("timeManagement", value);
          }
          setTimeManagement(value);
        }}
        onBlur={() => runValidationTasks("timeManagement", timeManagement)}
        errorMessage={errors.timeManagement?.errorMessage}
        hasError={errors.timeManagement?.hasError}
        {...getOverrideProps(overrides, "timeManagement")}
      ></TextField>
      <TextField
        label="Transition"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={transition}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization,
              participation,
              problemSolving,
              rulesRutines,
              timeManagement,
              transition: value,
              evaluationValue,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.transition ?? value;
          }
          if (errors.transition?.hasError) {
            runValidationTasks("transition", value);
          }
          setTransition(value);
        }}
        onBlur={() => runValidationTasks("transition", transition)}
        errorMessage={errors.transition?.errorMessage}
        hasError={errors.transition?.hasError}
        {...getOverrideProps(overrides, "transition")}
      ></TextField>
      <TextField
        label="Evaluation value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={evaluationValue}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization,
              participation,
              problemSolving,
              rulesRutines,
              timeManagement,
              transition,
              evaluationValue: value,
              evaluationScore,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.evaluationValue ?? value;
          }
          if (errors.evaluationValue?.hasError) {
            runValidationTasks("evaluationValue", value);
          }
          setEvaluationValue(value);
        }}
        onBlur={() => runValidationTasks("evaluationValue", evaluationValue)}
        errorMessage={errors.evaluationValue?.errorMessage}
        hasError={errors.evaluationValue?.hasError}
        {...getOverrideProps(overrides, "evaluationValue")}
      ></TextField>
      <TextField
        label="Evaluation score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={evaluationScore}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization,
              participation,
              problemSolving,
              rulesRutines,
              timeManagement,
              transition,
              evaluationValue,
              evaluationScore: value,
              progress,
            };
            const result = onChange(modelFields);
            value = result?.evaluationScore ?? value;
          }
          if (errors.evaluationScore?.hasError) {
            runValidationTasks("evaluationScore", value);
          }
          setEvaluationScore(value);
        }}
        onBlur={() => runValidationTasks("evaluationScore", evaluationScore)}
        errorMessage={errors.evaluationScore?.errorMessage}
        hasError={errors.evaluationScore?.hasError}
        {...getOverrideProps(overrides, "evaluationScore")}
      ></TextField>
      <TextField
        label="Progress"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={progress}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              behavior,
              followalong,
              organization,
              participation,
              problemSolving,
              rulesRutines,
              timeManagement,
              transition,
              evaluationValue,
              evaluationScore,
              progress: value,
            };
            const result = onChange(modelFields);
            value = result?.progress ?? value;
          }
          if (errors.progress?.hasError) {
            runValidationTasks("progress", value);
          }
          setProgress(value);
        }}
        onBlur={() => runValidationTasks("progress", progress)}
        errorMessage={errors.progress?.errorMessage}
        hasError={errors.progress?.hasError}
        {...getOverrideProps(overrides, "progress")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || evaluationModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.medium.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || evaluationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
