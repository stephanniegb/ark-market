import type { PropsWithClassName } from "@/lib/utils";

import { cn, formatUnits } from "@ark-market/ui/lib/utils";

import EtherIcon from "./icons/ether-icon";

interface PriceTagProps {
  price: number | bigint;
}
export function PriceTag({
  className,
  price,
}: PropsWithClassName<PriceTagProps>) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center gap-1 rounded-xs bg-secondary pl-1.5 pr-3",
        className,
      )}
    >
      <EtherIcon className="size-5" />
      <p className="whitespace-nowrap">
        {formatUnits(price, 18)}
        <span className="text-muted-foreground"> ETH</span>
      </p>
    </div>
  );
}
