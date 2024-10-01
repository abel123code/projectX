import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} LearnStart. All rights reserved.</p>
        </div>
  </footer>
  )
}

export default Footer
