# Redacción Curso "Git y GitHub desde Cero a Experto 

Documento creado para llevar la redacción del curso de git y github no lista de comandos. 


## Introducción
En esta introducción al curso, el instructor expresa su agradecimiento a los estudiantes por inscribirse y se compromete a hacer que su experiencia de aprendizaje sea enriquecedora.
### Importante 
Se enfatiza la importancia de la comunicación, invitando a los estudiantes a plantear dudas o preguntas relacionadas con el contenido del curso. Se menciona que, debido al alto volumen de consultas, solo podrá responder a cuestiones directamente vinculadas al curso. Se sugiere a los estudiantes que esperen a avanzar un poco más antes de calificar el curso.
### Contenido
Sin embargo, si deciden calificarlo en las primeras etapas, se les pide que consideren dejar una calificación positiva, ya que esto afecta la visibilidad y el éxito del curso. En caso de que un estudiante sienta la necesidad de dejar una reseña negativa, se le anima a incluir comentarios constructivos para ayudar al instructor a mejorar el curso. El instructor concluye reafirmando su entusiasmo por ser parte del viaje educativo de los estudiantes y les motiva a seguir adelante con su aprendizaje.


## Instalaciones necesarias
En este módulo, se presentan las instalaciones necesarias para utilizar Git en diferentes sistemas operativos: Windows, Linux y Mac OS. La correcta instalación es fundamental para que los estudiantes puedan desarrollar sus proyectos eficientemente.
### Instalación de git en windows
Se orienta a los usuarios a buscar Git en el sitio oficial (git-scm.com).
Durante la instalación, se les indica seguir el asistente, “Next” tras “Next”, seleccionando las opciones necesarias como la integración con Windows Explorer y la elección de un editor de texto predeterminado.
Es recomendable elegir Git Bash como su entorno de línea de comandos.
### Instalación de git en Linux
Se sugiere buscar la distribución compatible, como Debian o Ubuntu.
Los estudiantes deben ejecutar un comando en la terminal como superusuario para instalar Git, utilizando apt-get install git.
Se verifica la instalación ejecutando git --version para asegurar que la versión correcta haya sido instalada.
### instalación de git en Mac OS
Se instruye a los usuarios de Mac a utilizar la terminal nativa para la instalación.
Git se puede instalar a través de Homebrew con el comando brew install git o con Xcode Command Line Tools, que incluyen Git.
Se destaca que no se requiere Git Bash, ya que todos los comandos se pueden ejecutar directamente en la terminal de Mac.

## Comenzando con Git
En este módulo, se inicia con los conceptos básicos de Git, mostrando cómo interactuar con archivos, utilizar la terminal y realizar los primeros pasos en un proyecto.Es crucial familiarizarse con los comandos básicos de Git y entender cómo funcionan los commits, moviéndose entre ellos y configurando usuarios. Esto permite un uso efectivo de Git para el control de versiones.
### Con que archivos podemos trabajar en git
Se aclara que Git puede trabajar exclusivamente con archivos de texto plano, lo que incluye la mayoría de los lenguajes de programación, pero no con archivos binarios o de imagen. Esto es esencial para mantener un control efectivo de versiones.
### como usar la terminal de Git
Se explica cómo interactuar con Git a través de la terminal. Los estudiantes deben abrir la terminal donde instalaron Git y comenzar a escribir comandos para gestionar sus proyectos.
cd: Este comando se utiliza para cambiar de directorio. Por ejemplo, cd .. permite regresar al directorio anterior, y cd nombre_del_directorio cambia al directorio especificado.
ls y ls -l: ls muestra los archivos y carpetas en el directorio actual. ls -l proporciona más detalles sobre esos archivos y los presenta en un formato de lista.
cat: Este comando se utiliza para mostrar el contenido de un archivo en la terminal.
history: Muestra la lista de todos los comandos que se han ejecutado en la terminal.
### Comandos Básicos de Git
git init: Inicializa un nuevo repositorio de Git en el directorio actual.
git add <nombre del archivo>: Agrega un archivo especificado al área de staging para un commit.
git commit -m "mensaje": Crea un commit con los cambios añadidos y un mensaje descriptivo.
git status: Muestra el estado de los archivos en el repositorio, informando sobre cambios que han sido añadidos o no.
git log: Muestra el historial de commits, permitiendo a los usuarios ver los cambios realizados.
### Error al hacer un commit
Se aborda cómo resolver problemas comunes al intentar hacer un commit. Es esencial fijarse en los mensajes de error y asegurarse de haber agregado archivos al área de staging antes de intentar hacer un commit.
### Como moverse entre los commits
Se introduce el comando git checkout, que permite a los usuarios navegar entre distintos commits utilizando el hash del commit deseado. Esto es útil para revisar versiones anteriores de un proyecto.
### Configurar usuario y email de git (Introducción a las ramas)
Se incluye la configuración inicial de Git con:
git config --global user.name "Tu Nombre": Establece el nombre de usuario.
git config --global user.email "tu.email@ejemplo.com": Define el correo electrónico asociado al usuario.

