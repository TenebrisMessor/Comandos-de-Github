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
En este módulo, se abordan los aspectos clave de trabajar con repositorios remotos en Git, cómo comenzar un proyecto, crear ramas, realizar merges y solucionar conflictos cuando estas operaciones producen problemas.
### Empezando con el proyecto
Para iniciar un proyecto con un repositorio remoto:
Se crea un repositorio vacío en GitHub.
Conectas tu proyecto local al remoto usando:
git remote add origin https://github.com/tu-usuario/mi-primer-proyecto.git: Añade una referencia a tu repositorio remoto.
Para subir los archivos del repositorio local al remoto (si está vacío), utilizas:
git push -u origin main: Esto sube tus commits de la rama main y configura la rama para futuros push y pull.
### Repositorios remotos comienzo
Para verificar que el remoto fue añadido correctamente:
git remote: Lista todos los remotos configurados.
git remote -v: Muestra las URLs de los remotos y confirma la conexión correcta.
### Creando nuestras primeras Ramas
Para crear una nueva rama, se usa:
git branch <nombre_de_la_rama>: Esto crea una nueva rama, y para cambiar a esa rama, se utiliza:
git checkout <nombre_de_la_rama>.
### Moverse entre ramas y ver los cambios
Para visualizar las ramas disponibles, utilizas:
git branch: Muestra todas las ramas en el repositorio. Para confirmar cambios antes de realizar un merge, es recomendable usar git status.
### hacer merge entre ramas
Al realizar un merge de una rama a otra, se usa:
git merge <nombre_de_la_rama>: Combina los cambios de la rama especificada en la rama activa.
### Especificaciones para hacer Merge
Es importante asegurarte de que no haya cambios sin confirmar en tu rama antes de hacer un merge, ya que esto puede causar conflictos.
### Solución de conflctos al hacer merge
Si se generan conflictos durante un merge, Git lo indicará. Deberás editar los archivos en conflicto para resolver las discrepancias y después:
Usa git add <archivo> para marcar el conflicto como resuelto.
Finaliza el merge con git commit.
Este módulo te proporciona las herramientas esenciales para gestionar proyectos de manera efectiva en Git, permitiendo la colaboración y control sobre el código.

## Comenzando con GitHub
En este módulo, aprenderás a trabajar con GitHub, creando repositorios remotos, solucionando errores comunes y haciendo push de tus cambios.
### Primeros pasos en GitHub
Para comenzar, asegúrate de tener una cuenta en GitHub. Desde ahí, podrás explorar la plataforma y familiarizarte con su interfaz de usuario.
### Crear un repositorio remoto
Para crear un nuevo repositorio remoto en GitHub:
Ve a tu perfil de GitHub y haz clic en el botón "New" o "Nuevo".
Completa los campos requeridos como nombre del repositorio y descripción.
Finalmente, haz clic en "Create Repository".
### Solucionando los Errores
Al trabajar con GitHub, es posible que enfrentes errores comunes. Uno frecuente al hacer push es el mensaje:
Code
error: failed to push some refs to 'https://github.com/...' 
Este error se produce porque tu repositorio local está desactualizado respecto al remoto.
### Creación de repositorio remoto y solución de posibles errores
Si al intentar hacer un push recibes el error mencionado:
Actualiza tu repositorio local con el comando:
git pull origin main (o master, según sea el nombre de tu rama).
Resuelve cualquier conflicto si se presenta.
Después de realizar el pull, intenta nuevamente hacer push con:
git push origin main.
### Haciendo push en github y solución de errores
Al hacer push, asegúrate de que tu rama local está al día con la remota. Si aún encuentras errores, revisa la autenticación. Desde agosto de 2021, GitHub ha eliminado la autenticación por contraseña; necesitarás usar un token de acceso personal o SSH para autenticarte. Consulta la documentación de GitHub para más detalles.
Con estos pasos, estarás mejor equipado para manejar repositorios en GitHub y resolver problemas comunes que puedan surgir durante el desarrollo.

