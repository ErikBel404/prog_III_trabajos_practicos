class Instrumento:
    def __init__(self, id_instrumento, precio, tipo):
        self.id = id_instrumento
        self.precio = precio
        self.tipo = tipo  # Percusión, Viento o Cuerda

    def __str__(self):
        return f"ID: {self.id} | Precio: ${self.precio} | Tipo: {self.tipo}"


class Sucursal:
    def __init__(self, nombre):
        self.nombre = nombre
        self.instrumentos = []

    def agregar_instrumento(self, instrumento):
        self.instrumentos.append(instrumento)

    def listarInstrumentos(self):
        print(f"\nInstrumentos en sucursal {self.nombre}:")
        for inst in self.instrumentos:
            print(inst)

    def instrumentosPorTipo(self, tipo):
        resultado = []
        for inst in self.instrumentos:
            if inst.tipo.lower() == tipo.lower():
                resultado.append(inst)
        return resultado

    def borrarInstrumento(self, id_instrumento):
        for inst in self.instrumentos:
            if inst.id == id_instrumento:
                self.instrumentos.remove(inst)
                print(f"Instrumento {id_instrumento} eliminado de {self.nombre}.")
                return True
        print(f"Instrumento {id_instrumento} no encontrado en {self.nombre}.")
        return False

    def porcInstrumentosPorTipo(self):
        total = len(self.instrumentos)
        if total == 0:
            return {"Percusión": 0, "Viento": 0, "Cuerda": 0}

        conteo = {"Percusión": 0, "Viento": 0, "Cuerda": 0}
        for inst in self.instrumentos:
            if inst.tipo in conteo:
                conteo[inst.tipo] += 1

        return {tipo: (cantidad / total) * 100 for tipo, cantidad in conteo.items()}


# ----------------- Desde aca estoy lo que hago es crear y probar todos los metodos jajajaj -----------------
if __name__ == "__main__":
    # Creo cada sucursal
    sucursal1 = Sucursal("Centro")
    sucursal2 = Sucursal("Norte")

    # creo y agrago varios instrumentos
    sucursal1.agregar_instrumento(Instrumento("P001", 50000, "Percusión"))
    sucursal1.agregar_instrumento(Instrumento("C001", 70000, "Cuerda"))
    sucursal1.agregar_instrumento(Instrumento("V001", 60000, "Viento"))
    sucursal1.agregar_instrumento(Instrumento("C002", 80000, "Cuerda"))

    sucursal2.agregar_instrumento(Instrumento("P002", 45000, "Percusión"))
    sucursal2.agregar_instrumento(Instrumento("V002", 55000, "Viento"))

    # Impimo las lista

    sucursal1.listarInstrumentos()
    sucursal2.listarInstrumentos()

    # filtro e imprimo las listas

    print("\nInstrumentos de cuerda en sucursal Centro:")
    for inst in sucursal1.instrumentosPorTipo("Cuerda"):
        print(inst)

    # Borro un istrumento
    sucursal1.borrarInstrumento("C001")
    sucursal1.listarInstrumentos()

    # Imprimo porcentaje por tipo de instrumento
    print("\nPorcentajes en sucursal Centro:")
    print(sucursal1.porcInstrumentosPorTipo())
