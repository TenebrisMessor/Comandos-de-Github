# SSH: alias, config y debugging de red local

Notas sobre configuración de SSH mediante alias y troubleshooting de resolución de nombres en red local (mDNS/Bonjour) en Mac.

## Crear alias SSH en `~/.ssh/config`

En vez de escribir `ssh usuario@192.168.1.50` (o `ssh usuario@host.local`) cada vez, se puede definir un alias en `~/.ssh/config`:

```
Host miserver
    HostName host.local
    User usuario
```

- `Host` — el alias que vas a usar al invocar `ssh` (ej. `ssh miserver`).
- `HostName` — la dirección real: IP, dominio, o nombre `.local` resuelto por mDNS.
- `User` — el usuario remoto con el que te quieres conectar.

Con esto, basta con:

```
ssh miserver
```

y SSH resuelve el `HostName` y `User` automáticamente desde el archivo de config.

## Por qué `ssh usuario@host.local` a veces pide password y lo rechaza

Si omites el usuario (`ssh host.local`), SSH no deja el campo "vacío": usa por default el **usuario local de tu Mac** (el que está logueado en la máquina desde la que te conectas), no el usuario que existe en el equipo remoto. Si ese usuario no existe en el remoto o su password no coincide, el login falla aunque el password que escribas sea "correcto" para tu propio usuario.

La solución es siempre especificar el usuario explícitamente:

```
ssh usuario_remoto@host.local
```

o definirlo en el `Host` del `~/.ssh/config` como se muestra arriba, para no tener que acordarte cada vez.

## Limpiar la caché de DNS en Mac

Cuando un host no resuelve o resuelve a una IP vieja/incorrecta, conviene limpiar la caché de DNS local:

```
sudo dscacheutil -flushcache
```

Útil después de cambios de red, reconexiones, o cuando un `.local` dejó de resolver correctamente.

## Debuggear mDNS / Bonjour

Para ver qué servicios SSH (`_ssh._tcp`) están siendo anunciados vía Bonjour en la red local:

```
dns-sd -B _ssh._tcp local
```

Esto hace un *browse* (`-B`) de servicios SSH anunciados en el dominio `local`, útil para confirmar si un equipo se está anunciando correctamente por mDNS antes de intentar resolver su nombre `.local`.
