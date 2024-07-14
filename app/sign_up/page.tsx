import SignUpForm from "../ui/home/SignUpForm"; 

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-green-800 p-3 md:h-36">
        <p className="text-3xl font-extrabold text-white">Streamwan</p>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}