## Flujo de trabajo real
En este módulo, aprenderás cómo gestionar el flujo de trabajo real utilizando GitHub, trayendo cambios de GitHub al repositorio local y cómo eliminar un repositorio local si fue creado por error.
### Haciendo cambios en GitHub y trayendolos al repositorio local
Para realizar cambios en GitHub y luego traerlos a tu repositorio local, sigue estos pasos:
Haz cambios en tu repositorio en GitHub desde la interfaz web.
Para traer esos cambios al repositorio local, usa el siguiente comando desde tu terminal en el directorio de tu proyecto:
git pull origin main (o master, dependiendo de tu configuración). Esto descargará y combinará los cambios remotos en tu rama local.
Es importante recordar que siempre debes hacer un pull antes de un push para evitar conflictos entre las versiones.
### Como eliminar un repositorio local (Si se creó por error)
Si has creado un repositorio local por error y deseas eliminarlo, simplemente puedes eliminar la carpeta que contiene el repositorio. Aquí están los pasos:
Asegúrate de que no tienes cambios importantes que necesites guardar.
Desde la terminal o explorador de archivos, navega a la ubicación donde se encuentra el repositorio local.
Usa el siguiente comando para eliminar el repositorio:
En Windows:
rmdir /s /q nombre_del_repositorio
En macOS/Linux:
rm -rf nombre_del_repositorio
Esto eliminará completamente el repositorio local y toda su información. Asegúrate de sustituir nombre_del_repositorio con el nombre real de tu carpeta del repositorio.
Con estos pasos, podrás gestionar eficazmente tus repositorios en GitHub y manejar los errores que puedan surgir durante el flujo de trabajo.

## mejorando la seguridad de nuestros repositorios
En este módulo, aprenderás a mejorar la seguridad de tus repositorios en Git utilizando llaves SSH, cómo conectarte a GitHub mediante SSH, realizar commits y resolver problemas comunes.
### Uso de llaves publicas y privadas
Las llaves públicas y privadas se utilizan para establecer conexiones seguras entre tu máquina local y GitHub. La llave pública se puede compartir y es la que GitHub almacenará, mientras que la llave privada debe mantenerse en secreto.
### Conexión a GitHub por SSH
Para conectarte utilizando SSH, necesitas generar un par de llaves SSH. Esto se realiza mediante el comando:
ssh-keygen -t rsa -b 4096 -C "tu_email@example.com": Este comando genera una nueva llave SSH. Sigue las instrucciones para guardar la llave.
### Configurando SSH Partes 1 y 2
Una vez que hayas generado tu llave, debes agregar la llave pública a tu cuenta de GitHub. Puedes hacer esto copiando el contenido de tu llave pública (generalmente se encuentra en ~/.ssh/id_rsa.pub) y pegándolo en GitHub bajo "Settings" > "SSH and GPG keys" > "New SSH key".
### Haciendo commits con SSH
Una vez que tu llave SSH esté configurada correctamente, puedes realizar push y pull sin que se te pida tu contraseña, utilizando:
git push origin main: Esto sube tus cambios al repositorio remoto mediante SSH, sin necesidad de ingresar credenciales cada vez.
### Solución del Problema
Si encuentras problemas al usar SSH, verifica que tu llave pública está correctamente añadida a tu cuenta de GitHub y que el servicio SSH se está ejecutando en tu máquina. Puedes probar la conexión SSH con el comando:
ssh -T git@github.com: Esto te ayudará a comprobar si la configuración fue exitosa.
### Configuración final de GitHub
Finalmente, asegúrate de que Git esté configurado correctamente para identificarte. Usa los siguientes comandos:
git config --global user.name "Tu Nombre"
git config --global user.email "tu_email@example.com"
Con estos pasos, habrás mejorado la seguridad de tus repositorios y establecido una conexión confiable entre tu entorno local y GitHub.

