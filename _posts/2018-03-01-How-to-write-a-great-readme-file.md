---
layout:     post
title:      How to Write A Great ReadMe file
date:       2018-03-01
author:     Chun Yang
summary:    A summary about how to write a understandable ReadMe file 
categories: Blog
thumbnail: folder-open

---
README files are a quick and simple way for other users to learn more about your work. Good README files usually include a title of the project, a brief description, the project's dependencies and any necessary setup steps to get the project running.

## Formating ReadMe File

```
# [name of project goes here]

## Table of Contents: Optionally, include a table of contents in order to allow other people to quickly navigate especially long or detailed READMEs. 

## Final product

![Image of how your final product looks like](Image URI)
* Also give some description about your product.


## Dependencies

- Dependency you have in your project
- Dependency you have in your project
- ...

## Installation

- Give the details about how to install your app
- Indicate if there are any environment need to be setup
- How to run the app

## Usage: You should instruct other people on how to use your project after they’ve installed it. This would also be a good place to include screenshots of your project in action.

## Credits: Include a section for credits in order to highlight and link to the authors of your project.

```

## Markdown Syntax

### Headers

```
 # H1
 ## H2
 ### H3
 #### H4
 ##### H5
 ###### H6
```
### Lists

```
1. ordered list
* unordered list
- unordered list
+ unordered list
```
### Links

```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

Some text to show that the reference links can follow later.

[Reference text]: https://www.google.ca
[1]: http://slack.com
[link text itself]: https://www.google.com/maps
```
### Images

```
Inline-style: 
![alt text](URI to the Image)

Reference-style: 
![alt text][reference]

[reference]: URI to the image
```

## You Are Done

After you adding all the things above, the Readme file should be pretty good now. And this will give readers a clear instruction on how to use your project.


