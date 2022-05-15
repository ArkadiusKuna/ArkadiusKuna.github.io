let textFrom = document.getElementById("value-from");
let textTo = document.getElementById("value-to");

$("#price-slider").ionRangeSlider({
  skin: "round",
  type: "double",
  min: "80",
  max: "120",
  step: "2",
  hide_min_max: "true",
  hide_from_to: "true",

  onStart: function (data) {
    let valueFrom = data.from;
    let valueTo = data.to;

    textFrom.innerText = valueFrom + ",00 zł";
    textTo.innerText = valueTo + ",00 zł";
  },
  onChange: function (data) {
    let valueFrom = data.from;
    let valueTo = data.to;

    textFrom.innerText = valueFrom + ",00 zł";
    textTo.innerText = valueTo + ",00 zł";
  },
  onFinish: function (data) {
    let valueFrom = data.from;
    let valueTo = data.to;

    textFrom.innerText = valueFrom + ",00 zł";
    textTo.innerText = valueTo + ",00 zł";
  },
});
