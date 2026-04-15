export const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
};

export const formatEngineDisplacement = (displacement) => {
  return `${displacement} куб. см`;
};

export const formatPower = (power) => {
  return power;
};