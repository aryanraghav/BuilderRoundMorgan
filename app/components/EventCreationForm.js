"use client"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/styles.css';
import Link from 'next/link'


export default function EventCreationForm() {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    ttl: '',
  });
  const [formvisible, setformvisible] = useState(
    true
  );
 
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueURL = generateUniqueURL();
    console.log('Event Data:', event);
    console.log('Unique URL:', uniqueURL);
  };

  const generateUniqueURL = () => {
   setformvisible(false);
   localStorage.setItem('uuid',JSON.stringify(uuidv4()))
   setTimeout(() => {
    localStorage.setItem('uuid',"");
   }, parseInt(ttl));
  };

  const getUUID=()=>{
    return localStorage.getItem()
  }

  return (
    <div>
        { formvisible ?
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Event Name"
        onChange={handleInputChange}
        value={event.name}
      />
      <input
        type="text"
        name="description"
        placeholder="Event Description"
        onChange={handleInputChange}
        value={event.description}
      />
      <input
        type="date"
        name="date"
        onChange={handleInputChange}
        value={event.date}
      />
      <input
        type="time"
        name="time"
        onChange={handleInputChange}
        value={event.time}
      />
      <input
        type="text"
        name="ttl"
        placeholder="Time to Live (TTL) in minutes"
        onChange={handleInputChange}
        value={event.ttl}
      />
      <button type="submit">Create Event</button>
    </form>
:  <Link href={`/event/${JSON.parse(localStorage.getItem('uuid'))}`}>Your Event Link</Link>}
    </div>
  );
}
