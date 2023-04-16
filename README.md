# 1-Day Chat Application

A simple chat application that allows users to send messages to each other within a chosen, pre-defined channels.

---

### Tools Used

- Bootstrapped with Vite JS
- Queries with GraphQL and Apollo Client
- Styling with Tailwind CSS
- Icons from Font Awesome

---

### Features

1. User can choose a username from a pre-defined list
2. User can choose a channel to send a message to
3. User can send a message to the channel using the chosen username
4. Latest messages are displayed when channel is selected
5. User can fetch new or old messages in the current channel
6. Errors are handled for unsent messages on current user's view
7. Message drafts are retained when switching between channels

---

### Live Demo

[https://1-day-chat.vercel.app/](https://1-day-chat.vercel.app/)

---

### Local installation

1. Clone the repo

   ```
   git clone git@github.com:mariebawanan/chat.git
   ```

2. Go to project directory

   ```
   cd chat
   ```

3. Install dependencies

   ```
   yarn install
   ```

4. Run the app

   ```
   yarn dev
   ```

5. Open and explore the app in your browser

   ```
    http://127.0.0.1:5173
   ```

---

### Testing

- Run the following command to run the tests

  ```
   yarn test
  ```

- Coverage report can be found under `test/coverage`
