---
title: 'Tailwind CSS – Specifying which files to process'
author: 'Emanuele Gurini'
cover_image: '/img/posts/tailwind-css-specifying-which-files-to-process-min.jpg'
category: 'tailwind css'
time: '1:53'
excerpt: 'Tailwind CSS must specify which files to process in a projects tailwind.config.ts file. How can we do that in a smart way?'
date: Jenuary 04, 2023
---

[Tailwind CSS - Specifying which files to process - Video](https://youtu.be/Jj20Bxpdnls "Tailwind CSS - Specifying which files to process
")

In this article, we will be discussing the importance of specifying which files Tailwind should process in your project. Tailwind is a CSS framework that can be used to build beautiful and functional websites and applications.

However, every time you work with Tailwind, you need to make sure to specify which files it should process in order to correctly apply its styles. This can be done in the “tailwind.config.ts” file.

For example, if your homepage is located in the “Pages” directory, you should add its file path to the “tailwind.config.ts” file so that Tailwind knows to apply its styles to that page.

In our example project, we have a standard “Pages” folder that contains all of the pages for our application, both static and dynamic, as well as a “Components” folder which holds all of the components for our application. Both of these folders contain pages and components that are built using Tailwind.

The issue is that every time we create a new page or component and use Tailwind in it, we need to manually add its file path to the Tailwind configuration file. To avoid this, we can modify our path definition as shown in the example provided.

**Before:**
```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/_app.tsx",
    "./pages/index.tsx",
    "./pages/chi-siamo.tsx",
    "./pages/contatti.tsx",
    "@/components/Layout/Header/Header.tsx",
    "@/components/Layout/Footer/Footer.tsx",
    "@/components/Carousel/Carousel.tsx",
    "@/components/Info/Info.tsx",
    "@/components/Card/Card.tsx",
  ]
```

**After:**
```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ]
```

Instead of specifying each file path individually, we can use global patterns to match any JavaScript or TypeScript files in the “Pages” and “Components” directories, as well as their subdirectories. This allows us to easily include any new pages or components that we create in the future without having to manually update the Tailwind configuration file.

Overall, specifying which files Tailwind should process is an important step in using this CSS framework effectively in your project.