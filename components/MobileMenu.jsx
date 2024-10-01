'use client';

import Link from 'next/link';
import { Button } from './ui/Button';
import { signOut } from 'next-auth/react';

const MobileMenu = ({ session, providers, toggleMobileMenu, handleSignIn }) => {
  return (
    <div className="md:hidden bg-gray-800 absolute w-full z-20">
      <nav className="flex flex-col items-center py-4 space-y-4">
        <Link href="/" className="hover:text-blue-500 transition-colors" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link href="/events" className="hover:text-blue-500 transition-colors" onClick={toggleMobileMenu}>
          Events
        </Link>
        {session ? (
          <Button
            variant="outline"
            className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={() => {
              toggleMobileMenu();
              signOut();
            }}
          >
            Logout
          </Button>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <Button
              key={provider.name}
              variant="outline"
              className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={() => {
                toggleMobileMenu();
                handleSignIn(provider.id);
              }}
            >
              Login with {provider.name}
            </Button>
          ))
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
