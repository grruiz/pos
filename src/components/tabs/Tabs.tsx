import React, { useState, ReactNode, ReactElement } from "react";

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: ReactNode;
}

interface TabsListProps {
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  className?: string;
  children: ReactNode;
}

interface TabsTriggerProps {
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  value: string;
  className?: string;
  children: ReactNode;
}

interface TabsContentProps {
  activeTab?: string;
  className?: string;
  children: ReactNode;
}

interface TabsPanelProps {
  activeTab?: string;
  value: string;
  className?: string;
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ defaultValue, className, children }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue || "");

  // Extract TabsList and TabsContent from children
  const tabsList = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === TabsList
  ) as ReactElement<TabsListProps> | undefined;

  const tabsContent = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === TabsContent
  ) as ReactElement<TabsContentProps> | undefined;

  if (!tabsList || !tabsContent) {
    return null;
  }

  // Clone TabsList with activeTab and setActiveTab props
  const enhancedTabsList = React.cloneElement(tabsList, {
    activeTab,
    setActiveTab,
  });

  // Clone TabsContent with activeTab prop
  const enhancedTabsContent = React.cloneElement(tabsContent, {
    activeTab,
  });

  return (
    <div className={`w-full ${className || ""}`}>
      {enhancedTabsList}
      {enhancedTabsContent}
    </div>
  );
};

const TabsList: React.FC<TabsListProps> = ({
  activeTab,
  setActiveTab,
  className,
  children,
}) => {
  // Clone TabsTrigger children with activeTab and setActiveTab props
  const enhancedTriggers = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === TabsTrigger) {
      return React.cloneElement(child as ReactElement<TabsTriggerProps>, {
        activeTab,
        setActiveTab,
      });
    }
    return child;
  });

  return (
    <div
      className={`w-full flex flex-wrap bg-gray-100 p-1 rounded-md ${
        className || ""
      }`}
    >
      {enhancedTriggers}
    </div>
  );
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  activeTab,
  setActiveTab,
  value,
  className,
  children,
}) => {
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => setActiveTab && setActiveTab(value)}
      className={`
        flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium
        transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        ${
          isActive
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-500 hover:text-gray-900"
        }
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({
  activeTab,
  className,
  children,
}) => {
  // Clone TabsPanel children with activeTab prop
  const enhancedPanels = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === TabsPanel) {
      return React.cloneElement(child as ReactElement<TabsPanelProps>, {
        activeTab,
      });
    }
    return child;
  });

  return (
    <div className={`mt-2 overflow-hidden ${className || ""}`}>
      {enhancedPanels}
    </div>
  );
};

const TabsPanel: React.FC<TabsPanelProps> = ({
  activeTab,
  value,
  className,
  children,
}) => {
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={`rounded-md p-4 overflow-auto max-h-[calc(100vh-200px)] ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

// Demo component that uses the Tabs system
const TabsDemo: React.FC = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">Todos</TabsTrigger>
        <TabsTrigger value="entrees">Entrantes</TabsTrigger>
        <TabsTrigger value="sandwiches_bread">Bocadillos</TabsTrigger>
        <TabsTrigger value="salads">Ensaladas</TabsTrigger>
        <TabsTrigger value="hamburger">Hamburguesas</TabsTrigger>
        <TabsTrigger value="hotdog">Perritos</TabsTrigger>
        <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
        <TabsTrigger value="sandwiches">Sandwich</TabsTrigger>
        <TabsTrigger value="kebabs">Kebabs</TabsTrigger>
      </TabsList>
      <TabsContent>
        <TabsPanel value="all">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Todos los productos</h3>
            <p className="text-sm text-gray-500">
              Aquí puedes ver todos los productos disponibles.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value="entrees">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Entrantes</h3>
            <p className="text-sm text-gray-500">
              Nuestra selección de entrantes.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value="sandwiches_bread">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Bocadillos</h3>
            <p className="text-sm text-gray-500">
              Bocadillos frescos recién hechos.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value="salads">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Ensaladas</h3>
            <p className="text-sm text-gray-500">
              Ensaladas frescas y saludables.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value="hamburger">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Hamburguesas</h3>
            <p className="text-sm text-gray-500">
              Nuestras deliciosas hamburguesas.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value="hotdog">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Perritos</h3>
            <p className="text-sm text-gray-500">
              Perritos calientes con diversos ingredientes.
            </p>
          </div>
        </TabsPanel>
        <TabsPanel value="pizzas">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Pizzas</h3>
            <p className="text-sm text-gray-500">Pizzas con masa casera.</p>
          </div>
        </TabsPanel>
        <TabsPanel value="sandwiches">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Sandwich</h3>
            <p className="text-sm text-gray-500">Sándwiches variados.</p>
          </div>
        </TabsPanel>
        <TabsPanel value="kebabs">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Kebabs</h3>
            <p className="text-sm text-gray-500">Kebabs tradicionales.</p>
          </div>
        </TabsPanel>
      </TabsContent>
    </Tabs>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsPanel };
export default TabsDemo;
