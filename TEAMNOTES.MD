## Status check ins
These are dedicated status check-ins as this is a multi-week project

 

=======
### Class: 10/19/21 
What you learned from the example Chuck presented.
  Support code for potential link, such as in our button. Multiple types of cards, potential animations for icons when visable.
  What approaches can you leverage from his example to enhance your team's element?
Making different card types and leverage stuff from one card to the next.
  How could you take his approach and envision a more flexible version?
  We can tie in what other groups are trying to do and also check out Chuck's element to see how we can wire up different styles and functionality.
  Add different dynamics and styles
  What are your next steps?
  Continue working on getting the files separated and leverage other people's code to get us help and Chuck's code.
### Check-in 1
- Possible names of these 4 elements 
  1. link-icon
  2. link-science-card
  3. link-header
  4. link-card
- Properties
  1. Change the color
  2. Change the icon
  3. Dark mode
  4. Zoom in on hover
  5. Mobile consideration, drop down to body
- Additional design considerations
  1. Translation
  2. Contrast
  3. Scalability
- Next steps
  1. Hannah - Work on dark mode 
  2. Taylor - Fix hover property to drop shadow or zoom in
  3. Evan - Look into mobile consideration
  4. Colton - Change color and icon. Doing a test
### Check-in 2
- What did you take away from the portion of class about implementing SimpleColors?
  1. By watching the example on implementing simple colors the project itself became a lot more clear. We learned more about the scope of the card and how to make each element a seperate file. We also got to see an example that showed being able to extend more classes into the project is important.
- What did you learn from other groups?
  1. We learned the importance of breaking up the elements into files.
- Next steps
  1. Hannah - implement intersection observer
  2. Taylor - leverage the icon's basic API and banner issues
  3. Evan - implent the two named slots
  4. Colton - allow for dynamic imports

  Worked on adding different elements, such as the header, subheader, and icon on the page. Were having issues with merging/pulling/pushing to github since we 
  are working through one repo. Most of the stuff is there, just need to reorganize and make it appear more visually appealing. More work and questions
  to be brought up during the week and in-class during demonstrations.

  What you learned from the example Chuck presented.
  Support code for potential link, such as in our button. Multiple types of cards, potential animations for icons when visable.
  What approaches can you leverage from his example to enhance your team's element?
Making different card types and leverage stuff from one card to the next.
  How could you take his approach and envision a more flexible version?
  We can tie in what other groups are trying to do and also check out Chuck's element to see how we can wire up different styles and functionality.
  What are your next steps?
  Continue working on getting the files separated and leverage other people's code to get us help. 
### Check-in 3
  - We have made progress with the drop down functionality. The icons are running well and the headers/ sub headers are great. We plan to update the body and styling to make it better and more visually appealing.
  - Fixed an issue with yarn where trying to pull changes from group members with different versions of yarn created issues with the yarn.lock file. This can be fixed by deleting the yarn.lock file, running yarn install, and adding .yarn and yarn.lock to the .gitignore.  
  - Our biggest problems are with the github repository. All of us have run into issues with pull requests and merge conflicts. Hannah specifically has been struggling a lot wiht intersection observer. Even when she adds it, she cannot seem to actually get it to do anything. 
  - Next Steps
  1. Hannah - clean up and finish the icon
  2. Taylor - styling the header to look like the header and figuring out subheader issues with Evan
  3. Evan - develop card scaffolding
  4. Colton - work on the body allowing lists
  
### Check-in 4
- We made progress on simple colors fixing the implementation. We also figured out some of the issues what we could fix and new approaches of doing so through the issue que. We made sure that all redundant code that we saw was removed.
-
<br>
<h2>Meeting Date & Class: 10/5/21 </h2>
<br>
<b>What are the characteristics of the card?</b>
<br>
    Theres a header, header block, and an icon. Theres also the body which contains the list. 
<br>
<br>
<b>What design considerations must we take into account? </b>
<br>
    Change the header, background colors, icons, what's in the body and the body content, change the size card (scalabilty).
<br>
<br>
<b>What accessibility concerns do we potentially have?</b>
<br>
  It has to be accesible via keyboard. We need to be able to tab to the button inside the card. The icon needs alt-text so you know what the icon is. A screenreader needs to be able to access the content within the card and be able to read it. It also needs to support color contrast and dark modes for visually impaired users. 
<br>
<br>
<b>What security concerns do we potentially have? </b>
<br>
  Does the website use HTTP or HTTPS? Are there any conerns with cross-site scripting? Can altered states and different states of the card could create vulnerabilities? 
<br>
<br>
<b>What "states" does this card have? </b>
<br>
  It should have a hover and focus state for when users either hover it with a mouse or tab over to it. Drop shadow or something light could be the hover state. Some form of diabled can be used. Needs states in order to be accessible by keyboard. Color, icon, and word have a relationship.
<br>
<br>
<b>What do we call it?</b>
<br>
    We would call this a "button-card" or "link-card". 
<br>
<br>
<b>What areas do we need to account for flexible content / HTML entry of any kind?</b>
<br>
    Any area with CSS or HTML properties could be subject to change, specifically the body text, the header text, the icon, the colors, the scalability, and the button text/button link.
<br>
<br>
<b>Do we have room for additional reusable atoms to be produced? (there are 4 total by my count)
What should we call each of them?</b>
<br>
    Depending on how big our card is we probably would have room for reusable atoms to be produced. These atoms could be called things like "search," "labels," "button," and "input." Some examples are odl-icon, odl-science-card, odl-header, odl-card.
    
    ##Meeting Date & Class: 10/14/21 ##
    What we learned from SimpleColors: Even though the name says "simple" it's not that simple. Rather than setting individual CSS variables for all our properties we can set them with Simple Colors. 
    Notes from other groups: Other groups are working on each individual element first like the header, banner, icon, and scaffolding. 
    Next Steps: Our next steps are to get the icons and banners working with functional APIs. 

<br>
<h2>Meeting Date & Class: 10/28/21 </h2>
<br>
<b>We worked together to make a plan for final steps.</b>
