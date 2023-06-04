# LIBRARY APP API

This is a part of library Full Stack application, this repository contents a Backend part. Provides minimal functionality for a typical local library. The functionality will include booking books, storing books, creating users, using various roles, authorization, etc.

<i>You can find a React frontend part using the link: https://github.com/metalyx/react-librarian-app</i>

### TOOLS USED

- <b><i>Frontend tools:&nbsp;</i></b>
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)<br>
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)<br />

- <b><i>Backend tools:&nbsp;</i></b>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)<br>
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)<br />

- <b><i>Deploy & other tools:&nbsp;</i></b>
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### AVAILABLE FUNCTIONS
- Authorization and authentication, logout (using JWT and bcript)
- Roles and protected routes (using custom middlewares on backend)
- Shows library books and performs search by title
- User with Admin role can see all registered users
- Shows details about user
- Routing between pages

### FUNCTIONS BEIGN DEVELOPED
- Bookings functionality (backend done, frontend in progress)
- UI enhancemenents
- UI for user registration and changing roles (backend done, frontend in progress)
- TBD

### DETAILS OF IMPLEMENTATION
- Used tailwind for accelerating frontend development ⚡
- JWT for authorization and authentication (love it ❤️)
- I wrote middlewares to protect certain routes (very convenient 🤓)
- Wrote custom typed hooks for my redux store (structured and informative 🙌)
- Used typescript for frontend (eliminates 90% of typical errors during development 👍)

### CONTACTS

![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white) - <i>https://www.linkedin.com/in/vitalii-t/</i><br>
![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white) - <i>https://t.me/metalyxxx</i><br>
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white) - <i>[vitalii.tereshchenko1@gmail.com](mailto:vitalii.tereshchenko1@gmail.com)</i><br>

## AVAILABLE ROUTES

### AUTH

-   POST /api/auth/login
-   POST /api/auth/registration
-   GET /api/auth/checkToken
-   GET /api/auth/getUserInfo

### BOOKS

-   GET /api/books
-   POST /api/books

### BOOKING

-   POST /api/bookings/create
-   POST /api/bookings/cancell
-   GET /api/bookings

### ADMIN

-   GET /api/admin/users

### STAFF

-   GET /api/staff/users
