# Hilos Vs Procesos

|Aspecto|Hilos en Python (threading)|Procesos en Python (multiprocessing)|
|-------|---------------------------|------------------------------------|
|Creación|Se crean utilizandeo el módulo 'threading'|Se crean utilizando el módulo 'multiprocessing'|
|Comunicación|Comparten memoria y datos, lo que puede facilitar la comunicación directa|La comunicación entre procesos se realiza a través de mecanismos como objetos de memoria compartida, entre otros (colas, tuberías, eventos)|
|Uso Recomendado|Útiles para tareas concurrentes con bloqueos fuertes, operaciones de entrada/salida o cuando se desea coordinar la ejecución de múltiples tareas en un solo proceso|Recomendados para operaciones intensivas de CPU, donde se busca aprovehar el paralelismo real|
|Limitaciones|Los programas se ejecutan a medida que otros esperan (No es 10% Cómputo Paralelo)|Mayor consumo de recursos en comparacioón con hilos debido a la separación de espacio de memoria. La creación de procesos puede ser más costosa|


