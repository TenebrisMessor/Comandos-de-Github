#Importar librerías.
import multiprocessing
import numpy as np

#Definir función
def operaciones_rango(limite_inferior: int, limite_superior: int) -> None:

    """
    realiza una diversidad de operaciones a un grupo de numeros para obtener un unico valor
    """

    #Calcular 
    valor = 0
    for i in range(limite_inferior, limite_superior + 1):
        valor += np.sqrt((i * 3) + ((i + 15) / 10))

    print(f"El valor obtenido en el rango [{limite_inferior}, {limite_superior}] = {valor}")

if __name__ == "__main__":

    #Delcazrar rangos de valores
    limites_inferiores = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]
    limites_superiores = [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

    #Crear e Inicializar los Procesos 
    for i in range(len(limites_inferiores)):
        p = multiprocessing.Process(target=operaciones_rango, kwargs={"limite_inferior": limites_inferiores[i],
                                                                      "limite_superior": limites_superiores[i]})

        p.start()
# Recordatorio: 

# - Los procesos resultan especialmente útiles para actividades que demandan una alta eficiencia computacional. 
# - Cada Proceso representa una insancia independiente del intérprete de Python, ejecutándose en su propio espacio de memoria.
# - En la mayoría de los casos, deberíamos limitar el número de procesos en ejecución al número de núcleos disponibles en nuestra computadora de lo contrario el sistema operativo podria empezar a terminar procesos que se están ejecutando 
