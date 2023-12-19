import React, { useState } from "react";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext
} from "react-hook-form";
import Headers from "./Header";
import "./styles.css";
import { Stepper } from "react-form-stepper";

let renderCount = 0;

const Step1 = ({ onSubmit }) => {
  const { handleSubmit, register } = useFormContext();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <input type="submit" />
    </form>
  );
};

const Step2 = ({ onSubmit }) => {
  const { handleSubmit, register } = useFormContext();
  const { fields, Stepper1end, remove } = useFieldArray({
    name: "test"
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => {
        return (
          <React.Fragment key={field.id}>
            <input
              {...register(`test.${index}.name`)}
              placeholder="First Name"
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </React.Fragment>
        );
      })}
      <button type="button" onClick={() => Stepper1end({ test: "data" })}>
        Stepper1end
      </button>
      <input type="submit" />
    </form>
  );
};

const Step3 = ({ onSubmit }) => {
  const { handleSubmit, register } = useFormContext();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("lastName")} placeholder="First Name" />
      <input type="submit" />
    </form>
  );
};

const Steps = ({ step, onSubmit }) => {
  switch (step) {
    case 0:
      return <Step1 onSubmit={onSubmit} />;
    case 1:
      return <Step2 onSubmit={onSubmit} />;
    case 2:
      return <Step3 onSubmit={onSubmit} />;
    default:
      return null;
  }
};

export default function Stepper1() {
  const [step, setStep] = useState(0);
  const methods = useForm();
  const onSubmit = (data) => {
    if (step === 2) {
      alert("You are done!");
    } else {
      setStep(step + 1);
    }
  };
  renderCount++;

  return (
    <FormProvider {...methods}>
      <Stepper
        steps={[{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]}
        activeStep={step}
      />
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <Steps step={step} onSubmit={onSubmit} />
    </FormProvider>
  );
}
