import { shallow } from '@vue/test-utils'
import WelcomeMessage from '../../src/components/HelloComponent'

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'tester'

    const wrapper = shallow(WelcomeMessage, {
      propsData: { name }
    })

    expect(wrapper.text()).toBe('Hello tester!')
  })
})

