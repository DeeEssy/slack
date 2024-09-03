'use client';

import { memo, useCallback, useState } from 'react';

import { SignInFlow } from '../types';
import { SignInCard } from './SignInCard';
import { SignUpCard } from './SignUpCard';


// React.lazy but in Next.js || React.lazy's still can be used
// import dynamic from 'next/dynamic';

// const SignInCard = dynamic(() => import('./SignInCard').then((mod) => mod.SignInCard), {
//     loading: () => <p>Loading...</p>,
// });

// const SignUpCard = dynamic(() => import('./SignUpCard').then((mod) => mod.SignUpCard), {
//     loading: () => <p>Loading...</p>,
// });

export const AuthScreen = memo(() => {
    const [signInFlow, setSignInFlow] = useState<SignInFlow>(SignInFlow.SIGN_IN);

    const handleSetSignInFlow = useCallback((flow: SignInFlow) => {
        setSignInFlow(flow);
    }, []);
    
    return(
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                {signInFlow === SignInFlow.SIGN_IN ? <SignInCard setState={handleSetSignInFlow} /> : <SignUpCard setState={setSignInFlow} />}
            </div>
        </div>
    );
});

AuthScreen.displayName = 'AuthScreen';