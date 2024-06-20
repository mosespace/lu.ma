export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export interface EventCardProps {
  id?: number;
  image: string;
  title: string;
  slug: string;
  description?: string;
  location?: string;
  price: string;
  category: string;
  when: string;
  view?: string;
}

export interface ICategory {
  id: string;
  title: string;
  color: string;
  image: string;
}

export interface IService {
  id: string;
  title: string;
  image: any;
  description: string;
}
