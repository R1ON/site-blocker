'use client';

import { useEffect } from 'react';
import { authControllerSignIn } from '@/shared/api/generated/types';

export default function Home() {
  useEffect(() => {
    authControllerSignIn({ email: 'test@yandex.ru', password: '1234' }).then(console.log);
  }, []);

  return (
    <main>
      hello world
    </main>
  )
}
