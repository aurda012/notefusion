// import { SubscriptionModalProvider } from '@/lib/providers/subscription-modal-provider';
// import { getActiveProductsWithPrice } from '@/lib/supabase/queries';

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  // const { data: products, error } = await getActiveProductsWithPrice();
  // if (error) throw new Error();
  return (
    <main className="flex over-hidden h-screen">
      {/* <SubscriptionModalProvider products={products}> */}
      {children}
      {/* </SubscriptionModalProvider> */}
    </main>
  );
};

export default Layout;
