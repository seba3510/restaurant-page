# Restaurant Page

This project dynamically renders a restaurant home page via DOM manipulation, and the use of Webpacks. The home page contains a navigation bar that links to the "Home" tab, and another navigation bar that links to the "Contact" tab. The contents of each tab were put in separate modules. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

- **Webpacks**: This was my first time working with Webpacks. One thing that stuck out to me was that they work similarly to React applications.

- **How to create a sticky footer**: Despite not being a requirement for the project, I decided to add a footer. I struggled to figure out a way to it. At first, I thought about using "fixed" positioning. But while researching if this is a good approach, I found out that it is not. Then, this lead me to read the "Sticky Footers" guide of MDN Web Docs.

- **Styling different tabs in a single CSS file**: This was the most challenging aspect of the project. As the application grew, managing the CSS ws way more difficult. When learning React this summer in [CodePath's](https://www.codepath.org/) Intermediate Web Development course, one of the things that stuck out to me was the fact that styling becomes harder as the page grows. While taking the course, I decided to take a look at the React course that is offered by The Odin Project, and while doing so, I saw a lesson in regards to this exact thing. Despite begin a bit tempted to learn CSS module despite having a solid foundation of React, I decided to not use it. The reason for this was because I have not yet made it to the React course in The Odin Project. I don't want to miss the forest for the trees.

## Acknowledgements

- [The Odin Project's JavaScript Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript)
- [Webpack Lesson](https://www.theodinproject.com/lessons/javascript-webpack)
- [Project Instructions](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)
- [Sticky Footers](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers)
- [README Editor](https://readme.so/)

## Demo

[Live Demo](https://seba3510.github.io/restaurant-page/)
