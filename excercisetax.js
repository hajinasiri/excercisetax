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

// function calculateSalesTax (CSD,STR){
//   result = {};
//   for( i = 0; i < CSD.length; i++){
//     if(!result[CSD.name]){
//       result[CSD.name].totalSales = 0;
//       result[CSD.name].totalTaxes = 0;
//     }

//   }
//   return result;
// }

// console.log(calculateSalesTax(salesTaxRates,companySalesData));