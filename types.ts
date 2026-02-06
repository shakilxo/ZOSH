
export type Language = 'EN' | 'BN';

export interface Service {
  id: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  icon: string;
  color: string;
  subServicesEn: string[];
  subServicesBn: string[];
  image: string;
}

export interface PortfolioItem {
  id: number;
  titleEn: string;
  titleBn: string;
  category: 'Corporate' | 'Concerts' | 'Weddings';
  image: string;
}

export interface Translation {
  [key: string]: {
    EN: string;
    BN: string;
  };
}
