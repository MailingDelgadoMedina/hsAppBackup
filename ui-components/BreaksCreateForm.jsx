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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Breaks, Activities } from "../models";
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
export default function BreaksCreateForm(props) {
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
    breaksStart: "",
    breaksEnd: "",
    breaksBehavior: "",
    breaksDescription: "",
    breaksDate: "",
    ActivitiesBreak: undefined,
  };
  const [breaksStart, setBreaksStart] = React.useState(
    initialValues.breaksStart
  );
  const [breaksEnd, setBreaksEnd] = React.useState(initialValues.breaksEnd);
  const [breaksBehavior, setBreaksBehavior] = React.useState(
    initialValues.breaksBehavior
  );
  const [breaksDescription, setBreaksDescription] = React.useState(
    initialValues.breaksDescription
  );
  const [breaksDate, setBreaksDate] = React.useState(initialValues.breaksDate);
  const [ActivitiesBreak, setActivitiesBreak] = React.useState(
    initialValues.ActivitiesBreak
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBreaksStart(initialValues.breaksStart);
    setBreaksEnd(initialValues.breaksEnd);
    setBreaksBehavior(initialValues.breaksBehavior);
    setBreaksDescription(initialValues.breaksDescription);
    setBreaksDate(initialValues.breaksDate);
    setActivitiesBreak(initialValues.ActivitiesBreak);
    setCurrentActivitiesBreakValue(undefined);
    setCurrentActivitiesBreakDisplayValue("");
    setErrors({});
  };
  const [
    currentActivitiesBreakDisplayValue,
    setCurrentActivitiesBreakDisplayValue,
  ] = React.useState("");
  const [currentActivitiesBreakValue, setCurrentActivitiesBreakValue] =
    React.useState(undefined);
  const ActivitiesBreakRef = React.createRef();
  const getIDValue = {
    ActivitiesBreak: (r) => JSON.stringify({ id: r?.id }),
  };
  const ActivitiesBreakIdSet = new Set(
    Array.isArray(ActivitiesBreak)
      ? ActivitiesBreak.map((r) => getIDValue.ActivitiesBreak?.(r))
      : getIDValue.ActivitiesBreak?.(ActivitiesBreak)
  );
  const activitiesRecords = useDataStoreBinding({
    type: "collection",
    model: Activities,
  }).items;
  const getDisplayValue = {
    ActivitiesBreak: (r) => `${r?.actName ? r?.actName + " - " : ""}${r?.id}`,
  };
  const validations = {
    breaksStart: [],
    breaksEnd: [],
    breaksBehavior: [],
    breaksDescription: [],
    breaksDate: [],
    ActivitiesBreak: [],
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
          breaksStart,
          breaksEnd,
          breaksBehavior,
          breaksDescription,
          breaksDate,
          ActivitiesBreak,
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
          await DataStore.save(new Breaks(modelFields));
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
      {...getOverrideProps(overrides, "BreaksCreateForm")}
      {...rest}
    >
      <TextField
        label="Breaks start"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={breaksStart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart: value,
              breaksEnd,
              breaksBehavior,
              breaksDescription,
              breaksDate,
              ActivitiesBreak,
            };
            const result = onChange(modelFields);
            value = result?.breaksStart ?? value;
          }
          if (errors.breaksStart?.hasError) {
            runValidationTasks("breaksStart", value);
          }
          setBreaksStart(value);
        }}
        onBlur={() => runValidationTasks("breaksStart", breaksStart)}
        errorMessage={errors.breaksStart?.errorMessage}
        hasError={errors.breaksStart?.hasError}
        {...getOverrideProps(overrides, "breaksStart")}
      ></TextField>
      <TextField
        label="Breaks end"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={breaksEnd}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd: value,
              breaksBehavior,
              breaksDescription,
              breaksDate,
              ActivitiesBreak,
            };
            const result = onChange(modelFields);
            value = result?.breaksEnd ?? value;
          }
          if (errors.breaksEnd?.hasError) {
            runValidationTasks("breaksEnd", value);
          }
          setBreaksEnd(value);
        }}
        onBlur={() => runValidationTasks("breaksEnd", breaksEnd)}
        errorMessage={errors.breaksEnd?.errorMessage}
        hasError={errors.breaksEnd?.hasError}
        {...getOverrideProps(overrides, "breaksEnd")}
      ></TextField>
      <TextField
        label="Breaks behavior"
        isRequired={false}
        isReadOnly={false}
        value={breaksBehavior}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd,
              breaksBehavior: value,
              breaksDescription,
              breaksDate,
              ActivitiesBreak,
            };
            const result = onChange(modelFields);
            value = result?.breaksBehavior ?? value;
          }
          if (errors.breaksBehavior?.hasError) {
            runValidationTasks("breaksBehavior", value);
          }
          setBreaksBehavior(value);
        }}
        onBlur={() => runValidationTasks("breaksBehavior", breaksBehavior)}
        errorMessage={errors.breaksBehavior?.errorMessage}
        hasError={errors.breaksBehavior?.hasError}
        {...getOverrideProps(overrides, "breaksBehavior")}
      ></TextField>
      <TextField
        label="Breaks description"
        isRequired={false}
        isReadOnly={false}
        value={breaksDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd,
              breaksBehavior,
              breaksDescription: value,
              breaksDate,
              ActivitiesBreak,
            };
            const result = onChange(modelFields);
            value = result?.breaksDescription ?? value;
          }
          if (errors.breaksDescription?.hasError) {
            runValidationTasks("breaksDescription", value);
          }
          setBreaksDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("breaksDescription", breaksDescription)
        }
        errorMessage={errors.breaksDescription?.errorMessage}
        hasError={errors.breaksDescription?.hasError}
        {...getOverrideProps(overrides, "breaksDescription")}
      ></TextField>
      <TextField
        label="Breaks date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={breaksDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd,
              breaksBehavior,
              breaksDescription,
              breaksDate: value,
              ActivitiesBreak,
            };
            const result = onChange(modelFields);
            value = result?.breaksDate ?? value;
          }
          if (errors.breaksDate?.hasError) {
            runValidationTasks("breaksDate", value);
          }
          setBreaksDate(value);
        }}
        onBlur={() => runValidationTasks("breaksDate", breaksDate)}
        errorMessage={errors.breaksDate?.errorMessage}
        hasError={errors.breaksDate?.hasError}
        {...getOverrideProps(overrides, "breaksDate")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd,
              breaksBehavior,
              breaksDescription,
              breaksDate,
              ActivitiesBreak: value,
            };
            const result = onChange(modelFields);
            value = result?.ActivitiesBreak ?? value;
          }
          setActivitiesBreak(value);
          setCurrentActivitiesBreakValue(undefined);
          setCurrentActivitiesBreakDisplayValue("");
        }}
        currentFieldValue={currentActivitiesBreakValue}
        label={"Activities break"}
        items={ActivitiesBreak ? [ActivitiesBreak] : []}
        hasError={errors?.ActivitiesBreak?.hasError}
        errorMessage={errors?.ActivitiesBreak?.errorMessage}
        getBadgeText={getDisplayValue.ActivitiesBreak}
        setFieldValue={(model) => {
          setCurrentActivitiesBreakDisplayValue(
            model ? getDisplayValue.ActivitiesBreak(model) : ""
          );
          setCurrentActivitiesBreakValue(model);
        }}
        inputFieldRef={ActivitiesBreakRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Activities break"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Activities"
          value={currentActivitiesBreakDisplayValue}
          options={activitiesRecords
            .filter(
              (r) => !ActivitiesBreakIdSet.has(getIDValue.ActivitiesBreak?.(r))
            )
            .map((r) => ({
              id: getIDValue.ActivitiesBreak?.(r),
              label: getDisplayValue.ActivitiesBreak?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentActivitiesBreakValue(
              activitiesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentActivitiesBreakDisplayValue(label);
            runValidationTasks("ActivitiesBreak", label);
          }}
          onClear={() => {
            setCurrentActivitiesBreakDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ActivitiesBreak?.hasError) {
              runValidationTasks("ActivitiesBreak", value);
            }
            setCurrentActivitiesBreakDisplayValue(value);
            setCurrentActivitiesBreakValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "ActivitiesBreak",
              currentActivitiesBreakDisplayValue
            )
          }
          errorMessage={errors.ActivitiesBreak?.errorMessage}
          hasError={errors.ActivitiesBreak?.hasError}
          ref={ActivitiesBreakRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ActivitiesBreak")}
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
