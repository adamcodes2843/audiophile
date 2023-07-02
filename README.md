[Live Site](https://audiophile-fullstack-e-commerce.vercel.app/)

# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

This is a fullstack e-commerce website that utilitizes next 13 experiemental app features, ssr, for seo and quick load times, and client components for user interactions. React context api is used for state management. The database schema and api queries are handeled by prisma, which translates to sql. I used railway to host a postgres database. Create, Read, Update and Delete are all here, and data persists when reloading or leaving the website. The app uses dynamic routes and the pages are styled using tailwind. It's responsive and the design changes for mobile, tablet and desktop.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

Check the screenshots folder

### Links

- [Solution](https://www.frontendmentor.io/profile/adamcodes2843)
- [Live Site](https://audiophile-fullstack-e-commerce.vercel.app/)

## My process

 Using the figma file, I got familiar with the pages and layout of the website. I consider the functionality and decided on a build, seen below, installed everything and started by changing the tailwind.config to match the design system's colors and typography. Then, using the data.json file, image assets, jsx and tailwind, I started creating and styling the components of the home page, beginning with the mobile version. Using next 13, I set up the routes to dynamically render the category and product pages. Once the the flex and grids and maps and filters etc were in place for the mobile, tablet and desktop version of the app, I started using state to create client components like the checkout form, thank you popup, and a cart. I tried to do everything I could on the frontend before setting up the prisma schema, client, railway account, and postgres database and begin work on the backend. Finallyl, CRUD operations, prisma queries, api fetches, and useContext got this project to the finish line and was deployed on vercel. As my first fullstack app, it was much more complicated than this quick summary would imply. There were a lot of youtube videos and google questions that helped me through each step of the project. 

### Built with

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Prisma](https://prisma.io)
- [Railway](https://railway.app/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vercel](https://vercel.com)
- [TypeScript](https://www.typescriptlang.org/)
- Flexbox and Grid
- Mobile-first workflow


### What I learned

- When building and styling components that are recycled on different pages, be careful with how you set up margins, padding, etc.
- I exported images from figma when the provided images didn't match the design. I used figma for tailwind configuration and to check the details for how to style pieces of the components.
- Prisma schema, global client, cli commands, queries, etc.
- I used a variety of api requests to perform crud operations on the database.
- Using context and state to manage user input, what is displayed in the browser, and interact with the database 
- Deployment logs on vercel come in handy when your api requests aren't working in production the way they do in development.
- Persistence is key

### Continued development
- Server components and Next 13 features
- Best practices and getting faster
- Error handeling
- Simplifying the styling process
- Prisma
- API requests and working with databases
- Typescript rules

## Author

- Github - [Add your name here](https://github.com/adamcodes2843)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/adamcodes2843)
