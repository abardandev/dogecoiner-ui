import { Transaction } from "../types/Transaction";
import { toLineData } from "./_data-map";

export let data: any[] = [
    {
      symbol: "BTCUSDT",
      open: "108643.02",
      high: "115465.06",
      low: "106700",
      close: "114559.4",
      volume: "18508.84624",
      date: "2025-10-20"
    },
    {
      symbol: "BTCUSDT",
      open: "114958.81",
      high: "115963.59",
      low: "103580",
      close: "108643.02",
      volume: "22663.76576",
      date: "2025-10-13"
    },
    {
      symbol: "BTCUSDT",
      open: "123482.32",
      high: "126149.99",
      low: "102292.48",
      close: "114958.81",
      volume: "28253.05286",
      date: "2025-10-06"
    },
    {
      symbol: "BTCUSDT",
      open: "112163.95",
      high: "125707.68",
      low: "111560.65",
      close: "123482.32",
      volume: "18317.9304",
      date: "2025-09-29"
    },
    {
      symbol: "BTCUSDT",
      open: "115235.44",
      high: "115379.25",
      low: "108620.07",
      close: "112163.95",
      volume: "14803.39611",
      date: "2025-09-22"
    },
    {
      symbol: "BTCUSDT",
      open: "115280",
      high: "117899.99",
      low: "114386",
      close: "115235.44",
      volume: "10763.03056",
      date: "2025-09-15"
    },
    {
      symbol: "BTCUSDT",
      open: "111137.34",
      high: "116665.63",
      low: "110621.78",
      close: "115280",
      volume: "12704.65514",
      date: "2025-09-08"
    },
    {
      symbol: "BTCUSDT",
      open: "108246.35",
      high: "113384.62",
      low: "107255",
      close: "111137.34",
      volume: "12493.53409",
      date: "2025-09-01"
    },
    {
      symbol: "BTCUSDT",
      open: "113493.59",
      high: "113667.28",
      low: "107355.98",
      close: "108246.35",
      volume: "14249.76213",
      date: "2025-08-25"
    },
    {
      symbol: "BTCUSDT",
      open: "117405.01",
      high: "117543.75",
      low: "111105.06",
      close: "113493.59",
      volume: "13619.83126",
      date: "2025-08-18"
    },
    {
      symbol: "BTCUSDT",
      open: "119294.26",
      high: "124474",
      low: "116803.99",
      close: "117405.01",
      volume: "14576.97676",
      date: "2025-08-11"
    },
    {
      symbol: "BTCUSDT",
      open: "114208.81",
      high: "119311.11",
      low: "112650.01",
      close: "119294.26",
      volume: "9260.02401",
      date: "2025-08-04"
    },
    {
      symbol: "BTCUSDT",
      open: "119415.31",
      high: "119799.99",
      low: "111931.96",
      close: "114208.81",
      volume: "12034.28163",
      date: "2025-07-28"
    },
    {
      symbol: "BTCUSDT",
      open: "117265.12",
      high: "120247.8",
      low: "114723.16",
      close: "119415.31",
      volume: "13843.58698",
      date: "2025-07-21"
    },
    {
      symbol: "BTCUSDT",
      open: "119086.65",
      high: "123217.99",
      low: "115736.92",
      close: "117265.12",
      volume: "14172.43657",
      date: "2025-07-14"
    },
    {
      symbol: "BTCUSDT",
      open: "109203.84",
      high: "119479.02",
      low: "107438.49",
      close: "119086.65",
      volume: "11379.28582",
      date: "2025-07-07"
    },
    {
      symbol: "BTCUSDT",
      open: "108356.93",
      high: "110515.81",
      low: "105100.2",
      close: "109203.84",
      volume: "8071.53265",
      date: "2025-06-30"
    },
    {
      symbol: "BTCUSDT",
      open: "100963.87",
      high: "108528.5",
      low: "99616.61",
      close: "108356.93",
      volume: "10241.64921",
      date: "2025-06-23"
    },
    {
      symbol: "BTCUSDT",
      open: "105594.02",
      high: "108948.5",
      low: "98200.01",
      close: "100963.87",
      volume: "12433.91123",
      date: "2025-06-16"
    },
    {
      symbol: "BTCUSDT",
      open: "105734",
      high: "110528.2",
      low: "102665.39",
      close: "105594.02",
      volume: "12588.26629",
      date: "2025-06-09"
    },
    {
      symbol: "BTCUSDT",
      open: "105642.93",
      high: "106793.41",
      low: "100380.01",
      close: "105734",
      volume: "11074.07886",
      date: "2025-06-02"
    },
    {
      symbol: "BTCUSDT",
      open: "109004.2",
      high: "110718",
      low: "103074.94",
      close: "105642.93",
      volume: "20165.10251",
      date: "2025-05-26"
    },
    {
      symbol: "BTCUSDT",
      open: "106454.27",
      high: "111980",
      low: "102042.01",
      close: "109004.2",
      volume: "33982.04663",
      date: "2025-05-19"
    },
    {
      symbol: "BTCUSDT",
      open: "104118.01",
      high: "106650.64",
      low: "100750.98",
      close: "106454.27",
      volume: "24641.85396",
      date: "2025-05-12"
    },
    {
      symbol: "BTCUSDT",
      open: "94277.61",
      high: "104984.57",
      low: "93388.01",
      close: "104118.01",
      volume: "26746.66235",
      date: "2025-05-05"
    },
    {
      symbol: "BTCUSDT",
      open: "93749.29",
      high: "97895.68",
      low: "92800.01",
      close: "94277.61",
      volume: "21143.56506",
      date: "2025-04-28"
    },
    {
      symbol: "BTCUSDT",
      open: "85179.25",
      high: "95749.02",
      low: "85144.76",
      close: "93749.29",
      volume: "28773.47643",
      date: "2025-04-21"
    },
    {
      symbol: "BTCUSDT",
      open: "83760",
      high: "86471.16",
      low: "83111.64",
      close: "85179.25",
      volume: "18902.0384",
      date: "2025-04-14"
    },
    {
      symbol: "BTCUSDT",
      open: "78424.51",
      high: "86099.99",
      low: "74508",
      close: "83760",
      volume: "47668.08346",
      date: "2025-04-07"
    },
    {
      symbol: "BTCUSDT",
      open: "82378.9",
      high: "88285.76",
      low: "77158",
      close: "78424.51",
      volume: "30305.16355",
      date: "2025-03-31"
    },
    {
      symbol: "BTCUSDT",
      open: "86082.49",
      high: "88765.43",
      low: "81565",
      close: "82378.9",
      volume: "22262.04763",
      date: "2025-03-24"
    },
    {
      symbol: "BTCUSDT",
      open: "82576.89",
      high: "87440.41",
      low: "81150",
      close: "86082.49",
      volume: "18609.4375",
      date: "2025-03-17"
    },
    {
      symbol: "BTCUSDT",
      open: "80734.3",
      high: "85309.71",
      low: "76606.01",
      close: "82576.89",
      volume: "31694.44199",
      date: "2025-03-10"
    },
    {
      symbol: "BTCUSDT",
      open: "94269.99",
      high: "94416.46",
      low: "80005",
      close: "80734.3",
      volume: "41819.23668",
      date: "2025-03-03"
    },
    {
      symbol: "BTCUSDT",
      open: "96258",
      high: "96500",
      low: "78262.34",
      close: "94269.99",
      volume: "51333.54546",
      date: "2025-02-24"
    },
    {
      symbol: "BTCUSDT",
      open: "96118.12",
      high: "99475",
      low: "93388.09",
      close: "96258",
      volume: "30433.37045",
      date: "2025-02-17"
    },
    {
      symbol: "BTCUSDT",
      open: "96463.49",
      high: "98826",
      low: "94088.42",
      close: "96118.12",
      volume: "28356.39909",
      date: "2025-02-10"
    },
    {
      symbol: "BTCUSDT",
      open: "97700.59",
      high: "102482.42",
      low: "91242.02",
      close: "96463.49",
      volume: "42335.49063",
      date: "2025-02-03"
    },
    {
      symbol: "BTCUSDT",
      open: "102620",
      high: "106453.45",
      low: "96151.89",
      close: "97700.59",
      volume: "36215.08716",
      date: "2025-01-27"
    },
    {
      symbol: "BTCUSDT",
      open: "101313.56",
      high: "109574.99",
      low: "99550",
      close: "102620",
      volume: "49549.29415",
      date: "2025-01-20"
    },
    {
      symbol: "BTCUSDT",
      open: "94544.99",
      high: "106422.43",
      low: "89257.5",
      close: "101313.56",
      volume: "44138.30546",
      date: "2025-01-13"
    },
    {
      symbol: "BTCUSDT",
      open: "98363.61",
      high: "102700.03",
      low: "91208.85",
      close: "94544.99",
      volume: "31807.27544352",
      date: "2025-01-06"
    },
    {
      symbol: "BTCUSDT",
      open: "93738.2",
      high: "98976.91",
      low: "91537.9",
      close: "98363.61",
      volume: "21797.31013",
      date: "2024-12-30"
    },
    {
      symbol: "BTCUSDT",
      open: "95186.28",
      high: "99963.7",
      low: "92522.01",
      close: "93738.2",
      volume: "26850.56435",
      date: "2024-12-23"
    },
    {
      symbol: "BTCUSDT",
      open: "104463.82",
      high: "108340",
      low: "92284.01",
      close: "95186.28",
      volume: "54622.86471",
      date: "2024-12-16"
    },
    {
      symbol: "BTCUSDT",
      open: "101109.59",
      high: "105219.99",
      low: "94253",
      close: "104463.82",
      volume: "59383.53759",
      date: "2024-12-09"
    },
    {
      symbol: "BTCUSDT",
      open: "97185.18",
      high: "104043.73",
      low: "91377.01",
      close: "101109.59",
      volume: "83009.86069",
      date: "2024-12-02"
    },
    {
      symbol: "BTCUSDT",
      open: "97900.05",
      high: "98871.8",
      low: "90791.11",
      close: "97185.18",
      volume: "65365.30186",
      date: "2024-11-25"
    },
    {
      symbol: "BTCUSDT",
      open: "89848",
      high: "99588.01",
      low: "89376.9",
      close: "97900.05",
      volume: "87356.21355",
      date: "2024-11-18"
    },
    {
      symbol: "BTCUSDT",
      open: "80372.01",
      high: "93257.75",
      low: "80216.01",
      close: "89848",
      volume: "128566.37465",
      date: "2024-11-11"
    },
    {
      symbol: "BTCUSDT",
      open: "68775.99",
      high: "81449.97",
      low: "66835",
      close: "80372.01",
      volume: "90219.54785",
      date: "2024-11-04"
    },
    {
      symbol: "BTCUSDT",
      open: "68021.7",
      high: "73620.12",
      low: "67481.66",
      close: "68775.99",
      volume: "45305.83339",
      date: "2024-10-28"
    },
    {
      symbol: "BTCUSDT",
      open: "69031.99",
      high: "69519.52",
      low: "65260",
      close: "68021.7",
      volume: "33693.14046",
      date: "2024-10-21"
    },
    {
      symbol: "BTCUSDT",
      open: "62870.02",
      high: "69400",
      low: "62457.81",
      close: "69031.99",
      volume: "32761.49328",
      date: "2024-10-14"
    },
    {
      symbol: "BTCUSDT",
      open: "62819.91",
      high: "64473.1",
      low: "58949",
      close: "62870.02",
      volume: "16001.38807",
      date: "2024-10-07"
    },
    {
      symbol: "BTCUSDT",
      open: "65602.01",
      high: "65618.8",
      low: "59863.98",
      close: "62819.91",
      volume: "18534.2967",
      date: "2024-09-30"
    },
    {
      symbol: "BTCUSDT",
      open: "63576",
      high: "66460.6",
      low: "62572.01",
      close: "65602.01",
      volume: "14443.88618",
      date: "2024-09-23"
    },
    {
      symbol: "BTCUSDT",
      open: "59132",
      high: "64133.32",
      low: "57500.99",
      close: "63576",
      volume: "19122.227",
      date: "2024-09-16"
    },
    {
      symbol: "BTCUSDT",
      open: "54869.95",
      high: "60624.54",
      low: "54591.97",
      close: "59132",
      volume: "22161.17809",
      date: "2024-09-09"
    },
    {
      symbol: "BTCUSDT",
      open: "57302.02",
      high: "59809.64",
      low: "52561.27",
      close: "54869.95",
      volume: "27132.07721",
      date: "2024-09-02"
    },
    {
      symbol: "BTCUSDT",
      open: "64220",
      high: "64481",
      low: "57205.01",
      close: "57302.02",
      volume: "24271.20405",
      date: "2024-08-26"
    },
    {
      symbol: "BTCUSDT",
      open: "58427.35",
      high: "64991",
      low: "57814",
      close: "64220",
      volume: "21980.39019",
      date: "2024-08-19"
    },
    {
      symbol: "BTCUSDT",
      open: "58711.8",
      high: "61766.52",
      low: "56105",
      close: "58427.35",
      volume: "23168.6725",
      date: "2024-08-12"
    },
    {
      symbol: "BTCUSDT",
      open: "61877.27",
      high: "62740.57",
      low: "49062.36",
      close: "58711.8",
      volume: "32331.29425",
      date: "2024-08-05"
    },
    {
      symbol: "BTCUSDT",
      open: "68249.89",
      high: "70080",
      low: "60504.99",
      close: "61877.27",
      volume: "9325.24286376",
      date: "2024-07-29"
    },
    {
      symbol: "BTCUSDT",
      open: "68165.33",
      high: "69400",
      low: "63462",
      close: "68249.89",
      volume: "9842.32109",
      date: "2024-07-22"
    },
    {
      symbol: "BTCUSDT",
      open: "57455.99",
      high: "68366.67",
      low: "60652",
      close: "68165.33",
      volume: "11284.79106",
      date: "2024-07-15"
    },
    {
      symbol: "BTCUSDT",
      open: "55857.81",
      high: "58210.88",
      low: "54300",
      close: "57455.99",
      volume: "3305.51847552",
      date: "2024-07-08"
    },
    {
      symbol: "BTCUSDT",
      open: "62772.01",
      high: "63861.76",
      low: "53536",
      close: "55857.81",
      volume: "13929.26844",
      date: "2024-07-01"
    },
    {
      symbol: "BTCUSDT",
      open: "63197.96",
      high: "63369.8",
      low: "58504.68",
      close: "62772.01",
      volume: "9773.45294",
      date: "2024-06-24"
    },
    {
      symbol: "BTCUSDT",
      open: "66676.86",
      high: "67295.7",
      low: "63178.32",
      close: "63197.96",
      volume: "8574.14904",
      date: "2024-06-17"
    },
    {
      symbol: "BTCUSDT",
      open: "69648.15",
      high: "70188.27",
      low: "65078.32",
      close: "66676.86",
      volume: "9616.45202",
      date: "2024-06-10"
    },
    {
      symbol: "BTCUSDT",
      open: "67765.63",
      high: "71975.33",
      low: "67612.49",
      close: "69648.15",
      volume: "9100.90525",
      date: "2024-06-03"
    },
    {
      symbol: "BTCUSDT",
      open: "68514",
      high: "70682.06",
      low: "66676.05",
      close: "67765.63",
      volume: "8987.62273",
      date: "2024-05-27"
    },
    {
      symbol: "BTCUSDT",
      open: "66273.99",
      high: "71979",
      low: "66060.3",
      close: "68514",
      volume: "12240.97631",
      date: "2024-05-20"
    },
    {
      symbol: "BTCUSDT",
      open: "61484",
      high: "67698.85",
      low: "60749.99",
      close: "66273.99",
      volume: "10799.72816",
      date: "2024-05-13"
    },
    {
      symbol: "BTCUSDT",
      open: "64011.99",
      high: "65500",
      low: "60197.47",
      close: "61484",
      volume: "7041.29876",
      date: "2024-05-06"
    },
    {
      symbol: "BTCUSDT",
      open: "63118.63",
      high: "64733.98",
      low: "56552.84",
      close: "64011.99",
      volume: "3582.97612",
      date: "2024-04-29"
    },
    {
      symbol: "BTCUSDT",
      open: "64940",
      high: "67218.24",
      low: "62416.84",
      close: "63118.63",
      volume: "2677.83702",
      date: "2024-04-22"
    },
    {
      symbol: "BTCUSDT",
      open: "65666.87",
      high: "66827.33",
      low: "59600.01",
      close: "64940",
      volume: "3422.03539",
      date: "2024-04-15"
    },
    {
      symbol: "BTCUSDT",
      open: "69360.38",
      high: "72767.23",
      low: "60901.26",
      close: "65666.87",
      volume: "7980.43025",
      date: "2024-04-08"
    },
    {
      symbol: "BTCUSDT",
      open: "71281.46",
      high: "71288.23",
      low: "64494.51",
      close: "69360.38",
      volume: "11181.08629",
      date: "2024-04-01"
    },
    {
      symbol: "BTCUSDT",
      open: "67210",
      high: "71769.53",
      low: "66385.06",
      close: "71281.46",
      volume: "11586.51579",
      date: "2024-03-25"
    },
    {
      symbol: "BTCUSDT",
      open: "68393.49",
      high: "68955.99",
      low: "60777.08",
      close: "67210",
      volume: "23484.65744",
      date: "2024-03-18"
    },
    {
      symbol: "BTCUSDT",
      open: "68955.87",
      high: "73777.01",
      low: "64536.47",
      close: "68393.49",
      volume: "27619.80963",
      date: "2024-03-11"
    },
    {
      symbol: "BTCUSDT",
      open: "63113.98",
      high: "69990",
      low: "59094.22",
      close: "68955.87",
      volume: "31259.54692",
      date: "2024-03-04"
    },
    {
      symbol: "BTCUSDT",
      open: "51728.84",
      high: "64000.01",
      low: "50903.53",
      close: "63113.98",
      volume: "21662.78155",
      date: "2024-02-26"
    },
    {
      symbol: "BTCUSDT",
      open: "52112.02",
      high: "52985",
      low: "50521",
      close: "51728.84",
      volume: "11191.33663",
      date: "2024-02-19"
    },
    {
      symbol: "BTCUSDT",
      open: "48299.99",
      high: "52816.61",
      low: "47711",
      close: "52112.02",
      volume: "15556.66915",
      date: "2024-02-12"
    },
    {
      symbol: "BTCUSDT",
      open: "42582.87",
      high: "48591.6",
      low: "42258.09",
      close: "48299.99",
      volume: "13142.75789",
      date: "2024-02-05"
    },
    {
      symbol: "BTCUSDT",
      open: "42031.04",
      high: "43871.31",
      low: "41806.69",
      close: "42582.87",
      volume: "10179.20358",
      date: "2024-01-29"
    },
    {
      symbol: "BTCUSDT",
      open: "41580.34",
      high: "42842.68",
      low: "38555",
      close: "42031.04",
      volume: "18359.79478",
      date: "2024-01-22"
    },
    {
      symbol: "BTCUSDT",
      open: "41732.35",
      high: "43578",
      low: "40291.36",
      close: "41580.34",
      volume: "11984.12188",
      date: "2024-01-15"
    },
    {
      symbol: "BTCUSDT",
      open: "43923.7",
      high: "48966.84",
      low: "41499.99",
      close: "41732.35",
      volume: "41147.11557",
      date: "2024-01-08"
    },
    {
      symbol: "BTCUSDT",
      open: "42283.58",
      high: "45879.63",
      low: "40808.91",
      close: "43923.7",
      volume: "26871.91974",
      date: "2024-01-01"
    },
    {
      symbol: "BTCUSDT",
      open: "42972.48",
      high: "43799.92",
      low: "41461.98",
      close: "42283.58",
      volume: "13854.15238",
      date: "2023-12-25"
    },
    {
      symbol: "BTCUSDT",
      open: "41374.65",
      high: "44398.25",
      low: "40542.93",
      close: "42972.48",
      volume: "14431.10301",
      date: "2023-12-18"
    },
    {
      symbol: "BTCUSDT",
      open: "43789.51",
      high: "43804.5",
      low: "40225.1",
      close: "41374.65",
      volume: "19763.15174",
      date: "2023-12-11"
    },
    {
      symbol: "BTCUSDT",
      open: "39972.26",
      high: "44700",
      low: "39965.99",
      close: "43789.51",
      volume: "60210.13137",
      date: "2023-12-04"
    },
    {
      symbol: "BTCUSDT",
      open: "37447.43",
      high: "40212.12",
      low: "36708.71",
      close: "39972.26",
      volume: "60521.05786",
      date: "2023-11-27"
    },
    {
      symbol: "BTCUSDT",
      open: "37358.74",
      high: "38407.84",
      low: "35641.42",
      close: "37447.43",
      volume: "65745.90553",
      date: "2023-11-20"
    },
    {
      symbol: "BTCUSDT",
      open: "37064.14",
      high: "37965.29",
      low: "34911.6",
      close: "37358.74",
      volume: "71994.75753",
      date: "2023-11-13"
    },
    {
      symbol: "BTCUSDT",
      open: "35011.89",
      high: "37969.35",
      low: "34527.68",
      close: "37064.14",
      volume: "73486.15692",
      date: "2023-11-06"
    },
    {
      symbol: "BTCUSDT",
      open: "34525.89",
      high: "35924.05",
      low: "34035.11",
      close: "35011.89",
      volume: "68196.13134",
      date: "2023-10-30"
    },
    {
      symbol: "BTCUSDT",
      open: "29992.46",
      high: "35270",
      low: "29883.6",
      close: "34525.89",
      volume: "104793.59397",
      date: "2023-10-23"
    },
    {
      symbol: "BTCUSDT",
      open: "27154.14",
      high: "30369.76",
      low: "27112.66",
      close: "29992.46",
      volume: "107138.57067",
      date: "2023-10-16"
    },
    {
      symbol: "BTCUSDT",
      open: "27917.05",
      high: "27987.93",
      low: "26538.66",
      close: "27154.14",
      volume: "62914.13332",
      date: "2023-10-09"
    },
    {
      symbol: "BTCUSDT",
      open: "27992.58",
      high: "28575.43",
      low: "27170.16",
      close: "27917.05",
      volume: "76276.90329",
      date: "2023-10-02"
    },
    {
      symbol: "BTCUSDT",
      open: "26249.45",
      high: "28050.84",
      low: "25992.99",
      close: "27992.58",
      volume: "66926.07897",
      date: "2023-09-25"
    },
    {
      symbol: "BTCUSDT",
      open: "26527.5",
      high: "27480",
      low: "26164.46",
      close: "26249.45",
      volume: "65086.76406",
      date: "2023-09-18"
    },
    {
      symbol: "BTCUSDT",
      open: "25841.61",
      high: "26885.33",
      low: "24902.08",
      close: "26527.5",
      volume: "35342.19838",
      date: "2023-09-11"
    },
    {
      symbol: "BTCUSDT",
      open: "25971.21",
      high: "26445.5",
      low: "25373.75",
      close: "25841.61",
      volume: "27824.76791",
      date: "2023-09-04"
    },
    {
      symbol: "BTCUSDT",
      open: "26101.78",
      high: "28132.99",
      low: "25341",
      close: "25971.21",
      volume: "39358.47001",
      date: "2023-08-28"
    },
    {
      symbol: "BTCUSDT",
      open: "26190",
      high: "26813.88",
      low: "25335.43",
      close: "26101.78",
      volume: "27455.56894",
      date: "2023-08-21"
    },
    {
      symbol: "BTCUSDT",
      open: "29303.85",
      high: "29695.32",
      low: "24374.15",
      close: "26190",
      volume: "43357.40879",
      date: "2023-08-14"
    },
    {
      symbol: "BTCUSDT",
      open: "29088.42",
      high: "30223.56",
      low: "28718.85",
      close: "29303.85",
      volume: "25231.41334",
      date: "2023-08-07"
    },
    {
      symbol: "BTCUSDT",
      open: "29281.08",
      high: "30040",
      low: "28590",
      close: "29088.42",
      volume: "27387.13394",
      date: "2023-07-31"
    },
    {
      symbol: "BTCUSDT",
      open: "30083.75",
      high: "30099.59",
      low: "28867.24",
      close: "29281.08",
      volume: "16502.02316",
      date: "2023-07-24"
    },
    {
      symbol: "BTCUSDT",
      open: "30232",
      high: "30417.46",
      low: "29534.93",
      close: "30083.75",
      volume: "12269.69159",
      date: "2023-07-17"
    },
    {
      symbol: "BTCUSDT",
      open: "30160.71",
      high: "31804.19",
      low: "29902.38",
      close: "30232",
      volume: "17941.86762",
      date: "2023-07-10"
    },
    {
      symbol: "BTCUSDT",
      open: "30617.03",
      high: "31500.03",
      low: "29710.08",
      close: "30160.71",
      volume: "14767.4912",
      date: "2023-07-03"
    },
    {
      symbol: "BTCUSDT",
      open: "30462.65",
      high: "31282",
      low: "29516.72",
      close: "30617.03",
      volume: "20268.18678",
      date: "2023-06-26"
    },
    {
      symbol: "BTCUSDT",
      open: "26339.97",
      high: "31408",
      low: "26269.7",
      close: "30462.65",
      volume: "27895.97722",
      date: "2023-06-19"
    },
    {
      symbol: "BTCUSDT",
      open: "25925.54",
      high: "26804.76",
      low: "24500",
      close: "26339.97",
      volume: "18514.82989",
      date: "2023-06-12"
    },
    {
      symbol: "BTCUSDT",
      open: "27117.1",
      high: "27377.28",
      low: "25356.76",
      close: "25925.54",
      volume: "23572.3835",
      date: "2023-06-05"
    },
    {
      symbol: "BTCUSDT",
      open: "28065",
      high: "28430.18",
      low: "26506.5",
      close: "27117.1",
      volume: "14123.9651",
      date: "2023-05-29"
    },
    {
      symbol: "BTCUSDT",
      open: "26747.78",
      high: "28248.42",
      low: "25876.89",
      close: "28065",
      volume: "16568.36545",
      date: "2023-05-22"
    },
    {
      symbol: "BTCUSDT",
      open: "26840",
      high: "27663.3",
      low: "26374.11",
      close: "26747.78",
      volume: "14343.0192116",
      date: "2023-05-15"
    },
    {
      symbol: "BTCUSDT",
      open: "28430.6",
      high: "28627.82",
      low: "26121.01",
      close: "26840",
      volume: "6581.740818",
      date: "2023-05-08"
    },
    {
      symbol: "BTCUSDT",
      open: "29219.6",
      high: "29820.01",
      low: "27667.31",
      close: "28430.6",
      volume: "12469.311808",
      date: "2023-05-01"
    },
    {
      symbol: "BTCUSDT",
      open: "27590.61",
      high: "30002.31",
      low: "26972.16",
      close: "29219.6",
      volume: "11932.098077",
      date: "2023-04-24"
    },
    {
      symbol: "BTCUSDT",
      open: "30307.09",
      high: "30467.57",
      low: "27140.37",
      close: "27590.61",
      volume: "19652.274677",
      date: "2023-04-17"
    },
    {
      symbol: "BTCUSDT",
      open: "28323.74",
      high: "30983.26",
      low: "28176.83",
      close: "30307.09",
      volume: "16635.723283",
      date: "2023-04-10"
    },
    {
      symbol: "BTCUSDT",
      open: "28171.88",
      high: "28763.1",
      low: "27224.33",
      close: "28323.74",
      volume: "8227.03341883",
      date: "2023-04-03"
    },
    {
      symbol: "BTCUSDT",
      open: "27969.06",
      high: "29177.6",
      low: "26536.37",
      close: "28171.88",
      volume: "3922.255138",
      date: "2023-03-27"
    },
    {
      symbol: "BTCUSDT",
      open: "27964.52",
      high: "28818.52",
      low: "26618.54",
      close: "27969.06",
      volume: "17780.97417578",
      date: "2023-03-20"
    },
    {
      symbol: "BTCUSDT",
      open: "21994.19",
      high: "28381.39",
      low: "21823.55",
      close: "27964.52",
      volume: "35856.360603",
      date: "2023-03-13"
    },
    {
      symbol: "BTCUSDT",
      open: "22385.15",
      high: "22108.27",
      low: "19579.12",
      close: "21994.19",
      volume: "13291.686319",
      date: "2023-03-06"
    },
    {
      symbol: "BTCUSDT",
      open: "23556.39",
      high: "23986.66",
      low: "22042.01",
      close: "22385.15",
      volume: "6546.490575",
      date: "2023-02-27"
    },
    {
      symbol: "BTCUSDT",
      open: "24275.11",
      high: "25232.39",
      low: "22773.41",
      close: "23556.39",
      volume: "7804.706905",
      date: "2023-02-20"
    },
    {
      symbol: "BTCUSDT",
      open: "21782.87",
      high: "25222.15",
      low: "21376.86",
      close: "24275.11",
      volume: "8382.40543657",
      date: "2023-02-13"
    },
    {
      symbol: "BTCUSDT",
      open: "22930.87",
      high: "23426.45",
      low: "21483.51",
      close: "21782.87",
      volume: "5222.72739652",
      date: "2023-02-06"
    },
    {
      symbol: "BTCUSDT",
      open: "23744.18",
      high: "24251.04",
      low: "22518",
      close: "22930.87",
      volume: "1450.626309",
      date: "2023-01-30"
    },
    {
      symbol: "BTCUSDT",
      open: "22709.77",
      high: "23951.9",
      low: "22340.67",
      close: "23744.18",
      volume: "2614.601957",
      date: "2023-01-23"
    },
    {
      symbol: "BTCUSDT",
      open: "20871.766",
      high: "23320.1",
      low: "20420.81",
      close: "22709.77",
      volume: "4472.403665",
      date: "2023-01-16"
    },
    {
      symbol: "BTCUSDT",
      open: "17127.0164",
      high: "21236.93",
      low: "17106.5221",
      close: "20871.766",
      volume: "64384.510591",
      date: "2023-01-09"
    },
    {
      symbol: "BTCUSDT",
      open: "16617.762",
      high: "17169.2969",
      low: "16550.2186",
      close: "17127.0164",
      volume: "36323.58314",
      date: "2023-01-02"
    },
    {
      symbol: "BTCUSDT",
      open: "16831.7432",
      high: "16965.84",
      low: "16342.2571",
      close: "16617.762",
      volume: "48475.62333",
      date: "2022-12-26"
    },
    {
      symbol: "BTCUSDT",
      open: "16738.56",
      high: "17057.44",
      low: "16264.995",
      close: "16831.7432",
      volume: "161696.452182",
      date: "2022-12-19"
    },
    {
      symbol: "BTCUSDT",
      open: "17091.775",
      high: "18360.8083",
      low: "16531.705",
      close: "16738.56",
      volume: "178927.464395",
      date: "2022-12-12"
    },
    {
      symbol: "BTCUSDT",
      open: "17106.155",
      high: "17415.105",
      low: "16683.27",
      close: "17091.775",
      volume: "167846.58504676",
      date: "2022-12-05"
    },
    {
      symbol: "BTCUSDT",
      open: "16428.78",
      high: "17324",
      low: "15995.27",
      close: "17106.155",
      volume: "1156497.863051",
      date: "2022-11-28"
    },
    {
      symbol: "BTCUSDT",
      open: "16280.23",
      high: "16812.63",
      low: "15476",
      close: "16428.78",
      volume: "1561058.479583",
      date: "2022-11-21"
    },
    {
      symbol: "BTCUSDT",
      open: "16329.85",
      high: "17190",
      low: "15815.21",
      close: "16280.23",
      volume: "1626234.48043",
      date: "2022-11-14"
    },
    {
      symbol: "BTCUSDT",
      open: "20905.58",
      high: "21069.77",
      low: "15588",
      close: "16329.85",
      volume: "3234391.873932",
      date: "2022-11-07"
    },
    {
      symbol: "BTCUSDT",
      open: "20627.48",
      high: "21480.65",
      low: "20031.24",
      close: "20905.58",
      volume: "2205754.83045",
      date: "2022-10-31"
    },
    {
      symbol: "BTCUSDT",
      open: "19570.4",
      high: "21085",
      low: "19157",
      close: "20627.48",
      volume: "2026392.42105",
      date: "2022-10-24"
    },
    {
      symbol: "BTCUSDT",
      open: "19262.98",
      high: "19706.66",
      low: "18650",
      close: "19570.4",
      volume: "1439566.24878",
      date: "2022-10-17"
    },
    {
      symbol: "BTCUSDT",
      open: "19439.02",
      high: "19951.87",
      low: "18190",
      close: "19262.98",
      volume: "1666942.47921",
      date: "2022-10-10"
    },
    {
      symbol: "BTCUSDT",
      open: "19056.8",
      high: "20475",
      low: "18959.68",
      close: "19439.02",
      volume: "1690215.44019",
      date: "2022-10-03"
    },
    {
      symbol: "BTCUSDT",
      open: "18807.38",
      high: "20385.86",
      low: "18471.28",
      close: "19056.8",
      volume: "2777070.91238",
      date: "2022-09-26"
    },
    {
      symbol: "BTCUSDT",
      open: "19416.18",
      high: "19956",
      low: "18125.98",
      close: "18807.38",
      volume: "2285541.48793",
      date: "2022-09-19"
    },
    {
      symbol: "BTCUSDT",
      open: "21826.87",
      high: "22799",
      low: "19320.01",
      close: "19416.18",
      volume: "2218565.59694",
      date: "2022-09-12"
    }
  ];

export let lineData = toLineData(data);

export const transactions: Transaction[] = [
  {
    symbol: "BTCUSDT",
    transaction: "buy",
    amount: 0.05,
    price: 58331.2,
    date: "2024-05-01"
  },
  {
    symbol: "BTCUSDT",
    transaction: "buy",
    amount: 0.05,
    price: 94560.2,
    date: "2025-01-01"
  },
  {
    symbol: "BTCUSDT",
    transaction: "buy",
    amount: 0.2,
    price: 82371.6,
    date: "2025-03-30"
  }];