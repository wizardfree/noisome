---
title: "There's a slug in my source code!"
date: 2021-07-01T16:35:53+01:00
draft: false
author: Joseph Fleet
slug: culture.philomathical.nondecorated
tags:
- Software
- Python
- Development
---

At some point of browsing this website, you may have noticed that the articles have odd looking slugs[^1] attached to them <!--more--> (this very article has a pretty odd one!). The style of slug I've chosen for this site is based ~~shamelessly-ripped-off~~ of the [what.three.words](https://what3words.com/) location app, which uses three words to split the globe into three-worded-three-meter-squares. Liking the idea and wanting to implement a similar solution myself, I decided on website slugs, hence [gastropod🐌](https://github.com/wizardfree/gastropod) was born.
\
\
On the technical side, [gastropod🐌](https://github.com/wizardfree/gastropod) uses the _json_ and _random_ modules built-in to Python (did I mention it's a Python script) and a brilliant collection of words thanks to the [english_words](https://github.com/dwyl/english-words) GitHub repository. Reading in the _words_dictionary.json_ file from said repo into a dictionary with the json.load function which parses a json string into a dictionary, from there it's a case of ~~psuedo~~randomly grabbing three words from the dictionary and stitching them together. Future plans for [gastropod🐌](https://github.com/wizardfree/gastropod) are to include some checks to ensure the _words_dict.json_ file exists and implement a solution to store and check if a slug has already been used or not.
\
\
Accurate representation of me writing content for this site:
\
\
![Accurate representation of me writing article content](https://media.giphy.com/media/jnQ5a3PR7H0QGx7kO4/source.gif)
{.mx-auto .mb-8}

[^1]: Not the slimy kind, the end part of the URL which points to a specific page or article e.g. example.com/**i-am-a-slug/** 

