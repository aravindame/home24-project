export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};

export type CategoryArticle = {
  articles: Article[];
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};
