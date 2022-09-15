let ratelist: any = [];
var converted_values: any;

const convertPrice = () => {
  converted_values.map((element: any, i: number) => {
    if (element.price.unit !== 'USD') {
      //@ts-ignore
      converted_values[i].price.value =
        converted_values[i].price.value /
        ratelist[`${converted_values[i].price.unit}`];
      // console.warn(
      //   ratelist[`${converted_values[i].price.unit}`],
      //   'fghbnj',
      //   converted_values[i].price.value,
      //   converted_values[i].price.unit,
      // );
    }
  });
};
const convertMeasure = () => {
  converted_values.map((element: any, i: number) => {
    if (element.weight.unit !== 'g') {
      switch (element.weight.unit) {
        case 'Kg':
          converted_values[i].weight.value *= 1000;
        case 'pound':
          converted_values[i].weight.value *= 453.6;
      }
    }
  });
};

export const GetPrecedence = (products: any, rate: any) => {
  converted_values = products;
  var precedence: Array<number> = [];
  ratelist = rate;
  convertPrice();
  convertMeasure();
  converted_values.map(
    (ele: {price: {value: number}; weight: {value: number}}) => {
      precedence.push(ele.weight.value / ele.price.value);
    },
  );
  console.warn('Precedence', precedence);
  return precedence;
};
