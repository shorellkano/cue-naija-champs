import { useCallback, useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { TOURNAMENT } from "@/lib/constants";

export interface PaystackCustomer {
  email: string;
  fullName: string;
  tshirtSize: string;
  experienceLevel: string;
}

export interface PaystackResult {
  reference: string;
}

export function usePaystack() {
  const [isProcessing, setIsProcessing] = useState(false);

  const pay = useCallback(
    (
      customer: PaystackCustomer,
      onSuccess: (result: PaystackResult) => void,
      onCancel?: () => void,
    ) => {
      const key = TOURNAMENT.paystack.publicKey;
      const reference = `CNM-${Date.now()}`;

      if (!key) {
        // No key configured yet, simulate success so the flow stays testable.
        onSuccess({ reference });
        return;
      }

      setIsProcessing(true);
      const popup = new PaystackPop();
      popup.newTransaction({
        key,
        email: customer.email,
        amount: TOURNAMENT.registration.entryFeeKobo,
        currency: "NGN",
        reference,
        metadata: {
          custom_fields: [
            {
              display_name: "Player Name",
              variable_name: "player_name",
              value: customer.fullName,
            },
            {
              display_name: "T-Shirt Size",
              variable_name: "tshirt_size",
              value: customer.tshirtSize,
            },
            {
              display_name: "Experience",
              variable_name: "experience",
              value: customer.experienceLevel,
            },
          ],
        },
        onSuccess: (transaction: { reference: string }) => {
          setIsProcessing(false);
          onSuccess({ reference: transaction.reference });
        },
        onCancel: () => {
          setIsProcessing(false);
          onCancel?.();
        },
      });
    },
    [],
  );

  return { pay, isProcessing };
}