## Comenzando con un Proyecto
En este módulo, se realizan exploraciones más profundas sobre cómo gestionar proyectos en Git, incluyendo la visualización de cambios y commits, y la introducción a las ramas.
### Ver modificaciones en los archivos
Para ver las modificaciones en los archivos, se puede utilizar el comando git diff, que muestra las diferencias entre el estado actual del archivo y la última versión confirmada. Esto ayuda a identificar qué cambios se han realizado antes de agregar o confirmar.
### Como hacer commits multilinea y salir de vi/Vim
Para realizar un commit con un mensaje de varias líneas en Vim:
Escribe git commit.
Presiona i para entrar en modo de insertar.
Redacta tu mensaje; puedes usar saltos de línea para agregar más información.
Presiona Esc, luego escribe :wq para guardar y salir de Vim. Esto confirma el commit con el mensaje completo entre líneas.
### Ver diferencias entre commits
El comando git diff <commit1> <commit2> permite comparar los cambios entre dos commits específicos. Esto es útil para analizar lo que ha cambiado entre versiones y puede ayudar a tomar decisiones sobre el código.
### Recapitulación de lo aprendido e introducción a las ramas. 
En esta sección se repasan los comandos esenciales aprendidos hasta ahora, así como la importancia de manejar correctamente los commits y diferencias. Se introduce el concepto de ramas en Git, esenciales para el trabajo colaborativo y manejo de los desarrollos paralelos. La creación de ramas se puede realizar con git branch <nombre de la rama>, y para cambiar a una rama específica se usa git checkout <nombre de la rama>.

## Comenzando con las ramas
En este módulo, se introducen conceptos fundamentales sobre el trabajo con ramas en Git, su funcionamiento, y cómo manejar cambios a nivel de commits.
**Importante**
Entender cómo funcionan las ramas y los comandos para manejar commits es esencial para el flujo de trabajo en proyectos colaborativos.
### ¿Qué son las Ramas y como Funcionan?
Las ramas son una forma de separar el trabajo dentro de un repositorio, permitiendo el desarrollo paralelo. Cada rama puede contener cambios independientes de la rama principal (usualmente llamada master o main). Cuando se crea una nueva rama, esta hereda el historial de commits de la rama base, permitiendo experimentar sin afectar el trabajo en la rama principal.
### Moverse entre Commits de la Misma Rama
Para navegar entre los distintos commits dentro de la misma rama, se utiliza el comando git checkout <hash_del_commit>. Esto permite a los usuarios revisar versiones anteriores del proyecto. También es posible usar git log para ver el historial de commits y sus correspondientes hashes.
### Git Reset
El comando git reset permite deshacer cambios en el área de staging o moverse hacia un commit anterior. Existen dos formatos principales:
git reset --soft <hash_del_commit>: Este comando mueve el puntero de la rama al commit especificado, manteniendo los cambios en el área de staging.
git reset --hard <hash_del_commit>: Esto mueve el puntero también, pero borra permanentemente todos los cambios en el área de trabajo y staging, dejándolo exactamente como estaba en el commit especificado. Se debe usar con precaución, ya que no hay forma de recuperar los cambios que se descartan con este comando.

## Repositorios remotos en un proyecto real
### Empezando con el proyecto
### Repositorios remotos comienzo
### Creando nuestras primeras Ramas
### Moverse entre ramas y ver los cambios
### hacer merge entre ramas
### Especificaciones para hacer Merge
### Solución de conflctos al hacer merge

## Comenzando con GitHub
### Primeros pasos en GitHub
### Crear un repositorio remoto
### Solucionando los Errores
### Creación de repositorio remoto y solución de posibles errores
### Haciendo push en github y solución de errores

## Flujo de trabajo real
### Haciendo cambios en GitHub y trayendolos al repositorio local
### Como eliminar un repositorio local (Si se creó por error)

## mejorando la seguridad de nuestros repositorios
### Uso de llaves publicas y privadas
### Conexión a GitHub por SSH
### Configurando SSH Partes 1 y 2
### Haciendo commits con SSH
### Solución del Problema
### Configuración final de GitHub

## uso de Tags y Alias
### Creación de Tags
### Como eliminar un Alias
### Uso de Tags
### Eliminar, Agregar y borrar tags

## Trabajando con multiples ramas en github
### Hacer push de otras ramas de github
### AGregando ramas a github

## Agregar Colaboradores a Github
### Agregando colaboradores en GitHub
### Colaborando en el proyecto (dos personas en distintas computadoras)
### Como trabajar en remoto (ejemplo real)
### Flujo de trabajo con varias personas en GitHub
