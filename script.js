var penalties = [
  {
    name: 'Team time-out',
    image: 'http://www.iwearmanyhats.com/gifs/1.7.2-team-timeout.gif',
    penalty: 'false'
  },
  {
    name: 'Official time-out',
    image: 'http://www.iwearmanyhats.com/gifs/1.7.4-official-timeout.gif',
    penalty: 'false'
  },
  {
    name: 'Lead jammer',
    image: 'http://www.iwearmanyhats.com/gifs/2.4.1.1-lead-jammer.gif',
    penalty: 'false'
  },
  {
    name: 'Not lead jammer',
    image: 'http://www.iwearmanyhats.com/gifs/2.4.2.3-not-lead-jammer.gif',
    penalty: 'false'
  },
  {
    name: 'Pack is here',
    image: 'http://www.iwearmanyhats.com/gifs/3.1.1-pack-is-here.gif',
    penalty: 'false'
  },
  {
    name: 'No pack',
    image: 'http://www.iwearmanyhats.com/gifs/3.1.2-no-pack.gif',
    penalty: 'false'
  },
  {
    name: 'Jammer lap point',
    image: 'http://www.iwearmanyhats.com/gifs/7.2.7-jammer-lap-point.gif',
    penalty: 'false'
  },
  {
    name: 'Return to your bench',
    image: 'http://www.iwearmanyhats.com/gifs/ahs-return-to-bench.gif',
    penalty: 'false'
  },
  {
    name: 'Return to track',
    image: 'http://www.iwearmanyhats.com/gifs/ahs-return-to-track.gif',
    penalty: 'false'
  },
  {
    name: 'Skate around',
    image: 'http://www.iwearmanyhats.com/gifs/ahs-skate-around.gif',
    penalty: 'false'
  },
  {
    name: 'Back block',
    image: 'http://www.iwearmanyhats.com/gifs/5.1-blocking-to-back.gif',
    nso: 'B'
  }, {
    name: 'Blocking with the head',
    image: 'http://www.iwearmanyhats.com/gifs/5.6-blocking-with-head.gif',
    nso: 'H'
  }, {
    name: 'Cutting',
    image: 'http://www.iwearmanyhats.com/gifs/5.11-cutting.gif',
    nso: 'X'
  }, {
    name: 'Stopped block',
    image: 'http://www.iwearmanyhats.com/gifs/5.9-direction-of-game.gif',
    nso: 'C'
  }, {
    name: 'Clockwise block',
    image: 'http://www.iwearmanyhats.com/gifs/5.9-direction-of-game.gif',
    nso: 'C'
  }, {
    name: 'Stopped assist',
    image: 'http://www.iwearmanyhats.com/gifs/5.9-direction-of-game.gif',
    nso: 'C'
  }, {
    name: 'Clockwise assist',
    image: 'http://www.iwearmanyhats.com/gifs/5.9-direction-of-game.gif',
    nso: 'C'
  }, {
    name: 'Elbows',
    image: 'http://www.iwearmanyhats.com/gifs/5.4-elbows.gif',
    nso: 'E'
  }, {
    name: 'Forarms',
    image: 'http://www.iwearmanyhats.com/gifs/5.5-forearms.gif',
    nso: 'F'
  }, {
    name: 'High block',
    image: 'http://www.iwearmanyhats.com/gifs/5.2-high-block.gif',
    nso: 'A'
  }, {
    name: 'Failure to yeild',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Illegal positioning',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Penalty box violation',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Equiptment violation',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Too many skaters',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Uniform violation',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Illegal call-off',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Star pass violation',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Illegal re-entry',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Bench staff violation',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Interference',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Stalling',
    image: 'http://www.iwearmanyhats.com/gifs/5.13-illegal-procedures-slow.gif',
    nso: 'I'
  }, {
    name: 'Low block',
    image: 'http://www.iwearmanyhats.com/gifs/5.3-low-block.gif',
    nso: 'L'
  }, {
    name: 'Multiplayer block',
    image: 'http://www.iwearmanyhats.com/gifs/5.7-multiplayer.gif',
    nso: 'M'
  }, {
    name: 'Out of bounds block',
    image: 'http://www.iwearmanyhats.com/gifs/5.8-out-of-bounds-engagement.gif',
    nso: 'O'
  }, {
    name: 'Out of bounds assist',
    image: 'http://www.iwearmanyhats.com/gifs/5.8-out-of-bounds-engagement.gif',
    nso: 'O'
  }, {
    name: 'Failure to return',
    image: 'http://www.iwearmanyhats.com/gifs/5.10-out-of-play.gif',
    nso: 'P'
  }, {
    name: 'Failure to reform',
    image: 'http://www.iwearmanyhats.com/gifs/5.10-out-of-play.gif',
    nso: 'P'
  }, {
    name: 'Illegal return',
    image: 'http://www.iwearmanyhats.com/gifs/5.10-out-of-play.gif',
    nso: 'P'
  }, {
    name: 'Out of play block',
    image: 'http://www.iwearmanyhats.com/gifs/5.10-out-of-play.gif',
    nso: 'P'
  }, {
    name: 'Destroying the pack',
    image: 'http://www.iwearmanyhats.com/gifs/5.10-out-of-play.gif',
    nso: 'P'
  }, {
    name: 'Out of play assist',
    image: 'http://www.iwearmanyhats.com/gifs/5.10-out-of-play.gif',
    nso: 'P'
  }, {
    name: 'Skaing out of bounds',
    image: 'http://www.iwearmanyhats.com/gifs/5.12-skating-oob.gif',
    nso: 'S'
  }, {
    name: 'Insubordination',
    image: 'http://www.iwearmanyhats.com/gifs/5.14-insubordination.gif',
    nso: 'N'
  }, {
    name: 'Delay of game',
    image: 'http://www.iwearmanyhats.com/gifs/5.15-delay-of-game2.gif',
    nso: 'Z'
  }, {
    name: 'Gross misconduct',
    image: 'http://www.iwearmanyhats.com/gifs/5.16-gross-misconduct.gif',
    nso: 'G'
  },
  {
    name: 'Misconduct',
    image: 'http://www.iwearmanyhats.com/gifs/5.16-misconduct.gif',
    nso: 'G'
  }
];

