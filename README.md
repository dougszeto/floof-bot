# floof-bot
A discord bot to assist floor fellows in their virtual communities!

floof-bot was originally created as a means to digitize the dorm classic "Where am i?" boards during a time when students may spend more time online than in the hall, however floof-bot has lots of room to grow. Future functionality may include event reminders, mini-games, and more!

# Commands
|Command                        |Description                                                                                                                          |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
|-duty                          |Provide students with your building's duty number and hours                                                                          |
|-where                         |Provide students with your location and when it was last updated                                                                     |
|-setloc [location with spaces] |Set your location with the input provided (note: you should not type the square brackets). This command is only available to you!    |
|@bot-username                  |When someone mentions your bot, it will provide them with a list of available commands                                               |


# Adding the bot to your server
Make sure that you have a discord server set up for your students first!
1. Go to https://discord.com/developers/applications and create a new application (name it whatever you want)

2. Go to the 'Bot' tab on the left handside and give your bot a nice username and icon!

2. Under the general information tab, copy the client ID and in a <strong>new tab</strong> open https://discordapi.com/permissions.html

3. Check off all of the permissions for the bot and then paste the client ID from step 2 into the client ID box

4. Click the link at the very bottom of the screen to add your bot to your discord server

# Setting up your bot
1. Download this repository as a zip file (click the green box that says "code" > "download as zip") and save it to your desktop!

2. Extract the contents

3. Open config.json in any text editor

4. Fill in the appropriate information <b>make sure to keep the quotation marks!</b> For instructions on how to find your user ID see https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID

5. Replace ENTER YOUR TOKEN with your bot's token. To obtain the bot token do the following:

* Go back to the discord developers page (https://discord.com/developers/applications)

* Click on your app and go to the bot tab on the left

* Under the username box is a section labeled TOKEN

* Click the copy button to copy the token

# Bring your bot to life!
It should be noted that running the bot on your own computer will only allow the bot to be online when your computer is running... If you'd like to have the bot running 24/7 let me (Doug) know and I can try to help figure something out!

These steps vary slightly depending on if you're on a windows or mac computer. Either way start by downloading Node from https://nodejs.org/en/ (select the version that says "recommended for most users")

<h2> Windows </h2>

1. In file explorer navigate to the main.js file

2. Right click on main.js and select "properties" at the bottom of the menu

3. Copy the file location (under the "general" tab)

4. Open your command prompt

5. Enter in the following: cd PASTE_FILE_LOCATION_HERE

6. Enter in node main.js

7. Congrats your bot should now be online! Careful though, if you close the command prompt the bot will go offline :(

<h2> MacOS </h2>

1. In finder navigate to the <b>floof-bot-master</b> folder

2. ctrl click on the folder and then hold down the option key

3. Select "copy 'floof-bot-master' as Pathname"

4. Open your terminal

5. Enter in the following: cd PASTE_PATH_HERE

6. Enter in node main.js

7. Congrats, your bot should now be online! Careful though, if you close the terminal the bot will go offline :(
