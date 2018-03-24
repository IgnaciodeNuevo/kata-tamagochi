# Kata Description

A Tamagotchi is a small, handheld digital pet that you can feed, play with, put to bed and clean up after. Look after it well by feeding it the right kinds of foods, showering it with attention and cleaning up after it when required, and your Tamagotchi will grow up to be a smart, well-respected member of society.

To aid the quick release of this project, we require you to deliver the absolute minimum that could reasonably be called a Tamagotchi pet as soon as possible. Then we're going to add all of the good stuff- different foods and games to play, all purchasable with our own very special currency, the Kablammo.

## Feature 1 - Basic Needs

Like we said before, first things first is to get all of the basic needs finished so we have some semblance of a basic Tamagotchi pet. We're talking about things like hungriness, fullness, tiredness, happiness and of course, the actions required to mitigate these needs. We're not really sure of the implementation though. We were thinking of needs on a scale of 1-100, with different activities having different effects on them, but we'll go with whatever you think is best.

### Feeding Tamagotchi

As a Tamagotchi owner I want to feed my Tamagotchi. So that I can satiate it's hunger

* Given I have a Tamagotchi
* When I feed it
* Then it's hungriness is decreased
* And it's fullness is increased

### Playing With Tamagotchi

As a Tamagotchi owner I want to play with my Tamagotchi. So that I can make it happier

* Given I have a Tamagotchi
* When I play with it
* Then it's happiness is increased
* And it's tiredness is increased

### Putting Tamagotchi to Bed

As a Tamagotchi owner I want to put my Tamagotchi to bed. So that I can refill it's energy

* Given I have a Tamagotchi
* When I put it to bed
* Then it's tiredness is decreased

### Making Tamagotchi Poop

As a Tamagotchi owner I want to make my Tamagotchi poop. So that it is more comfortable

* Given I have a Tamagotchi
* When I make it poop
* Then it's fullness is decreased

### Changing Tamagotchi Needs Over Time

As a Tamagotchi owner I want my Tamagotchi's needs to change over time. So that I have to look after it carefully

* Given I have a Tamagotchi
* When time passes
* Then it's tiredness is increased
* And it's hungriness is increased
* And it's happiness is decreased

## Run Tests

`npm install`

`npm run test`

`npm run test:watch`

## Contributors

* Ismael Navarro: [Twitter](https://twitter.com/ismanapa) & [Github](https://github.com/IsmaelNavarro)
* Ignacio Villanueva: [Twitter](https://twitter.com/IgnaciodeNuevo) & [Github](https://github.com/IgnaciodeNuevo)
