<div align="center">
  <br />
    <a href="https://github.com/zeeshan-develop/Discover-players-Full-Stack-App" target="_blank">
      <img src="https://github.com/zeeshan-develop/Discover-players-Full-Stack-App/blob/master/discover%20player%20app.png" alt="Project Banner">
    </a>
  <br />

  <div>
  <img
  src="https://img.shields.io/badge/Next.js-0070F3?style=for-the-badge&logo=next.js&logoColor=white"
  alt="Next.js"
/>
<img src="https://img.shields.io/badge/-NextAuth-259DFF?style=for-the-badge&logo=auth0&logoColor=white" alt="NextAuth" />
<img src="https://img.shields.io/badge/-Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/-React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
<img src="https://img.shields.io/badge/-Yup-8A2BE2?style=for-the-badge&logoColor=white" alt="Yup" />
<img src="https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" />

  </div>

  <h3 align="center">Discover players</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

This project allows users to find and connect with nearby players by creating posts. The app ensures secure authentication using Google OAuth and manages user-generated content efficiently.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **34k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Frontend:** React, Next.js, Tailwind CSS  
- **Authentication:** NextAuth (Google OAuth)  
- **Database & Storage:** Firebase  
- **Forms & Validation:** React Hook Form, Yup  
- **Hosting & Cloud:** Google Cloud, Vercel  

## <a name="features">🔋 Features</a>

👉 **User Authentication**: Google OAuth via NextAuth.

👉 **Post Creation**: Users can create and manage posts.

👉 **Secure & Fast**: Firebase for real-time data handling.

👉 **Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

👉 **Form Validation **: React Hook Form & Yup for seamless UX.


and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [Yarn](https://www.yarnpkg.com/) (Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/zeeshan-develop/Discover-players-Full-Stack-App.git
cd  ./
```

**Installation**

Install the project dependencies using yarn:

```bash
yarn add
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# googleCloud
GOOGLE_Client_ID=
GOOGLE_CLIENT_SECRET=

# firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# nextauth
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

Replace the placeholder values with your actual TMDB credentials. You can obtain these credentials by signing up on the [Google Cloud Console](https://console.cloud.google.com/)


**Running the Project**

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

```

</details>

<details>
<summary><code>app/globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ========================================== TAILWIND STYLES */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

}```

</details>

<details>
<summary><code>app/shared/Data.js</code></summary>

```javascript
import cricket from "@/images/cricket.png";
import pingpong from "@/images/pingpong.png";
import puzzle from "@/images/puzzle.jpg";
import trekking from "@/images/trikking.png";
import Badminton from "@/images/badminton.jpeg";
import Football from "@/images/football.jpg";
export const GameListsData = [
  { id: 1, name: "Badminton", image: Badminton },
  { id: 2, name: "Cricket", image: cricket },
  { id: 3, name: "PingPong", image: pingpong },
  { id: 4, name: "Puzzle", image: puzzle },
  { id: 5, name: "Trekking", image: trekking },
  { id: 6, name: "FootBall", image: Football },
];

```
</details>

<details>
<summary><code>app/shared/FirebaseConfig.js</code></summary>

```javascript
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

```
</details>

<details>
<summary><code>context/PostsContext.js</code></summary>

```javascript
"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../shared/FirebaseConfig";
import Swal from "sweetalert2";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const db = getFirestore(app);

  const getPost = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsArray = [];

      querySnapshot.forEach((doc) => {
        postsArray.push({ id: doc.id, ...doc.data() });
      });

      setPosts(postsArray);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error getting documents",
        text: error.message,
        confirmButtonText: "Ok",
      });
    }
  }, [db]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const postData = {
    posts,
    getPost,
  };

  return (
    <PostsContext.Provider value={{ ...postData }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};
```

</details>

## <a name="links">🔗 Assets</a>

Public assets used in the project can be found [here](https://github.com/zeeshan-develop/Discover-players-Full-Stack-App/tree/master/images)

## <a name="more">🚀 More</a>

**Advance your skills with Next.js**

Enjoyed creating this project? Dive deeper  for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://github.com/Hi-Dear-486/Projects-Gallery-Tool" target="_blank">
<img src="https://github.com/Hi-Dear-486/Projects-Gallery-Tool/blob/master/Untitled%20design.png" alt="Project Banner">
</a>

<br />
<br />

#
