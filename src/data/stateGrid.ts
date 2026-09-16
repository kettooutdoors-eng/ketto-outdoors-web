export interface StateTile {
  code: string;
  name: string;
  row: number;
  col: number;
}

// A schematic tile-grid map (NPR-style) rather than true geographic boundaries — every
// state gets an equal-size, easily-tappable tile regardless of its real land area, while
// still reading clearly as "roughly the US" (west coast on the left, New England clustered
// top-right, Gulf states along the bottom, Alaska/Hawaii inset bottom-left).
export const STATE_GRID: StateTile[] = [
  { code: 'WA', name: 'Washington', row: 1, col: 1 },
  { code: 'ID', name: 'Idaho', row: 1, col: 2 },
  { code: 'MT', name: 'Montana', row: 1, col: 3 },
  { code: 'ND', name: 'North Dakota', row: 1, col: 4 },
  { code: 'MN', name: 'Minnesota', row: 1, col: 6 },
  { code: 'WI', name: 'Wisconsin', row: 2, col: 7 },
  { code: 'MI', name: 'Michigan', row: 2, col: 8 },
  { code: 'NY', name: 'New York', row: 2, col: 11 },
  { code: 'VT', name: 'Vermont', row: 2, col: 12 },
  { code: 'NH', name: 'New Hampshire', row: 1, col: 13 },
  { code: 'ME', name: 'Maine', row: 1, col: 14 },

  { code: 'OR', name: 'Oregon', row: 2, col: 1 },
  { code: 'NV', name: 'Nevada', row: 2, col: 2 },
  { code: 'WY', name: 'Wyoming', row: 2, col: 3 },
  { code: 'SD', name: 'South Dakota', row: 2, col: 4 },
  { code: 'IA', name: 'Iowa', row: 3, col: 6 },
  { code: 'IL', name: 'Illinois', row: 3, col: 7 },
  { code: 'IN', name: 'Indiana', row: 3, col: 8 },
  { code: 'OH', name: 'Ohio', row: 3, col: 9 },
  { code: 'PA', name: 'Pennsylvania', row: 3, col: 10 },
  { code: 'NJ', name: 'New Jersey', row: 3, col: 11 },
  { code: 'CT', name: 'Connecticut', row: 3, col: 12 },
  { code: 'RI', name: 'Rhode Island', row: 2, col: 14 },
  { code: 'MA', name: 'Massachusetts', row: 3, col: 13 },

  { code: 'CA', name: 'California', row: 3, col: 1 },
  { code: 'UT', name: 'Utah', row: 3, col: 3 },
  { code: 'CO', name: 'Colorado', row: 3, col: 4 },
  { code: 'NE', name: 'Nebraska', row: 3, col: 5 },

  { code: 'AZ', name: 'Arizona', row: 4, col: 2 },
  { code: 'NM', name: 'New Mexico', row: 4, col: 4 },
  { code: 'KS', name: 'Kansas', row: 4, col: 5 },
  { code: 'MO', name: 'Missouri', row: 4, col: 6 },
  { code: 'KY', name: 'Kentucky', row: 4, col: 8 },
  { code: 'WV', name: 'West Virginia', row: 4, col: 9 },
  { code: 'VA', name: 'Virginia', row: 4, col: 10 },
  { code: 'MD', name: 'Maryland', row: 4, col: 11 },
  { code: 'DE', name: 'Delaware', row: 4, col: 12 },

  { code: 'OK', name: 'Oklahoma', row: 5, col: 5 },
  { code: 'AR', name: 'Arkansas', row: 5, col: 6 },
  { code: 'TN', name: 'Tennessee', row: 5, col: 8 },
  { code: 'NC', name: 'North Carolina', row: 5, col: 10 },

  { code: 'TX', name: 'Texas', row: 6, col: 5 },
  { code: 'LA', name: 'Louisiana', row: 6, col: 6 },
  { code: 'MS', name: 'Mississippi', row: 6, col: 7 },
  { code: 'AL', name: 'Alabama', row: 6, col: 8 },
  { code: 'GA', name: 'Georgia', row: 6, col: 9 },
  { code: 'SC', name: 'South Carolina', row: 6, col: 10 },

  { code: 'FL', name: 'Florida', row: 7, col: 9 },

  { code: 'AK', name: 'Alaska', row: 8, col: 1 },
  { code: 'HI', name: 'Hawaii', row: 8, col: 2 },
];

export const GRID_ROWS = 8;
export const GRID_COLS = 14;
