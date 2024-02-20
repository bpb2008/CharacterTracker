# CharacterTracker

Are you a newbie to Walt Disney World or just need an easy way to remember where and when your favorite characters are available to meet? Do you have a favorite "version" of Mickey Mouse that that you specifically want to see on your vacation? This CharacterTracker can help you! Search the names of your favorite characters to see the times and locations that they appear in the parks and resorts. See a new or rare character that isn't in the usual roster? You can add them to the database. Also, you can add your own character sightings and note whether the line to meet the character was "long" (over 30 minute wait time) or not.

This is a full stack PERN (PostgreSQL, Express.js, React, and Node.js) TypeScript app, and the frontend was built and styled with [Material-UI](https://mui.com/).

Note: This project is in no way endorsed by The Walt Disney Company. I don't own any rights to any characters or control when they meet at the theme parks. I'm just a fan combining her love of Disney with her love of coding!

### How to run this project locally:

1. Clone the project.

2. Install dependencies by running `npm install` in both the `client` and `server` folders.

3. Create a database in Postgres named `character_tracker`, then create the following tables:

```
CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    common_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

```
CREATE TABLE individuals (
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(255) NOT NULL,
    character_id INT REFERENCES characters(id),
    generallocation VARCHAR(255) NOT NULL,
    exactlocation VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

```
CREATE TABLE sightings (
    id SERIAL PRIMARY KEY,
    sighting_timestamp TIMESTAMP NOT NULL,
    individual_id INT REFERENCES individuals(id),
    generallocation VARCHAR(255) NOT NULL,
    exactlocation VARCHAR(255) NOT NULL,
    linelong BOOLEAN NOT NULL,
    username VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4.
