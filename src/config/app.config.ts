interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Sales Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Finance Manager', 'Sales Manager'],
  tenantName: 'Airline',
  applicationName: 'Flight Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read airline information',
    'Read user information',
    'Update own user information',
    'Create new airlines',
  ],
  ownerAbilities: ['Manage user information', 'Manage airline information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/9316f5b7-be9a-4b55-945f-86eb3cb05e87',
};
