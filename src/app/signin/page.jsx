'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";

const SignIn = () => {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
       const user=Object.fromEntries(formData.entries());
    
       const { data, error } = await authClient.signIn.email({
            email:user.email, 
            password:user.password,
           
        })
        if(data){
            redirect('/');
        }
        if(error){
            alert('Sign In is Error');
        }
        
      };
    return (
        <div>
            <div className="max-w-6/12 mx-auto px-3 py-7 shadow-xl my-7 rounded-lg">
                           <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={onSubmit}>
                               <h2 className="text-center text-3xl font-semibold my-4">Please Sign In</h2>
                              
                               <TextField
                                   isRequired
                                   name="email"
                                   type="email"
                                   validate={(value) => {
                                       if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                           return "Please enter a valid email address";
                                       }
                                       return null;
                                   }}
                               >
                                   <Label>Email</Label>
                                   <Input placeholder="Enter a email" />
                                   <FieldError />
                               </TextField>
                               <TextField
                                   isRequired
                                   minLength={8}
                                   name="password"
                                   type="password"
                                   validate={(value) => {
                                       if (value.length < 8) {
                                           return "Password must be at least 8 characters";
                                       }
                                       if (!/[A-Z]/.test(value)) {
                                           return "Password must contain at least one uppercase letter";
                                       }
                                       if (!/[0-9]/.test(value)) {
                                           return "Password must contain at least one number";
                                       }
                                       return null;
                                   }}
                               >
                                   <Label>Password</Label>
                                   <Input placeholder="Enter your password" />
                                   <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                   <FieldError />
                               </TextField>
                               <div className="flex gap-2">
                                   <Button type="submit">
                                       <Check />
                                       SignIn
                                   </Button>
                                   <Button type="reset" variant="secondary">
                                       Reset
                                   </Button>
                               </div>
                           </Form>
                       </div>
        </div>
    );
};

export default SignIn;