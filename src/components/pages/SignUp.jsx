import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    console.log("clicked");
  };
  return (
    <>
      <div className="max-w-[1320px] m-auto">
        <div className="py-10">
          <Card className="w-[400px] mx-auto">
            <CardHeader>
              <CardTitle>Signup to your account</CardTitle>
              <CardDescription>
                Enter your email below to signup to your account
              </CardDescription>
              <CardAction>
                <Link to={"/login"}>
                  <Button variant="link">Log In</Button>
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUpSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Name</Label>
                    <Input
                      id="email"
                      type="text"
                      placeholder="Your name"
                      
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password"  />
                  </div>
                </div>
                <CardFooter className="flex-col gap-2 mt-4">
                  <Button type="submit" className="w-full">
                    SignUp
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignUp;
