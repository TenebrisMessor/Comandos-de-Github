# Terminal en Linux

Los ejemplos usan Bash y utilidades GNU, habituales en Ubuntu, Debian, Fedora y otras distribuciones. Alpine/iSH usa BusyBox y puede ofrecer menos opciones.

## Navegación y archivos

| Comando | Función | Opciones o ejemplos útiles |
| --- | --- | --- |
| `pwd` | Mostrar la ruta actual | `-P` evita enlaces simbólicos |
| `ls [ruta]` | Listar archivos | `-l` detalles, `-a` ocultos, `-h` tamaños, `--color=auto` |
| `cd <ruta>` | Cambiar de directorio | `cd ..`, `cd ~`, `cd -` vuelve al anterior |
| `mkdir <dir>` | Crear directorio | `-p` crea padres, `-m 755` fija permisos |
| `touch <archivo>` | Crear un archivo vacío o actualizar su fecha | `touch notas.md` |
| `cp <origen> <destino>` | Copiar | `-r` directorios, `-i` confirmar, `-a` preservar atributos |
| `mv <origen> <destino>` | Mover o renombrar | `-i` confirmar, `-n` no sobrescribir |
| `rm <archivo>` | Eliminar | `-i` confirmar, `-r` directorios, `-f` forzar |
| `ln -s <objetivo> <enlace>` | Crear enlace simbólico | `ln -s /ruta/app app` |
| `file <archivo>` | Identificar el tipo | `file programa` |

> `rm` no usa la papelera. Comprueba la ruta antes de usar opciones recursivas o forzadas.

## Consultar y buscar

| Comando | Función | Opciones útiles |
| --- | --- | --- |
| `cat <archivo>` | Imprimir un archivo corto | `-n` numera líneas |
| `less <archivo>` | Leer por páginas | `/texto` busca, `n` repite, `q` sale |
| `head <archivo>` | Mostrar el inicio | `-n 20` muestra 20 líneas |
| `tail <archivo>` | Mostrar el final | `-n 20`, `-f` sigue cambios |
| `grep <patrón> [ruta]` | Buscar texto | `-i` ignora caso, `-n` líneas, `-r` recursivo, `-E` regex |
| `find <ruta> ...` | Buscar archivos | `find . -type f -name '*.md'` |
| `wc <archivo>` | Contar | `-l` líneas, `-w` palabras, `-c` bytes |
| `sort <archivo>` | Ordenar líneas | `-n` numérico, `-r` inverso, `-u` únicas |
| `cut` | Extraer campos | `cut -d, -f1 datos.csv` |

## Procesos, disco y red

| Comando | Función | Opciones o ejemplos útiles |
| --- | --- | --- |
| `ps aux` | Ver todos los procesos | Muestra usuario, PID, CPU y memoria |
| `top` | Monitor interactivo | `htop` es una alternativa instalable |
| `kill <PID>` | Terminar un proceso | `-9` fuerza como último recurso |
| `jobs` | Listar tareas del shell | `fg %1` trae al frente; `bg %1` continúa detrás |
| `df -h` | Espacio de discos | `-h` usa unidades legibles |
| `du -sh <ruta>` | Tamaño total de una ruta | `-s` resumen, `-h` legible |
| `free -h` | Uso de memoria | `-h` usa unidades legibles |
| `ip addr` | Ver interfaces y direcciones | `ip route` muestra rutas |
| `ping <host>` | Comprobar conectividad | `-c 4` limita intentos |
| `curl <URL>` | Solicitar o descargar | `-I` cabeceras, `-L` redirecciones, `-o` guarda |
| `ss -tulpn` | Ver puertos y sockets | TCP, UDP, escucha, proceso y formato numérico |

## Permisos y privilegios

```bash
chmod u+x script.sh
chmod 644 archivo
chown usuario:grupo ruta  # puede requerir sudo
sudo comando
```

En `chmod`, `r=4`, `w=2` y `x=1`; `755` equivale a `rwxr-xr-x`.

## Gestores de paquetes

| Distribución | Actualizar o comprobar | Instalar | Eliminar |
| --- | --- | --- | --- |
| Debian/Ubuntu | `sudo apt update` | `sudo apt install <paquete>` | `sudo apt remove <paquete>` |
| Fedora | `sudo dnf check-update` | `sudo dnf install <paquete>` | `sudo dnf remove <paquete>` |
| Arch | `sudo pacman -Syu` | `sudo pacman -S <paquete>` | `sudo pacman -R <paquete>` |
| Alpine/iSH | `apk update` | `apk add <paquete>` | `apk del <paquete>` |

## Bash, alias y variables

La configuración interactiva suele estar en `~/.bashrc`:

```bash
alias ll='ls -lah'
export EDITOR='nvim'
```

Aplica cambios con `source ~/.bashrc`. En Alpine/iSH con `ash`, normalmente se usa `~/.profile` y se recarga con `. ~/.profile`. Lista alias con `alias` y comprueba el shell mediante `echo "$SHELL"`.

## Edición y respaldo

GNU `sed` puede editar en el sitio con o sin respaldo:

```bash
sed -i.bak 's/viejo/nuevo/g' archivo.txt # crea archivo.txt.bak
sed -i 's/viejo/nuevo/g' archivo.txt     # sin respaldo
```

Respaldo sencillo con fecha:

```bash
mkdir -p ~/respaldos
cp ~/.bashrc ~/respaldos/bashrc_"$(date +%Y%m%d_%H%M%S)"
```

## Atajos

| Atajo | Acción |
| --- | --- |
| `Ctrl+C` | Interrumpir el comando actual |
| `Ctrl+D` | Cerrar la entrada o salir |
| `Ctrl+L` | Limpiar la pantalla |
| `Ctrl+A` / `Ctrl+E` | Inicio/final de la línea |
| `Ctrl+R` | Buscar en el historial |
| `Tab` | Autocompletar |
| `Ctrl+H` | Mostrar ocultos en muchos gestores gráficos |
