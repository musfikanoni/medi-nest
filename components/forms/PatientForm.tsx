"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomFormField from "../ui/CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"


export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton'
}
 
 
const PatientForm = () => {
   const router = useRouter();
    const [isLoading, setIsLoding] = useState(false);

    const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 

  async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
    setIsLoding(true);
    
    try{
        // const userData = {name, email, phone}

        // const user = await createUser(userData);
        // if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
        console.log(error);
    }
  }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                    <section className="mb-12 space-y-4">
                        <h1>Hi there 👋</h1>
                        <p>Schedule your first appoinment.</p>
                    </section>

                    <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control = {form.control}
                    name="name"
                    label = "Full name"
                    placeholder = "Sofia Gomez"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                     />

                    <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control = {form.control}
                    name="email"
                    label = "Email"
                    placeholder = "sofiagomez@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                     />

                    <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control = {form.control}
                    name="phone"
                    label = "Phone number"
                    placeholder = "(+880) 1234-567899"
                     />

                    <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
                    
                </form>
            </Form>
        </div>
    );
};

export default PatientForm;