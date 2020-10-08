# Project Overview


## Project Description
![Alt Text](https://i.imgur.com/FK2AmTQ.gif)

The goal of this project was to make a full CRUD app using Node.js, Postgres and EJS while incorporating a MVC file structure.  

Gear Head Garage is a place for all car enthusiasts and grease monkeys to come and share their love and passion for cars. The goal of our website is to create a fun and friendly environment for car enthusiast to upload and share their beloved cars of their own to the rest of the world. Gear Head Garage makes it possible for car owners to upload images of their car and share their car builds with other car enthusiast. 

## Project Links

Below are links to navigate to our project repository and deployed website link. 

- GitHub Repo = [Gear Head Garage Repo](https://github.com/JGeorgos24/GearHeadGarage)
- Deployment = [Gear Head Garage App](https://gearheadgarage-app.herokuapp.com/cars) 

## Wireframes

Inserted below is a navigational link to a PDF slideshow of our wireframes for our project.

- Wireframes and Website Architecture = [Gear Head Garage Wireframes](https://docs.google.com/presentation/d/1_BFz0_28KXCFrs8RDh_PVk9y6f5yklLjPDWCd1eebL0/edit?usp=sharing)

- Auto Slide Show on Web = [Gear Head Garage Wireframes](https://docs.google.com/presentation/d/e/2PACX-1vRwzvQqAHfRAWssQN394EjXMelpak71GS_NRatu-TyPJBKctVNXzIgBPNqiKlUGprOtDlNFYDcYUC89/pub?start=true&loop=true&delayms=30000)


## User Stories

Below are links to navigate to our project repository and deployed website link. 

	1. As a car enthusiast I want to be able to access the Gear Head Garage website to share my cars and view other car enthusiast's cars.
	2. As a user I want to be able to register to the Gear Head Garage website through the register tab.
	3. As a user want to be able to login and create a driver profile so I can create/manage my car inventory.
	4. As a registered user I want to be able to create and upload my car information. 
	5. As a registered user I want to be able to manage my cars in my garage. 
	6. As a registered car owner I want to be able to delete/edit the cars I have in my garage. 
	7. As a non-registered user I should be able to view all the cars in the GHG showroom.
	8. As a non-registered user I should be able to go to the GHG About Us tab and view what the GHG society/website is all about.
	9. As a non-registered user I should be able to navigate to the Gear Head Garage Twitter, Facebook and Instagram social media accounts. 
    10. As a registered user I should be able to delete my GHG profile and any car associated with my profile. 


### MVP/PostMVP 

The functionality of our website will be broken down into separate list: MVP and Post MVP. MVP will be the minimum viable product our client expects to see out of our website. Post MVP will be any additional product we can add to our website to improve functionality and styling.


#### MVP for Gear Head Garage
- Each page can render properly.
- User can add a car. 
- User can delete car.
- User is allowed register and make a profile.
- User is allowed to delete there profile.
- User can login with correct credentials.
- User can view cars in showroom.
- Have a working full-stack application using Node.js, Postgres and EJS.
- Construct app to have a MVC structure: Model, View, Controllers.
- Complete CRUD functionality for one model. 
- Allow communication between 2 models.
- Have at least 50 GitHub commits.
- Deploy website on Heroku.


#### PostMVP 
- Add encrypted passwords
- Add authorization flow to only access personal garage when signed in.
- Add authorization flow to only access add a car when signed in.
- Improves CSS styling in showroom from ordered listed to scroll box or a slide show. 
- Have social media links actually navigate to a Gear Head Garage social media page.
- Improve overall styling on website.
- Improve data validation through out the website. 
- Incorporate google maps so car meets can be posted and located on Gear Head Garage website.

## Components
Descriptions of different components in our application. 

| Component | Description | 
| --- | :---: | 
| App/injex.js | This will make the initial data pull request and include all view, routes and controller functions| 
| Header | This will render the header including the left-nav and right-nav |
| Left-nav | This will render navigational links to about us, showroom, add a car and personal garage pages. | 
| Right-nav | This will render navigational links to register a new user, login a user and go back to a user profile. |
| Div class= content | This will render all information of the page that is currently trying to be viewed. |
| Footer | This will render navigational links to Gear Head Garage's social media accounts and a link back to the Gear Head Garage homepage. | 

## Time Frames

Estimated time frames of when we want certain goals to be completed by. 

| Component | MVP/PostMVP | Status | Goal Date for Completion |Completed By Date |
| --- | :---: | :---: | :---: | :---: |
| Project Approval | MVP | Complete | 10/2/20 | 10/2/20 |
| Construct Migration Files | MVP | Complete | 10/2/20 | 10/3/20 |
| Test MVC  | MVP | Complete | 10/3/20 | 10/4/20 |
| Render App in Browser | MVP | Complete | 10/4/20 | 10/4/20 |
| Test MVC  | MVP | Complete | 10/3/20 | 10/4/20 |
| Add Collaborator in Github | MVP | Complete | 10/2/20 | 10/4/20 |
| Create Models  | MVP | Complete | 10/5/20 | 10/5/20 |
| Complete CRUD for Models  | MVP | Complete | 10/6/20 | 10/5/20 |
| Deploy to Heroku  | MVP | Complete | 10/6/20 | 10/6/20 |
| Encrypted Passwords  | PostMVP | Complete | 10/7/20 | 10/5/20 |
| Authorization Flow add car/personal garage  | PostMVP | Complete | 10/7/20 | 10/6/20 |
| Showroom Styling  | PostMVP | Complete | 10/7/20 | 10/6/20 |
| Social Media Link | PostMVP | Complete | 10/8/20 | 10/8/20 |
| Improve Overall Styling | PostMVP | Complete | 10/8/20 | 10/8/20 |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.   

We are proud of this code because we were able to style our showroom page as we intended in our wireframe with a scrollable div or slide show. 

```
.showRoomCars {
-ms-overflow-style: none;
scrollbar-width: none;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
height: 50vh;
width: 70vw;
background-color: #C7D6D5;
border-radius: 15px;
text-align: left;
padding: 10px;
box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 10px 24px 0 rgba(0, 0, 0, 0.19);
overflow: scroll;
}
```

