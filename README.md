# Netflix-Clone-Docker


## Background
***

  A full stack MERN application built using ReactJS, React Hooks, React Router, Material UI, Saas Styling, ExpressJS, NodeJS, and MongoDB.
  REST API is used to perform the CRUD operations for user, movies/tvshows, featured list, and collection list with MongoDB Cluster.
  Axios library is used to fetch or create data to MongoDB server via HTTP requests.
  ExpressJS is used which is a back end web application framework for NodeJS.

**Note:** This application is containerized using docker containers. This container can be used to deploy the application on Microsoft Azure, AWS or GCP. 

## Features Implemented
***

* Original Netflix UI replicated using ReactJS, React Hooks, Material UI, and advanced sass styling.
* A register page and sign in page is created where a user can safely sign up and sign in with the valid email id.
* While login, a token is generated which is used to authenticate the user. This is implemented using jsonwebtoken. 
* The passwords are encrypted using CryptoJS library.
* A random tvshow or movie will be displayed in the featured part of the application.
* Collections of popular movies and tvshows are created in the database manually.
* Cloudinary was used where the images and videos were uploaded and accessed through url.
* User can click on Home, Movie and TVShows button in the navbar to get the desired list of collections.
* User can slide through the list of movies/tvshow in a particular collection.
* Hovering over the poster will show the details of movie/tvshow i.e., description, duration, year, age group.
* When hovered, the movie also starts playing and if clicked it will redirects to the watch page where user can watch it.
* User can also click on the logout button in the top right corner, then the page will be redirected to the register page.


## New features to be added
***

* Add user profile data, profile picture and personal data setup.
* Add watchlist feature where user can add their favourite or to be watched movies/tvshows to their watchlist. 
  The list will be user specific and can be implemented with the help of cookies.
* More data to be created so that user can browse based on genre of its choice.
* Implement more features as a personal practice project.


## Demo
***

### Live Deployed Website : [https://netflix-clone-gautam.herokuapp.com/](https://netflix-clone-gautam.herokuapp.com/)
---

### Demo Video
---

https://user-images.githubusercontent.com/68272020/170863606-7060b016-6ce8-4ee7-a077-44ae76741fb6.mp4


### Images
---


**Register Page**

![Register](https://res.cloudinary.com/du7od2uuc/image/upload/v1653584262/Netflix-Clone/Github%20Readme%20Images/Netflix-Clone-RegisterPage_lwolmb.jpg)

**Login Page**

![Login](https://res.cloudinary.com/du7od2uuc/image/upload/v1653584262/Netflix-Clone/Github%20Readme%20Images/Netflix-Clone-LogInPage_jv8pxf.jpg)

**Home Page**

![Home1](https://res.cloudinary.com/du7od2uuc/image/upload/v1653585157/Netflix-Clone/Github%20Readme%20Images/netflix-home-new_gddhbf.jpg)
![Home2](https://res.cloudinary.com/du7od2uuc/image/upload/v1653585202/Netflix-Clone/Github%20Readme%20Images/netflix-home-new-2_vqrl8m.jpg)

**Movie Page**

![Movie](https://res.cloudinary.com/du7od2uuc/image/upload/v1653584262/Netflix-Clone/Github%20Readme%20Images/Netflix-Clone-DemoPic-3_gauebp.jpg)

**TVShows Page**

![TVShows](https://res.cloudinary.com/du7od2uuc/image/upload/v1653584263/Netflix-Clone/Github%20Readme%20Images/Netflix-Clone-DemoPic-2_auqame.jpg)

