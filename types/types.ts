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
  date?: Date;
}

export interface ICategory {
  id: string;
  title: string;
  color: string;
  image: string;
}
export interface IDBCategory {
  name: string;
  image: string;
  userId: string;
}

export interface IService {
  id: string;
  title: string;
  image: any;
  description: string;
}

export interface IEvent {
  step: number;
  formData: {
    name: string;
    slug: string;
    maxParticipants: string;
    eventType?: string;
    ticketType?: string;
    photo?: string;
    categoryId?: string;
    tags?: { id: string; text: string }[];
    country?: string;
    state?: string;
    address1?: string;
    address2?: string;
    email?: string;
    tel?: string;
    link?: string;
    ticketPrice?: string;
    shortDescription?: string;
    userId?: string;
    location?: string;
    description?: string;
    posters: string[];
    startDate: Date;
    endDate: Date;
  };
}
export interface IEventCreation {
  step: number;
  formData: {
    name: string;
    slug: string;
    categoryId: string;
    maxParticipants: string;
    eventType: string;
    ticketType: string;
    photo: string;
    country: string;
    state: string;
    address1: string;
    address2?: string;
    link?: string;
    ticketPrice?: string;
    email: string;
    tel: string;
    description: string;
    tags: any;
    startDate: Date;
    endDate: Date;
    location?: string;
    userId: string;
    posters: string[];
  };
}
