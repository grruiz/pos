function Pos() {
  return (
    <section className="py-3">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">
          Punto de venta
        </h1>
      </header>
      <article className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <header className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-xl font-semibold leading-none tracking-tight">
            Menú
          </h3>
          <p className="text-sm">
            Selecciona los productos para agregar a la orden
          </p>
        </header>
        <div className="p-4 pt-0 overflow-auto">
          <div className="pt-1">
            <input
              className="h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Buscar productos"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Pos;
