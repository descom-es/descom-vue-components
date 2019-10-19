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
    }
  },
  data: () => {
    return {
      type: "calendar"
    };
  },
  methods: {
    changeDateFormat() {
      this.type = this.type === "full" ? "calendar" : "full";
    },
    showDate() {
      if (this.type === "full") {
        return this.dateInFullFormat();
      } else if (this.type === "calendar") {
        return this.dateInCalendarFormat();
      }

      return this.date;
    },
    dateInFullFormat() {
      if (this.date) {
        return moment(this.date).format(this.formatFull);
      }

      return null;
    },
    dateInCalendarFormat() {
      if (this.date) {
        return moment(this.date).calendar();
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
