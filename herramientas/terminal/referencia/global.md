# Terminal: conceptos y comandos globales

Esta carpeta reúne una referencia rápida para trabajar desde la terminal. macOS y Linux suelen usar shells tipo Unix (`zsh`, `bash`), mientras que Windows usa principalmente PowerShell.

## Guías por sistema operativo

- [macOS](MacOS.md): Zsh y herramientas BSD.
- [Linux](Linux.md): Bash y herramientas GNU.
- [Windows](Windows.md): PowerShell y equivalencias de CMD.

## Cómo leer los ejemplos

```text
comando [opcional] <obligatorio>
```

- No escribas los símbolos `< >` ni `[ ]`.
- Pon entre comillas las rutas con espacios: `cd "Mis documentos"`.
- `.` es el directorio actual, `..` el padre y `~` la carpeta personal.
- Las opciones cortas suelen empezar con `-` y las largas con `--`.
- Los comandos y rutas pueden distinguir mayúsculas de minúsculas, especialmente en Linux.

## Ayuda integrada

| Entorno | Ayuda | Buscar comandos |
| --- | --- | --- |
| macOS/Linux | `man <comando>` o `<comando> --help` | `apropos <tema>` |
| PowerShell | `Get-Help <comando>` | `Get-Command *<tema>*` |
| CMD | `<comando> /?` | `help` |

En PowerShell, `Get-Help <comando> -Examples` muestra ejemplos y `-Full` todos los parámetros.

## Operadores compartidos

| Operador | Función | Ejemplo |
| --- | --- | --- |
| `>` | Redirigir y sobrescribir | `comando > salida.txt` |
| `>>` | Redirigir y añadir | `comando >> salida.txt` |
| `2>` | Redirigir errores | `comando 2> errores.txt` |
| `\|` | Enviar la salida a otro comando | `comando1 \| comando2` |
| `&&` | Continuar si hubo éxito | `comando1 && comando2` |

> `>` reemplaza el archivo sin pedir confirmación. En Bash/Zsh, `set -o noclobber` bloquea sobrescrituras accidentales y `set +o noclobber` lo desactiva. PowerShell dispone de `Out-File -NoClobber`.

## Variables de entorno

| Acción | Bash/Zsh | PowerShell |
| --- | --- | --- |
| Consultar | `echo "$NOMBRE"` | `$env:NOMBRE` |
| Crear para la sesión | `export NOMBRE="valor"` | `$env:NOMBRE = "valor"` |
| Listar | `env` | `Get-ChildItem Env:` |
| Eliminar | `unset NOMBRE` | `Remove-Item Env:NOMBRE` |

## Alias

| Acción | Bash/Zsh | PowerShell |
| --- | --- | --- |
| Crear temporal | `alias ll='ls -la'` | `Set-Alias ll Get-ChildItem` |
| Listar | `alias` | `Get-Alias` |
| Consultar uno | `alias ll` | `Get-Alias ll` |
| Eliminar | `unalias ll` | `Remove-Item Alias:ll` |

Los alias simples no manejan argumentos fijos con flexibilidad. Para una operación con opciones o varios pasos conviene crear una función. Cada guía explica cómo hacerlos persistentes.

## SSH: conexión y alias de hosts

```bash
ssh usuario@servidor
ssh -p 2222 usuario@servidor
ssh -i ~/.ssh/id_ed25519 usuario@servidor
```

| Opción | Función |
| --- | --- |
| `-p <puerto>` | Usar un puerto distinto de 22 |
| `-i <archivo>` | Elegir una clave privada |
| `-v` / `-vv` / `-vvv` | Mostrar diagnóstico creciente |
| `-L local:host:puerto` | Crear un túnel local |
| `-J <salto>` | Conectar mediante un servidor intermedio |
| `-t` | Solicitar una terminal remota |

Configuración de `~/.ssh/config` (también válida con OpenSSH para Windows):

```sshconfig
Host miserver
    HostName host.example.com
    User usuario
    Port 22
    IdentityFile ~/.ssh/id_ed25519
```

Después basta `ssh miserver`. Si no se define `User`, SSH intenta usar el usuario local, una causa común de rechazos de contraseña.

En macOS/Linux protege la configuración y la clave privada:

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/config ~/.ssh/id_ed25519
```

## Buenas prácticas

- Comprueba tu ubicación antes de mover, copiar o borrar.
- Revisa el contenido antes de sobrescribir y respalda configuraciones.
- Prueba primero sin opciones recursivas o forzadas (`-r`, `-f`, `-Force`).
- Evita `sudo` o una consola como administrador si no son necesarios.
