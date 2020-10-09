function timer()
{
    nextFF = getNextFFTime().getTime()
    ff = false
    // shamelessly stolen from https://www.w3schools.com/howto/howto_js_countdown.asp
    // ff lasts 3600 seconds
    var x = setInterval(function() {
        var now = Date.now()

        var distance = nextFF - now
        console.log(distance / 1000)
        rtc = ((distance / 1000) - 33600)
        //console.log (rtc)
        if ((rtc < 3600) && (rtc > 0))
        {
            ff = true
        }
        else
        {
            ff = false
        }

        if (ff && document.getElementById("qbm").style.backgroundImage != "url(assets/images/bg_ff.png)")
        {
            document.getElementById("qbm").style.backgroundImage = "url(assets/images/bg_ff.png)"
            document.getElementById("is-rain").innerHTML = "💦 Fishing Festival is going 💦"
        }
        else
        {
            document.getElementById("qbm").style.backgroundImage = "url(assets/images/bg.png)"
            document.getElementById("is-rain").innerHTML = "The next Fishing Festival starts in"

        }
        
        if (!ff)
        {
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),2);
            var seconds = pad(Math.floor((distance % (1000 * 60)) / 1000),2);
            var hts = minutes + "m " + seconds + "s ";
            var tts = minutes + "m " + seconds + "s "
            if (hours != 0)
            {
                hts = hours + "h " + hts
                tts = hours + "h " + tts
            }
            document.getElementById("timer").innerHTML = hts;
            document.title = "FF: " + tts;
        }
        else
        {
            var rt = distance - (33600 * 1000)
            //console.log(rt / 1000)
            var minutes = Math.floor((rt % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((rt % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = + minutes + "m " + seconds + "s ";
            document.title ="💦 FF: " + minutes + "m " + seconds + "s ";
        }


        if (distance <= 0)
        {
            nextFF = getNextFFTime()
        }
    }, 1000)
}

// https://stackoverflow.com/a/10073788
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }