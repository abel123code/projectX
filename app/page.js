import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import EventCard from '@/components/ui/EventCard';
import Footer from '@/components/Footer';

const events = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build your first website.',
    image: '/images/web-development.jpg',
  },
  {
    id: 2,
    title: 'Data Science Bootcamp',
    description: 'An immersive workshop covering data analysis, visualization, and machine learning with Python.'
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    description: 'Master the art of digital marketing, SEO, and content strategy to grow your online presence.'
  }
];


const page = () => {
  return (
    <div>
      <section className="py-20 md:py-32 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Jumpstart Your Learning Journey</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Discover workshops and courses designed to give you a headstart in any topic you're passionate about.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/learn-more">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
    
  )
}

export default page
