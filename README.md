# Erkki

The stack is mongoDb database/node/react

It works for two people and you can set your splits how you want (50/50, 60/40 etc...)
Basically you create a household and have multiple expense calculators inside. 
Then you can keep track of your personal and shared expenses.
it calculates each month separately and tells you what to pay the other occupant or vice versa.

There is a bug that when you refresh the page somewhere else than in the homepage it will crash. This could be fixed with a simple if check but the design is so bad
that it doesn't fix it. The problem is in the navigation. My recipe book app doesn't have this problem because it's built more robust.

The backend code is pretty messy but I wanted to practice doing a fullstack application.
It uses mongoDB database for storing the data

The app can't yet count the splits for more than two people but I'll work it out eventually.
The expense tracker part works for multiple occupants

If you want to see if it works there is a heroku link in description use one of the testholds or make your own! (and yes the is our own expenses in the app so if you want see that go ahead..) It's not much of a secure app but it works for me. If you want to check something I built with security check the recipe book fullstack
