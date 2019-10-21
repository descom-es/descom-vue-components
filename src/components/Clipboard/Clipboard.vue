<template>
  <div
    class="copy2clipboard"
    @mouseover="showButton()"
    @mouseleave="hideButton()"
  >
    <slot></slot>
    <button v-if="showbutton" class="tooltipcb" :class="buttonClass" @click="copyToClipboard()">
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
        ></path>
      </svg>
      <span class="tooltiptext">{{ tooltip }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tooltipText: {
      type: String,
      default: "Copiar al portapapeles"
    },
    copy: {
      type: String,
      default: null
    },
    buttonClass: {
      type: String,
      default: "copy2clipboard-button"
    },
    buttonPosition: {
      type: String,
      default: 'right'
    }
  },
  data: () => {
    return {
      showbutton: false,
      tooltip: ""
    };
  },
  mounted() {
    this.tooltip = this.tooltipText;
  },
  methods: {
    showButton() {
      this.showbutton = true;
    },
    hideButton() {
      this.tooltip = this.tooltipText;

      this.showbutton = false;
    },
    copyToClipboard() {
      let textToCopy = this.copy;

      if (!textToCopy) {
        textToCopy = this.$slots.default[0].text;
      }

      navigator.clipboard.writeText(textToCopy).then(() => {
        this.tooltip = "texto copiado";
      });
    }
  }
};
</script>

<style scope>
.copy2clipboard {
  display: inline;
}

.copy2clipboard-left {
  float: left;
}

.copy2clipboard-right {
  float: right;
}

.copy2clipboard > button {
  float: left;
  border: 0px;
  padding: 0px 5px 0px 0px;
}
.copy2clipboard-button {
  background-color: #fff;
  fill: #ccc;
  color: #ccc;
  outline: none;
}

.copy2clipboard-button > svg {
  width: 0.8rem;
}

.tooltipcb {
  position: relative;
  display: inline-block;
}

.tooltipcb .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltipcb .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltipcb:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
