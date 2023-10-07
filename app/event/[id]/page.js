"use client"
import { useParams } from 'next/navigation';
import QuestionSubmissionForm from '../../components/QuestionSubmissionForm';

export default function QuestionSubmission() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Submit Questions for Event</h1>
      <p>Event Unique URL: {id}</p>
      <QuestionSubmissionForm />
    </div>
  );
}
