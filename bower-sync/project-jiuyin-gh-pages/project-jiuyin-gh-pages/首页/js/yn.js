/**
 * Created by 远远 on 2016/8/30.
 */

$(function () {



    $(".mini-move #play-0").animate({"transform": "rotate("+1000+"deg)"},1000)

    $(".sign-hand #closeSign").click(function () {
        $("#flSign").animate({"right":"-300px"},500, function () {
            $("#signMini").animate({"right":"0px"},300)
        })
    })

    $("#signMini").click(function () {
        $("#signMini").animate({"right":"-40px"},300, function () {
            $("#flSign").animate({"right":"10px"},500)
        })
    })

})

