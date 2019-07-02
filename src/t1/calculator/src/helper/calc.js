import isNum from './isNum';

export default function calc(state, button) {
  if (button === 'C') {
    return {
      total: null,
      nextValue: null,
      operation: null
    };
  }

  if (isNum(button)) {
    if (button === '0' && state.nextValue === '0') {
      return {};
    }

    if (state.operation) {
      if (state.nextValue) {
        return {
          nextValue: state.nextValue + button
        };
      }
    }

    if (state.nextValue) {
      const nextValue = state.nextValue === '0' ? button : state.nextValue + button;

      return {
        nextValue,
        total: null
      };
    }

    return {
      nextValue: button,
      total: null
    };
  }
}
