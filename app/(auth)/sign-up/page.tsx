"use client";

import AuthForm from "@/components/forms/AuthForm";
import ROUTES from "@/constants/routes";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <AuthForm
      formType={ROUTES.SIGN_UP}
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUp;
