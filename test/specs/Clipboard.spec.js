import { shallow } from 'vue-test-utils'
import test from 'ava'
import Clipboard from '../../src/components/Clipboard'

test('debe mostrarse el texto en el slot', t => {
  const msg = "hola"

  const wrapper = shallow(Clipboard, {
    slots: { default: '<span>' + msg + '</span>'}
  })

  t.is(wrapper.text(), msg)
})

test('debe mostrarse el boton copy cuando pasamos por encima', t => {
  const msg = "hola"

  const wrapper = shallow(Clipboard, {
    slots: { default: '<span>' + msg + '</span>'}
  })

  const div = wrapper.find('.copy2clipboard')


  div.trigger('mouseover')

  t.truthy(wrapper.html().includes('copy2clipboard-button'))
})
