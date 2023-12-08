export type GetAllArgs = {
  page?: number;
  pageSize?: number;
};

export type GetAllResponse = {
  content: DigimonList[];
  pageable: {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    previousPage: string;
    nextPage: string;
  };
};

export type DigimonList = {
  id: string;
  name: string;
  href: string;
  image: string;
};

export type Digimon = {
  id: number;
  images: {
    href: string;
    transparent: boolean;
  }[];
  levels: {
    id: number;
    level: string;
  }[];
  name: string;
  attributes: {
    id: number;
    attribute: string;
  }[];
  types: {
    id: number;
    type: string;
  }[];
};
