"use client";

import * as React from "react";
import {
  OrderItem,
  WhatsAppOrderDrawer,
} from "@/components/home/whatsapp-order-drawer";
import { MenuItem } from "@/data/menu-data";

interface OrderDrawerContextType {
  isOrderDrawerOpen: boolean;
  openOrderDrawer: (items?: OrderItem[]) => void;
  closeOrderDrawer: () => void;
  items: OrderItem[];
  setItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
  updateQuantity: (id: string, delta: number) => void;
  addItemFromMenu: (menuItem: MenuItem) => void;
  removeItem: (id: string) => void;
  clearOrder: () => void;
}

const OrderDrawerContext = React.createContext<OrderDrawerContextType | null>(
  null
);

const DEFAULT_ORDER_ITEMS: OrderItem[] = [];

export function OrderDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [items, setItems] = React.useState<OrderItem[]>(DEFAULT_ORDER_ITEMS);

  const openOrderDrawer = React.useCallback((newItems?: OrderItem[]) => {
    if (newItems && newItems.length > 0) {
      setItems((prev) => {
        const updated = [...prev];
        for (const item of newItems) {
          const existingIndex = updated.findIndex((i) => i.id === item.id);
          if (existingIndex > -1) {
            updated[existingIndex] = {
              ...updated[existingIndex],
              quantity: updated[existingIndex].quantity + (item.quantity || 1),
            };
          } else {
            updated.push(item);
          }
        }
        return updated;
      });
    }
    setIsOpen(true);
  }, []);

  const closeOrderDrawer = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const clearOrder = React.useCallback(() => {
    setItems([]);
  }, []);

  const updateQuantity = React.useCallback((id: string, delta: number) => {
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
  }, []);

  const addItemFromMenu = React.useCallback((menuItem: MenuItem) => {
    const numericPrice =
      parseFloat(menuItem.price.replace("RM ", "")) || 8.5;
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
  }, []);

  const removeItem = React.useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const contextValue = React.useMemo(
    () => ({
      isOrderDrawerOpen: isOpen,
      openOrderDrawer,
      closeOrderDrawer,
      items,
      setItems,
      updateQuantity,
      addItemFromMenu,
      removeItem,
      clearOrder,
    }),
    [
      isOpen,
      openOrderDrawer,
      closeOrderDrawer,
      items,
      updateQuantity,
      addItemFromMenu,
      removeItem,
      clearOrder,
    ]
  );

  return (
    <OrderDrawerContext.Provider value={contextValue}>
      {children}
      <WhatsAppOrderDrawer
        isOpen={isOpen}
        onClose={closeOrderDrawer}
        items={items}
        onUpdateQuantity={updateQuantity}
        onAddItem={addItemFromMenu}
        onRemoveItem={removeItem}
      />
    </OrderDrawerContext.Provider>
  );
}

export function useOrderDrawer() {
  const context = React.useContext(OrderDrawerContext);
  if (!context) {
    return {
      isOrderDrawerOpen: false,
      openOrderDrawer: () => {},
      closeOrderDrawer: () => {},
      items: DEFAULT_ORDER_ITEMS,
      setItems: () => {},
      updateQuantity: () => {},
      addItemFromMenu: () => {},
      removeItem: () => {},
      clearOrder: () => {},
    };
  }
  return context;
}
