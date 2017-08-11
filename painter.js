/**
 * Created by xiaob on 2017-08-10.
 */

(function () {

    function Painter(id) {
        var canvasEle = document.getElementById(id);
        canvasEle.width = innerWidth;
        canvasEle.height = innerHeight;

        this.context = canvasEle.getContext("2d");
        this.context.strokeStyle = "white";

        this.drawLine();
    }

    Painter.prototype.drawLine = function () {

        var self = this;
        this.context.canvas.addEventListener("mousedown",startAction);
        this.context.canvas.addEventListener("mouseup",endAction);

        function startAction(event) {
            if (!self.isClear){

                //开始新的路径
                self.context.beginPath();
                self.context.moveTo(event.pageX,event.pageY);
                self.context.stroke();
            }
            // console.log("start");
            self.context.canvas.addEventListener("mousemove",moveAction);

        }

        function endAction() {
            self.isClear = false;
            //console.log("stop");
            self.context.canvas.removeEventListener("mousemove",moveAction);
        }

        function moveAction(event) {
            if(self.isClear){
                self.context.clearRect(event.pageX-8,event.pageY-8,16,16);
                return;
            }
            self.context.lineTo(event.pageX,event.pageY);
            self.context.stroke();
        }
    };

    Painter.prototype.setLineWidth = function (width) {
        this.context.lineWidth = width;
    };

    Painter.prototype.isRoundLineCap = function (isRound) {
        this.context.lineCap = isRound?"round":"butt";
    };
    
    Painter.prototype.setLineColor = function (color) {
        this.context.strokeStyle = color;
    };

    Painter.prototype.save = function () {
        return this.context.canvas.toDataURL();
    };

    Painter.prototype.eraser = function () {
        this.isClear = true;
    }

    window.Painter = Painter;


})();