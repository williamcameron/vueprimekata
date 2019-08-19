import { shallowMount } from '@vue/test-utils'
import App from '../src/App.vue';

describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  }),
  test('inputNumber is set to 5 onload', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.vm.inputNumber).toEqual(5);
  }),
  test('onpage load we have question asking for input', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toContain("Please enter a number to generate multiplication table.");
  }),
  test('onpage we preload table with some data', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.html()).toContain("<td title=\"5 x 5\">25</td>");
    expect(wrapper.html()).toContain("<td title=\"11 x 5\">55</td>");
    
  }),
  test('entering input greater than 500 gives confirm box', () => {
    const wrapper = shallowMount(App)
    window.confirm = jest.fn(() => false) // click 'no'

    wrapper.vm.inputNumber = 501;
    wrapper.vm.generateTable();

    expect(window.confirm).toBeCalled() // or whatever assertions you want

  }),
  test('pressing no in confirm box doesnt load table', () => {
    const wrapper = shallowMount(App)
    window.confirm = jest.fn(() => false) // click 'no'

    wrapper.vm.inputNumber = 501;
    wrapper.vm.generateTable();

    expect(window.confirm).toBeCalled() 
    expect(wrapper.html()).not.toContain("<td title=\"503 x 3\">1509</td>")

  }),
  test('pressing yes in confirm loads table', () => {
    const wrapper = shallowMount(App);
    window.confirm = jest.fn(() => true); // click 'yes'

    wrapper.vm.inputNumber = 501;
    wrapper.vm.generateTable();

    expect(window.confirm).toBeCalled();
    expect(wrapper.html()).toContain("<td title=\"503 x 3\">1509</td>")

  })

})