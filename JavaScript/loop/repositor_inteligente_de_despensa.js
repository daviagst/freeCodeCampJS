function parseShipment(rawData) {
  const processedItems = [];
  const seenSkus = new Set();

  for (let i = 0; i < rawData.length; i++) {
    const [sku, name, qtyStr, expires, zone] = rawData[i].split('|');

    if (seenSkus.has(sku)) {
      continue;
    }

    seenSkus.add(sku);

    const item = {
      sku: sku,
      name: name,
      qty: Number(qtyStr),
      expires: expires,
      zone: zone || "general"
    };

    processedItems.push(item);
  }

  return processedItems;
}

function planRestock(pantry, shipment) {
  const actions = [];
  const existingSkus = new Set();
  
  for (let i = 0; i < pantry.length; i++) {
    existingSkus.add(pantry[i].sku);
  }

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];

    if (item.qty <= 0) {
      actions.push({ type: "discard", item: item });
    } 
    else if (existingSkus.has(item.sku)) {
      actions.push({ type: "restock", item: item });
    } 
    else {
      actions.push({ type: "donate", item: item });
    }
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  const clone = [];
  
  for (let i = 0; i < pantry.length; i++) {
    clone.push({ ...pantry[i] });
  }
  
  return clone;
}

const currentPantry = [
  { sku: "LEITE01", name: "Leite Integral", qty: 4, expires: "2026-11-20", zone: "fridge" },
  { sku: "ARROZ02", name: "Arroz Agulhinha", qty: 2, expires: "2027-05-10", zone: "pantry" }
];

const rawShipmentData = [
  "LEITE01|Leite Integral|6|2026-12-15|fridge",
  "FEIJAO03|Feijão Preto|3|2027-02-28|pantry",
  "MACA04|Maçã Fuji|0|2026-10-25|fridge",
  "BISCOITO05|Biscoito Salgado|2|2027-01-10",
  "LEITE01|Leite Integral|2|2026-12-15|fridge"
];

const pantrySafeCopy = clonePantry(currentPantry);
const parsedShipment = parseShipment(rawShipmentData);
const plannedActions = planRestock(pantrySafeCopy, parsedShipment);
const finalReport = groupByZone(plannedActions);

console.log(finalReport);