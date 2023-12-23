'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { authControllerSignUp } from '@/shared/api/generated/types';
import { useRouter } from 'next/navigation';


export const SignUpForm = () => {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => {
      router.push('/')
    },
  })

  const submit = () => {
    signUpMutation.mutate({ email: login, password });
  }

  return (
    <div>
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={submit}>Зарегистрироваться</button>
    </div>
  );
};
