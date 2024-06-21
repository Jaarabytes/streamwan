// pages/auth/signin.tsx
import { GetServerSideProps } from 'next';
import { getProviders, signIn, LiteralUnion } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';

interface SignInProps {
  providers: Record<BuiltInProviderType, string>;
}

const SignIn: React.FC<SignInProps> = ({ providers }) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn;
