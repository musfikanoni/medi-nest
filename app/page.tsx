import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | PasskeyModal */}

      <section className="remove-scrollba container max-h-screen">
        <div className="sub-container max-w-[496]">
          <div className="flex items-center gap-2">
            <Image src="/assets/icons/logo.png"
            height={1000}
            width={1000}
            alt="MediNest logo"
            className="h-10 w-fit" />
            <p className="text-xl font-bold">MediNest</p>
          </div>

          <PatientForm />
          <div className="mt-20 flex justify-between text-14-regular">
            <p className="justify-end text-gray-600
             xl:text-left">© 2025 MediNest</p>
             {/* <Link href="/admin=true">Admin</Link> */}
          </div>
        </div>
      </section>
      <Image src="/assets/images/onboarding-img.jpg"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[50%]" />
    </div>
  );
}
