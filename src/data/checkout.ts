export const US_STATES: { code: string; label: string }[] = [
  { code: 'AL', label: 'Alabama' }, { code: 'AK', label: 'Alaska' }, { code: 'AZ', label: 'Arizona' },
  { code: 'AR', label: 'Arkansas' }, { code: 'CA', label: 'California' }, { code: 'CO', label: 'Colorado' },
  { code: 'CT', label: 'Connecticut' }, { code: 'DE', label: 'Delaware' }, { code: 'FL', label: 'Florida' },
  { code: 'GA', label: 'Georgia' }, { code: 'HI', label: 'Hawaii' }, { code: 'ID', label: 'Idaho' },
  { code: 'IL', label: 'Illinois' }, { code: 'IN', label: 'Indiana' }, { code: 'IA', label: 'Iowa' },
  { code: 'KS', label: 'Kansas' }, { code: 'KY', label: 'Kentucky' }, { code: 'LA', label: 'Louisiana' },
  { code: 'ME', label: 'Maine' }, { code: 'MD', label: 'Maryland' }, { code: 'MA', label: 'Massachusetts' },
  { code: 'MI', label: 'Michigan' }, { code: 'MN', label: 'Minnesota' }, { code: 'MS', label: 'Mississippi' },
  { code: 'MO', label: 'Missouri' }, { code: 'MT', label: 'Montana' }, { code: 'NE', label: 'Nebraska' },
  { code: 'NV', label: 'Nevada' }, { code: 'NH', label: 'New Hampshire' }, { code: 'NJ', label: 'New Jersey' },
  { code: 'NM', label: 'New Mexico' }, { code: 'NY', label: 'New York' }, { code: 'NC', label: 'North Carolina' },
  { code: 'ND', label: 'North Dakota' }, { code: 'OH', label: 'Ohio' }, { code: 'OK', label: 'Oklahoma' },
  { code: 'OR', label: 'Oregon' }, { code: 'PA', label: 'Pennsylvania' }, { code: 'RI', label: 'Rhode Island' },
  { code: 'SC', label: 'South Carolina' }, { code: 'SD', label: 'South Dakota' }, { code: 'TN', label: 'Tennessee' },
  { code: 'TX', label: 'Texas' }, { code: 'UT', label: 'Utah' }, { code: 'VT', label: 'Vermont' },
  { code: 'VA', label: 'Virginia' }, { code: 'WA', label: 'Washington' }, { code: 'WV', label: 'West Virginia' },
  { code: 'WI', label: 'Wisconsin' }, { code: 'WY', label: 'Wyoming' },
];

// Approximate combined state sales tax rates — demo estimate only, verify against
// current rates before launch. States not listed (OR, MT, NH, DE, AK) have no sales tax.
export const TAX_RATES: Record<string, number> = {
  AL: 0.0922, AZ: 0.0837, AR: 0.0947, CA: 0.0868, CO: 0.0777, CT: 0.0635, FL: 0.0702,
  GA: 0.0733, HI: 0.0444, ID: 0.0603, IL: 0.0886, IN: 0.07, IA: 0.0694, KS: 0.0869,
  KY: 0.06, LA: 0.0955, ME: 0.055, MD: 0.06, MA: 0.0625, MI: 0.06, MN: 0.0778,
  MS: 0.07, MO: 0.0839, NE: 0.0694, NV: 0.0823, NJ: 0.0663, NM: 0.0768, NY: 0.0852,
  NC: 0.0698, ND: 0.0696, OH: 0.0723, OK: 0.0895, PA: 0.0634, RI: 0.07, SC: 0.0743,
  SD: 0.0640, TN: 0.0955, TX: 0.0820, UT: 0.0719, VT: 0.0622, VA: 0.0575, WA: 0.0921,
  WV: 0.0655, WI: 0.0544, WY: 0.0533,
};

export const FREE_SHIPPING_THRESHOLD = 35;
const PACKAGING_WEIGHT_LB = 0.2;
const AVG_ITEM_WEIGHT_LB = 0.4;

export interface ShippingQuote {
  cost: number;
  label: string;
  subLabel: string;
}

export function estimateShipping(subtotal: number, itemCount: number, zip: string): ShippingQuote {
  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    return { cost: 0, label: 'Free', subLabel: 'Free shipping — orders $35+' };
  }
  if (!zip || zip.trim().length < 5) {
    return { cost: 0, label: 'Enter ZIP', subLabel: 'Enter your ZIP code to calculate' };
  }
  const weight = Math.round((PACKAGING_WEIGHT_LB + itemCount * AVG_ITEM_WEIGHT_LB) * 10) / 10;
  const zipNum = parseInt(zip.slice(0, 5), 10) || 84604;
  // Rough zone estimate by distance from the Provo, UT (84604) warehouse.
  const zone = Math.min(8, Math.max(1, Math.ceil(Math.abs(zipNum - 84604) / 12500) + 1));
  let size: string;
  let base: number;
  if (weight <= 0.5) {
    size = 'Small flat-rate envelope';
    base = 4.5;
  } else if (weight <= 4) {
    size = 'Small package';
    base = 5.75;
  } else {
    size = 'Box';
    base = 8.5;
  }
  const cost = Math.round((base + zone * 0.35) * 100) / 100;
  return {
    cost,
    label: `$${cost.toFixed(2)}`,
    subLabel: `${size} — Zone ${zone} · ${weight} lb`,
  };
}

export function generateOrderId(): string {
  const digits = Math.floor(100000 + Math.random() * 900000);
  return `KO-${digits}`;
}
