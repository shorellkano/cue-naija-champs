declare module "@paystack/inline-js" {
  export interface PaystackCustomField {
    display_name: string;
    variable_name: string;
    value: string;
  }

  export interface PaystackTransactionOptions {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    reference?: string;
    metadata?: {
      custom_fields?: PaystackCustomField[];
    };
    onSuccess?: (transaction: { reference: string }) => void;
    onCancel?: () => void;
    onError?: (error: unknown) => void;
  }

  export default class PaystackPop {
    newTransaction(options: PaystackTransactionOptions): void;
  }
}