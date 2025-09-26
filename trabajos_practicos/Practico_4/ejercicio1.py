
lista_numeros = [1,2,3,5,6,7,9];    """""falta el 4 y 4l 8"""

print (lista_numeros)

banderaIteracion = "si"

while (banderaIteracion == "si"): 

    numeroUsuario = -1;

    banderaPresencia = 0

    while (numeroUsuario < 0 or numeroUsuario > 9): 
        print ("ingrese un numero que este entre 0 y 9")
        numeroUsuario = int (input())

        if (numeroUsuario < 0 or numeroUsuario > 9 ):
            print ("el numero que escojio no esta permitido, vulva a intentarlo")
            continue
        else:
            break

    for numero in lista_numeros:
        if (numero == numeroUsuario):
            banderaPresencia = 1
            break

    if (banderaPresencia == 1):
        print (f"el numero {numeroUsuario} esta presente en la lista")
    else:
        print (f"el numero {numeroUsuario} NO esta presente en la lista")


    while (True):
        print ("¿Desea volver a cargar otro numero? si/no")
        banderaIteracion = input ().lower()

        if (banderaIteracion == "si" or banderaIteracion == "no"):
            break
        else:
            print ("valor invalido")
            continue
    







    
        
    
    

    






