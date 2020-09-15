# _STS Clone_

A partial clone of the rogue-like deckbuilder Slay the Spire

#### By
Jared Farkas

## Description

Players begin with a basic deck and fight weak enemies. After enemies are defeated they are presented with a choice of random cards and improve their deck in order to fight tougher enemies. The player tries to get as far as they can

## Setup/Installation Requirements

* Clone the project from https://github.com/j-farkas/stsclone
* dotnet build to install appropriate dotnet and node packages
* dotnet ef database update to import the database structure from the migrations folder
* Import the database data using the attached SQL file
* Host using dotnet
* Run in browser

## Known Bugs
None

## Technologies Used
* HTML
* CSS
* C#
* .NET
* React
* EF core
* MySQL

### License
This software is licensed under the MIT license

Copyright (c) 2019 **_Jared Farkas_**


## Planned Component Tree
![](/clientapp/src/assets/img/componenttree.png)

## Roadmap for each component
* Splash<br>
 - Redirect to initial game setup
 - Stretch - Allow loading of most recent game
* Initial Game Setup<br>
 - Internally set variables up for a fresh game
 - Redirect to map after setup
 - Stretch - allow starting bonuses to be picked
 - Stretch - allow multiple character types to be picked
* Map<br>
 - Show paths towards the area's boss.
 - Different displays for room types.
 - Clicking on rooms redirects to the appropriate room type.
 - Stretch - Events added, shop first, then unique Events
* Fight<br>
 - Combat between a handful of enemies appropriate to player progression.
 - Display hand, any enemies, enemy prediction data, end turn button
 - end turn button discards hand, draws a new hand, triggers any end of turn effects and prompts enemies to attack
 - Upon victory, redirect to rewards screen with appropriate props passed in.
 - Upon defeat, display a game over and provide a button to return to the splash screen
* Boss<br>
 - Unique boss possibilities for each level. Attack patterns more specific/thematic for them.
 - For the most part the same conditions as a fight room, just different redirects upon victory. Not sure if necessary. Could just use the fight component with different props passed in to denote it's a boss, and redirects to the map are from the rewards screen anyways
* Events - Stretch<br>
  - Pass in a random id for the event in the props. Pulls data in to determine which event that is. Runs unique set of actions based on that.
  - All stretch, only to be done after mvp is complete
* Rewards
  - Take in props to let this component know which enemy was previously defeated.
  - Provide rewards to the player - Currency, Card choices, Equipment and single use items as stretch goals
  - Button to redirect to map screen. Location on map changes depending on previous room completed
* SQL Database
 - Holds all hardcoded data storage
 - List of cards and their properties
 - List of Equipment
* C# Back end
 - Entity Framework for SQL calls
 - Functions to export enemy data, event data, card data, possibly equipment data. Might make more sense to have equipment, cards and events live in javascript, and just use database to store which exist.
* Smaller components?
 - A hand component within the fight component might make sense
 - An enemy component within the fight component might make sense
