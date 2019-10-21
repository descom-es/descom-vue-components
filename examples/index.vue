<template>
  <div>
    <div>
      <h2>Copiar el texto contenido en el elemento clipboard</h2>
      <clipboard>texto a copiar</clipboard>
    </div>
    <div>
      <h2>Copiar el texto contenido en la propiedad copy</h2>
      <clipboard copy="este texto si se copia">
        este texto no es el que vas a copiar, ya que está
        declarado en la propiedad copy
      </clipboard>
    </div>
    <div>
      <h2>
        Mostrar la fecha en modo calendario, pulsa sobre ella para ver el formato completo
      </h2>
      <print-date date="2019-10-18 13:50:55"></print-date>
    </div>
    <div>
      <h2>
        Mostrar la fecha en modo desde hace, pulsa sobre ella para ver el formato completo
      </h2>
      <print-date date="2019-10-18 13:50:55" format-short="from"></print-date>
    </div>
    <div>
      <h2>
        Mostrar la fecha con diferentees formatos
      </h2>
      <print-date date="2019-10-18 13:50:55" format-short="YY MM D" format-full="YYYY MMMM D HH:mm"></print-date>
    </div>
  </div>
</template>

<script>
import {PrintDate, Clipboard} from 'descom-vue'

export default {
  components: {PrintDate, Clipboard}
}
</script>
