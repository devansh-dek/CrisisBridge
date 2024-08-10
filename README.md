# Project Name

Project Name is a collaborative platform that links volunteers from relief organizations with individuals in need of assistance during disasters.

Project Name excels in environments where different volunteer groups and agencies join forces and synchronize their activities. Unlike traditional top-down management, it fosters a Collaborative Accountability model, enabling independent organizations to collaborate seamlessly without rigid hierarchical controls.

# How to use this repo

## Project Setup

Clone this repo to your computer and install dependencies via :

```sh
  $ git clone https://github.com/devansh-dek/CodeFuryHackathonProject.git
```

## Front-end

```sh
  $ cd ./client
  $ npm install
```

create a `googleapi.js` in root of client and paste this code

```sh
export const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY_HERE"
```

you can run this locally by

```sh
  $ npm run dev
```

and you can build this by

```sh
 $ npm run build
```

## Back-end

open a new terminal and

```sh
 $ cd ./backend
 $ npm install
```

create a `.env` in root and paste this

```sh
   MONGO_DB_URI =
   JWT_SECRET_KEY =
   PORT = 3000
```
fill your mongo_db_uri and jwt_secret_key

to run the server

```sh
 $ npm run start
```

your server should be up on port 3000
