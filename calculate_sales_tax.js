function calculateSalesTax(salesData, taxRates) {
  var total_by_cmp = {};

  for(var data of salesData) {
    if(!total_by_cmp[data.name]) {
      total_by_cmp[data.name] = initTotal();
    }
    
    let company = total_by_cmp[data.name];
    let currSales = calculateSales(data);
    company['totalSales'] += currSales;
    company['totalTaxes'] += currSales * taxRates[data.province] 
    // console.log(this);
  }

  return total_by_cmp
}

var calculateSales = function(data_obj) {
  return data_obj.sales.reduce(((a,b) => a + b), 0)
}

var initTotal = function () {
  return {totalSales: 0, totalTaxes: 0}
}

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

console.log(calculateSalesTax(companySalesData, salesTaxRates));