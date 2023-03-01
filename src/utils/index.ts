export const getYYYYMMDD = (date: string) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = ("0" + (1 + newDate.getMonth())).slice(-2);
  const day = ("0" + newDate.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};

export const randomNum = (max: number) => Math.floor(Math.random() * max + 1);
