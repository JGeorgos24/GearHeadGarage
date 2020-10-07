# Project Overview


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Project Links

Below are links to navigate to our project repository and deployed website link. 

- GitHub Repo = [Gear Head Garage Repo](https://github.com/JGeorgos24/GearHeadGarage)
- Deployment = [Gear Head Garage App](https://gearheadgarage-app.herokuapp.com/cars) 

## Wireframes

Inserted below is a navigational link to a PDF slideshow of our wireframes for our project.

- Wireframes and Website Architecture = [Gear Head Garage Wireframes](https://docs.google.com/presentation/d/1_BFz0_28KXCFrs8RDh_PVk9y6f5yklLjPDWCd1eebL0/edit?usp=sharing)

- Auto Slide Show on Web = [Gear Head Garage Wireframes](https://docs.google.com/presentation/d/e/2PACX-1vRwzvQqAHfRAWssQN394EjXMelpak71GS_NRatu-TyPJBKctVNXzIgBPNqiKlUGprOtDlNFYDcYUC89/pub?start=true&loop=true&delayms=30000)


### MVP/PostMVP 

The functionality of our website will be broken down into separate list: MVP and Post MVP. MVP will be the minimum viable product our client expects to see out of our website. Post MVP will be any additional product we can add to our website to improve functionality and styling.


#### MVP for Gear Head Garage
- Each page can render properly.
- User can add a car. 
- User can delete car.
- User is allowed register and make a profile.
- User is allowed to delete there profile.
- User can login with correct credentials.
- User view cars in showroom.
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
| App/injex.js | This will make the initial data pull and include all view, routes and controller functions| 
| Header | This will render the header including the left-nav and right-nav |
| Left-nav | This will render navigational links to about us, showroom, add a car and personal garage pages. | 
| Right-nav | This will render navigational links to register a new user, login a user and go back to user profile. |
| Div class= content | This will render all information of the page that is currently trying to be viewed. |
| Footer | This will render navigational links to Gear Head Garage's Social Media account and a link back to the Gear Head Garage homepage. | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object