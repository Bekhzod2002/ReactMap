import { AddressSelect } from './AddressSelect/index';

const addresses = {
  address_1: {
    key: 1,
    id: 'address_1',
    location: 'Кубинская улица, 76к3, Санкт-Петербург, 196240',
    bound: [59.84660399, 30.29496392 ],
  },
  address_2: {
    key: 2,
    id: 'address_2',
    location: 'Бухарестская улица, 158, Санкт-Петербург',
    bound: [59.82934196, 30.42423701],
  },
  address_3: {
    key: 3,
    id: 'address_3',
    location: 'Бухарестская улица, 158, Санкт-Петербург',
    bound: [59.82934196, 30.42423701],
  },
  address_4: {
    key: 4,
    id: 'address_4',
    location: 'Загребский бульвар, 45, Санкт-Петербург, 192283',
    bound: [59.82761295, 30.41705607],
  },
  address_5: {
    key: 5,
    id: 'address_5',
    location: 'Дунайский проспект, 34/16, Санкт-Петербург, 192281',
    bound: [59.83567701, 30.38064206],
  },
  address_6: {
    key: 6,
    id: 'address_6',
    location: 'Кубинская улица, 76к3, Санкт-Петербург, 196240',
    bound: [59.84660399, 30/29496392],
  },
  address_7: {
    key: 7,
    id: 'address_7',
    location: 'Кубинская улица, 76к3, Санкт-Петербург, 196240',
    bound: [59.84660399, 30/29496392],
  },
  address_8: {
    key: 8,
    id: 'address_8',
    location:
      'Загребский бульвар, 45, Санкт-Петербург, 192283',
    bound: [59.82761295, 30.41705607],
    //
  },
  address_9: {
    key: 9,
    id: 'address_9',
    location: 'Дунайский проспект, 34/16, Санкт-Петербург, 192281',
    bound: [59.83567701, 30.38064206],
  },
  address_10: {
    key: 10,
    id: 'address_10',
    location: 'Кубинская улица, 76к3, Санкт-Петербург, 196240',
    bound: [59.84660399, 30/29496392],
  },
  address_11: {
    key: 11,
    id: 'address_11',
    location: 'Кубинская улица, 76к3, Санкт-Петербург, 196240',
    bound: [59.84660399, 30/29496392],
  },
  address_12: {
    key: 12,
    id: 'address_12',
    location: 'Бухарестская улица, 158, Санкт-Петербург',
    bound: [59.82934196, 30.42423701],
  },
};

const addressOptions = Object.keys(addresses).map((id) => ({
  ...addresses[id],
}));

const columns = [
  {
    title: '№',
    dataIndex: 'key',
  },
  {
    title: 'Точка погрузки',
    dataIndex: ['loadingPoint', 'location'],
    render: (address, record) => {
      return (
        <AddressSelect
          address={address}
          point={'loadingPoint'}
          application={record}
        />
      );
    },
  },
  {
    title: 'Точка разгрузки',
    dataIndex: ['dropPoint', 'location'],
    render: (address, record) => {
      return (
        <AddressSelect
          address={address}
          point={'dropPoint'}
          application={record}
        />
      );
    },
  },
];

const paginationPosition = { position: ['bottomCenter'] };
const scrollOption = { x: true };
const title = () => 'Заявки на перевозку';

export {
  columns,
  addresses,
  addressOptions,
  paginationPosition,
  scrollOption,
  title,
};
