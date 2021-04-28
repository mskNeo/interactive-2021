let sites = [
    "https://longdogechallenge.com/",
    "http://heeeeeeeey.com/",
    "http://corndog.io/",
    "https://mondrianandme.com/",
    "https://puginarug.com",
    "https://alwaysjudgeabookbyitscover.com",
    "https://thatsthefinger.com/",
    "https://cant-not-tweet-this.com/",
    "https://weirdorconfusing.com/",
    "http://eelslap.com/",
    "http://www.staggeringbeauty.com/",
    "http://burymewithmymoney.com/",
    "https://smashthewalls.com/",
    "https://jacksonpollock.org/",
    "http://endless.horse/",
    "https://www.trypap.com/",
    "http://www.republiquedesmangues.fr/",
    "http://www.movenowthinklater.com/",
    "http://www.partridgegetslucky.com/",
    "http://www.rrrgggbbb.com/",
    "http://beesbeesbees.com/",
    "http://www.koalastothemax.com/",
    "http://www.everydayim.com/",
    "http://randomcolour.com/",
    "http://cat-bounce.com/",
    "http://chrismckenzie.com/",
    "https://thezen.zone/",
    "http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
    "http://ninjaflex.com/",
    "http://ihasabucket.com/",
    "http://corndogoncorndog.com/",
    "http://www.hackertyper.com/",
    "https://pointerpointer.com",
    "http://imaninja.com/",
    "http://drawing.garden/",
    "http://www.ismycomputeron.com/",
    "http://www.nullingthevoid.com/",
    "http://www.muchbetterthanthis.com/",
    "http://www.yesnoif.com/",
    "http://lacquerlacquer.com",
    "http://potatoortomato.com/",
    "http://iamawesome.com/",
    "https://strobe.cool/",
    "http://www.pleaselike.com/",
    "http://crouton.net/",
    "http://corgiorgy.com/",
    "http://www.wutdafuk.com/",
    "http://unicodesnowmanforyou.com/",
    "http://chillestmonkey.com/",
    "http://scroll-o-meter.club/",
    "http://www.crossdivisions.com/",
    "http://tencents.info/",
    "https://boringboringboring.com/",
    "http://www.patience-is-a-virtue.org/",
    "http://pixelsfighting.com/",
    "http://isitwhite.com/",
    "https://existentialcrisis.com/",
    "http://onemillionlols.com/",
    "http://www.omfgdogs.com/",
    "http://oct82.com/",
    "http://chihuahuaspin.com/",
    "http://www.blankwindows.com/",
    "http://dogs.are.the.most.moe/",
    "http://tunnelsnakes.com/",
    "http://www.trashloop.com/",
    "http://www.ascii-middle-finger.com/",
    "http://spaceis.cool/",
    "http://www.donothingfor2minutes.com/",
    "http://buildshruggie.com/",
    "http://buzzybuzz.biz/",
    "http://yeahlemons.com/",
    "http://wowenwilsonquiz.com",
    "https://thepigeon.org/",
    "http://notdayoftheweek.com/",
    "http://www.amialright.com/",
    "http://nooooooooooooooo.com/",
    "https://greatbignothing.com/",
    "https://zoomquilt.org/",
    "https://dadlaughbutton.com/",
    "https://remarkablemark.org/Bouncing-DVD-Logo/",
    "https://remoji.com/",
    "http://papertoilet.com/",
  ];

const selectWebsite = () => {
  const range = sites.length;
  const index = Math.floor(Math.random() * range);

  const site = sites[index];
  sites.splice(index, 1);

  return site;
}

const openSite = (site) => {
  window.open(site);
}

const teleport = document.querySelector("button");

teleport.addEventListener("click", () => {
  openSite(selectWebsite());
});