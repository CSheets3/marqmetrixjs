const data = {
  objects: {
    a: {
      x: 5,
      y: 6,
      z: 7
    },
    b: {
      x: 8,
      y: 9,
      z: {
        i: 'foo',
        j: {
          i: 50,
          j: 60
        },
      },
    },
  },
  ordering: [
    {
      first: 10,
      second: 11,
    },
    {
      first: -6,
      second: 0,
    },
    'end',
  ],
};

const flattenedData = {
  'objects.a.x': 5,
  'objects.a.y': 6,
  'objects.a.z': 7,
  'objects.b.x': 8,
  'objects.b.y': 9,
  'objects.b.z.i': 'foo',
  'objects.b.z.j.i': 50,
  'objects.b.z.j.j': 60,
  'ordering[0].first': 10,
  'ordering[0].second': 11,
  'ordering[1].first': -6,
  'ordering[1].second': 0,
  'ordering[2]': 'end',
};

// START HERE
// Sorry for the lack of comments in the code

function flatObj(path, into, value) {
  for (let i in into) {
      if (into.hasOwnProperty(i)) {
          let newKey = i;
          let newVal = into[i];
          
          if (path.length > 0) {
              newKey = path + '.' + i;
          }
          
          if (typeof newVal === "object") {
              flatObj(newKey, newVal, value);
          } else {
              value[newKey] = newVal;
          }
      }
  }
}

function flatten(obj) {
  const newObj = {};
  flatObj("", obj, newObj);
  return newObj;
}

var flattened = JSON.stringify(flatten(data));
console.log(flattened);

// EXPERIMENT STUFF

 /* function flattenObject(obj){
const flattened = {}

Object.keys(obj).forEach((key) => {
  if (typeof obj[key] === 'object' && obj[key] !==null){
    Object.assign(flattened, flattenObject(obj[key]))
  } else {
    flattened[key] = obj[key]
  }
})
  console.log(flattened);
}
*/

/*
const otherData = {
  name: {
    first: 'josh',
    last: 'weather'
  },
  location: {
    state: 'Pennsylvania',
    country: 'United States'
  }
};

const someData = {
  name: 'Josh',
  last: 'weather'
}

function Test(obj){
  const flatTest = {};
	for (let [key, value] of Object.entries(obj)){
		console.log(`${key}: ${value}`);
	}
} */
