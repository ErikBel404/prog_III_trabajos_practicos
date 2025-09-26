
"""""Insizo 1 y 2 creo los conjuntos """
usuarios = {"Marcela","David", "Elvira","Juan", "Marcos"}
administradores = {"Juan", "Marcela"}

"""muestro los conjuntos"""
print (usuarios)
print(administradores)

"""Insizo 3 elimino a juan de administradores"""""
administradores.discard("Juan")
print (administradores)

"""""Insizo 4"""
administradores.add("Marcos")
print (administradores)

"""""Insizo 5 """
print (f"Los usuarios que son administradores son {usuarios.intersection(administradores)} ")
print(f"Los usuarios puros son: {usuarios.difference(administradores)}")

