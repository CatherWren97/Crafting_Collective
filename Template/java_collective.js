
/*Surprise Function*/

var sites = [
    'knit.html',
    'crochet.html',
    'quilt.html',
    'embroider.html',
    'sewing.html',
    'tye_dye.html',
    'leather.html'
];

function functionSurprise() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i]; }

/*Link for this: https://stackoverflow.com/questions/37751759/generating-a-random-link-through-javascript-html */