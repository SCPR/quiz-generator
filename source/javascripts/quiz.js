(function ($) {
  // make sure to attach json object 'var input' with quiz data

  //variables
  var answer,
      qnumber,
      score = 0,
      score_north = 0,
      score_jeff = 0,
      score_cen = 0,
      score_silicon = 0,
      score_west = 0,
      score_south = 0,
      currentQuestion = 0;

  // social media icons
  var facebook = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' style='height: 2.4em;'><circle cx='8' cy='8' r='8' class='shape-1'></circle><path fill='#fff' d='M8.5 3.7h1.4v1.6h-1c-.2 0-.4.1-.4.4v.9h1.4l-.1 1.7h-1.3v4.5h-1.9v-4.5h-.9v-1.7h.9v-1c0-.7.4-1.9 1.9-1.9z' class='shape-2'></path><foreignObject width='200' height='100'><text><tspan style='color:#414141; margin-right: 20px; margin-left: 15px;''>Facebook</tspan></text></foreignObject></svg>";
  var twitter = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' style='height: 2.4em;'><circle cx='8' cy='8' r='8' class='shape-1'></circle><path fill='#fff' d='M4 4.8c1 1.2 2.5 2 4.2 2.1l-.1-.4c0-1.1.9-2 2-2 .6 0 1.1.3 1.5.6.5-.1.9-.3 1.3-.5-.2.4-.5.8-.9 1.1l1.2-.3c-.3.4-.6.8-1 1.1v.3c0 2.7-2 5.8-5.8 5.8-1.1 0-2.2-.3-3.1-.9h.5c.9 0 1.8-.3 2.5-.9-.9 0-1.6-.6-1.9-1.4h.4c.2 0 .4 0 .5-.1-.9-.2-1.6-1-1.6-2 .3.2.6.2.9.3-.6-.5-.9-1.1-.9-1.8 0-.4.1-.7.3-1z' class='shape-2'></path><foreignObject width='200' height='100'><text><tspan style='color:#414141; margin-right: 20px;''>Twitter</tspan></text></foreignObject></svg>";
  var google = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' style='height: 2.4em;'><circle cx='8' cy='8' r='8' class='shape-1'></circle><path fill='#fff' d='M8.6 4.3l.6-.4c.1-.1.1-.1.1-.2s-.1-.1-.2-.1h-2.7c-.3 0-.6.1-.9.2-1 .3-1.6 1.1-1.6 2 0 1.2.9 2.1 2.2 2.1-.1 0-.1.1-.1.2 0 .2 0 .4.1.5-1.1 0-2.2.6-2.6 1.4-.1.2-.2.4-.2.7 0 .2.1.4.2.6.3.5.8.8 1.5 1 .4.1.8.1 1.2.1.4 0 .7 0 1.1-.1 1-.3 1.7-1.1 1.7-2 0-.8-.2-1.3-1-1.8-.3-.2-.6-.6-.6-.7 0-.2 0-.3.4-.6.5-.4.8-1 .8-1.5s-.2-1-.4-1.3h.2c.1 0 .1 0 .2-.1zm-3.3 1.3c-.1-.4 0-.8.3-1.1.1-.2.3-.2.5-.2.6 0 1.1.7 1.2 1.4.1.4 0 .8-.3 1.1-.1.2-.3.3-.5.3-.6 0-1.1-.7-1.2-1.5zm2.6 4.6v.2c0 .8-.6 1.2-1.7 1.2-.9 0-1.5-.5-1.5-1.2 0-.6.8-1.2 1.7-1.2.2 0 .4 0 .6.1l.2.1c.4.4.7.5.7.8z' class='shape-2'></path><path fill='#fff' d='M13.3 7.8c0 .1-.1.2-.2.2h-1.5v1.5c0 .1-.1.2-.2.2h-.4c-.1 0-.2-.1-.2-.2v-1.5h-1.6c-.1 0-.2-.1-.2-.2v-.4c0-.1.1-.2.2-.2h1.5v-1.5c0-.1.1-.2.2-.2h.4c.1 0 .2.1.2.2v1.5h1.5c.1 0 .2.1.2.2v.4z' class='shape-3'></path><foreignObject width='200' height='100'><text><tspan style='color:#414141; margin-right: 20px;''>Google+</tspan></text></foreignObject></svg>";

  // twitter links
  var account;
  var voxdotcom = 'voxdotcom';
  var theverge = 'verge';
  var polygon = 'polygon';
  var sbnation = 'SBNation';
  var eater = 'Eater';
  var racked = 'Racked';

  var pageScroll = function(target) {
    $('html,body').animate({
       scrollTop: $(target).offset().top - 30
    }, 1000);
  };

  // write questions and answers on html
  var buildQuiz = function (input) {
    if (currentQuestion != 0) {
      pageScroll('.quiz-container');
    }
    qnumber = currentQuestion + 1;
    $(".quiz-container").html("<div class='progress'>Question " + qnumber + "&nbsp;of&nbsp;" + input.length + "</div><div class='qq-question'><div class='qq-description'>" + input[currentQuestion].description + "</div><br><div class='question'>" + input[currentQuestion].question + "</div></div>" +
      "<ol class='answers'><li id='option-a'>" + input[currentQuestion].a + "</li>" +
      "<li id='option-b'>" + input[currentQuestion].b + "</li>" +
      "<li id='option-c'>" + input[currentQuestion].c + "</li>" +
      "<li id='option-d'>" + input[currentQuestion].d + "</li>" +
      "<li id='option-e'>" + input[currentQuestion].e + "</li>" +
      "<li id='option-f'>" + input[currentQuestion].f + "</li></ol>" +
      "<div class='answer'></div>");
      //"<button class='qq-button hint'>Need a hint?</button>" +
      if (currentQuestion === (input.length-1)) {
        $(".answer").append("<button class='qq-button check-score'>See Result</button>");
        $('.check-score').on('click', finalScore);
        }
        else { 
        $(".answer").append("<button class='qq-button q" + qnumber + "'>Next</button>");
        $('.q' + qnumber).on('click', nextQuestion[qnumber]);
        }
      
    selectAnswer();
    //$('.hint').on('click', showHint);
    //$('.submit-answer').on('click', checkAnswer);
    //$('.next').on('click', nextQuestion);
    trackEvent('q' + qnumber + '-displayed', 'Q' + qnumber + ' displayed');
  }

  var buildExtraQuiz = function () {
     $(".quiz-container").html("<div class='progress'>Extra Question &nbsp;of&nbsp;</div><div class='qq-question'><div class='qq-description'>Description here.</div><br><div class='question'>Question here.</div></div>" +
      "<ol class='answers'><li id='option-a'>Answer 1</li>" +
      "<li id='option-b'>Answer 2</li>" +
      "<li id='option-c'>Answer 3</li>" +
      "<li id='option-d'>Answer 4</li>" +
      "<li id='option-e'>Answer 5</li>" +
      "<li id='option-f'>Answer 6</li></ol>" +
      "<div class='answer'></div>");
      //"<button class='qq-button hint'>Need a hint?</button>" +
        $(".answer").append("<button class='qq-button check-score'>See Result</button>");
        $('.check-score').on('click', finalScore);
    selectAnswer();
  }

  // shows (1) out of (3) questinos
  var displayProgress = function () {
    $('.progress').html("<div class='progress'>Question " + qnumber + "&nbsp;of&nbsp;" + input.length + "</div>");
  }

  // style changes when user selects answers
  var selectAnswer = function () {
    $("li").click(function() {
      trackEvent(
        'q' + qnumber + '-selected-' + this.id,
        'Q' + qnumber + ' selected ' + this.id);
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
      //console.log(this);
      $(".next").addClass("submit-highlight").fadeIn();
    });
  }

  // show hint
  /* var showHint = function () {
    trackEvent(
      'q' + qnumber + '-hint-showed',
      'Q' + qnumber + ' hint showed');
    $(".answer").html(input[currentQuestion].hint);
  } */

  // check answer by comparing selected html and correct answer from input
  var checkAnswer = {

    "1" : function () {
    if ($(".selected").length > 0) {
      $('li').off('click');
      $(".hint").off('click');
      answer = $(".selected").attr('id');
      //console.log(answer);
      if (answer == 'option-a') {
        score_cen++;
        displayProgress();
      } else if (answer == 'option-b') {
        score_jeff++;
        displayProgress();
      } 
      else if (answer == 'option-c') {
        score_west++;
        displayProgress();
      } 
      else if (answer == 'option-d') {
        score_south++;
        displayProgress();
      } 
      else if (answer == 'option-e') {
        score_north++;
        displayProgress();
      } 
      else if (answer == 'option-f') {
        score_silicon++;
        displayProgress();
      };

      console.log(score_cen, score_jeff, score_west, score_north, score_south, score_silicon);
    
    // There's no real number bigger than plus Infinity
     /* var lowest = Number.POSITIVE_INFINITY;
      var highest = Number.NEGATIVE_INFINITY;
      var tmp;
      for (var i=compareScore.length-1; i>=0; i--) {
          tmp = compareScore[i].Cost;
          if (tmp < lowest) lowest = tmp;
          if (tmp > highest) highest = tmp;
      };
      console.log(highest, lowest); */

      /* if (currentQuestion != (input.length-1)) {
        $(".answer").append("<button class='qq-button next'>Next</button>");
        $('.next').on('click', nextQuestion);
      } else {
        $(".answer").append("<button class='qq-button check-score'>See Final Score</button>");
        $('.check-score').on('click', finalScore);
      } */
    }
  },

  "2" : function () {
    if ($(".selected").length > 0) {
      $('li').off('click');
      $(".hint").off('click');
      answer = $(".selected").attr('id');
      if (answer == 'option-a') {
        score_silicon++;
        displayProgress();
      } else if (answer == 'option-b') {
        score_west++;
        displayProgress();
      } 
      else if (answer == 'option-c') {
        score_north++;
        displayProgress();
      } 
      else if (answer == 'option-d') {
        score_jeff++;
        score_cen++;
        displayProgress();
      } 
      else if (answer == 'option-e') {
        score_south++;
        displayProgress();
      };

      console.log(score_cen, score_jeff, score_west, score_north, score_south, score_silicon);

    }
  },

  "3" : function () {
    if ($(".selected").length > 0) {
      $('li').off('click');
      $(".hint").off('click');
      answer = $(".selected").attr('id');
      if (answer == 'option-a') {
        score_south++;
        displayProgress();
      } else if (answer == 'option-b') {
        score_cen++;
        score_north++;
        displayProgress();
      } 
      else if (answer == 'option-c') {
        score_silicon++;
        displayProgress();
      } 
      else if (answer == 'option-d') {
        score_west++;
        displayProgress();
      } 
      else if (answer == 'option-e') {
        score_jeff++;
        displayProgress();
      };

      console.log(score_cen, score_jeff, score_west, score_north, score_south, score_silicon);

    }
  },

    "3" : function () {
    if ($(".selected").length > 0) {
      $('li').off('click');
      $(".hint").off('click');
      answer = $(".selected").attr('id');
      if (answer == 'option-a') {
        score_south++;
        displayProgress();
      } else if (answer == 'option-b') {
        score_cen++;
        score_north++;
        displayProgress();
      } 
      else if (answer == 'option-c') {
        score_silicon++;
        displayProgress();
      } 
      else if (answer == 'option-d') {
        score_west++;
        displayProgress();
      } 
      else if (answer == 'option-e') {
        score_jeff++;
        displayProgress();
      };

      console.log(score_cen, score_jeff, score_west, score_north, score_south, score_silicon);

    }
  },

    "4" : function () {
    if ($(".selected").length > 0) {
      $('li').off('click');
      $(".hint").off('click');
      answer = $(".selected").attr('id');
      if (answer == 'option-a') {
        score_jeff++;
        displayProgress();
      } else if (answer == 'option-b') {
        score_silicon++;
        displayProgress();
      } 
      else if (answer == 'option-c') {
        score_north++;
        score_south++;
        displayProgress();
      } 
      else if (answer == 'option-d') {
        score_west++;
        score_cen++;
        displayProgress();
      };

      console.log(score_cen, score_jeff, score_west, score_north, score_south, score_silicon);

    }
  },

    "5" : function () {
    if ($(".selected").length > 0) {
      $('li').off('click');
      $(".hint").off('click');
      answer = $(".selected").attr('id');
      if (answer == 'option-a') {
        score_north++;
        score_jeff++;
        displayProgress();
      } else if (answer == 'option-b') {
        score_silicon++;
        score_cen++;
        displayProgress();
      } 
      else if (answer == 'option-c') {
        score_south++;
        score_west++;
        displayProgress();
      };

      console.log(score_cen, score_jeff, score_west, score_north, score_south, score_silicon);

    }
  },
}

  // increment question count and built new question and answers
  /* var nextQuestion1 = function () {
    checkAnswer[1]();
    trackEvent(
      'q' + qnumber + '-next',
      'Q' + qnumber + ' clicked to next question');
    if (currentQuestion === (input.length-1)) {
      $(".answer").append("<button class='qq-button check-score'>See Result</button>");
      $('.check-score').on('click', finalScore);
      }
    else  {
      currentQuestion++;
      buildQuiz(input);
      }
  } */

  var next = function () { 
      trackEvent(
        'q' + qnumber + '-next',
        'Q' + qnumber + ' clicked to next question');
        currentQuestion++;
        buildQuiz(input);
  }

  var nextQuestion = {

    "1" : function () {
      checkAnswer[1]();
      next();
    },  

    "2" : function () {
      checkAnswer[2]();
      next();
    },  

    "3" : function () {
      checkAnswer[3]();
      next();
    },

    "4" : function () {
      checkAnswer[4]();
      next();
    },

    "5" : function () {
      checkAnswer[5]();
      next();
    },

    "6" : function () {
      checkAnswer[6]();
      next();
    },  

  };

  function trackEvent(action, label) {
    if( typeof(ga) != 'undefined' ) {
      ga('send', 'event', 'quiz', action, label);
    } else if (typeof(_gaq) != 'undefined' ){
      _gaq.push($.merge(['_trackEvent', 'quiz'], arguments));
    }
  }

  // display final score card and social media sharing
  var link = document.URL
  var finalScore = function () {

    //var max_of_array = Math.max(score1, score2, score3, score4, score5, score6);
    //console.log(max_of_array);

    var compareScore = [

      {"state": "North California", "score": score_north},
      {"state": "Jefferson", "score": score_jeff},
      {"state": "Silicon Valley", "score": score_silicon},
      {"state": "South California", "score": score_south},
      {"state": "West California", "score": score_west},
      {"state": "Central California", "score": score_cen}

    ];

    compareScore.sort(function (a, b) {
        return a.score - b.score
    });

    var min = compareScore[0].state,
    max = compareScore[compareScore.length - 1].state;

    //if (compareScore[compareScore.length - 1].score ==  compareScore[compareScore.length - 2].score)
        //{buildExtraQuiz()}

   // else {

        console.log(max);

        trackEvent(
          'scored-' + score + '-of-' + input.length,
          'Scored ' + score + ' of ' + input.length);
        trackEvent('completed', 'Quiz completed');
        switch (pub) {
          case 'vox':
            account = voxdotcom;
            break;
          case 'sbnation':
            account = sbnation;
            break;
          case 'verge':
            account = theverge;
            break;
          case 'polygon':
            account = polygon;
            break;
          case 'eater':
            account = eater;
          break;
          case 'racked':
            account = racked;
          break;
          default:
            account = 'voxproduct';
        }

        $(".quiz-container")
          .html("<div class='scorecard'><p>You belong to</p><p>" + max 
          //"<iframe scrolling='no' src='https://www.google.com/fusiontables/embedviz?q=select+col2%3E%3E1+from+1LCo9_5Pkv-i7LnoElctskeRapo1brklVPNiWgzNm&amp;viz=MAP&amp;h=false&amp;lat=37.45386207006738&amp;lng=-115.08785699999999&amp;t=1&amp;z=5&amp;l=col2%3E%3E1&amp;y=4&amp;tmplt=4&amp;hml=KML' frameborder='no' height='400' width='100%'></iframe>
          + "</p><div id='description' style='margin: 20px;'></div><div id='social-media'><ul><li><a class=\"fb-share\" href='http://www.facebook.com/sharer.php?u=" + link + "' target='_blank'>" + facebook 
          + "</a></li><li><a class=\"twitter-share\" href='http://twitter.com/home?status=I belong to " + max + " according to KPCC six California quiz!" + link + " via @" + account + "' target='_blank'>" + twitter   + "</a></li></ul></div><p>Challenge your friends!</p></div>");
              
        $('.quiz-container .fb-share').click(function() {
          trackEvent('shared-on-fb', 'Quiz shared on Facebook');
        });
        $('.quiz-container .twitter-share').click(function() {
          trackEvent('shared-on-twitter', 'Quiz shared on Twitter');
        });
        $('.quiz-container .gplus-share').click(function() {
          trackEvent('shared-on-gplus', 'Quiz shared on Google+');
        });

        loadMap();
      }

       var loadMap = function () {
            $(".quiz-container").append("<div id='map-container' style='height: 400px; width: 100%;'></div>");

            var map = L.map('map-container').setView([37.335194502529724, -119.366455078125], 6);

            L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-20v6611k/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 14,
                minZoom: 6
            }).addTo(map);

          function getColor(d) {
                return d == "Central California" ? '#800026' :
                       d == "North California"  ? '#BD0026' :
                       d == "South California"  ? '#E31A1C' :
                       d == "West California"  ? '#FC4E2A' :
                       d == "Silicon Valley"   ? '#FD8D3C' :
                                              '#FEB24C' ;
            } 

            function style(feature) {
                return {
                    fillColor: getColor(feature.properties.six_california_states_six_states_proposal),
                    weight: 1,
                    //opacity: 1,
                    color: 'black',
                    //dashArray: '3',
                    fillOpacity: 0.7
                };
            };

            geojson = L.geoJson(sixCalifornia, {style: style, onEachFeature: onEachFeature}).addTo(map);

            function highlightFeature(e) {
                var layer = e.target;

                //Loop through all the counties and see if they matche the clicked one
                var highlightedStyle = {
                    weight: 3,
                    color: '#666',
                    dashArray: '',
                    fillOpacity: 0.7,
                    fillColor: 'black'
                };

                 for (i = 0; i < sixCalifornia.features.length; i++) { 
                     if (sixCalifornia.features[i].properties.six_california_states_six_states_proposal == layer.feature.properties.six_california_states_six_states_proposal)
                        {console.log(sixCalifornia.features[i]);
                        geojson.setStyle(style);
                        this.setStyle(highlightedStyle);
                        $("#description").html(layer.feature.properties.name);
                        };
                }; 

                console.log(layer.feature);
                console.log(sixCalifornia.features);

                if (!L.Browser.ie && !L.Browser.opera) {
                    layer.bringToFront();
                }
            }

            function onEachFeature(feature, layer) {
                layer.on({
                    click: highlightFeature
                });
            }

    };

  // attach quiz and vertical-specific stylesheets
  $('head').append('<link rel="stylesheet" href="http://assets.sbnation.com.s3.amazonaws.com/features/quiz-generator/quiz.css" type="text/css" />');
  $('head').append('<link rel="stylesheet" href="stylesheets/quiz.kpcc.css" type="text/css" />');
  //$('head').append('<link rel="stylesheet" href="' + pubStylesheet + '" type="text/css" />');
  $('head').append('<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />');
  $('head').append('<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>');
  $('head').append('<script src="data/six-california.js"></script>');

  
  function unpackQuizHack() {
    var newInput = [];
    for ( var i = 0; i < input.length; i++ ) {
      newInput[i] = convertUrlinJson( input[i] );
    }
    input = newInput;
    buildQuiz(input);
  }

  function convertUrlinJson( data ) {
    $.each( data, function( key, value ) {
      if ( key == 'correct' || key == 'incorrect' ) {
        var j;
        var hexes = data[key].match(/.{1,4}/g) || [];
        var back = "";
        for( j = 0; j<hexes.length; j++ ) {
          back += String.fromCharCode( parseInt( hexes[j], 16 ) );
        }
        data[key] = back;
      }
    } );
    return data;
  }

  $(document).ready(function () {
    trackEvent('loaded', 'Quiz is loaded');
    unpackQuizHack();
  });
})(jQuery);
