"use client";

import * as React from "react";
import {
  X,
  PhoneCall,
  Plus,
  Minus,
  Trash2,
  Clock,
  Sparkles,
  MapPin,
  ShoppingBag,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MENU_ITEMS } from "@/data/menu-data";
import { cn } from "@/lib/utils";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
}

interface WhatsAppOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialItems?: OrderItem[];
}

export function WhatsAppOrderDrawer({
  isOpen,
  onClose,
  initialItems = [],
}: WhatsAppOrderDrawerProps) {
  const [items, setItems] = React.useState<OrderItem[]>([
    {
      id: "gula-apong-ais-kacang",
      name: "Signature Gula Apong Ais Kacang",
      price: 8.5,
      quantity: 1,
    },
  ]);

  const [diningMode, setDiningMode] = React.useState<"dine-in" | "takeaway">("takeaway");
  const [pickupTime, setPickupTime] = React.useState("ASAP (15-20 mins)");
  const [specialInstructions, setSpecialInstructions] = React.useState("");

  // Sync initialItems if provided
  React.useEffect(() => {
    if (initialItems && initialItems.length > 0) {
      setItems(initialItems);
    }
  }, [initialItems]);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as OrderItem[]
    );
  };

  const addItemFromMenu = (menuItem: (typeof MENU_ITEMS)[0]) => {
    const numericPrice = parseFloat(menuItem.price.replace("RM ", "")) || 8.5;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === menuItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === menuItem.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: menuItem.id,
          name: menuItem.name,
          price: numericPrice,
          quantity: 1,
        },
      ];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const totalPrice = React.useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} (RM ${(item.price * item.quantity).toFixed(2)})`
      )
      .join("\n");

    const modeText =
      diningMode === "dine-in"
        ? "🥢 Dine-In at 7 Jalan Gambier"
        : "🚶 Riverfront Takeaway (Waterfront Stroll)";

    const message = `🍧 *ORDER TICKET — IG AIS KACANG GAMBIER* 🍧
-------------------------------------------
📍 *Flagship:* 7, Jalan Gambier, Kuching Waterfront
🕒 *Preferred Time:* ${pickupTime}
🍽️ *Dining Mode:* ${modeText}

*Order Items:*
${itemsList || "• (No items selected)"}

${specialInstructions ? `📝 *Notes:* ${specialInstructions}\n` : ""}💰 *Estimated Total:* RM ${totalPrice.toFixed(2)}
-------------------------------------------
Hello IG Ais Krim team! Please confirm my order ticket.`;

    return encodeURIComponent(message);
  };

  const handleSendOrder = () => {
    const encoded = generateWhatsAppMessage();
    window.open(`https://wa.me/60168859657?text=${encoded}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs z-50 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-stone-950 text-white z-50 shadow-2xl border-l border-amber-500/20 flex flex-col justify-between animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-serif font-black text-xs">
              IG
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white">
                WhatsApp Quick Order
              </h3>
              <p className="text-[10px] text-amber-400 font-medium">
                7, Jalan Gambier • Kuching Waterfront
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-900 transition-colors"
            aria-label="Close Drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Order Items List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400">
              <span>Your Selected Items</span>
              <span className="text-stone-400 font-normal">
                {items.reduce((a, b) => a + b.quantity, 0)} items
              </span>
            </div>

            {items.length === 0 ? (
              <div className="p-6 rounded-2xl bg-stone-900/60 border border-dashed border-stone-800 text-center text-stone-400 text-xs">
                Your order is currently empty. Add your favorite dessert below!
              </div>
            ) : (
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-xs"
                  >
                    <div className="flex-1 pr-2">
                      <p className="font-serif font-bold text-stone-100 line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-amber-400 font-mono mt-0.5">
                        RM {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-stone-700 rounded-lg bg-stone-950">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 text-stone-400 hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 font-mono font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 text-stone-400 hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-stone-500 hover:text-rose-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Add Menu Favorites */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
              Quick Add Kuching Favorites:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {MENU_ITEMS.slice(0, 4).map((m) => (
                <button
                  key={m.id}
                  onClick={() => addItemFromMenu(m)}
                  className="text-xs px-2.5 py-1 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-500/50 hover:bg-stone-800 text-stone-300 transition-colors flex items-center gap-1"
                >
                  <Plus className="h-3 w-3 text-amber-400" />
                  <span>{m.name.split(" ")[0]}</span>
                  <span className="text-amber-400/90">{m.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dining / Pickup Mode */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
              Dining Experience:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setDiningMode("takeaway")}
                className={cn(
                  "p-3 rounded-xl border text-xs font-semibold text-center transition-all",
                  diningMode === "takeaway"
                    ? "bg-amber-950/60 border-amber-500 text-white font-bold"
                    : "bg-stone-900 border-stone-800 text-stone-400 hover:text-white"
                )}
              >
                🚶 Riverfront Stroll (Takeaway)
              </button>
              <button
                onClick={() => setDiningMode("dine-in")}
                className={cn(
                  "p-3 rounded-xl border text-xs font-semibold text-center transition-all",
                  diningMode === "dine-in"
                    ? "bg-amber-950/60 border-amber-500 text-white font-bold"
                    : "bg-stone-900 border-stone-800 text-stone-400 hover:text-white"
                )}
              >
                🥢 Dine-In (7 Jalan Gambier)
              </button>
            </div>
          </div>

          {/* Timing Selection */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
              Preferred Pickup / Serving Time:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                "ASAP (15-20 mins)",
                "7:30 PM (Sunset Dusk)",
                "8:30 PM (Fountain Show)",
                "9:30 PM (Night Lantern)",
              ].map((time) => (
                <button
                  key={time}
                  onClick={() => setPickupTime(time)}
                  className={cn(
                    "p-2.5 rounded-xl border text-left transition-all",
                    pickupTime === time
                      ? "bg-amber-600/30 border-amber-500 text-white font-bold"
                      : "bg-stone-900 border-stone-800 text-stone-400 hover:text-white"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
              Special Instructions (Optional):
            </span>
            <input
              type="text"
              placeholder="e.g. Extra Gula Apong, pack ice separately, less sweet..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full text-xs p-3 rounded-xl bg-stone-900 border border-stone-800 text-white focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Footer with Total & Send Action */}
        <div className="p-5 border-t border-stone-800 bg-stone-950/90 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-stone-400 uppercase tracking-wider font-bold">
              Estimated Total:
            </span>
            <span className="font-serif text-2xl font-black text-amber-400">
              RM {totalPrice.toFixed(2)}
            </span>
          </div>

          <Button
            onClick={handleSendOrder}
            disabled={items.length === 0}
            size="lg"
            className="w-full rounded-full py-3.5 font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-950 justify-center gap-2 disabled:opacity-40"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Send Order Ticket to WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </Button>

          <p className="text-[10px] text-center text-stone-500">
            Sends your structured order directly to IG Ais Kacang (+60 16-885 9657)
          </p>
        </div>
      </div>
    </>
  );
}
