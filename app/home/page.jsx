'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ContentPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      alert('Please login to access this page.');
      router.push('/');
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null; // This will prevent any content from flashing before redirect
  }

  return (
    <div>
      <h1>Content Page</h1>
      <p>Welcome, {session.user.name}! Here's your content.</p>
      {/* Add your content display logic here */}
    </div>
  );
}