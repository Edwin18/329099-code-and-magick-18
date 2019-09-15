'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var GISTO_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = FONT_GAP + 'px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP + GAP * 2);

  var startGap = (CLOUD_WIDTH - ((BAR_WIDTH * times.length) + (BAR_GAP * (times.length - 1)))) / 2;
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%,' + Math.round(Math.random() * 100) + '%)';
    }

    ctx.fillText(Math.round(times[i]), CLOUD_X + (startGap + ((BAR_WIDTH + BAR_GAP) * i)), CLOUD_HEIGHT - ((GISTO_HEIGHT * times[i]) / maxTime) - FONT_GAP * 2 - GAP * 2);
    ctx.fillText(players[i], CLOUD_X + (startGap + ((BAR_WIDTH + BAR_GAP) * i)), CLOUD_HEIGHT - FONT_GAP);
    ctx.fillRect(CLOUD_X + (startGap + ((BAR_WIDTH + BAR_GAP) * i)), CLOUD_HEIGHT - ((GISTO_HEIGHT * times[i]) / maxTime) - FONT_GAP - GAP, BAR_WIDTH, (GISTO_HEIGHT * times[i]) / maxTime);
  }
};
