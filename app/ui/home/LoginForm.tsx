import { AtSymbolIcon, ExclamationCircleIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { login } from '@/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

export default async function LoginForm() {
  const [ errorMessage, dispatch ] = useFormState(login, undefined);
  return (
    <form 
    action={dispatch}
    className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl text-black">
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md text-black border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border text-black border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div 
        className="flex h-8 items-end space-x-1"
        aria-live='polite'
        aria-atomic='true'
        >
        {errorMessage && <>
          <ExclamationCircleIcon className='text-red-500 h-5 w-5' />
          <p className='text-red-500 text-sm font-bold'>{errorMessage}</p>
          </>}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="mt-4 bg-green-700 w-full text-white rounded-lg py-3 hover:bg-green-600 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 active:bg-green-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 ">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50 inline" />
    </button>
  );
}
