## Setup
- Run `npm i`
- Run `npm run build`
- Run `npm run preview`

## Reproduction
Go to the localhost page

Check and uncheck the checkbox. That'll create a simple component using the overlay.
In the Chrome devtools, go to the memory tab. Do a GC (the broomstick icon) just to be sure. Then take a heap snapshot

In the list, find the entry for "Detached HTMLElement". That'll show you the elements that are not part of the DOM any more, but cannot be garbage collected. 
There you see the overlay-component.
