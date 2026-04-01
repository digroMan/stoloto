import { ItemField } from './item-field';

export default {
  title: 'component/ItemField',
  component: ItemField,
  tagst: ['autodocs'],
};

export const NoSelected = {
  args: {
    number: 1,
    eventClick: () => {},
    generated: true,
  },
};

export const Selected = {
  args: {
    number: 1,
    eventClick: () => {},
    generated: false,
  },
};
