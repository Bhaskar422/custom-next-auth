import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { FC, ReactNode } from "react";

interface GoogleSignInProps {
  children: ReactNode;
}

const GoogleSignIn: FC<GoogleSignInProps> = ({ children }) => {
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: `http://localhost:3000/admin` });
  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
};

export default GoogleSignIn;
