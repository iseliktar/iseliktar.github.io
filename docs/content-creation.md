# Content Creation

Content creation is done through pushes to the Github repository.

We are using Jekyll and it internally uses the Liquid Template engine. 

The part in a Jekyll file that is between `---` is called Front Matter and we call that `properties` in the sections below. If a property contains a special character, like the `#` symbol in `what is #spodari`, it should be wrapped in single quotes `'what is #spodari'`.

If you want to have a multiline value of a property, you should use the `|` character at the beginning and indentation at the new lines: 
```
	event-summary: | This is a multiline value
		that spans a couple of lines
		and even a third line
```

## Homepage

Homepage is located in the index.md file in the main directory. It has a couple of properties and content below the `---` section. The content is the text that appears in the `What is #spodari` section.

### Section Titles and Navigation Items

`first-section-title`... `sixth-section-title` - The properties from the first section title to the sixth are the navigation items which are the same as the section titles.

### Statistics Metrics

`donated-sum-number`, `active-minutes-number`, `events-number` are the numbers that are shown in the `Statistics` section of the Home page.

### Calendar

Calendar is generated, based on the events that have been created.

## Event 

Create an `.md` document under the `_events` directory. Be mindful of the file name, because the url to access the event page is `{{base_url}}/events/{{name}}`. This means that if you create a file in the `_events` directory and name it `vitosha-100-2019`, the url to access the event page will be `http://spodari.org/events/vitosha-100-2019`. Throughout this document, we will use `vitosha-100-2019` as an example.

### Event Properties

These are the specifics for a certain event, like the location, date, etc. They are located at the top of the file in the following format: `key: value`.

Properties are:
* `title`: [Витоша 100] *This is the text that appears at the top of the page in bold letters.*
* `location`: [Витоша планина] *This is the text that appears below / next to the location icon.*
* `start-date`: [5 юли 2019] *This is the text that appears below / next to the calendar icon.*
* `end-date`: [7 юли 2019] *If the event has span onto multiple days.*
* `contestants-type`: [IT Crowd only] *This is the text that appears below / next to the person icon.*
* `layout`: Could be one of [past-event], [upcoming-event], [future-event]. This defines the template that will be used to render the event and the style it will have in the calendar. Templates for past, upcoming and future event slightly differ in their layout.
* `event-summary`: This is the text that appears in the orange box below the event description.
* `gallery-count`: [8] This is the number of images that you have put in the gallery for this event. How to put the images in the gallery will be explained in the next section.
* Below the `---` section, enter the description of the event.

### Event Images

#### Gallery

Images are uploaded in the `assets/images/events/{{event-name}}` directory. The `{{event-name}}` should match the name of the `.md` file in the `_events` directory when creating the event. To illustrate with the *Vitosha 100* example. The gallery images should be located in `assets/images/events/vitosha-100-2019` directory. They should be named be the following convention: `gallery-image-1`, `gallery-image-2`, `gallery-image-3`, etc. 

#### Main Image of the Past Event

This is the main image of the past and upcoming events that sit right above the event description. See the Gallery rules for the directory where the image should be put. This should be named `main-image.jpg`

#### Poster Image of an Upcoming Event

This is the image of the event that is shown on the Home page. By designs it should be cut at an angle top and bottom. [Specify the angle from designers]. See the Gallery rules for the directory where the image should be put. This should be named `event-poster.png`. This should be a png as it will have transparency?


## Partners

Partners are pretty similar to events:

Create an `.md` document under the `_partners` directory. Throughout this document, we will use `tumba-solutions` as an example, so the file path should be `_partners/tumba-solutions.md`.

### Properties

* `order`: [1] *At which position should the partner appear*
* `name`: Tumba Solutions *Currently the designs does not use this, but is good to have it*
* `link-to-site`: 'http://tumba.solutions/' *Wrap this in single quotes as the slashes are special characters*

### Logo 

This is the logo that is shown in the grey circle in the `Partners` section. Its path should be `assets/images/partners/{{partner-filename}}.png`, where {{partner-filename}} is the name of the `md` file that is created with the partner information. In the Tumba Solutions example, the logo path should be `assets/images/partners/tumba-solutions.png`

