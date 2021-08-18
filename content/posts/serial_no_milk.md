---
title: "Storing Object State in QR Codes"
date: 2021-08-18T18:39:05+01:00
draft: false
author: Joseph Fleet
slug: flatworm.humbug.fusion
tags:
- Software
- Development
- Python
- Interesting
---

> **tl:dr** by dumping an objects state to JSON it's possible to encapsulate that within a QR Code for easy transfer and storage.

QR Codes are **cool.**[^1]

With widespread usage all over the world[^2] and an explosive upward trend in usage[^3] QR Codes are becoming more and more integrated into our daily lives, which is great! Those monochromatic little squares pack 3 whole glorious Kilobytes of data (or 4269 alphanumeric characters) in a single scan, which may not seem a lot, but I wager it could be more than you think. Restaurant Menus, social links, transport tickets, and more are being shared right now using these handy little squares.

JSON (JavaScript Object Notation)[^4] a human-readable text file format used to store and transmit data using attribute-value pairs and arrays. If you're a Full-time developer or a weekend warrior at some point you'll have used this format within a project (if you've ever done work with Android apps and serialization you might be familiar with Google's GSON[^5]).
What does JSON have to do with QR Codes? Ah, that is the question that crossed my mind the other day. Whilst working on a personal project of mine the subject of serialization came up, namely I had an object instance which I wanted to dump to the terminal to ensure it was being properly populated. After a recent delve into how QR codes work (which is beyond the scope of the article) it was the eureka moment of peanut butter and jelly or rather JSON data and QR Codes for ease of transmission and storage (although I've yet to implement this into my own project 🙃 the proof of concept is there).

The following is a simple script written to show this idea in action (albeit a basic implementation):

```python
import json # Module to work with JSON in Python
import segno # Module to generate QR Codes

class Character:
    def __init__(self, name, hitpoints, level, cClass, race, alignment, armourValue):
        self.name = name
        self.hitpoints = hitpoints
        self.level = level
        self.cClass = cClass
        self.race = race
        self.alignment = alignment
        self.armourValue = armourValue
        # ...

if __name__ == "__main__":
    c = Character("Baranabus", 24, 2, "Wizard", "Human", "Neutral Good", 12)
    jsonStr = json.dumps(c, default=lambda o: o.__dict__, indent=4)
    qr = segno.make(jsonStr)
    qr.save('character.png', scale=10)
```
So what's going on here? After defining the Character class, we use a jsons.dumps function call passing a lambda expression! This lambda expression is telling the dumps function to, instead of dumping the object itself, actually dump a dictionary of the object. 👍

If you were to look at the string dumped by 'json.dumps' (or by scanning the outputted QR Code) you would see the following:

```JSON
{
    "name": "Baranabus",
    "hitpoints": 24,
    "level": 2,
    "cClass": "Wizard",
    "race": "Human",
    "alignment": "Neutral Good",
    "armourValue": 12
}
```

But where do QR Codes come into play, well the eagle-eyed readers amongst you will have noticed the segno[^6] module saving a file called 'character.png' to local storage. This file (thanks to segno) is a QR Code representation of the JSON data. This opens up a number of opportunities to pass state around relatively easily, of course the issue of a custom solution being needed to act on this data (unless Google Lens can read JSON data and no-ones told me!) but if you're interested in sharing the state of an object you more than likely have a custom solution anyhow.

Perhaps not everyone will share my thinking here, the extra steps and limited size of the QR Code might not seem worth it, but you can't deny that it's cool.

Here's a couple possible use-cases for you to think over: 
- Tabletop RPG combat tracker: all players involved or even NPCs are scanned in to the tracker and can be viewed, ordered, and removed as needed.
- Character sheet viewer: import/export characters with one snap of the camera
- A POI (Point of Interest) App: using a provided app, POIs could be scanned, revealing factual data and facilities information.


[^1]: [😎](https://i.kym-cdn.com/photos/images/newsfeed/001/498/880/572.jpg) 
[^2]: https://internetretailing.net/themes/14m-americans-scanned-qr-and-bar-codes-with-their-mobiles-in-june-2011
[^3]: https://scanova.io/blog/qr-code-statistics/#:~:text=changed%20since%20then.-,US,9.76%20Million%20scans%20in%202018.
[^4]: https://www.json.org/
[^5]: https://github.com/google/gson
[^6]: https://segno.readthedocs.io/