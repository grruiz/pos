import {
  BarChart2,
  Layout,
  LogOut,
  Package,
  PanelRight,
  ShoppingCart,
  Users,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const menuItems = [
  { id: "dashboard", nameKey: "menu.dashboard", icon: Layout },
  { id: "mesas", nameKey: "menu.tables", icon: Utensils },
  { id: "punto-venta", nameKey: "menu.pointOfSale", icon: ShoppingCart },
  { id: "ventas", nameKey: "menu.sales", icon: BarChart2 },
  { id: "inventario", nameKey: "menu.inventory", icon: Package },
  { id: "personal", nameKey: "menu.staff", icon: Users },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("dashboard");
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    console.log(`Navegando a: ${itemId}`);
  };

  return (
    <>
      <div
        className={`bg-white border-r border-gray-200 flex flex-col h-full transition-all duration-300 ease-in-out ${
          expanded ? "w-60" : "w-16"
        }`}
      >
        <div className="py-3 px-4 flex items-center justify-start">
          <p className="text-2xl font-medium truncate">Burguer Jardin</p>
        </div>
        <div className="flex-1 py-2 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full flex items-center ${
                    expanded ? "justify-start gap-x-2" : "justify-center"
                  } text-sm font-medium rounded-lg px-3 py-2 transition-all 
                    ${
                      activeItem === item.id
                        ? "text-black bg-gray-100 font-medium"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    }`}
                  onClick={() => handleItemClick(item.id)}
                  aria-current={activeItem === item.id ? "page" : undefined}
                >
                  <item.icon
                    size={18}
                    strokeWidth={1.75}
                    className={
                      activeItem === item.id ? "text-black" : "text-gray-500"
                    }
                  />
                  <span
                    className="transition-all duration-300 overflow-hidden whitespace-nowrap"
                    style={{
                      maxWidth: expanded ? "160px" : "0px",
                      opacity: expanded ? 1 : 0,
                      visibility: expanded ? "visible" : "hidden",
                    }}
                  >
                    {t(item.nameKey)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 mt-auto">
          <button
            className="flex items-center w-full p-2 border border-gray-200 rounded transition-colors justify-center text-gray-700 hover:bg-gray-100 hover:text-black hover:border-gray-300"
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              fontSize: "14px",
              fontWeight: "400",
              letterSpacing: "-0.1px",
            }}
          >
            <LogOut
              size={16}
              className={expanded ? "mr-2" : ""}
              strokeWidth={1.75}
            />
            <span
              className="whitespace-nowrap transition-all duration-300 ease-in-out overflow-hidden"
              style={{
                maxWidth: expanded ? "160px" : "0px",
                opacity: expanded ? 1 : 0,
                visibility: expanded ? "visible" : "hidden",
              }}
            >
              Cerrar sesión
            </span>
          </button>
        </div>
      </div>
      <button
        onClick={toggleSidebar}
        className="flex gap-x-2 text-sm font-medium rounded-lg px-3 py-5 transition-all text-gray-600 max-h-fit"
      >
        <PanelRight size={18} />
      </button>
    </>
  );
};

export default Sidebar;
