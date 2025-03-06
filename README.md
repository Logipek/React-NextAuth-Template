
# React-NextAuth Template

## Description

This project is a **template** for integrating **NextAuth.ts** with a **React** application. It provides a quick setup for authentication in a React app using NextAuth to manage authentication with various providers (Google, Facebook, GitHub, etc.).

### Objectives:
- Provide a ready-to-use configuration for authentication with NextAuth in a React app.
- Enable developers to reuse this template in new React projects requiring authentication.
- Handle sessions, redirection, and page protection with user sessions.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (version 14 or later): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**: [Download Yarn](https://yarnpkg.com/)
- A GitHub, Google, or other authentication provider account you wish to use with **NextAuth**.

## Installation

### 1. Clone the repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Logipek/React-NextAuth-Template.git
```

### 2. Install dependencies

Navigate to the project directory and install the dependencies using npm or yarn.

```bash
cd React-NextAuth-Template
npm install
```

or if you are using yarn:

```bash
yarn install
```

### 3. Set up environment variables

Before using authentication, you'll need to set up the required environment variables for **NextAuth.ts**. Create a `.env.local` file at the root of your project and add the following variables:

```bash
# Example for Google OAuth
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

# Example for GitHub OAuth
GITHUB_CLIENT_ID=<your-github-client-id>
GITHUB_CLIENT_SECRET=<your-github-client-secret>
```

**Note:** Replace `<your-nextauth-secret>`, `<your-google-client-id>`, `<your-google-client-secret>`, and other sensitive details with your own API keys, which you can obtain from authentication providers like Google, GitHub, etc.

### 4. Start the app in development mode

Run the following command to start the app in development mode:

```bash
npm run dev
```

or if you're using yarn:

```bash
yarn dev
```

This will start the development server, and you can access the app at: [http://localhost:3000](http://localhost:3000).

### 5. Set up protected pages

Pages that require authentication can easily be protected using `useSession` from NextAuth. For example:

```jsx
    {session && (
        <div className="flex flex-col items-center justify-center">
            <p className="text-center mt-4 text-2xl font-bold text-blue-500">{session?.user?.name}</p>
            <p className="text-center mt-4 text-2xl font-bold text-blue-500">{session?.user?.email}</p>

            <img src={session?.user?.image || ""} alt="Profile" width={100} height={100} className="rounded-full" />
        </div>
    )}
```

## Project Structure

- `pages/api/auth/[...nextauth]/route.ts`: NextAuth API configuration to handle authentication strategies.
- `pages/page.tsx`: The homepage of the application.
- `lib/AuthOptions.ts`: File for additional NextAuth-related logic.
- `styles/`: Folder containing CSS files for the interface.

## Contribution

Contributions are welcome! If you have improvements or bug fixes, feel free to submit a pull request.

### How to contribute:
1. Fork this repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your branch and submit a pull request.

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.
