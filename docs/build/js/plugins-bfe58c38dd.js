!function(){"use strict";function n(n){s.innerHTML=n+(1===n?" item":" items")}function t(n,t){var e=n.classList;e.contains(t)||e.add(t)}function e(n,t){var e=n.classList;e.contains(t)&&e.remove(t)}function o(o){var a=d.search(o),i=a.length,s={},c=0;for(c=0;c<i;c++)s[a[c].ref]=!0;for(c=0;c<u;c++){var l=r[c],v=l.dataset.refid;s[v]?t(l,"on"):e(l,"on")}n(i)}function a(){for(var e=0;e<u;e++)t(r[e],"on");n(r.length)}function i(){var n=location.hash.substring(1);c.value=n,n?o(n):a()}var r=document.getElementsByClassName("product"),s=document.getElementById("product-list-count"),c=document.getElementById("product-search-input"),u=r.length,d=lunr.Index.load(window.SEARCH_INDEX);c.addEventListener("input",function(){var n=this.value;return n?void o(n):a()}),window.addEventListener("hashchange",i),i()}();