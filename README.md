# *Mr Robogers*

#### Author: *David Couch*

#### *This web app is designed to receive and input from a user and return what a Mr Robogers robot would have to say about it!*

* * *
## *Description*
This is a web application with logic written in javascript. The app should take an input from the user and produce an output that changes as the numbers ascend from low to high starting at 0 by using a loop . The ascended increments are set to the value of 1. Inputs are limited to 5000 to prevent browser timeouts!

While the numbers ascend values change as such:\
Values that contain a 1: all digits are replaced with "Beep!"\
Values that contain a 2: all digits are replaced with "Boop!"\
Values that contain a 3: all digits are replaced with "Won't you be my neighbor?"

The conditions will also take on a role of importance and values containing a 3 will take over conditions with a 2, and so on to 1.

* * *
## *Specs*
```javascript
Describe: robogersTalk();
Test: "It should reject non numbers by asking for a number"
Expect(robogersTalk('cats').toEqual(['Please Enter A Number']));

Test: "It should reject numbers larger than 5000 to prevent timeout"
Expect(robogersTalk(5001).toEqual(['BZZZTTTTTTT ERROR... NUMBER TO LARGE']));

Test: "It should return an array with a 0 if the number 0 is passed as an argument"
Expect(robogersTalk(0).toEqual([0]));

Test: "It should return an array with 2 values if the number 1 is passed as an argument"
Expect(robogersTalk(1).toEqual([0, "Beep!"]));

Test: "It should return an array with 3 values if the number 2 is passed as an argument"
Expect(robogersTalk(2).toEqual([0, "Beep!", "Boop!"]));

Test: "It should return an array with 4 values if the number 3 is passed as an argument"
Expect(robogersTalk(3).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"]));

Test: "It should return an array with 14 values if the number 13 is passed as an argument"
Expect(robogersTalk(13).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]));

Describe: $('#submit-button').click(function() {});
Test: "It should receive a click event from the submit button"
Expect($('#submit-button').click(function(event) {return event}.toEqual(Jquery.Event {originalEvent: MouseEvent, type: "click", target: button#submit-button...}));
```
* * *

## Technologies used
* HTML
* CSS
* Git and Github
* JavaScript
* JQuery

* * *

## Installation : 
### Want to see this webpage now?
###### See this web page in action on [Github Pages](https://dcouch440.github.io/mr-robogers/)

* Go to ( https://github.com/dcouch440/mr-robogers.git ).

*  Navigate to the code button on the github website.\
![Code button](/img/README/code.PNG)

* Click on the code button to open the menu.\
![Github Repo Example](/img/README/HTTPS.PNG)

- Copy the HTTPS code by clicking the clipboard next to the link.

- Within your Bash terminal navigate to your desired location by using cd fallowed by your desired directory.
```bash
 cd Desktop
``` 

- Once you have chosen your desired directory use the command.
```bash 
git clone https://github.com/dcouch440/mr-robogers.git
```

<div 
  style="
    background-color: #d1ecf1; 
    color: grey; padding: 6px; 
    font-size: 9px; 
    border-radius: 5px; 
    border: 1px solid #d4ecf1; 
    margin-bottom: 12px"
> 
  <span 
    style="
      font-size: 12px; 
      font-weight: 600; 
      color: #0c5460;"
  >
    ⓘ
  </span>
  <span 
    style="
      font-size: 12px; 
      font-weight: 900; 
      color: #0c5460;
      margin-bottom: 24px"
  >
    Note : 
  </span> 
  If you have any problems make sure your HTTPS code is correct! The example above might not be the most recent HTTPS code!
</div>


* Then after the process is completed use the command.

``` bash
code .
```
* This will open the directory in your default code editor and from there it is required that you open the index.html file from live server (Visual Studio Code) or your code editors counterpart. You <strong>must</strong> use this method. Opening this web app from the index.html file alone will cause it to not function correctly!

<p 
  style="
    font-size: 12px; 
    background-color: #8c8c8c; 
    border-radius: 2px; 
    padding: 1px 5px; 
    text-align: center; 
    color: white; 
    margin-bottom: 24px"
>
  <span style="font-weight: 700; color: purple">Live server</span>
  <img src="img/README/liveserver.PNG">
</p>


## Addition comments:
* Created on 1/22/21

* * *

## License:
> *&copy; David Couch, 2021*

Licensed under [MIT license](https://mit-license.org/)

* * *
