export function dateToPersian(date) {
  const persianDate = new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return persianDate;
}
