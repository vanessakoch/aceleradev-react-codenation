export const full_date = (date) => {

  let full_date = new Date(date);
  let options = { day: "2-digit", month: "2-digit", year: "numeric" };

  return full_date.toLocaleDateString("pt-BR", options);

};

