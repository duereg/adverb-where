var adverbRegex = /(\b)(famil|ugl|onl|definitel|unfortunatel|friendl|especiall|finall|likel|sill|lonel|earl|exactl|recentl|ital|jul|latel|immediatel|shortl|chill|currentl|allegedl|dail|nightl|weekl|hourl|monthl|yearl|quarterl|rarel|additionall|roughl|deadl|completel|all|anomal|assembl|bell|rall|repl|appl|timel|previousl|bel|elderl|compl|impl|multipl|rel|repl|exclusivel|suppl|tall|bull|hol|doll|doil|alternativel|gull|hillbill|consequentl|holl|homil|jell|lil|monopol|mentall|panopl|potbell|underbell|butterfl|dragonfl|firefl|gadfl|horsefl|moll|troll|foll|bubbl|worldl|bristl|crinkl|crumbl|cuddl|luckil|giggl|jiggl|smell|sparkl|wrinkl|presumabl|approximatel|usuall|particularl|emil|ashel|ashl|bail|bradl|bill|carl|charl|karl|doll|ell|hill|sill|dill|hall|hail|harl|holl|jill|joll|kell|karl|lill|loll|lil|moll|poll|pual|paull|shell|sall|shirl|tall|waverl|will)(y)(\b)/gi;
var matcher = require("./matcher");

module.exports = function(text) {
  return matcher(adverbRegex, text, "adverbs");
};