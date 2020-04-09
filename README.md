ANIMAL LOVER APP
CLASSWORK:
*2 commits MUST be made
*1st commit is the scaffolding with images placed, array created and create-react app prepared with correct components
*2nd commit 3:30pm work done to that point.
**THIS WILL BE GRADED BASED ON WHETHER 2 commits were made or not.
SUBMIT:
*Screenshots- Two screenshots for classwork (Github commits), One view screenshot.
*Github Link
HOMEWORK:
*Finish the app
*App will be due on Monday, April 13
INSTRUCTIONS:
Setup:
*create an app called animal-lover
*delete src and recreate index file &components folder with App.js file
*create Animals component in components folder and render it in the App.js file
*create an images folder inside the public folder
*choose 3 types of animals
*download 12 animal images 3 of each kind.
*name and place them in your images folder
Main:
*create an array of objects called animals and place inside Animals component
*keys for each object should be named
 1. image
 2. type
 3. name
 4. description
 5. animalId
*use the images in your images folder as a hard coded path for each image key in array
*for each animal object, define the image path, give it a name, specify type of animal, and use lorem ipsum for a description (or make a real one if you wnat) and a use a unique string for each animalId
*create one card that will be used to represent all of animals. Use the semanitc ui suggestion or design your own card 
*take a look at the screenshot the layout MUST be like this
*on semantic website the code for a 'Single Card' is usable with editing. you will have to remove the friends section and add 3 buttons to it
*your layout will include a main area and a right sidebar
*on the main page you will have 12 cards shown based on one repeated card with different info in each
*each card will have:
 1. image
 2. name of animal
 3. type of animal
 4. description and below that….
 5. 3 buttons Like, Dislike, Discard (see screenshot)
*the sidebar will have a list of Likes and Don't likes (see screenshot)
*In the main area, when I click on Like button the image and name only will appear in the likes list of the sidebar
*In the main area when I click on Dislike button the image and name only will appear in the Dislike list of the Sidebar 
*If I click on Discard button in the main window the animal disappears from BOTH the main area AND the sidebar
*If I click on the Animal in the Like or Dislike Column it removes it is removed from that column
*If the animal is in the Like list it cannot be in the Dislike list
*If the Animal is already in one of the lists it cannot be placed on the list again.
*This is not that hard code wise so make it look as nice as possible.
Stretch Goals:
*Add a search for the type of animal where I can just look at…say..dogs for example
*Split into smaller components
*Add Animal
*If there are no animals in the likes or dislikes column, show a message saying No Likes or No Dislikes
*Add a counter of the likes and dislikes that increments and decrements