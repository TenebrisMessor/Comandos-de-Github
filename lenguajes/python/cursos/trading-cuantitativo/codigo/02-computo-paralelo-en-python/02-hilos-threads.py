#importar librerias

import threading
import time

#Definir funciones
def func1(segundos: float) -> None:
    """
    Funcion No. 1 que se ejecutara en paralelo
    """

    while True: 
        print("Función 1 te saluda")
        time.sleep(segundos)

def func2(segundos: float) -> None:

    """
    Función No. 2 que se ejecutará en paralelo
    """

    while True:
        print("Función 2 te saluda")
        time.sleep(segundos)

#Inicializar hilos

t0 = threading.Thread(target=func1, kwargs={"segundos": 3}, name="Hilo 1")
t1 = threading.Thread(target=func2, kwargs={"segundos": 3}, name="Hilo 2")
t0.start()
t1.start()

#Variables informativas
print("Nombre del primer Hilo:", t0.name)
print("Mombre del Segundo Hilo:", t1.name)
print("¿Está activo el Primer Hilo?:", t0.is_alive())
print("¿Está activo el Segundo Hilo?:", t1.is_alive())

#Recordatorio
# - Dentro de un Porceso, se ejecutan los hilos pudiendo un proceso albergar uno varios hilos de ejecución.
# - Cada hilo dentro de un proceso comparte un espacio de memoria compun permitiendoles acceder y modificar las mismas variables y datos.
# - A cada hilo se le puede asignar un identificador único. 

