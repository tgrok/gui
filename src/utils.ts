const dayjs = require('dayjs')

export const dateFormat = (fmt: String, date: Date) => {
  if (!date) {
    date = new Date()
  }
  return dayjs(date).format(fmt)
}

export const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const timestamp = () => {
  return Number.parseInt(((new Date() as any) / 1000).toFixed(), 10);
};

export const isNumeric = (n: any) => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export const parseJson = (json: string | object) => {
  if (typeof json === 'object') {
    return json;
  }
  try {
    return JSON.parse(json);
  } catch (e) {
    // tslint:disable-next-line no-console
    console.error(e);
    return void 0;
  }
};
