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
      return this.filters[this.selectedFilter];
    }
  },
  methods: {
    activateFilter: function(name) {
      if (this.selectedFilter === name) {
        this.selectedFilter = null
      } else {
        this.selectedFilter = name;
      }
    }
  }
})

