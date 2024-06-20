'use server'
import { providerMap } from '@/auth.config';
import { signIn } from "@/auth";

export default async function GoogleLogin() {
    return (
        <>
        {Object.values(providerMap).map((provider) => {
            <form className='bg-green-800 p-3 rounded-lg text-white hover:bg-green-600'
            action={async () => {
            'use server'
              await signIn(provider.id);
            }}>
                <button type="submit">Continue with google</button>
              </form>
        })}
        </>
    )
  }
 
// export default async function SignInPage() {
//   return (
//     <div className="flex flex-col gap-2">
//       {Object.values(providerMap).map((provider) => (
//         <form
//           action={async () => {
//             "use server"
//             await signIn(provider.id)
//           }}
//         >
//           <button type="submit">
//             <span>Sign in with {provider.name}</span>
//           </button>
//         </form>
//       ))}
//     </div>
//   )
// }