const urlParams = {
  series: {
    all: "TP.DK.USD.A.YTL-TP.DK.EUR.A.YTL-TP.DK.CHF.A.YTL-TP.DK.GBP.A.YTL-TP.DK.JPY.A.YTL",
    usd: "TP.DK.USD.A.YTL",
    eur: "TP.DK.EUR.A.YTL",
    gbp: "TP.DK.GBP.A.YTL",
    jpy: "TP.DK.JPY.A.YTL",
  },
  startDate: "01-06-2024",
  endDate: "30-06-2024",
  type: "json",
};

const url = `https://evds2.tcmb.gov.tr/service/evds/\
series=${urlParams.series.usd}&\
startDate=${urlParams.startDate}&\
endDate=${urlParams.endDate}&\
type=${urlParams.type}`;

// ${urlParams.additionalFunctions}

export { url, urlParams };
