"use client";

import AuthForm from "@/components/forms/AuthForm";
import ROUTES from "@/constants/routes";
import { SignInSchema } from "@/lib/validations";
import { success } from "zod";

const SignIn = () => {
  return (
    <AuthForm
      formType={ROUTES.SIGN_IN}
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
