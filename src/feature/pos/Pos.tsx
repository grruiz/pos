import { Search } from "lucide-react";
import TabsDemo from "../../components/tabs/Tabs";

function Pos() {
  return (
    <section className="py-3">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">
          Punto de venta
        </h1>
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-sm border border-gray-300 bg-card text-card-foreground mt-4 md:col-span-2 block w-full">
          <header className="flex flex-col space-y-1.5 pt-6 pl-6">
            <h3 className="text-xl font-semibold leading-none tracking-tight">
              Menú
            </h3>
            <p className="text-sm">
              Selecciona los productos para agregar a la orden
            </p>
          </header>
          <div className="pt-6 pl-6 pr-6 overflow-auto">
            <div className="relative pt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-1 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                className="h-10 w-full rounded-sm border border-gray-300 border-input bg-input pl-9 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Buscar productos"
              />
            </div>
          </div>
          <TabsDemo />
        </article>
        <article>Other side</article>
      </section>
    </section>
  );
}

export default Pos;
