# Arc2.0

Overview:
Arc is a bill splitting application, designed to make splitting bills after an event easier! Within the app the host
can create a new arc, and input the relevant costs for food and drink. They will then have the option to select which
of the friends from the event had each. Once they click 'create', the app will split the costs accordingly and 
equally based on who had what, providing a breakdown for each of these users within their own profile under their 
list of existing 'arcs'. Users can click 'Pay Now' once they have actually paid the organiser, and this will update 
for everyone who has access to and were a part of the event.
 
Upcoming Features:
Options to split costs more specifically, designating different amounts for food or drink for individuals if the host
wishes to do so. 
The options to upload photos, so that the organiser can add a photo of the physical bill itself. 
Cross-contribution so that different users can upload bills to the event, in the case that it was a multi-day occasion
or holiday tab etc.
In app-payments. Bigger feature to implement of course, but a key one further down the line


Getting Started:
To run the application start by heading into the server folder, running '$npm i', followed by '$nodemon index.js'. 
You will also need to have expo installed, and once you have this you can head into the main folder, and in a new 
terminal window, run '$expo start'. It will then provide you the option to select your desired ios or android system.
If you have expo go on your phone you can also scan the QR code and use the app there. (If you have a mac you will 
need XCode in order to run the iPhone simulator).
I have moved the application over to a fresh repo entirely (with the previous application now listed as private, but 
can be made public on request) due to an system error that was causing the front-end to nest within an unreachable 
subfolder on github. Hence the lack of previous commits.

Tech stack:
React Native,
Node,
Typescript,
Expo,
Mongo/Mongoose,
Express.
