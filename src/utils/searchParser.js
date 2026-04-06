import { destinations } from "@/data/destinations";

export function parseSearchQuery(rawQuery) {
  const fallback = {
    raw: rawQuery || "",
    origin: "Kuala Lumpur",
    originCode: "KUL",
    destinationSlug: "tokyo",
    days: 5,
    budget: 5000,
    travelers: 1
  };

  if (!rawQuery) {
    return fallback;
  }

  const query = rawQuery.toLowerCase();

  const matchedDestination =
    destinations.find((item) => query.includes(item.city.toLowerCase())) || destinations[0];

  const budgetMatch = query.match(/(rm|myr)?\s?(\d{3,6})/i);
  const daysMatch = query.match(/(\d{1,2})\s?(days|day|nights|night)/i);
  const travelerMatch = query.match(/(\d{1,2})\s?(pax|traveler|travellers|people|person)/i);

  return {
    ...fallback,
    raw: rawQuery,
    destinationSlug: matchedDestination.slug,
    budget: budgetMatch ? Number(budgetMatch[2]) : fallback.budget,
    days: daysMatch ? Number(daysMatch[1]) : fallback.days,
    travelers: travelerMatch ? Number(travelerMatch[1]) : fallback.travelers
  };
}
