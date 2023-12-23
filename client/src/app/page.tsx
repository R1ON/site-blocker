'use client'

import { authControllerGetSessionInfo, authControllerSignIn } from '@/shared/api/generated/types';
import { useQuery } from '@tanstack/react-query';


export default function Home() {
  // const { data } = useQuery({
  //   queryKey: ['session'],
  //   queryFn: () => authControllerGetSessionInfo()
  // });
  //
  // console.log('data', data);

  return (
    <main>
      hello world
      <button type="button">Sign out</button>
      <button type="button">Sign in</button>
    </main>
  )
}
