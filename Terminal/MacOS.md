# Terminal en macOS

macOS usa Zsh como shell predeterminado en versiones actuales. Comparte muchos comandos con Linux, pero incluye herramientas BSD y algunas opciones cambian.

## Navegación y archivos

| Comando | Función | Opciones o ejemplos útiles |
| --- | --- | --- |
| `pwd` | Mostrar la ruta actual | `-P` evita enlaces simbólicos |
| `ls [ruta]` | Listar archivos | `-l` detalles, `-a` ocultos, `-h` tamaños, `-G` colores |
| `cd <ruta>` | Cambiar de directorio | `cd ..`, `cd ~`, `cd -` vuelve al anterior |
| `mkdir <dir>` | Crear directorio | `-p` crea también los padres |
| `touch <archivo>` | Crear un archivo vacío o actualizar su fecha | `touch notas.md` |
| `cp <origen> <destino>` | Copiar | `-R` directorios, `-i` confirmar, `-p` conservar atributos |
| `mv <origen> <destino>` | Mover o renombrar | `-i` confirmar, `-n` no sobrescribir |
| `rm <archivo>` | Eliminar | `-i` confirmar, `-R` directorios, `-f` forzar |
| `open <ruta>` | Abrir con la app predeterminada | `open .`, `open -a "App" archivo` |
| `file <archivo>` | Identificar el tipo de archivo | `file imagen.png` |

> `rm` no usa la papelera. Revisa la ruta antes de combinar `-R` y `-f`.

## Consultar y buscar

| Comando | Función | Opciones útiles |
| --- | --- | --- |
| `cat <archivo>` | Imprimir un archivo corto | `-n` numera líneas |
| `less <archivo>` | Leer por páginas | `/texto` busca, `n` repite, `q` sale |
| `head <archivo>` | Mostrar el inicio | `-n 20` muestra 20 líneas |
| `tail <archivo>` | Mostrar el final | `-n 20`, `-f` sigue cambios |
| `grep <patrón> [ruta]` | Buscar texto | `-i` ignora caso, `-n` líneas, `-R` recursivo, `-E` regex |
| `find <ruta> ...` | Buscar archivos | `find . -type f -name '*.md'` |
| `wc <archivo>` | Contar | `-l` líneas, `-w` palabras, `-c` bytes |

## Procesos, disco y red

| Comando | Función | Opciones o ejemplos útiles |
| --- | --- | --- |
| `ps aux` | Ver todos los procesos | `ps` admite otros formatos |
| `top` | Monitor interactivo | `-o cpu` ordena por CPU |
| `kill <PID>` | Terminar un proceso | `-9` fuerza como último recurso |
| `df -h` | Espacio de discos | `-h` usa unidades legibles |
| `du -sh <ruta>` | Tamaño total de una ruta | `-s` resumen, `-h` legible |
| `ping <host>` | Comprobar conectividad | `-c 4` limita intentos |
| `curl <URL>` | Solicitar o descargar | `-I` cabeceras, `-L` redirecciones, `-o` guarda |
| `lsof -i :<puerto>` | Ver qué usa un puerto | `lsof -i :3000` |
| `ifconfig` | Mostrar interfaces | `ifconfig en0` |

## Permisos y privilegios

```bash
chmod u+x script.sh
chmod 644 archivo
chown usuario:grupo ruta  # puede requerir sudo
sudo comando
```

En `chmod`, `r=4`, `w=2` y `x=1`; `755` equivale a `rwxr-xr-x`.

## Zsh, alias y variables

La configuración personal suele estar en `~/.zshrc`:

```zsh
alias ll='ls -lah'
export EDITOR='nvim'
```

Aplica cambios con `source ~/.zshrc`. Comprueba el shell mediante `echo "$SHELL"` y lista alias con `alias`.

## `sed` en macOS

El `sed` BSD exige indicar una extensión de respaldo al editar en el sitio:

```bash
sed -i '.bak' 's/viejo/nuevo/g' archivo.txt # conserva archivo.txt.bak
sed -i '' 's/viejo/nuevo/g' archivo.txt     # sin respaldo
```

## DNS local y Bonjour

```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
dns-sd -B _ssh._tcp local
```

Los dos primeros limpian y reinician la resolución DNS. El último busca servicios SSH anunciados mediante Bonjour/mDNS y continúa hasta presionar `Ctrl+C`.

## Atajos

| Atajo | Acción |
| --- | --- |
| `Ctrl+C` | Interrumpir el comando actual |
| `Ctrl+D` | Cerrar la entrada o salir |
| `Ctrl+L` | Limpiar la pantalla |
| `Ctrl+A` / `Ctrl+E` | Inicio/final de la línea |
| `Ctrl+R` | Buscar en el historial |
| `Tab` | Autocompletar |
| `Cmd+Shift+.` | Mostrar archivos ocultos en Finder |
