### UI-Component-Tree
#### Describes the component structure for dimembermatt.github.io.
---
<!--
Author: Matthew Yu
Last Modified: 6/23/19
Component description: A Section is the largest component of the site,
underneath the app.component. Examples of the Section component use include

-->

Home section (dimembermatt.github.io)
 |-- section (Intro) {backgrounds that change based on resources}
   |-- profile pic container (4x4, circular)
   |-- tagline container (8x1)
 |-- section (About Me)
   |-- about me container (4x5) [x3] {inline text that redirects to Coursework, Extracurricular, Resume(pdf) pages}
 |-- section (Projects)
   |-- slideshow container (12x5)
     |-- directional buttons (1x1) [x2]
     |-- slideshow (8x5) {redirects to project page}
 |-- section (Contact)
   |-- contact hyperlink buttons (2x2) [x3] {redirects to github, linkedin, email}
 |-- icon (1x1) {floating, redirects to top of page}
---
Projects section (dimembermatt.github.io/projects)
 |-- section (TivaBoy Music Box)
   |-- slideshow (6x4)
 |-- section (Web-Audio-Visualizer) {redirects to visualizer page}
   |-- slideshow (6x4)
 |-- section (Generative Drawings) {redirects to Generative Art Gallery page}
   |-- slideshow (6x4)
 |-- section (Markov Chain Image Generation)
   |-- slideshow (6x4)
 |-- icon (1x1) {floating, redirects to top of page}
 |-- icon (1x1) {fixed, redirects to root page}
---
Extracurricular section (dimembermatt.github.io/extracurricular)
|-- section (UT IEEE RAS) {redirects to RAS page}
  |-- slideshow (6x4)
|-- section (UT SVT) {redirects to LHR page}
  |-- slideshow (6x4)
|-- section (UT ASME) {redirects to ASME design team page}
  |-- slideshow (6x4)
|-- section (UT SIMLab)
  |-- slideshow (6x4)
|-- icon (1x1) {floating, redirects to top of page}
|-- icon (1x1) {fixed, redirects to root page}
---
Coursework section (dimembermatt.github.io/coursework)
|-- section (Fall 2017)
  |-- expandable container (EE302) {closes all other open expandable containers}
    |-- slideshow (6x4)
  |-- expandable container (EE306)
    |-- slideshow (6x4)
|-- section (Spring 2018)
  |-- expandable container (EE319K)
    |-- slideshow (6x4)
  |-- expandable container (UGS302)
    |-- slideshow (6x4)
|-- section (Fall 2018)
  |-- expandable container (EE312)
    |-- slideshow (6x4)
  |-- expandable container (EE411)
    |-- slideshow (6x4)
  |-- expandable container (EE309S)
    |-- slideshow (6x4)
|-- section (Spring 2019)
  |-- expandable container (EE422C)
    |-- slideshow (6x4)
  |-- expandable container (EE316)
    |-- slideshow (6x4)
  |-- expandable container (EE460N)
    |-- slideshow (6x4)
  |-- expandable container (CHE333T)
    |-- slideshow (6x4)
|-- list (lists other coursework taken generated from a json file)
|-- list (lists other coursework currently being taken from a json file)
|-- icon (1x1) {floating, redirects to top of page}
|-- icon (1x1) {fixed, redirects to root page}
