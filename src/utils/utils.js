//Calculates an average value of the array with Reduce method
export const average = function (arr) {
  // acc – accumulator, i - index, arr - array
  const length = arr.length;
  const average = arr.reduce((acc, item, i) => acc + item / length, 0);

  return average;
};

// Capitalize the first letter
export const capitalize = function (str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// The debounce decorator is a function that is used to limit the number of times
// a function can be called within a specified time period.
// It is often used in scenarios where a function is called frequently, such as in event handlers,
// and you want to ensure that the function is only called once after a certain period of inactivity.

// - The debounce function takes three parameters: callback, wait, and timeoutId.
// – When the decorated function is called, it sets up a timeout using setTimeout with the specified wait time.
// – If the decorated function is called again before the timeout expires, the previous timeout is cleared using clearTimeout and a new timeout is set.
// – Once the timeout expires, the callback function is called with the arguments passed to the decorated function.
// – The timeoutId parameter is used to keep track of the timeout ID so that it can be cleared if the decorated function is called again before the timeout expires.
export const debounce = function (callback, wait, timeoutId = null) {
  (...args) => {
    window.clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

// Format the date to a string
export const formatDate = function (date) {
  const formatter = new Intl.DateTimeFormatOptions('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return formatter.format(date).toLocaleString('ru', options);
};

// Generates random ID from letters (4 by default)
export const generateId = function (len = 4) {
  // prettier-ignore
  const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return sample(characters, len).join('');
};

// Calculates a maximum value in array
export const max = function (arr) {
  const maximum = arr.reduce((acc, mov) => (acc > mov ? acc : mov), arr[0]);

  return maximum;
};

// Generates a random value between min and max
export const random = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Generates the array of numbers or letters.
// If will be one number, generates array from 0 to this number.
/* eslint-disable */
export const range = function (start, end, step) {
  let range = [];
  let typeofStart = typeof start;
  let typeofEnd = typeof end;

  if (step === 0) {
    throw TypeError('Step cannot be zero.');
  }

  if (typeof end === 'undefined' && typeof 'step' === 'undefined') {
    end = start;
    start = 0;
    typeofStart = typeof start;
    typeofEnd = typeof end;
  }

  if (typeofStart == 'undefined' || typeofEnd == 'undefined') {
    throw TypeError('Must pass start and end arguments.');
  } else if (typeofStart != typeofEnd) {
    throw TypeError('Start and end arguments must be of same type.');
  }

  typeof step == 'undefined' && (step = 1);

  if (end < start) {
    step = -step;
  }

  if (typeofStart == 'number') {
    while (step > 0 ? end >= start : end <= start) {
      range.push(start);
      start += step;
    }
  } else if (typeofStart == 'string') {
    if (start.length != 1 || end.length != 1) {
      throw TypeError('Only strings with one character are supported.');
    }

    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start));
      start += step;
    }
  } else {
    throw TypeError('Only string and number types are supported');
  }

  return range;
};

// Rounds the number to the *places* decimal point
export const roundTo = function (number, places = 0) {
  return Math.round(number * 10 ** places) / 10 ** places;
};

// Generates an *output* array with *len* length with random values from initial *arr* array
export const sample = function (arr, len = 1) {
  let output = [];
  for (let i = 0; i < len; i++) {
    output.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  return output;
};

export const sum = (arr) => arr.reduce((sum, value) => sum + value, 0);

// The throttle function is a utility function that limits the number
// of times a function can be called within a specified time window.
// It is commonly used to control the frequency of expensive
// or time-consuming operations, such as event handlers or API requests.
export const throttle = function (func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
