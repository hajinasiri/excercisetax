var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax (CSD,STR){
  var result = {};
  for( i = 0; i < CSD.length; i++){
    if(!result[CSD[i].name]){
      result[CSD[i].name] = {};
      var TS = 0;//total sales
      var TT = 0;//total tax
      for(j = 0; j < CSD[i].sales.length; j++){
        TS = TS + CSD[i].sales[j];
      }
      result[CSD[i].name].totalSales = TS;
      TT = TS * STR[CSD[i].province];
      result[CSD[i].name].totalTaxes = TT;
    }else{
      TS = 0;
      TT = 0;
      for(j = 0; j < CSD[i].sales.length; j++){
        TS = TS + CSD[i].sales[j];
      }
      result[CSD[i].name].totalSales = result[CSD[i].name].totalSales + TS;
      TT = TS * STR[CSD[i].province];
      result[CSD[i].name].totalTaxes = result[CSD[i].name].totalTaxes + TT;

    }

  }
  return result;
}

console.log(calculateSalesTax(companySalesData,salesTaxRates));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/