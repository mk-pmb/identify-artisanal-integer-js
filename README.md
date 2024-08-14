
<!--#echo json="package.json" key="name" underline="=" -->
identify-artisanal-integer
==========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Identify whether an artisanal integer is from Mission Integers, Brooklyn
Integers or London Integers.
<!--/#echo -->


* Create your own personal, beautiful, hand-crafted integer at one of:
  * [Brooklyn Integers](https://brooklynintegers.com/)
  * [London Integers](http://www.londonintegers.com/)
  * [Mission Integers](http://www.missionintegers.com/)
    (dead, see known issues.)
* [What those are and why
  ](https://web.archive.org/web/20240118235025/https://revdancatt.com/2012/08/23/london-artisan-integers-distribution-hotel-infinity-punk-an-excuse-explanation-of-sorts/)
  * Short version: Those are unique ID generator websites that have coordinated
    their ranges to avoid collisions with each others' IDs.
  * Why not just use IDs made from 122 random bits?
    * Yes. If you have a random-enough RNG and lots of spare entropy,
      that's probably preferable, as the death of Mission Integers
      demonstrates.
      Please format those 122 bits as
      [UUID v4](https://www.npmjs.com/package/uuidv4)
      so people can recognize your strategy.
  * [Could there be infinitely many non-conflicting integer ID services?
    ](https://web.archive.org/web/20230603165443/https://nelsonslog.wordpress.com/2012/07/29/artisinal-integers/)



API
---

This module exports one function:

### identifyArtisanalInteger(i)

Where `i` is your artisanal integer, as a number or as a digits-only string.

* Throws a RangeError if the input is a number too high to reliably calculate
  its parity (even/odd) due to JavaScript's number type constraints.
* Returns `false` if the input seems to not be a positive integer.
* Otherwise, returns a string with the capitalized word "Brooklyn", "London",
  or "Mission", indicating the number registry that (for the purposes of that
  joke) has authority to assign that number.
  * No lookup is done to check whether the number was actually assigned yet.



Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.
* Mission Integers seems dead:
  * 2015-12-01: [Acquired by MapZen](http://web.archive.org/web/20221207102238/https://www.mapzen.com/blog/mapzen-acquires-mission-integers/)
  * 2018-07-12: Last commit (`66ab67f`).
    * The example integer in the readme screenshot is 1159344516.
    * [Memento of the current branch list](http://web.archive.org/web/20240814014736/https://github.com/aaronland/missionintegers-www/commits/master)
  * 2021-06-15: [Last known website memento in the Wayback Machine
    ](http://web.archive.org/web/20210615034436/https://missionintegers.com/)
  * 2024-08-14: Wayback machine cannot archive it because:
    "Cannot resolve host missionintegers.com."




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
