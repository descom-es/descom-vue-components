import { mount } from 'vue-test-utils'
import test from 'ava'
import PrintDate from '../../src/components/PrintDate'
import moment from 'moment'

moment.locale('es')

test('mostrar fecha en modo calendario por defecto', t => {
  const date = '2019-10-18 13:20:30'

  const wrapper = mount(PrintDate, {
    propsData: {
      date: date
    }
  })

  t.is(wrapper.text(), moment(date).calendar())
})


test('mostrar fecha en modo completo cuando cliqueamos', t => {
  const date = '2019-10-18 13:20:30'

  const wrapper = mount(PrintDate, {
    propsData: {
      date: date,
      format: 'D MMMM YYYY HH:mm'
    }
  })

  const div = wrapper.find('.date')

  div.trigger('click')

  t.is(wrapper.text(), moment(date).format('D MMMM YYYY HH:mm'))

  div.trigger('click')

  t.is(wrapper.text(), moment(date).calendar())
})
