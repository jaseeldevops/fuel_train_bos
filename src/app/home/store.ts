export const drowerIconList = [
  {
    // this title is to show in thr side bar
    title: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    // this title is to show the top title of the selected
    fullTitle: 'Dashboard',
  },
  {
    // this title is to show in thr side bar
    title: 'Calender',
    icon: 'calender',
    path: 'calender',
    // this title is to show the top title of the selected
    fullTitle: 'Calender',
  },
  {
    title: 'Monitoring',
    icon: 'monitoring',
    path: 'monitoring',
    fullTitle: 'Operations Monitor',
  },
  {
    title: 'Operations',
    icon: 'operations',
    path: 'operations',
    fullTitle: '',
    subTitles: [
      { title: 'EOD', path: 'eod' },
      { title: 'TT Recipients', path: 'ttRecipients' },
      { title: 'Payment Mode', path: 'paymentMode' },
      { title: 'Controls', path: 'controls' },
      { title: 'Price Change', path: 'priceChange' },
      { title: 'Tank Density', path: 'tankDensity' },
      { title: 'Monolith Configuration', path: 'monolithConfiguration' },
      { title: 'Customer Configuration', path: 'customerConfiguration' },
      { title: 'Supplier Configuration', path: 'supplierConfiguration' },
      { title: 'C-Store Transation', path: 'cStoreTransation' },
    ],
  },
  {
    title: 'Reports',
    icon: 'reports',
    path: 'reports',
    fullTitle: '',
  },
  {
    title: 'Purchase',
    icon: 'purchase',
    path: 'purchase',
    fullTitle: '',
  },
  {
    title: 'Expenses',
    icon: 'expenses',
    path: 'expenses',
    fullTitle: '',
  },
  {
    title: 'Inventory',
    icon: 'inventory',
    path: 'inventory',
    fullTitle: '',
  },
  {
    title: 'Cash & Bank',
    icon: 'cashAndBank',
    path: 'cashAndBank',
    fullTitle: '',
  },
  {
    title: 'Staff Master',
    icon: 'staffMaster',
    path: 'staffMaster',
    fullTitle: '',
  },
  {
    title: 'Configuration',
    icon: 'configuration',
    path: 'configuration',
    fullTitle: '',
    subTitles: [
      { title: 'HOS Exceptional Log', path: 'hosExceptionalLog' },
      { title: 'Site Configuration', path: 'siteConfiguration' },
      { title: 'Device Configuration', path: 'deviceConfiguration' },
      { title: 'Software Configuration', path: 'softwareConfiguration' },
      { title: 'User Management', path: 'userManagement' },
      { title: 'Alarm & Interlock', path: 'alarmInterlock' },
      { title: 'Maintenance', path: 'maintenance' },
      { title: 'Log Viewer', path: 'logViewer' },
    ],
  },
];
