import isNum from './isNum';
import operation from './operate';

export default function calc(state, button) {
  if (button === 'C') {
    return {
      total: null,
      nextValue: null,
      operation: null
    };
  }

  if (button === '<' && state.nextValue) {
    if (state.nextValue.length === 1) {
      return {
        nextValue: null
      };
    }

    return {
      nextValue: state.nextValue.slice(0, state.nextValue.length - 1)
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
      return {
        nextValue: button
      };
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

  if (button === '.') {
    if (state.nextValue) {
      if (state.nextValue.includes('.')) {
        return {};
      }

      return {
        nextValue: state.nextValue + '.'
      };
    }
    return {
      nextValue: '0.'
    };
  }

  if (button === '=') {
    if (state.nextValue && state.operation) {
      return {
        total: operation(state.total, state.nextValue, state.operation),
        nextValue: null,
        operation: null
      };
    } else {
      return {};
    }
  }

  if (state.operation) {
    return {
      total: operation(state.total, state.nextValue, state.operation),
      nextValue: null,
      operation: null
    };
  }

  if (!state.nextValue) {
    return {
      operation: button
    };
  }

  return {
    total: state.nextValue,
    nextValue: null,
    operation: button
  };
}
