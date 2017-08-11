/**
 * Created by xiaob on 2017-08-10.
 */
(function () {

    function init() {
        var panter = new Painter("box");
        panter.setLineWidth(5);
        panter.isRoundLineCap(true);
        panter.setLineColor("#36D1FF");

        var toolView = document.querySelector(".tool");
        document.querySelector("#openButton").onclick = function () {
            toolView.style.display = toolView.style.display === "block"?"none":"block";
        };


        document.querySelector("input[type = range]").value = panter.context.lineWidth*2;

        document.querySelector("input[type = range]").onchange = function () {
            panter.setLineWidth(this.value/2);
        };

        document.querySelector("input[type = color]").onchange = function () {
            panter.setLineColor(this.value);

        };

        document.querySelector("#eraser").onclick = function () {
            panter.eraser();
        };
    }

    init();

})();