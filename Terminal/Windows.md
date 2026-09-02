# Terminal en Windows

Esta guía usa PowerShell, que trabaja con objetos en vez de limitarse a texto. Al final aparecen equivalencias básicas de CMD.

## Navegación y archivos en PowerShell

| Comando | Alias | Función | Parámetros o ejemplos útiles |
| --- | --- | --- | --- |
| `Get-Location` | `pwd` | Mostrar la ruta actual | `Get-Location` |
| `Get-ChildItem [ruta]` | `ls`, `dir` | Listar elementos | `-Force` ocultos, `-Recurse`, `-File`, `-Directory` |
| `Set-Location <ruta>` | `cd` | Cambiar de directorio | `cd ..`, `cd ~`, `cd C:\` |
| `New-Item <ruta>` | `ni` | Crear elementos | `-ItemType File` o `Directory`, `-Force` |
| `New-Item -ItemType Directory <ruta>` | `mkdir` | Crear directorio | `mkdir carpeta` |
| `Copy-Item <origen> <destino>` | `cp`, `copy` | Copiar | `-Recurse`, `-Force`, `-WhatIf` |
| `Move-Item <origen> <destino>` | `mv`, `move` | Mover o renombrar | `-Force`, `-WhatIf` |
| `Rename-Item <ruta> <nombre>` | `ren` | Renombrar | `-NewName`, `-WhatIf` |
| `Remove-Item <ruta>` | `rm`, `del` | Eliminar | `-Recurse`, `-Force`, `-Confirm`, `-WhatIf` |
| `Invoke-Item <ruta>` | `ii` | Abrir con la app predeterminada | `ii .` abre el Explorador |

> Agrega `-WhatIf` para previsualizar operaciones delicadas. `Remove-Item` normalmente no usa la Papelera de reciclaje.

## Consultar y buscar

| Comando | Alias | Función | Parámetros útiles |
| --- | --- | --- | --- |
| `Get-Content <archivo>` | `gc`, `cat`, `type` | Leer contenido | `-Head 20`, `-Tail 20`, `-Wait`, `-Raw` |
| `Select-String <patrón> <ruta>` | `sls` | Buscar texto | `-CaseSensitive`, `-SimpleMatch`, `-Context 2,2` |
| `Where-Object { ... }` | `where`, `?` | Filtrar objetos | `Get-Process \| Where-Object CPU -gt 10` |
| `Select-Object` | `select` | Elegir propiedades o filas | `-First`, `-Last`, `-Unique` |
| `Sort-Object` | `sort` | Ordenar objetos | `-Property`, `-Descending`, `-Unique` |
| `Measure-Object` | `measure` | Contar o calcular | `-Line`, `-Word`, `-Sum`, `-Average` |

Buscar archivos Markdown recursivamente:

```powershell
Get-ChildItem . -Filter *.md -File -Recurse
```

## Procesos, disco y red

| Comando | Función | Parámetros o ejemplos útiles |
| --- | --- | --- |
| `Get-Process` | Listar procesos | `-Name code` |
| `Stop-Process` | Terminar un proceso | `-Id`, `-Name`, `-Force`, `-WhatIf` |
| `Get-Service` | Listar servicios | `-Name`, `-DisplayName` |
| `Get-PSDrive` | Ver unidades y espacio | `-PSProvider FileSystem` |
| `Test-Connection <host>` | Comprobar conectividad | `-Count 4`, `-Quiet` |
| `Test-NetConnection <host>` | Probar red o puerto | `-Port 443`, `-InformationLevel Detailed` |
| `Get-NetIPAddress` | Ver direcciones | `-AddressFamily IPv4` |
| `Invoke-WebRequest <URL>` | Solicitar o descargar | `-OutFile archivo`, `-Method Head` |
| `Get-NetTCPConnection` | Ver conexiones TCP | `-State Listen`, `-LocalPort 3000` |

`curl.exe` invoca cURL directamente. En Windows PowerShell antiguo, `curl` puede ser un alias con comportamiento diferente.

## Historial y ayuda

```powershell
Get-History
Get-Command *process*
Get-Help Get-ChildItem -Examples
Get-Member                       # inspecciona objetos de la tubería
Clear-Host                       # alias: cls, clear
```

## Perfil, alias y variables

`$PROFILE` contiene la ruta del script personal:

```powershell
if (-not (Test-Path $PROFILE)) { New-Item -ItemType File -Path $PROFILE -Force }
notepad $PROFILE
```

Un alias solo apunta a otro comando; para incluir parámetros usa una función:

```powershell
Set-Alias ll Get-ChildItem
function la { Get-ChildItem -Force @args }
```

Recarga con `. $PROFILE`. Para persistir una variable para el usuario:

```powershell
[Environment]::SetEnvironmentVariable('NOMBRE', 'valor', 'User')
```

## Permisos y ejecución

- Usa Windows Terminal como administrador solo cuando sea necesario.
- `Get-Acl <ruta>` consulta permisos y `Set-Acl` los modifica.
- `Get-ExecutionPolicy -List` muestra políticas de scripts.
- `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` cambia la política del usuario; revisa sus implicaciones antes.

## Equivalencias de CMD

| Acción | PowerShell | CMD |
| --- | --- | --- |
| Ruta actual | `Get-Location` | `cd` |
| Listar | `Get-ChildItem` | `dir` |
| Cambiar directorio | `Set-Location ruta` | `cd /d ruta` |
| Crear directorio | `mkdir carpeta` | `mkdir carpeta` |
| Copiar archivo | `Copy-Item a b` | `copy a b` |
| Copiar árbol | `Copy-Item a b -Recurse` | `robocopy a b /E` |
| Mover | `Move-Item a b` | `move a b` |
| Eliminar archivo | `Remove-Item archivo` | `del archivo` |
| Eliminar directorio | `Remove-Item dir -Recurse` | `rmdir /S dir` |
| Leer archivo | `Get-Content archivo` | `type archivo` |
| Limpiar pantalla | `Clear-Host` | `cls` |
| Ver alias/macros | `Get-Alias` | `doskey /macros` |
| Ayuda | `Get-Help comando` | `comando /?` |

En CMD, `/Q` suele suprimir confirmaciones y `/S` suele indicar recursividad, pero depende del comando; consulta `comando /?`.

## Atajos

| Atajo | Acción |
| --- | --- |
| `Ctrl+C` | Interrumpir el comando actual |
| `Ctrl+L` | Limpiar en PowerShell moderno |
| `Ctrl+R` | Buscar en el historial con PSReadLine |
| `Tab` | Autocompletar |
| Flechas arriba/abajo | Recorrer historial |
| `Ctrl+Space` | Mostrar opciones con PSReadLine |
