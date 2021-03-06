type Currency = 'NGN' | 'GHS' | 'USD';

type PaymentChannels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money';

type Bearer = 'account' | 'subaccount';

export interface PaystackProps {
  publicKey: string;
  email: string;
  amount: number;
  reference?: string;
  metadata?: {custom_field: Record<string, string>[]};
  currency?: Currency;
  channels?: PaymentChannels[];
  label?: string;
  plan?: string;
  quantity?: number;
  subaccount?: string;
  transaction_charge?: number;
  bearer?: Bearer;
  'data-custom-button'?: string;
}
