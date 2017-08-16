$(document).ready(function() {

  new Vue({
    el: '#statements',
    data: function() {
      return {
        selectedFilter: null,
        filters: {
          yellow: 'Z rumeno barvo označujemo stavke, ki so v nikalni obliki, ter nepomembne informacije, brez katerih bi zgodba še vedno “stala”.',
          green: 'Z zeleno barvo označujemo osebe v izjavi pa tudi relevantne spremembe jezika. V drugem primeru s puščico označimo besede, ki so v medsebojni relaciji.',
          blue: 'Z modro barvo označujemo izraze zapuščanja lokacije z glagoli, ki pomensko ustrezajo angl. besedi “leave”: zapustiti, oditi, odpraviti se itd. Poleg tega z modro barvo označujemo še vsakršno pojasnjevanje oz. navajanje razlogov (ker, zato, da bi, torej ipd.).',
          violet: 'Z vijoličasto barvo označujemo needninske zaimke v 1. osebi (mi, midva) ter navajanje točnega časa, kar dogajanje, ki je opisano v izjavi, umešča v objektiven časovni okvir.',
          orange: 'Z oranžno barvo označujemo navajanje vsakršne komunikacije (povedati, reči, odgovoriti …).',
          pink: 'Z roza barvo označujemo manjkajoč oz. relativen čas (npr. potem, zatem, prej, nato, takrat ipd.).',
          circle: 'Z obkroževanjem označujemo osebne zaimke in osebne glagolske oblike.',
          underline: 'S podčrtovanjem označujemo nepravilno uporabo časa.',
          connection: 'S puščicami povežemo besede, ki predstavljajo spremembe jezika. Slednje označujemo z zeleno barvo.'
        },
      }
    },
    computed: {
      selectedFilterDescription: function() {
        if (this.selectedFilter) {
          return this.filters[this.selectedFilter];
        } else {
          return 'Za razlago scan parametrov klikni na zgornji barvni označevalec.';
        }
      }
    },
    methods: {
      activateFilter: function(name) {
        if (this.selectedFilter === name) {
          this.selectedFilter = null
          $('.arrow').removeClass('hidden');
        } else {
          this.selectedFilter = name;
          if (name === 'connection') {
            $('.arrow').removeClass('hidden');
          } else {
            $('.arrow').addClass('hidden');
          }
        }
      },
      drawConnections: function() {
        var pairs = [];
        $.each($('.connection'), function(i, e) {
          if (0 < i) {
            pairs.push([$('.connection')[i -1], e]);
          }
        });
        pairs.forEach(function(e, i) {
          console.log(i, e);
          if ($('.arrow').length < pairs.length) {
            $('body').append('<div class="arrow" id="arrow' + i + '"></div>');
          }

          if ($(e[0]).offset().left < $(e[1]).offset().left) {
            $('#arrow' + i).addClass('right');
            $('#arrow' + i).css({
              top: $(e[0]).offset().top + 10,
              left: $(e[0]).offset().left + 10,
              bottom: ($(window).height() - ($(e[1]).offset().top + $(e[1]).outerHeight())) + 25,
              right: ($(window).width() - ($(e[1]).offset().left + $(e[1]).outerWidth())) + 30,
            });
          } else {
            $('#arrow' + i).addClass('left');
            $('#arrow' + i).css({
              top: $(e[0]).offset().top + 10,
              left: $(e[1]).offset().left + 10,
              bottom: ($(window).height() - ($(e[1]).offset().top + $(e[1]).outerHeight())) + 25,
              right: ($(window).width() - ($(e[0]).offset().left + $(e[0]).outerWidth())) + 10,
            });
          }
        });
      },
    },
    mounted() {
      // WARNING! THIS IS A HACK
      var _this = this;
      window.setTimeout(function() {
        _this.drawConnections();
      }, 100);
      $(window).on('resize', function() {
        _this.drawConnections();
      });
    }
  });

});