var numberWords = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

var colors = [
  'white',
  'black',
  'red',
  'pink',
  'purple',
  'green',
  'yellow',
  'orange'
];

var timer;

var randomize = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getNumber = function() {
  var number = randomize(0,9999),
      trimmer = randomize(0,9);

  if (trimmer < 3) {
    number = number.toString().substring(0,1);
  }
  else if (trimmer < 6) {
    number = number.toString().substring(0,2);
  }
  else if (trimmer < 8) {
    number = number.toString().substring(0,3);
  }
  return number;
};

var getPenalty = function() {
  var index,
      $container = $('#container'),
      $penality = $('.js-string'),
      $color = $('.js-color'),
      $number = $('.js-number'),
      $image = $('.js-image'),
      $verbal = $('.js-verbal'),
      $nso = $('.js-nso'),
      rosterNumber = getNumber(),
      penaltyNumber = randomize(0,penalties.length-1),
      numbers = rosterNumber.toString().split(""),
      colorNumber = $('.js-monochrome').is(':checked') ? randomize(0,1) : randomize(0,colors.length-1),
      words = colors[colorNumber] + ', ';

  if ($('.js-penalty-only').is(':checked') && penalties[penaltyNumber].penalty === 'false') {
    init();
    return;
  }
  $container.addClass('flash').delay(125).queue(function(){
    if (penalties[penaltyNumber].penalty === 'false') {
      $penality.html(penalties[penaltyNumber].name);
      $number.html('&nbsp;');
      $nso.html('&nbsp;');
      $verbal.html('&nbsp;');
      $color.removeClass().addClass('js-color');
      $image.html('<img src="' + penalties[penaltyNumber].image + '">');
    } else {
      $penality.html(penalties[penaltyNumber].name);
      $number.html(rosterNumber);
      $color.removeClass().addClass('js-color ' + colors[colorNumber]);
      $image.html('<img src="' + penalties[penaltyNumber].image + '">');
      $nso.html('NSO code: ' + penalties[penaltyNumber].nso);
      for (index = 0; index < numbers.length; ++index) {
        words = words + " " + numberWords[numbers[index]];
      }
      words = words + ", " + penalties[penaltyNumber].name.toLowerCase();
      $verbal.html(words);
    }
    $container.removeClass('flash').dequeue();
  });
};

var init = function() {
  getPenalty();
};

$(function(){
  $('.js-autorefresh, .js-autorefresh-interval').change(function(e) {
    var checked = $('.js-autorefresh').is(':checked'),
        interval = $('.js-autorefresh-interval option:selected').val(),
        $button = $('.js-refresh');
    clearInterval(timer);
    if (checked) {
      timer = setInterval(function(){ init(); }, interval * 1000);
      $button.addClass('hidden');
    } else {
      $button.removeClass('hidden');
    }
  });

  $('.js-show-image, .js-show-verbal, .js-show-nso').change(function() {
    $('.'+$(this).attr('data-toggle')).toggleClass('hidden');
  });

  $('.js-refresh').click(function(e) {
    e.preventDefault();
    init();
  });
});
