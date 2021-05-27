# 2021-05-27 a.m. TODO
~~* help 
	* exposes shortcuts awkwardly
	* google shouldn't be shown~~
~~* verify that item verbs  check to see if there's an item of the name at all before saying it's not there~~
~~* Entryway description awkward
	* pencils.getName() like Balusters
	* Add desk.take return that says you can't take it~~
~~* Upstairs landing description anemic~~
~~* Staged bedroom: 
	* add prints and non-takable with description
	* consider adding sconce as object
	* consider switching "dormer seat" to just "seat"
		* add take return that says you can't take it
	* matches.getName()
	* psds.getName()
	* red candle examine anemic
	* red candle.take should indicate the duffle bag smells like spiced apples more clearly
	* NO NAVIGATION DISPLAY~~
	
# 2021-05-27 p.m. TODO
* GameEngine
	* Change action count to only increment on movement, item actions, and google
* Bunkbed Bedroom
	* VCR needs a take admonition
	* Typo in play vhs tape
		* "...quick jump to Chinese Theatre..." missing "the"
		* "...more special..." should be "...special..."
	* NO NAVIGATION DISPLAY
* Religious Bedroom
	* NO NAVIGATION DISPLAY
* Billiards Room
	* examine map missing commas
	* also needs an explanation of the map's purpose: "Apparently, the map can be used to locate items, but not actually determine how to get to them."
	* refactor CueBall.canTake() to check for whether or not the Billiards challenge is won, similar to VHSTape
	* Add isShown to CowskinRug.take
* Living Room
	* Typo in navigation "entrway"
	* fill in TrophyCase.take
	* TrophyCase.examine could use a little more description up front.
* Bar
	* Kitchen is capitalized
	* Peach candle take should make duffle bag smell
	* Peach examine should be wordier
* Kitchen
	* Skull.take needs something
	* Fridge.take needs something
* Freezer
	* change name to just "Walk-in Freezer"