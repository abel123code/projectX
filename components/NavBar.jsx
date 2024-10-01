'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut, getProviders } from 'next-auth/react';
import { BookOpen, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import MobileMenu from './MobileMenu';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  useEffect(() => {
    if (status === 'authenticated' && session) {
      router.push('/home');
    }
  }, [status, session, router]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignIn = async (providerId) => {
    const result = await signIn(providerId, { redirect: false });
    if (result?.error) {
      console.error('Sign in error:', result.error);
    } else {
      console.log('Sign in successful');
      // Navigation will be handled by the useEffect hook
    }
  };

  return (
    <header className="border-b border-gray-400 relative z-10 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 hover:text-blue-500 transition-colors">
            <BookOpen className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text">LearnStart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/home" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/events" className="hover:text-blue-500 transition-colors">
              Events
            </Link>
            {session ? (
              <>
                <Button
                  variant="outline"
                  className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </>
            ) : (
              providers &&
              Object.values(providers).map((provider) => (
                <Button
                  key={provider.name}
                  variant="outline"
                  className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                  onClick={() => handleSignIn(provider.id)}
                >
                  Login
                </Button>
              ))
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu handleSignIn={handleSignIn} session={session} providers={providers} toggleMobileMenu={toggleMobileMenu} />}
    </header>
  );
};

export default NavBar;
