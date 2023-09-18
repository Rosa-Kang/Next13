# Dev Blog Application

The project is bootstrapped with [Create Next App].
Fullstack Next.js 13 CRUD Application

## Dependencies

```
npm i bcrypt mongoose mongodb next-auth
```

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#reason">Purpose of this Project</a></li>
    <li><a href="#use-tech">Use tech</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#structure">Architecture & Functions</a></li>
    <li><a href="#new">Lessons</a></li>
  </ol>
</details>

<div id="reason"/>

## Purpose of the Project

-   Practice Next.js an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.

## Use tech

<span id="use-tech">
  <img src="https://img.shields.io/badge/Javascript-orange?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-blue?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
</span>

---

<!-- ABOUT THE PROJECT -->

## About The Project
[Demo link](https://myblogs-rosa.vercel.app/)

### Page Look

![Screen Shot ](https://github.com/Rosa-Kang/Next13/assets/49248131/80658b4e-4183-4837-87a1-c983106cf3b7)


---

## Structure

---

1.  Google oAuth Login Feature.
2.  Search Functionality.
3.  CRUD(Create, Read, Update, Delete) Features.

---

<div id="new"/>

## Lessons

-   Next.js 13.\* feature has App Router enabled which simplifies Data Fetching, Nested Routes & Layouts, and Builtin SEO support.
-   Next.js 13 + React 18 leverages server-side-rendering to enhance page load speed resulting an improve SEO & user experience.
-   Next.js provides 3 ways of Data Fetching
    [1] SSR - Server Side Rendering (cache)
    [2] SSG - Static Site Generation
    [3] ISR - Incremental Static Generation (revalidate)
-   2 ways of managing Meta Data
    [1] Static Metadata
    [2] Dynamic Metadata
-   Able to use 'getProviders' from next-auth/react

## Error log
- [1] [Error checking if user exists:  StringQuery: "StringQuery" is not a valid option to set]

took me 2days to resolve the issue. The issue was below line in database.js 
```
mongoose.set('strictQuery', true);
```
I had stringQuery but not the strictQuery and it was causing the error.

Error message:
```
Error checking if user exists: StringQuery: "StringQuery" is not a valid option to set
```

When strict option is set to true , Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database, and all other fields will not be saved

- [2] Another common mistake that I made was keep making typo for the folder name which lead the page 404 errors as it's related to the page route or the api route.

ex>
```
in editPost function pushes the route to `/update-prompt?/${userId}` but I had named the folder as 'updated-prompt' so the app couldn't find the page.

```
---
