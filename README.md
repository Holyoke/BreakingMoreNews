# Demo
![hugsawaydemogif](https://user-images.githubusercontent.com/6300995/37747961-ec6343c6-2d3e-11e8-87fb-f7676c889ef5.gif)

# Hug's Away Screen
~~As a fan of Hug68's Twitch stream, I've been bothered by his away screen's inaccurate time display - it's an image, so the time was only right once a day(in terms of military time).~~ This is an updated take on http://www.breakyourownnews.com/, with features that help enable a "News" style presentation.

## Features

#### Time 
An accurate time display, updated once a minute and in military format. 

#### All Text is Editable 
The "Live", "Breaking News", and the text below are all editable as seen in the demonstration gif above. By clicking/tapping on the text, users are able to change the text. This allows different headlines, statuses, descriptions, and ticker to be set immediately. These rely heavily on the `content editable` features of HTML, and I utilized `react-simple-contenteditable` from npm. 

#### Layout is responsive in both Landscape and Portrait 
I'm leveraging CSS's `vmin` properties for a consistent presentation in both orientations. 

### Upcoming Features

##### Green Screen
A green screen would allow streamers to cast this presentation as an overlay. I intend to make this a route at `/#/green_screen`. 

##### Background Image Upload
A user would be able to upload an image of their choice. I think it'll work well on the phone, but how the image is sized and centered might be a concern.