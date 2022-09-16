const weights = ['Ounces', 'Pounds', 'ton', 'g', 'kg', 'mg'];
const volumes = [
  'fl oz',
  'cup',
  'pint',
  'quart',
  'gallon',
  'Liter',
  'ml',
  'ounce',
];

const lengths = ['in', 'ft', 'yd', 'mi', 'cm', 'm', 'km'];
const Areas = ['sqft', 'sqcm', 'sqm', 'ha', 'sqin', 'sqyd', 'ac'];
const whole = [
  //Weight
  {label: 'g', value: 'g'},
  {label: 'Kg', value: 'Kg'},
  {label: 'mg', value: 'mg'},
  {label: '£', value: 'Pounds'},
  {label: '℥', value: 'Ounces'},
  {label: 't', value: 'ton'},
  //Volume
  {label: 'L', value: 'Liter'},
  {label: 'ml', value: 'ml'},
  {label: 'Ounce', value: 'ounce'},
  {label: 'fl oz', value: 'fl oz'},
  {label: 'cup', value: 'cup'},
  {label: 'pt', value: 'pint'},
  {label: 'qt', value: 'quart'},
  {label: 'gal', value: 'gallon'},
  //length
  {label: 'in', value: 'in'},
  {label: 'cm', value: 'cm'},
  {label: 'm', value: 'm'},
  {label: 'ft', value: 'ft'},
  {label: 'yd', value: 'yd'},
  {label: 'mi', value: 'mi'},
  {label: 'km', value: 'km'},
  //Area
  {label: 'sqft', value: 'sqft'},
  {label: 'sqcm', value: 'sqcm'},
  {label: 'sqm', value: 'sqm'},
  {label: 'ha', value: 'ha'},
  {label: 'sqin', value: 'sqin'},
  {label: 'sqyd', value: 'sqyd'},
  {label: 'ac', value: 'ac'},
];
const weightmeasure = [
  //Weight
  {label: 'g', value: 'g'},
  {label: 'Kg', value: 'Kg'},
  {label: 'mg', value: 'mg'},
  {label: '£', value: 'Pounds'},
  {label: '℥', value: 'Ounces'},
  {label: 't', value: 'ton'},
];
const volumemeasure = [
  //Volume
  {label: 'L', value: 'Liter'},
  {label: 'ml', value: 'ml'},
  {label: 'Ounce', value: 'ounce'},
  {label: 'fl oz', value: 'fl oz'},
  {label: 'cup', value: 'cup'},
  {label: 'pt', value: 'pint'},
  {label: 'qt', value: 'quart'},
  {label: 'gal', value: 'gallon'},
];
const lengthmeasure = [
  //length
  {label: 'in', value: 'in'},
  {label: 'cm', value: 'cm'},
  {label: 'm', value: 'm'},
  {label: 'ft', value: 'ft'},
  {label: 'yd', value: 'yd'},
  {label: 'mi', value: 'mi'},
  {label: 'km', value: 'km'},
];
const Areameasure = [
  //Area
  {label: 'sqft', value: 'sqft'},
  {label: 'sqcm', value: 'sqcm'},
  {label: 'sqm', value: 'sqm'},
  {label: 'ha', value: 'ha'},
  {label: 'sqin', value: 'sqin'},
  {label: 'sqyd', value: 'sqyd'},
  {label: 'ac', value: 'ac'},
];

const convertPrice = (converted_values: any, ratelist: any) => {
  converted_values.map((element: any, i: number) => {
    if (element.price.unit !== 'USD') {
      //@ts-ignore
      converted_values[i].price.value = (
        (ratelist['USD'] / ratelist[`${converted_values[i].price.unit}`]) *
        converted_values[i].price.value
      ).toFixed(2);
    }
  });
};
const convertMeasure = (converted_values: any) => {
  converted_values.map((element: any, i: number) => {
    if (weights.includes(element.weight.unit)) {
      if (element.weight.unit !== 'g') {
        switch (element.weight.unit) {
          case 'Kg':
            converted_values[i].weight.value *= 1000;
          case 'pound':
            converted_values[i].weight.value *= 453.6;
        }
      } else if (lengths.includes(element.weight.unit)) {
        switch (element.weight.unit) {
        }
      } else if (volumes.includes(element.weight.unit)) {
        switch (element.weight.unit) {
        }
      } else if (Areas.includes(element.weight.unit)) {
        switch (element.weight.unit) {
        }
      }
    }
  });
};

export const GetPrecedence = (products: any, rate: any) => {
  let ratelist: any = [];
  var converted_values: any = [];
  converted_values = products;
  var precedence: Array<number> = [];
  ratelist = rate;
  convertPrice(converted_values, ratelist);
  convertMeasure(converted_values);
  console.warn(converted_values);

  converted_values.map(
    (ele: {price: {value: number}; weight: {value: number}}) => {
      precedence.push(ele.weight.value / ele.price.value);
    },
  );
  console.warn('Precedence', precedence);
  return precedence;
};
