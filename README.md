# To-Do List App

A task manager built with **React** and **Redux**, using **Firebase** for authentication and data storage.

## Features

- Sign up and log in with **Firebase Authentication**.
- Each user's tasks are stored in **Cloud Firestore**.
- Add tasks and switch between **To Do** and **Done** tabs.
- Protected routes with **React Router v6**: the list is only available to logged-in users.
- Global state with **Redux**, memoized selectors with **Reselect** and session persistence with **redux-persist**.
- Reusable components (buttons, form inputs, loading wrapper) styled with **SCSS**.
- Unit and snapshot tests with **React Testing Library** and Jest.

## Tech stack

React 17 · Redux · Reselect · redux-persist · React Router v6 · Firebase (Auth, Firestore) · SCSS · Jest · React Testing Library

## Getting started

```bash
npm install
npm start
```

Open `http://localhost:3000`.

To use your own Firebase project, replace the configuration in `src/firebase/firebase.utils.js`.

## Running tests

```bash
npm test
```
