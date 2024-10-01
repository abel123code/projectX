'use client';

import { Calendar } from 'lucide-react';
import { Button } from './Button';

const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-white flex flex-col h-full">
      <div className="h-48 bg-gray-800 flex items-center justify-center">
        <Calendar className="h-16 w-16 text-blue-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2 text-center text-white">{event.title}</h3>
          <p className="text-gray-400 mb-4 text-center">{event.description}</p>
        </div>
        <div className="mt-auto pt-4">
          <Button
            variant="outline"
            className="w-full text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
