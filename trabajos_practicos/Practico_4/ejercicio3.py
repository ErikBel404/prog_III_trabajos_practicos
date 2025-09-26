
usuario_info = dict()
n=0
banderaWhile = 1

while (banderaWhile == 1):
    n = n+1

    identificador = "usuario"+ str (n)

    print ("Ingrese el nombre del Usuarion")
    nombre = input ()

    print ("Ingrese la edad del Usuarion")
    edad = int (input ())

    print ("Ingrese la direccion del Usuarion")
    direccion = input ()

    print ("Ingrese el telefono del Usuarion")
    telefono = int (input ())

    usuario_info [identificador] = {
        "nombre":nombre,
        "edad":edad,
        "direccion": direccion,
        "telefono": telefono
    }

    while (True):
        print ("¿Desea cargar otro Usuario?")

        otroUsuario = input().lower()

        if (otroUsuario == "si"):
            break
        elif (otroUsuario == "no"):
            banderaWhile = 0
            break
        else:
            print ("opcion invalida")
            continue

        

print ("\n Informacion de los Usuarios \n")
for key1, value1 in usuario_info.items():
    print (f"Usuario {key1}")

    for key2, value2 in value1.items():
        print(f"{key2}: {value2}")
    
    print ("\n")




