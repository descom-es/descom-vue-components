<template>
  <div class="date" @click="changeDateFormat">{{ showDate() }}</div>
</template>

<script>
import moment from "moment";

moment.locale("es");

export default {
  props: {
    date: {
      type: [String, Object],
      default: null,
      required: true
    },
    formatFull: {
      type: String,
      default: "D MMMM YYYY HH:mm"
    },
    formatShort: {
      type: String,
      default: 'calendar',
      validator: (value) => {
        if (['calendar', 'from'].indexOf(value) !== -1) {
          return true;
        }

        return moment('2019-10-01 18:30:00', DATE_FORMAT).format(DATE_FORMAT) === '2019-10-01 18:30:00'
      }
    }
  },
  data: () => {
    return {
      type: "short"
    };
  },
  methods: {
    changeDateFormat() {
      this.type = this.type === "full" ? "short" : "full";
    },
    showDate() {
      if (this.type === "full") {
        return this.dateInFullFormat();
      } else if (this.type === "short") {
        return this.dateInShortFormat();
      }

      return this.date;
    },
    dateInFullFormat() {
      if (this.date) {
        return moment(this.date).format(this.formatFull);
      }

      return null;
    },
    dateInShortFormat() {
      if (this.date) {
        if (this.formatShort === 'calendar') {
          return moment(this.date).calendar();
        } else if (this.formatShort === 'from') {
          return moment(this.date).fromNow();
        }

      }

      return null;
    }
  }
};
</script>

<style scope>
.date {
  display: inline;
}

.date:hover {
  cursor: pointer;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-color: lightgray;
}
</style>
