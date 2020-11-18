---

title: How Blazor Is Going to Change Web Development
category: literature
layout: content
date: 2019-12-28 08:52:31

---
Note: Do you live in the Portland, Oregon area? Want to learn about Blazor? Come see me January 7th! I'll be presenting about Blazor at PADNUG.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A couple of weeks ago I wrote an article about building and deploying a Blazor app without touching a Windows machine and realized maybe I should take a step back and explain what Blazor is and why anyone would use it. It's still fairly new to most in the front end development world, but it's awesome and you should check it out.

So what is it, exactly?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blazor is a framework from Microsoft that you can use to develop interactive client-side Web UIs with C#.

In their own words:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blazor lets you build interactive web UIs using C# instead of JavaScript. Blazor apps are composed of reusable web UI components implemented using C#, HTML, and CSS. Both client and server code is written in C#, allowing you to share code and libraries.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pretty cool right? You can download it here and get started. 

The old way
Remember the old way of developing web applications? 

What is Blazor

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the longest time, we built applications that ran solely on the server, using things like ASP.NET, PHP, etc and they generated an HTML file to be pushed to the browser.   

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We've always had some bit of interactivity with JavaScript and AJAX but for many years most of the business logic is handled on the server itself, spitting out HTML pages to interact. The browser for many years was just a glorified document viewer. It worked, but we knew we could do better.

There are some downsides to this pattern that we're all aware of:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The server needs to be configured with software to run the web app. ASP.NET, PHP, etc. Backend processors or runtimes have to exist on the server. 
Most of the processing power is on the server. 
Page loads are annoying and slow. 
So we found a new answer to it. 

How we do it now
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the rise of the Single Page Applications we have a new pattern, with frameworks like Angular, React and Vue:

What is Blazor

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now we're building full applications in JavaScript that run on the browser. This splits the business logic, so that some runs on the browser, and some runs on the server. JavaScript applications run client-side and use messaging to communicate with the "server". You can easily replace "server" with a service or application in the cloud, but the model is still the same.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is an excellent improvement on what we had before, which essentially manipulating HTML and tossing it back and forth. Now we have real applications running in the browser, and page loads are mostly a thing of the past.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;But Blazor improves on that pattern further. There are two main ways to develop with it.

Option 1: Web Assembly Method
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When you choose to build a Blazor Web Assembly application it looks like this: