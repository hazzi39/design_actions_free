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
    Section: "Welded Beams - Grade 300",
    Designation: "1200WB455 - Grade 300",
    Phi_Mxx_kNm: 2105000000,
    Phi_Mxy_kNm: 835000000,
    Phi_Vv_kN: 200000,
    Ix: 2105000000,
    Iy: 835000000,
    E: 200000
  },
  {
    Section: "Welded Beams - Grade 300",
    Designation: "1200WB423 - Grade 300",
    Phi_Mxx_kNm: 6510,
    Phi_Mxy_kNm: 1130,
    Phi_Vv_kN: 2900,
    Ix: 6510,
    Iy: 1130,
    E: 2900
  },
  {
    Section: "Universal Beams",
    Designation: "610UB125 - Grade 300",
    Ix: 927,
    Iy: 130,
    E: 1180
  },
  {
    Section: "Universal Beams",
    Designation: "610UB113 - Grade 300",
    Ix: 829,
    Iy: 114,
    E: 1100
  },
  {
    Section: "Universal Columns",
    Designation: "310UC158 - Grade 300",
    Ix: 676,
    Iy: 305,
    E: 832
  },
  {
    Section: "Universal Columns",
    Designation: "310UC137 - Grade 300",
    Ix: 580,
    Iy: 261,
    E: 717
  }
];

export const uniqueSections = Array.from(
  new Set(structuralData.map((item) => item.Section))
);