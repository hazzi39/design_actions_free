export interface StructuralData {
  Section: string;
  Designation: string;
  Ix: number;
  Iy: number;
  E: number;
  Phi_Mxx_kNm?: number;
  Phi_Mxy_kNm?: number;
  Phi_Vv_kN?: number;
}

export const structuralData: StructuralData[] = [
  {
    Section: "Welded Beams",
    Designation: "1000WB322",
    Ix: 7480000000,
    Iy: 342000000,
    E: 200000
},
{
    Section: "Welded Beams",
    Designation: "900WB282",
    Ix: 5730000000,
    Iy: 341000000,
    E: 200000
},
{
    Section: "Welded Beams",
    Designation: "800WB192",
    Ix: 2970000000,
    Iy: 126000000,
    E: 200000
},
{
    Section: "Welded Beams",
    Designation: "700WB173",
    Ix: 2060000000,
    Iy: 97100000,
    E: 200000
},
{
    Section: "Welded Columns",
    Designation: "500WC440",
    Ix: 2150000000,
    Iy: 835000000,
    E: 200000
},
{
    Section: "Welded Columns",
    Designation: "400WC361",
    Ix: 1360000000,
    Iy: 429000000,
    E: 200000
},
{
    Section: "Welded Columns",
    Designation: "300WC258",
    Ix: 661000000,
    Iy: 258000000,
    E: 200000
},
{
    Section: "Universal Beams",
    Designation: "610UB125",
    Ix: 986000000,
    Iy: 39300000,
    E: 200000
},
{
    Section: "Universal Beams",
    Designation: "530UB92.4",
    Ix: 554000000,
    Iy: 23800000,
    E: 200000
},
{
    Section: "Universal Beams",
    Designation: "460UB82.1",
    Ix: 372000000,
    Iy: 18600000,
    E: 200000
},
{
    Section: "Universal Beams",
    Designation: "360UB56.7",
    Ix: 161000000,
    Iy: 11000000,
    E: 200000
},
{
    Section: "Universal Beams",
    Designation: "310UB46.2",
    Ix: 100000000,
    Iy: 9010000,
    E: 200000
},
{
    Section: "Universal Beams",
    Designation: "200UB29.8",
    Ix: 29100000,
    Iy: 3860000,
    E: 200000
},
{
    Section: "Universal Beams",
    Designation: "180UB22.2",
    Ix: 15300000,
    Iy: 1220000,
    E: 200000
},
{
    Section: "Universal Beams",
    Designation: "150UB18",
    Ix: 9050000,
    Iy: 672000,
    E: 200000
},
{
    Section: "Universal Columns",
    Designation: "310UC158",
    Ix: 388000000,
    Iy: 125000000,
    E: 200000
},
{
    Section: "Universal Columns",
    Designation: "200UC59.5",
    Ix: 61300000,
    Iy: 20400000,
    E: 200000
},
{
    Section: "Universal Columns",
    Designation: "150UC37.2",
    Ix: 22200000,
    Iy: 7010000,
    E: 200000
},
{
    Section: "Tees Cut From Universal Beams",
    Designation: "305BT62.5",
    Ix: 68300000,
    Iy: 19700000,
    E: 200000
},
{
    Section: "Tees Cut From Universal Beams",
    Designation: "230BT41.1",
    Ix: 24500000,
    Iy: 9310000,
    E: 200000
},
{
    Section: "Tees Cut From Universal Beams",
    Designation: "180BT28.4",
    Ix: 9680000,
    Iy: 5520000,
    E: 200000
},
{
    Section: "Tees Cut From Universal Beams",
    Designation: "125BT18.7",
    Ix: 2910000,
    Iy: 2830000,
    E: 200000
},
{
    Section: "Tees Cut From Universal Beams",
    Designation: "90BT11.1",
    Ix: 857000,
    Iy: 610000,
    E: 200000
},
{
    Section: "Tees Cut From Universal Columns",
    Designation: "155CT79.0",
    Ix: 15000000,
    Iy: 62700000,
    E: 200000
},
{
    Section: "Tees Cut From Universal Columns",
    Designation: "125CT44.8",
    Ix: 5190000,
    Iy: 24200000,
    E: 200000
},
{
    Section: "Tees Cut From Universal Columns",
    Designation: "75CT18.6",
    Ix: 909000,
    Iy: 3500000,
    E: 200000
},
{
    Section: "Parallel Flange Channels",
    Designation: "380PFC",
    Ix: 152000000,
    Iy: 6480000,
    E: 200000
},
{
    Section: "Parallel Flange Channels",
    Designation: "200PFC",
    Ix: 19100000,
    Iy: 1660000,
    E: 200000
},
{
    Section: "Parallel Flange Channels",
    Designation: "150PFC",
    Ix: 8340000,
    Iy: 1290000,
    E: 200000
},
{
    Section: "Parallel Flange Channels",
    Designation: "100PFC",
    Ix: 1740000,
    Iy: 267000,
    E: 200000
},
{
    Section: "Taper Flange Beams",
    Designation: "125TFB",
    Ix: 4340000,
    Iy: 337000,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "200x200x26EA",
    Ix: 56800000,
    Iy: 14900000,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "150x150x19EA",
    Ix: 17600000,
    Iy: 4600000,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "125x125x16EA",
    Ix: 8430000,
    Iy: 2200000,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "100x100x12EA",
    Ix: 3290000,
    Iy: 857000,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "90x90x10EA",
    Ix: 1930000,
    Iy: 501000,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "75x75x10EA",
    Ix: 1080000,
    Iy: 283000,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "50x50x8EA",
    Ix: 253000,
    Iy: 67500,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "45x45x6EA",
    Ix: 146000,
    Iy: 38300,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "40x40x6EA",
    Ix: 99700,
    Iy: 26500,
    E: 200000
},
{
    Section: "Equal Angles",
    Designation: "30x30x6EA",
    Ix: 38700,
    Iy: 10700,
    E: 200000
},
{
    Section: "Unequal Angles",
    Designation: "150x100x12UA",
    Ix: 7510000,
    Iy: 1350000,
    E: 200000
},
{
    Section: "Unequal Angles",
    Designation: "125x75x12UA",
    Ix: 3910000,
    Iy: 585000,
    E: 200000
},
{
    Section: "Unequal Angles",
    Designation: "100x75x10UA",
    Ix: 1890000,
    Iy: 402000,
    E: 200000
},
{
    Section: "Unequal Angles",
    Designation: "75x50x8UA",
    Ix: 586000,
    Iy: 106000,
    E: 200000
},
{
    Section: "Round bars",
    Designation: "10",
    Ix: 491,
    Iy: 491,
    E: 200000
},
{
    Section: "Round bars",
    Designation: "20",
    Ix: 7850,
    Iy: 7850,
    E: 200000
},
{
    Section: "Round bars",
    Designation: "30",
    Ix: 39800,
    Iy: 39800,
    E: 200000
},
{
    Section: "Round bars",
    Designation: "39",
    Ix: 114000,
    Iy: 114000,
    E: 200000
},
{
    Section: "Round bars",
    Designation: "60",
    Ix: 636000,
    Iy: 636000,
    E: 200000
},
{
    Section: "Round bars",
    Designation: "100",
    Ix: 4910000,
    Iy: 4910000,
    E: 200000
},
{
    Section: "Round bars",
    Designation: "150",
    Ix: 24900000,
    Iy: 24900000,
    E: 200000
},
{
    Section: "Square bars",
    Designation: "10",
    Ix: 833,
    Iy: 833,
    E: 200000
},
{
    Section: "Square bars",
    Designation: "20",
    Ix: 13300,
    Iy: 13300,
    E: 200000
},
{
    Section: "Square bars",
    Designation: "32",
    Ix: 87400,
    Iy: 87400,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "250x150x9.0RHS",
    Ix: 53700000,
    Iy: 24300000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "200x150x9.0RHS",
    Ix: 31000000,
    Iy: 19900000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "200x50x6.0RHS",
    Ix: 11100000,
    Iy: 1150000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "185x65x6.0RHS",
    Ix: 10400000,
    Iy: 1960000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "150x100x9.0RHS",
    Ix: 10900000,
    Iy: 5770000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "127x51x60RHS",
    Ix: 3280000,
    Iy: 761000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "125x75x5.0RHS",
    Ix: 3640000,
    Iy: 1650000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "102x76x60RHS",
    Ix: 2520000,
    Iy: 1590000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "100x50x5.0RHS",
    Ix: 1530000,
    Iy: 511000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "75x50x6.0RHS",
    Ix: 800000,
    Iy: 421000,
    E: 200000
},
{
    Section: "Rectangular Hollow Sections",
    Designation: "50x25x3.0RHS",
    Ix: 112000,
    Iy: 36700,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "250x250x9.0SHS",
    Ix: 79800000,
    Iy: 79800000,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "150x150x9.0SHS",
    Ix: 15400000,
    Iy: 15400000,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "125x125x9.0SHS",
    Ix: 8380000,
    Iy: 8380000,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "100x100x9.0SHS",
    Ix: 3910000,
    Iy: 3910000,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "89x89x6.0SHS",
    Ix: 2060000,
    Iy: 2060000,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "75x75x6.0SHS",
    Ix: 614000,
    Iy: 614000,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "65x65x6.0SHS",
    Ix: 323000,
    Iy: 323000,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "51.5x51.5x4.0SHS",
    Ix: 117000,
    Iy: 117000,
    E: 200000
},
{
    Section: "Square Hollow Sections",
    Designation: "40x40x4.0SHS",
    Ix: 52900,
    Iy: 52900,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "457.0 x 12.7 CHS",
    Ix: 437771260,
    Iy: 437771260,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "273.1 x 9.3 CHS",
    Ix: 67128452,
    Iy: 67128452,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "165.1 x 3.5 CHS",
    Ix: 5803041,
    Iy: 5803041,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "127.0 x 6.0 CHS",
    Ix: 4184406,
    Iy: 4184406,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "88.9 x 5.5 CHS",
    Ix: 1258361,
    Iy: 1258361,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "48.3 x 3.2 CHS",
    Ix: 115857,
    Iy: 115857,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "610.0 x 12.7 CHS",
    Ix: 1063255029,
    Iy: 1063255029,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "101.6 x 4.0 CHS",
    Ix: 1462845,
    Iy: 1462845,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "88.9 x 5.9 CHS",
    Ix: 1331481,
    Iy: 1331481,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "60.3 x 3.6 CHS",
    Ix: 258737,
    Iy: 258737,
    E: 200000
},
{
    Section: "Circular Hollow Sections",
    Designation: "42.4 x 4.0 CHS",
    Ix: 89908,
    Iy: 89908,
    E: 200000
}
];

export const uniqueSections = Array.from(
  new Set(structuralData.map((item) => item.Section))
);
