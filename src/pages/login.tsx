import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon, GoogleIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";

/**
 * Form data interface for login
 */
interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    isLoading,
    loginWithEmailPassword,
    loginWithGoogle,
    loginWithGithub,
  } = useAuth();

  /**
   * React Hook Form setup with validation
   */
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LoginFormData>({
    mode: "onChange", // Validate on change for better UX
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /**
   * Handles form submission for email/password login
   */
  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginWithEmailPassword(data.email, data.password);

      // Reset form on successful login
      reset();

      // Redirect is handled in the useAuth hook
    } catch (error) {
      // Error handling is done in the hook
      console.error("Login failed:", error);
    }
  };

  /**
   * Handles Google OAuth login
   */
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      // Redirect is handled in the useAuth hook
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  /**
   * Handles GitHub OAuth login
   */
  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
      // Redirect is handled in the useAuth hook
    } catch (error) {
      console.error("GitHub login failed:", error);
    }
  };

  return (
    <form
      className="w-full h-svh flex items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tylerdurden@fightclub.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className={cn(errors.email && "border-red-500")}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              {/* <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                  tabIndex={-1}
                >
                  Forgot your password?
                </Link>
              </div> */}

              <div className="flex gap-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={cn(errors.password && "border-red-500")}
                />
                <Button
                  variant="outline"
                  type="button"
                  size="icon"
                  tabIndex={-1}
                  className="px-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </Button>
              </div>
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !isValid}
            >
              Login
            </Button>
          </div>

          <Link
            to="/signup"
            className={buttonVariants({
              variant: "link",
              className: "text-left pl-0 w-fit my-2.5",
            })}
          >
            Don&apos;t have an account? Sign up
          </Link>
          <div
            className={cn(
              "w-full gap-2 flex items-center",
              "justify-between flex-col"
            )}
          >
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <GoogleIcon />
              Sign in with Google
            </Button>
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              type="button"
              onClick={handleGithubLogin}
              disabled={isLoading}
            >
              <GithubIcon />
              Sign in with Github
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default Login;
