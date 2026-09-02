#Definir clase "Padre" o "base"
class Animal: 
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def sonido(self):
        pass
    
    def informacion(self): 
        print("Me llamo:", self.nombre, "y tengo:", self.edad, "años")

#Clase Hija

class Perro(Animal):

    def __init__(self, nombre, edad, raza):
        #Inicializar Super Clase o Clase "Base"
        Animal.__init__(self,nombre,edad)
        self.raza = raza

    def sonido(self)
        return "!Guau!"

class Gato(Animal):

    def __init__(self, nombre, edad, color):
        #Inicializar Super Clase
        super().__init__(nombre, edad)
        self.color = color

    def sonido(self)
        return "Miau"

#Creación de instancias de clases

perro1 = Perro(nombre="Alska", edad=3, raza ="Husky")
gato1 = Gato(nombre="Whiskers", edad=5, color="Siames")

#Llamar a sus métodos
print(f"{perro1.nombre} dice: {perro1.sonido()}")
print(f"{gato1.nombre} dice: {gato1.sonido()}")

#Recordatorio:
# - La herencia en python fomenta la reutilización de código al heredar atributos y métodos, evitando duplicación. 
# y facilitando la modularidad y escalabilidad
# - Las subclases amplian o adaptan el comportamiento de las super clases mediante la adición sobre escritura de atributos y métodos, birndando estabilidad y la modularidad. 
