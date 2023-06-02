/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import {
  Rewards,
  Evaluation as Evaluation0,
  PottyLog as PottyLog0,
} from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
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
    Evaluation: undefined,
    PottyLog: undefined,
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
  const [Evaluation, setEvaluation] = React.useState(initialValues.Evaluation);
  const [PottyLog, setPottyLog] = React.useState(initialValues.PottyLog);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGoodBehavior(initialValues.goodBehavior);
    setCompletedActivities(initialValues.completedActivities);
    setDesctiptionRewardGiven(initialValues.desctiptionRewardGiven);
    setRewardDate(initialValues.rewardDate);
    setRewardTime(initialValues.rewardTime);
    setEvaluation(initialValues.Evaluation);
    setCurrentEvaluationValue(undefined);
    setCurrentEvaluationDisplayValue("");
    setPottyLog(initialValues.PottyLog);
    setCurrentPottyLogValue(undefined);
    setCurrentPottyLogDisplayValue("");
    setErrors({});
  };
  const [currentEvaluationDisplayValue, setCurrentEvaluationDisplayValue] =
    React.useState("");
  const [currentEvaluationValue, setCurrentEvaluationValue] =
    React.useState(undefined);
  const EvaluationRef = React.createRef();
  const [currentPottyLogDisplayValue, setCurrentPottyLogDisplayValue] =
    React.useState("");
  const [currentPottyLogValue, setCurrentPottyLogValue] =
    React.useState(undefined);
  const PottyLogRef = React.createRef();
  const getIDValue = {
    Evaluation: (r) => JSON.stringify({ id: r?.id }),
    PottyLog: (r) => JSON.stringify({ id: r?.id }),
  };
  const EvaluationIdSet = new Set(
    Array.isArray(Evaluation)
      ? Evaluation.map((r) => getIDValue.Evaluation?.(r))
      : getIDValue.Evaluation?.(Evaluation)
  );
  const PottyLogIdSet = new Set(
    Array.isArray(PottyLog)
      ? PottyLog.map((r) => getIDValue.PottyLog?.(r))
      : getIDValue.PottyLog?.(PottyLog)
  );
  const evaluationRecords = useDataStoreBinding({
    type: "collection",
    model: Evaluation0,
  }).items;
  const pottyLogRecords = useDataStoreBinding({
    type: "collection",
    model: PottyLog0,
  }).items;
  const getDisplayValue = {
    Evaluation: (r) => `${r?.behavior ? r?.behavior + " - " : ""}${r?.id}`,
    PottyLog: (r) => `${r?.urine ? r?.urine + " - " : ""}${r?.id}`,
  };
  const validations = {
    goodBehavior: [],
    completedActivities: [],
    desctiptionRewardGiven: [],
    rewardDate: [],
    rewardTime: [],
    Evaluation: [],
    PottyLog: [],
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
          Evaluation,
          PottyLog,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
              Evaluation,
              PottyLog,
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
              Evaluation,
              PottyLog,
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
              Evaluation,
              PottyLog,
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
              Evaluation,
              PottyLog,
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
              Evaluation,
              PottyLog,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              goodBehavior,
              completedActivities,
              desctiptionRewardGiven,
              rewardDate,
              rewardTime,
              Evaluation: value,
              PottyLog,
            };
            const result = onChange(modelFields);
            value = result?.Evaluation ?? value;
          }
          setEvaluation(value);
          setCurrentEvaluationValue(undefined);
          setCurrentEvaluationDisplayValue("");
        }}
        currentFieldValue={currentEvaluationValue}
        label={"Evaluation"}
        items={Evaluation ? [Evaluation] : []}
        hasError={errors?.Evaluation?.hasError}
        errorMessage={errors?.Evaluation?.errorMessage}
        getBadgeText={getDisplayValue.Evaluation}
        setFieldValue={(model) => {
          setCurrentEvaluationDisplayValue(
            model ? getDisplayValue.Evaluation(model) : ""
          );
          setCurrentEvaluationValue(model);
        }}
        inputFieldRef={EvaluationRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Evaluation"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Evaluation"
          value={currentEvaluationDisplayValue}
          options={evaluationRecords
            .filter((r) => !EvaluationIdSet.has(getIDValue.Evaluation?.(r)))
            .map((r) => ({
              id: getIDValue.Evaluation?.(r),
              label: getDisplayValue.Evaluation?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentEvaluationValue(
              evaluationRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEvaluationDisplayValue(label);
            runValidationTasks("Evaluation", label);
          }}
          onClear={() => {
            setCurrentEvaluationDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Evaluation?.hasError) {
              runValidationTasks("Evaluation", value);
            }
            setCurrentEvaluationDisplayValue(value);
            setCurrentEvaluationValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Evaluation", currentEvaluationDisplayValue)
          }
          errorMessage={errors.Evaluation?.errorMessage}
          hasError={errors.Evaluation?.hasError}
          ref={EvaluationRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Evaluation")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              goodBehavior,
              completedActivities,
              desctiptionRewardGiven,
              rewardDate,
              rewardTime,
              Evaluation,
              PottyLog: value,
            };
            const result = onChange(modelFields);
            value = result?.PottyLog ?? value;
          }
          setPottyLog(value);
          setCurrentPottyLogValue(undefined);
          setCurrentPottyLogDisplayValue("");
        }}
        currentFieldValue={currentPottyLogValue}
        label={"Potty log"}
        items={PottyLog ? [PottyLog] : []}
        hasError={errors?.PottyLog?.hasError}
        errorMessage={errors?.PottyLog?.errorMessage}
        getBadgeText={getDisplayValue.PottyLog}
        setFieldValue={(model) => {
          setCurrentPottyLogDisplayValue(
            model ? getDisplayValue.PottyLog(model) : ""
          );
          setCurrentPottyLogValue(model);
        }}
        inputFieldRef={PottyLogRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Potty log"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search PottyLog"
          value={currentPottyLogDisplayValue}
          options={pottyLogRecords
            .filter((r) => !PottyLogIdSet.has(getIDValue.PottyLog?.(r)))
            .map((r) => ({
              id: getIDValue.PottyLog?.(r),
              label: getDisplayValue.PottyLog?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPottyLogValue(
              pottyLogRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPottyLogDisplayValue(label);
            runValidationTasks("PottyLog", label);
          }}
          onClear={() => {
            setCurrentPottyLogDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.PottyLog?.hasError) {
              runValidationTasks("PottyLog", value);
            }
            setCurrentPottyLogDisplayValue(value);
            setCurrentPottyLogValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("PottyLog", currentPottyLogDisplayValue)
          }
          errorMessage={errors.PottyLog?.errorMessage}
          hasError={errors.PottyLog?.hasError}
          ref={PottyLogRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "PottyLog")}
        ></Autocomplete>
      </ArrayField>
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
