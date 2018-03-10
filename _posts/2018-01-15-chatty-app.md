---
layout:     post
title:      Chatty App
date:       2018-01-15
author:     Chun Yang
summary:    A website allows user to have real-time chat. 
categories: Projects
thumbnail: comments
tags:
 -chatty
 -React
 -Websocket
---
This project was finished in Week 6 of my 10 Weeks program. Really easy real-time chat app using React and Websocket.

<b>Why React?</b><br />
❤️<b>Reusable Components:</b> <i>React provides a component based structure.Each component decides how it should be rendered. Each component has its own internal logic. This approach has some amazing results. You can re-use components anywhere you need. As a result, (1) your app has consistent look and feel, (2) code re-use makes it easier to maintain and grow your codebase, and (3) it is easier to develop your app.</i><br />
❤️<b>Fast render with Virtual DOM:</b> <i>React is using something called virtual DOM; a DOM kept in memory. Any view changes are first reflected to virtual DOM, then an efficient diff algorithm compares the previous and current states of the virtual DOM and calculates the best way (minimum amount of updates needed) to apply these changes. Finally those updates are applied to the DOM to ensure minimum read/write time.</i><br />
❤️<b>Great Developer Tools:</b> <i>React Developer Tools is great for inspecting react components within their hierarchy and also great for observing their current props and states.</i>		

<b>Thinking in React before you do the project!</b> 😀<br/>
✅ <i>Plan: How do you break up a User Inteface into components?</i><br />
✅ <i>Build simple static components (no logic, just rendering html)</i><br />
✅ <i>Make a complete list of all UI state required by the app</i><br />
✅ <i>For each component, what part of the state does the component need to receive?</i><br />

Ok, now we can build our Chat App.

![My card game screenshot]({{ "/favicons/Chatty/chat.png" | https://github.com/cyang258/Chatty_App/blob/master/docs/Join-the-chat-with-certain-name.png?raw=true }})

This is how it looks like when I finished it, really easy chat app.

🛠<b>Improvement</b><br />	
Well, I didn't add any database on it, so there is no way to track the conversations and users. And also I could use socket.io instead of ws in order to take advantage of room and namespace features on socket.io which would allows me to create private chat rooms.

OK, now it's your turn to explore more about this [project][1]!

[1]: https://github.com/cyang258/Chatty_App