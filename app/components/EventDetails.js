// EventDetails.js
import Link from 'next/link';
import styles from '../styles/styles.css';

export default function EventDetails({ event }) {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Unique URL: {event.uniqueURL}</p>
      <Link href={`/${event.uniqueURL}`}>Submit Questions</Link>
    </div>
  );
}
