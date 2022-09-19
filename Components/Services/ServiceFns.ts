const weights = ['Ounces', 'Pounds', 'ton', 'g', 'Kg', 'mg'];
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

const convertPrice = (converted_values: any, ratelist: any) => {
  converted_values.map((element: any, i: number) => {
    if (element.price.unit !== 'USD') {
      //@ts-ignore
      converted_values[i].price.value =
        (1 / ratelist[`${converted_values[i].price.unit}`]) *
        converted_values[i].price.value;
    }
  });
  return converted_values;
};
const convertMeasure = (converted_values: any) => {
  converted_values.map((element: any, i: number) => {
    if (weights.includes(element.weight.unit)) {
      //Weight
      if (element.weight.unit !== 'Kg') {
        switch (element.weight.unit) {
          case 'g':
            converted_values[i].weight.value /= 1000;
          case 'mg':
            converted_values[i].weight.value /= 1000000;
          case 'Pounds':
            converted_values[i].weight.value /= 2.205;
          case 'Ounces':
            converted_values[i].weight.value /= 35.274;
          case 'ton':
            converted_values[i].weight.value *= 907.2;
        }
      } else if (lengths.includes(element.weight.unit)) {
        //Length
        if (element.weight.unit !== 'm') {
          switch (element.weight.unit) {
            case 'ft':
              converted_values[i].weight.value /= 3.281;
            case 'in':
              converted_values[i].weight.value /= 39.37;
            case 'yd':
              converted_values[i].weight.value /= 1.094;
            case 'mi':
              converted_values[i].weight.value *= 1609;
            case 'cm':
              converted_values[i].weight.value /= 100;
            case 'km':
              converted_values[i].weight.value *= 1000;
          }
        }
      } else if (volumes.includes(element.weight.unit)) {
        //Volume
        if (element.weight.unit !== 'Liter') {
          switch (element.weight.unit) {
            case 'fl oz':
              converted_values[i].weight.value /= 33.814;
            case 'cup':
              converted_values[i].weight.value /= 4.227;
            case 'pint':
              converted_values[i].weight.value /= 2.113;
            case 'quart':
              converted_values[i].weight.value *= 0.946353;
            case 'gallon':
              converted_values[i].weight.value *= 3.785;
            case 'ml':
              converted_values[i].weight.value /= 1000;
            case 'ounce':
              converted_values[i].weight.value /= 33.814;
          }
        }
      } else if (Areas.includes(element.weight.unit)) {
        //Areas
        if (element.weight.unit !== 'sqm') {
          switch (element.weight.unit) {
            case 'sqft':
              converted_values[i].weight.value /= 10.764;
            case 'sqcm':
              converted_values[i].weight.value /= 10000;
            case 'ha':
              converted_values[i].weight.value *= 10000;
            case 'sqin':
              converted_values[i].weight.value /= 1550;
            case 'sqyd':
              converted_values[i].weight.value /= 1.196;
            case 'ac':
              converted_values[i].weight.value *= 4047;
          }
        }
      }
    }
  });
  return converted_values;
};

export const GetPrecedence = (products: any, rate: any) => {
  let ratelist: any = [];
  var converted_values: any = [];
  converted_values = products;
  var precedence: Array<number> = [];
  ratelist = rate;
  converted_values = convertPrice(converted_values, ratelist);
  converted_values = convertMeasure(converted_values);
  console.warn(converted_values);
  converted_values.map(
    (ele: {price: {value: number}; weight: {value: number}}) => {
      precedence.push(ele.price.value / ele.weight.value);
    },
  );
  console.warn('Precedence', precedence);
  return precedence;
};
