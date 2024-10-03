import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Form = ({ children, onSubmit, resolver, defaultValues }) => {
  const formConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm({ formConfig });

  const submitHandlre = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandlre(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
