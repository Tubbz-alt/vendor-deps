import GCF, { validateOptions } from '../shared/global-config';
import { deepMerge, defineReactive } from '../util';

/**
 * hack the lifeCycle
 *
 * to merge the global data into user-define data
 */
function hackPropsData() {
  const vm = this;
  if (vm.$options.name === 'vueScroll') {
    const _gfc = deepMerge(vm.$vuescrollConfig, {});
    const ops = deepMerge(GCF, _gfc);
    vm.$options.propsData.ops = vm.$options.propsData.ops || {};
    Object.keys(vm.$options.propsData.ops).forEach(key => {
      {
        defineReactive(vm.mergedOptions, key, vm.$options.propsData.ops);
      }
    });
    // from ops to mergedOptions
    deepMerge(ops, vm.mergedOptions);

    const prefix = 'padding-';
    defineReactive(vm.mergedOptions.scrollContent, 'paddPos', () => {
      return prefix + vm.mergedOptions.rail.vRail.pos;
    });
    defineReactive(vm.mergedOptions.scrollContent, 'paddValue', () => {
      return vm.mergedOptions.rail.vRail.width;
    });
  }
}
export default {
  data() {
    return {
      shouldStopRender: false,
      mergedOptions: {
        vuescroll: {},
        scrollPanel: {},
        scrollContent: {},
        rail: {},
        bar: {}
      }
    };
  },
  created() {
    hackPropsData.call(this);
    this.renderError = validateOptions(this.mergedOptions);
  }
};
