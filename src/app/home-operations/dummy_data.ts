export const allEodDummy = {
  shiftEnd: {
    paging: {
      page: 1,
      totalItems: 3000,
      showingItemsCount: 10,
      totalPage: 10,
    },
    content: [
      {
        id: 'test',
        shiftNo: 'test',
        dayNo: 'test',
        openTime: 'test',
        closeTime: 'test',
        status: 'Open',
      },
      {
        id: 'test',
        shiftNo: 'test',
        dayNo: 'test',
        openTime: 'test',
        closeTime: 'test',
        status: 'Closed',
      },
    ],
  },
  dayEnd: {
    paging: {
      page: 1,
      totalItems: 3000,
      showingItemsCount: 10,
      totalPage: 10,
    },
    content: [
      {
        dayId: 'test',
        openDateTime: 'test',
        closeDateTime: 'test',
        status: 'Closed',
      },
      {
        dayId: 'test',
        openDateTime: 'test',
        closeDateTime: 'test',
        status: 'Open',
      },
    ],
  },
};
export const allTtRecipientsDummy = {
  invoice: {
    paging: {
      page: 1,
      totalItems: 3000,
      showingItemsCount: 10,
      totalPage: 10,
    },
    content: [
      {
        invId: 'test',
        invoiceNo: 'test',
        invoiceDate: 'test',
        ttNumber: 'test',
        supplierPoint: 'test',
        invoiceQty: 'test',
      },
      {
        invId: 'test',
        invoiceNo: 'test',
        invoiceDate: 'test',
        ttNumber: 'test',
        supplierPoint: 'test',
        invoiceQty: 'test',
      },
    ],
  },
  deliveryChecklist: [
    {
      id: '01',
      content:
        'Only one tank-truck is being decanted at the retail outlet at a given the Time ',
      status: 'CHECKED',
    },
    {
      id: '02',
      content:
        'Tank truck is positioned in the demarcated area and area is cordoned off ',
      status: 'CHECK',
    },
  ],
  delivery: {
    paging: {
      page: 1,
      totalItems: 3000,
      showingItemsCount: 10,
      totalPage: 10,
    },
    content: [
      {
        deliveryId: 'test',
        tankNo: 'test',
        startTime: 'test',
        endTime: 'test',
        startVolume: 'test',
        endVolume: 'test',
        startLevel: 'test',
        endLevel: 'test',
        netVolume: 'test',
        status: 'test',
      },
    ],
  },
};
export const allPaymentModeDummy = {
  paging: {
    page: 1,
    totalItems: 3000,
    showingItemsCount: 10,
    totalPage: 10,
  },
  content: [
    {
      transId: 'test',
      transDate: 'test',
      pump: 'test',
      nozzle: 'test',
      product: 'test',
      price: 'test',
      volume: 'test',
      amount: 'test',
      startTime: 'test',
      endTime: 'test',
      paymentType: 'test',
      transaction: 'TESTING',
    },
    {
      transId: 'test',
      transDate: 'test',
      pump: 'test',
      nozzle: 'test',
      product: 'test',
      price: 'test',
      volume: 'test',
      amount: 'test',
      startTime: 'test',
      endTime: 'test',
      paymentType: 'test',
      transaction: '',
    },
  ],
};
export const allControlsDummy = {
  pumpControl: {
    paging: {
      page: 1,
      totalItems: 3000,
      showingItemsCount: 10,
      totalPage: 10,
    },
    content: [
      {
        id: 'test',
        pumpNo: 'test',
        nozzleNo: 'test',
        mode: 'test',
        pumpMode: 'test',
        presetType: 'test',
        presetValue: 'test',
        presetMop: 'test',
        createdBy: 'test',
        createdDate: 'test',
      },
    ],
  },
  tankControll: {
    paging: {
      page: 1,
      totalItems: 3000,
      showingItemsCount: 10,
      totalPage: 10,
    },
    content: [
      {
        id: 'test',
        tankNo: 'test',
        mode: 'test',
        createdBy: 'test',
        createdDate: 'test',
      },
    ],
  },
};
export const allPriceChangeDummy = {
  paging: {
    page: 1,
    totalItems: 3000,
    showingItemsCount: 10,
    totalPage: 10,
  },
  content: [
    {
      id: 'test',
      gradeNo: 'test',
      gradeName: 'test',
      currentPrice: 'test',
      newPrice: 'test',
      effectiveFrom: 'test',
      effectiveTo: 'test',
      status: 'test',
      performedBy: 'test',
      performedOn: 'test',
    },
  ],
};
export const allTankDensityDummy = {
  paging: {
    page: 1,
    totalItems: 3000,
    showingItemsCount: 10,
    totalPage: 10,
  },
  content: [
    {
      tankNo: 'test',
      productCode: 'test',
      productName: 'test',
      dateTime: 'test',
      density: 'test',
      temperature: 'test',
      densityAtC: 'test',
    },
  ],
};
export const allMonolithConfigurationDummy = {};
export const allCustomerConfigurationDummy = {
  customers: {
    paging: {
      page: 1,
      totalItems: 3000,
      showingItemsCount: 10,
      totalPage: 10,
    },
    content: [
      {
        id: 'test',
        code: 'test',
        name: 'test',
        contactPerson: 'test',
        contactNumber: 'test',
        gstNumber: 'test',
        address: 'test',
      },
    ],
  },
  customersVechicle: {
    paging: {
      page: 1,
      totalItems: 3000,
      showingItemsCount: 10,
      totalPage: 10,
    },
    content: [
      {
        id: 'test',
        code: 'test',
        name: 'test',
        vehicleNumber: 'test',
        vehicleType: 'test',
        rfIdTagNumber: 'test',
      },
    ],
  },
};
export const allSupplierConfigurationDummy = {
  paging: {
    page: 1,
    totalItems: 3000,
    showingItemsCount: 10,
    totalPage: 10,
  },
  content: [
    {
      id: '123',
      name: 'Arya Stark',
      contactPerson: 'Net Stark',
      contactNumber: '9898989898',
      gstNumber: 'GST!@#',
      status: 'Active',
    },
    {
      id: '456',
      name: 'Jon Snow',
      contactPerson: 'Net Stark',
      contactNumber: '9898989898',
      gstNumber: 'GST!@#',
      status: 'Blocked',
    },
  ],
};
export const allcStoreTransationDummy = {
  paging: {
    page: 1,
    totalItems: 3000,
    showingItemsCount: 10,
    totalPage: 10,
  },
  content: [
    {
      transactionId: 'INV656',
      date: '13 APR 2022',
      customer: 'Joan Ortiz',
      contactNumber: '95125412542',
      total: 'USD 1,21,323',
      status: 'PAID',
    },
  ],
};
export const allAttendandAssign = {
  paging: {
    page: 1,
    totalItems: 3000,
    showingItemsCount: 10,
    totalPage: 10,
  },
  content: [
    {
      shiftNo: '1',
      shiftName: 'First',
      startTime: '00:01:00',
      endTime: '08:00:00',
    },
    {
      shiftNo: '2',
      shiftName: 'First',
      startTime: '00:01:00',
      endTime: '08:00:00',
    },
    {
      shiftNo: '1',
      shiftName: 'First',
      startTime: '00:01:00',
      endTime: '08:00:00',
    },
  ],
};
