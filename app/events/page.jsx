'use client';

import Footer from "@/components/Footer";
import EventCard from "@/components/ui/EventCard";

// Test data for events
const testEvents = [
  { id: 1, title: 'Web Development Workshop', description: 'Learn the latest web development techniques', image: '/images/event1.jpg' },
  { id: 2, title: 'AI and Machine Learning Seminar', description: 'Explore the world of AI and ML', image: '/images/event2.jpg' },
  { id: 3, title: 'Mobile App Design Masterclass', description: 'Master the art of mobile app design', image: '/images/event3.jpg' },
  { id: 4, title: 'Cybersecurity Conference', description: 'Stay updated on the latest in cybersecurity', image: '/images/event4.jpg' },
  { id: 5, title: 'Data Science Bootcamp', description: 'Intensive training in data science', image: '/images/event5.jpg' },
  { id: 6, title: 'Cloud Computing Symposium', description: 'Discover the power of cloud computing', image: '/images/event6.jpg' },
  { id: 7, title: 'Blockchain Technology Forum', description: 'Understand blockchain and its applications', image: '/images/event7.jpg' },
  { id: 8, title: 'UX/UI Design Workshop', description: 'Create intuitive and beautiful interfaces', image: '/images/event8.jpg' },
  { id: 9, title: 'IoT and Smart Devices Expo', description: 'Explore the Internet of Things', image: '/images/event9.jpg' },
  { id: 10, title: 'Agile Project Management Seminar', description: 'Learn to manage projects efficiently', image: '/images/event10.jpg' },
];

export default function EventsPage() {
  return (
    <div className=" bg-gray-800">
      <div className="container mx-auto w-full px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Upcoming Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-5">
          {testEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
