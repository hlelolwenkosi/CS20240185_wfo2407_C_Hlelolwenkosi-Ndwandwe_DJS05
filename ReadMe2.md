Tally App
Overview
Welcome to the Tally App! This app is a minimal counter built to showcase basic state management principles in a Redux-inspired way. With buttons to increment, decrement, and reset the count, the app logs each state change to the console—no complex UI needed!

How to Run It
Open the File in Your Browser: Double-click to open it.
Open the Console: Right-click the page, select Inspect, and go to the Console tab (or press Ctrl + Shift + J in Chrome).

My Approach
I created a simple store with methods for getState, dispatch, and subscribe, similar to how Redux works but streamlined. A reducer function manages state changes for each action (add, subtract, reset), and subscribe logs each update so you can observe the changes directly in the console.

Challenges
Building a Store Without Redux: I wanted the code to feel like Redux without actually using it, so I implemented a basic version myself.
Visual Feedback Without UI: Since there’s no visible counter, I used console logging for instant feedback on each button click