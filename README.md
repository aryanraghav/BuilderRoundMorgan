# Event Question Submission System

This project is an implementation of a system for capturing questions from participants during a live event. It allows event organizers to create events, generate unique URLs for participants to submit questions, and optionally set a time to live (TTL) for these URLs.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Event Creation Interface:**
   - Create new events with details such as event name, description, date, time, and optional TTL.

2. **Unique URL Generation:**
   - Automatically generate a unique URL for each event upon creation.
   - Shareable URLs for participants to access the question submission interface.

3. **Question Submission Interface:**
   - Participants can submit their questions for the event using the unique URL.
   
4. **TTL for URLs (Bonus):**
   - Optionally set a time to live (TTL) for URLs. After the specified TTL, the URL expires and no longer accepts new questions.

## Technologies Used

- Next.js: A React framework for building the frontend.
- React: JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript.
- CSS: For styling the components.
- [Additional technologies used in your project, e.g., state management libraries, APIs, databases, etc.]

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/event-question-submission.git
cd event-question-submission
