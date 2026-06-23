/** Blaze Dental pricing vs typical US market (for display only). */
export const priceComparisons = [
    {
        name: "Dental Implant",
        blaze: 899,
        usaLow: 3000,
        usaHigh: 6000,
    },
    {
        name: "Crown",
        blaze: 499,
        usaLow: 800,
        usaHigh: 1500,
    },
    {
        name: "Veneer",
        blaze: 499,
        usaLow: 900,
        usaHigh: 2500,
    },
    {
        name: "Root Canal",
        blaze: 299,
        usaLow: 700,
        usaHigh: 1500,
    },
    {
        name: "Teeth Whitening",
        blaze: 399,
        usaLow: 500,
        usaHigh: 1000,
    },
    {
        name: "All-on-4",
        blaze: 8899,
        usaLow: 20000,
        usaHigh: 30000,
    },
];

export function formatUsd(amount) {
    return `$${amount.toLocaleString("en-US")}`;
}

export function usaRange(item) {
    return `${formatUsd(item.usaLow)}–${formatUsd(item.usaHigh)}`;
}

export function savingsPercent(item) {
    const midUsa = (item.usaLow + item.usaHigh) / 2;
    return Math.round((1 - item.blaze / midUsa) * 100);
}
