# General Assembly Project 2 - Disney Characters

## Project Overview

For my second project at General Assembly on the Software Engineering Immersive course, we were tasked with creating a React app in a mini hackathon, which I completed as a solo project. This included using an external API, as well as using what we had just learnt about React in the previous week and a half, to display a working App within 36 hours.

With the limited time for this project, I spent most of the first few hours deciding what API I should choose, and then planning how it would look and work. After settling on a Football Standings API, I moved straight on to visualising and planning how the App would work. Despite getting quite far with the project I had to choose a different API to use, due to the owner of the API no longer seeming to maintain it and therefore coming across problems with requests that were previously working.


## Deployed Project

[Disney Characters](https://disneycharactersga.netlify.app/)


## Brief

* Build a React application that consumes a public API
* The app should include several components and a router of multiple pages

## Concept

After looking through different APIs again, I decided to settle on a Disney Characters API as I thought the routes and overall structure could be similar to what I had planned for the original football leagues API. The idea was to have an app where you could select a league and then choose from a number of different available seasons, to display the league table. Shifting this to focus now on Disney Characters, the user would be able to select a character and see all the films, video games, park attractions, etc., related to that character. 

Considering I did not have long, I felt this gave me the opportunity to put what I had just learnt into practice and come out with a better understanding of React. This was also an individual project using what I had learnt in the previous 10 days of React, plus what I learnt prior altogether. With all of this to consider, I needed to make sure what I was planning was achievable within the timescale.


## Technologies Used

#### API:
* https://disneyapi.dev/ 
#### Front-end:
* HTML
* CSS/SCSS
* JavaScript (ES6)
* React
* JSX
* Axios
* Bootstrap
#### Development Tools:
* VS Code
* Insomnia
* Git & GitHub
* Excalidraw
* Netlify


## Approach Taken

### Day 1
#### Planning
With only a day and a half to do this project, I decided to do something that would both pique my interest and feel comfortable. After looking over the API and testing the GET routes in Insomnia, including the available data, I settled on this Disney Characters API as the replacement for the football leagues one and began to imagine the interface when I was doing the wireframe with the use of Excalidraw.

#### Wireframe

![Screenshot 2023-02-27 at 22 04 52](https://user-images.githubusercontent.com/95321738/221696382-edbc5629-c926-4e6e-b076-b2077629a2d8.png)

While planning, the focus was on simplicity. This was due to the timeframe I needed to adhere to, with things separated into MVPs and stretch goals. I already had a picture in my mind of what the project would look like finished and what I would want to achieve, but it was very important to also acknowledge that I was doing this alone within a short period of time. All the pages being relatively simple and similar was a key part of the planning and allowed me to save time.

During the planning process, I worked with the mentality of doing one page at a time, where I would get the page working with my minimum MVPs before moving on to the next one. This meant doing a lot of `console logs` to ensure the right data was coming back where I wanted it, and I understood how and what to access for each page. Getting the right information back from the API started mostly with the second page, as after doing the routes, the homepage had no data to pull from the API.


### Building React App
#### Homepage
In going with simplicity, I made my homepage simple and used it to display some information about the website. Rather than clutter the user straight away, I felt a clean introduction would look nicer. To achieve this, I used the Disney logo as the main part of the page, with a couple of lines detailing the purpose of the site. Lastly, with the use of `Link` from `react-router-dom`, I added a button which would take you to the page of characters.

Once this was done, I moved on to the Navbar where I used a react-bootstrap template within my code. The Home and SiteNavbar pages were not too difficult, following the documentation from react-bootstrap helped with the implementation of the navbar.


#### Pages where information is pulled from the API
Within my Characters page, I wrote out the following `axios` get request, before setting its state as shown below. I console-logged it to ensure I was getting the correct information I desired.

![Screenshot 2023-02-27 at 22 13 50](https://user-images.githubusercontent.com/95321738/221697893-d09c0fdc-ea72-4451-91c8-3528a0738242.png)

Once the correct information was coming back through the use of `dot notation` and `console logs` to see what I was getting, I started to look at how it would be displayed on the page. Below is the console log I was getting back from the get request above.

![Screenshot 2023-02-27 at 22 15 52](https://user-images.githubusercontent.com/95321738/221698272-a47c2f9a-0df9-4910-a9a0-db5b38a6a1a6.png)

Using the `.map` array method, I mapped through all of the characters and created separate cards for each character, pulling the name and imageUrl data from the API.

![Screenshot 2023-02-27 at 22 18 10](https://user-images.githubusercontent.com/95321738/221698665-9ee5f19c-db1e-4569-a560-ee07a40013f4.png)

With the use of  `_id`, I used `Link` from bootstrap to ensure each character card now links to the correct corresponding `_id` and brings the correct information to the next page. Each Disney character is represented with the imageUrl and name pulled off from the API and shown below.

![Screenshot 2023-02-27 at 22 19 33](https://user-images.githubusercontent.com/95321738/221698914-211efc17-751c-4c84-88dc-e18b6581ff28.png)


### Day 2

Once this was done I noticed only 50 characters were displayed. I checked the data within API and discovered a maximum of 50 characters were displayed on each page, with different endpoints used for each of the 50 characters in an array. Thinking of a way to solve this, I could see the different endpoints only added `s?page=` and then the number of the page.

![Screenshot 2023-02-27 at 22 23 24](https://user-images.githubusercontent.com/95321738/221699567-0b07db8f-a967-4f1a-b572-b8056aef358c.png)

This presented an opportunity to use `state` for each page number that would change, and therefore have access to each page. For this, I created the state `page` and passed it through my request. I also used the state for the get request variable, which would start with 1, representing the first page.

![Screenshot 2023-02-27 at 22 24 55](https://user-images.githubusercontent.com/95321738/221699818-98d01676-a4c2-4143-9e73-f00963826e4f.png)

Now I needed the ability to move between pages. I simply created buttons with an `onClick` event, and within the functions that I created for these buttons, I added some control flow to limit the amount the page could go up or down.

![Screenshot 2023-02-27 at 22 26 04](https://user-images.githubusercontent.com/95321738/221700018-044d5692-96a5-47cd-ae0d-068fcede3cca.png)

With the limit to when the buttons would work, I wanted to add some visual aspects of this to the user. With the use of the `ternary operator` and the same logic from the functions just created, the buttons would now be disabled, if the condition was not met.

![Screenshot 2023-02-27 at 22 27 47](https://user-images.githubusercontent.com/95321738/221700308-60420104-207d-4f5b-8617-365344675ea6.png)

To finish this page off, I added the current page the user is on, and out of the total amount, by making currentPage equal to the page state.

![Screenshot 2023-02-27 at 22 28 53](https://user-images.githubusercontent.com/95321738/221700467-cebff862-b616-45c4-89a3-ef9cdd8a708e.png)

The page that followed this was the OneChar page. This page was for the individual character chosen and displayed the planned information I wanted, of the character as long as it was applicable. For this, I used a GET request from the documentation of the API.

After doing this, I built out the page similar to my wireframe, adjusting things slightly due to the extra data of some characters. This is what the rest of the last day was spent doing, as well as styling the rest of the app. I did not get the styling to a standard I was happy with, and spent some time before deploying to improve on it.


## Wins

* Building out the `axios.get` requests and the correct information coming back within the console.
  * Although now it seems quite simple, I was wary of pulling the wrong data, or not getting data back at all. After realising this was mostly due to  needing to do `data.data`, instead of data alone, I saw what I expected.
* Surprised at how much I could achieve alone within such a short period of time.
  * This was particularly due to only just learning React days before and still familiarising myself with JavaScript.
* Enabling the ability to go through different pages and the control flow used working as intended.
* Some of the styling features I used to improve the overall look of the App.
* Being able to look through my first project and some class work, then being able to resolve some problems.
    * Looking through some of the JavaScript problems I had resolved during the course helped me solve some problems while doing the project.


## Challenges

* I found it a little difficult to get page buttons working, but once I figured it out it seemed quite straightforward.
* Although I had a plan and was relatively strict when it came to sticking to it, I did find that my planning for the project could have been better.
* Not accounting for some of the challenges I could meet and how they could impact time meant I was not able to finish the App as I would have liked within the 36 hours.


## Key Learnings

* Learning how to use React for the first time and build an app from scratch with multiple components on my own.
* Going back over content to understand and implement things correctly, rather than wasting time guessing.
* Gaining a better understanding of the conditional `ternary operator`, and using it effectively and correctly.


## Future Features

* Enabling the search part that I only managed to display but does not work.
* Being able to display the page URL so that when the user clicks on the character and then goes back, they won’t have to click through all the pages from the start.
* Adding Auth route for comments.