## uso de Tags y Alias
En este módulo, aprenderás sobre el uso de tags y alias en Git, así como la creación y eliminación de estos.Los tags son utilizados para marcar puntos específicos en la historia de un proyecto, como versiones liberadas. Los alias son comandos personalizados que simplifican tu flujo de trabajo en Git.
### Creación de Tags
Los tags se utilizan para marcar versiones específicas de tu proyecto. Para crear un tag anotado, puedes usar el siguiente comando:
git tag -a v1.0 -m "Primera versión": Esto crea un tag llamado v1.0 con un mensaje descriptivo.
### Como eliminar un Alias
Si necesitas eliminar un alias que has creado, puedes hacerlo mediante el siguiente comando:
git config --global --unset alias.nombre_del_alias: Sustituye nombre_del_alias con el alias que deseas eliminar.
### Uso de Tags
Los tags son esenciales para documentar versiones importantes de tu proyecto. Puedes ver todos los tags existentes con el comando:
git tag
Además, para visualizar el mensaje asociado con un tag, usa:
git show v1.0: Esto te mostrará información relevante sobre el tag, incluyendo el commit al que apunta y el mensaje que dejaste al crear el tag.
### Eliminar, Agregar y borrar tags
Para eliminar un tag localmente, utiliza:
git tag -d v1.0: Esto elimina el tag v1.0 de tu repositorio local.
Si deseas eliminar el tag del repositorio remoto también, usa:
git push --delete origin v1.0
Para agregar un nuevo tag después de realizar cambios, utiliza el comando de tag que se mencionó anteriormente, seguido por un push para enviarlo al remoto:
git push origin v1.0: Esto envía el tag al repositorio remoto.
Con estos pasos, podrás gestionar eficazmente tags y alias en tus repositorios, facilitando la organización y el control de versiones en tus proyectos.

## Trabajando con multiples ramas en github
En este módulo, aprenderás a trabajar con múltiples ramas en GitHub, incluyendo cómo hacer push de otras ramas y agregar ramas a tu repositorio.
### Hacer push de otras ramas de github
Para enviar los cambios de una rama específica a GitHub, utiliza el siguiente comando:
git push origin nombre_de_la_rama: Cambia nombre_de_la_rama por el nombre de la rama que deseas enviar. Esto subirá tus cambios de esa rama al repositorio remoto.
### Agregando ramas a github
Para agregar una nueva rama a tu repositorio en GitHub, primero crea la rama localmente y luego haz el push. Los comandos son:
Crear una nueva rama:
git branch nueva_rama: Esto crea una nueva rama llamada nueva_rama.
Cambiar a la nueva rama:
git checkout nueva_rama: Cambia a la nueva rama que acabas de crear.
Hacer push de la nueva rama al remoto:
git push -u origin nueva_rama: Este comando envía la nueva rama al repositorio remoto y establece un seguimiento entre tu rama local y la remota.

## Agregar Colaboradores a Github
En este modulo se muestra como colaborar. 
### Agregando colaboradores en GitHub
La persona que colabora sin problema puede hacer un clon del repositorio si este es publico. Puede hacer cambios, pero al hacer push desde su cuenta dice que esta denegado. Por ende se tiene que agregar el otro usuario en los settings del repositorio en manage access usando email o nombre de github una vez aceptada la invitación este puede comenzar a hacer cambios en el repo. 
### Colaborando en el proyecto (dos personas en distintas computadoras)
cuando alguien hace un cambio desde otra computadora debes hacer pull si vas a comenzar a trabajar en el ya editado. 
### Como trabajar en remoto (ejemplo real)
No se recomienda agregar imagenes por el peso que esto podría agregar al repo. 
### Flujo de trabajo con varias personas en GitHub

## ¿Qué son y como hacer Pull Request?
### Como funcionan los pull request y para que sirven
### Uso de pull request y merge request 1 y 2

## Como colaborar en proyectos Opensource
### Colaborando en un Proyecto OpenSource 1 y 2
### Continuación con el fork y actualizaciones
### Participa en el proyecto

## Importantes 
### Uso de Gitignore
### uso de README

## Github en Varias Plataformas
### GitHub Pages
### GitHub Móvil
