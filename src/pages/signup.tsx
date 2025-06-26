"use client";

import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { GoogleIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/use-auth";
import { Show } from "@/components/show";

/**
 * Form data interface for signup
 */
interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

/**
 * Signup page component that handles user registration
 */
export default function SignupPage() {
  const {
    isLoading,
    signupWithEmailPassword,
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
    watch,
    reset,
  } = useForm<SignupFormData>({
    mode: "onChange", // Validate on change for better UX
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  // Watch password for confirmation validation
  const password = watch("password");

  /**
   * Handles form submission for email/password signup
   */
  const onSubmit = async (data: SignupFormData) => {
    try {
      await signupWithEmailPassword(
        data.email,
        data.password,
        data.firstName,
        data.lastName
      );

      // Reset form on successful signup
      reset();

      // Redirect is handled in the useAuth hook
    } catch (error) {
      // Error handling is done in the hook
      console.error("Signup failed:", error);
    }
  };

  /**
   * Handles Google OAuth signup
   */
  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      // Redirect is handled in the useAuth hook
    } catch (error) {
      console.error("Google signup failed:", error);
    }
  };

  /**
   * Handles GitHub OAuth signup
   */
  const handleGithubSignup = async () => {
    try {
      await loginWithGithub();
      // Redirect is handled in the useAuth hook
    } catch (error) {
      console.error("GitHub signup failed:", error);
    }
  };

  return (
    <form
      className="w-full h-svh flex items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className="z-50 rounded-md rounded-t-none max-w-md">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="Tyler"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "First name must be less than 50 characters",
                    },
                  })}
                  className={cn(errors.firstName && "border-red-500")}
                />
                <Show when={!!errors.firstName} fallback={null}>
                  <span className="text-sm text-red-500">
                    {errors.firstName?.message}
                  </span>
                </Show>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Durden"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Last name must be less than 50 characters",
                    },
                  })}
                  className={cn(errors.lastName && "border-red-500")}
                />
                <Show when={!!errors.lastName} fallback={null}>
                  <span className="text-sm text-red-500">
                    {errors.lastName?.message}
                  </span>
                </Show>
              </div>
            </div>

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
              <Show when={!!errors.email} fallback={null}>
                <span className="text-sm text-red-500">
                  {errors.email?.message}
                </span>
              </Show>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                  },
                })}
                className={cn(errors.password && "border-red-500")}
              />
              <Show when={!!errors.password} fallback={null}>
                <span className="text-sm text-red-500">
                  {errors.password?.message}
                </span>
              </Show>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="passwordConfirmation">Confirm Password</Label>
              <Input
                id="passwordConfirmation"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
                {...register("passwordConfirmation", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={cn(errors.passwordConfirmation && "border-red-500")}
              />
              <Show when={!!errors.passwordConfirmation} fallback={null}>
                <span className="text-sm text-red-500">
                  {errors.passwordConfirmation?.message}
                </span>
              </Show>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !isValid}
            >
              {isLoading ? <Spinner /> : "Create an account"}
            </Button>
          </div>

          <Link
            to="/login"
            className={buttonVariants({
              variant: "link",
              className: "text-left pl-0 w-fit my-2.5",
            })}
          >
            Already have an account? Sign in
          </Link>

          <div className="space-y-2">
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              type="button"
              onClick={handleGoogleSignup}
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : <GoogleIcon />}
              Sign up with Google
            </Button>
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              type="button"
              onClick={handleGithubSignup}
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : <GithubIcon />}
              Sign up with Github
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
