'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingModal from "../ui/Loading";
// this should redirect to the google sign in page the original onemptied, not your own
export default function TrialPage() {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState(false);
  useEffect(() => {
    const redirectToSignIn = async () => {
      try {
        setIsLoading(true);
        // Show loading modal while redirecting
        // You can implement additional logic here if needed
        router.push('/login');
      } catch (error) {
        console.error("Failed to redirect to sign in:", error);
        // Optionally handle error (e.g., show a notification to the user)
      }
      finally {
        setIsLoading(false);
      }
    };

    redirectToSignIn();
  }, [router]);

  return <LoadingModal isOpen={isLoading} />;
}