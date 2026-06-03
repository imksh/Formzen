import RegisterForm from "@/app/(auth)/register/RegisterForm";

export const metadata = {
  title: "Register",

  description:
    "Create your FormZen account and start managing forms and workflows.",
};

export default function Register() {
  return <RegisterForm />;
}
