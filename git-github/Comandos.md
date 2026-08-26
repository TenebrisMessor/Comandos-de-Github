Comandos de GitHub
Todos los comandos que voy aprendiendo de Git/GitHub.

## Configuración básica

| Comando | Descripción |
|---|---|
| `git config --global user.name "Messorem"` | Configura el nombre que aparece en tus commits |
| `git config --global user.email messor02@gmail.com` | Configura el email que aparece en tus commits |
| `git config --global user.email "TU_ID+tuusuario@users.noreply.github.com"` | Usa el email "noreply" de GitHub en vez del real, para no exponerlo públicamente (evita el error GH007 al pushear) |
| `git config --global color.ui true` | Activa colores en la salida de los comandos |

## Iniciando un repositorio

| Comando | Descripción |
|---|---|
| `git init` | Inicia un repositorio nuevo dentro de la carpeta actual |
| `git clone <url>` | Clona un repositorio de GitHub o Bitbucket |
| `git add .` | Añade todos los archivos al staging para el commit |
| `git commit -m "mensaje"` | Hace un commit con los cambios en staging |
| `git push origin master` | Sube los commits al repositorio remoto |

## git clone

| Comando | Descripción |
|---|---|
| `git clone <url>` | Clona el repositorio en una carpeta con el mismo nombre que el repo |
| `git clone <url> nombre-carpeta` | Clona el repositorio dentro de una carpeta con el nombre que tú elijas |

## git add

| Comando | Descripción |
|---|---|
| `git add .` | Añade todos los archivos (nuevos y modificados) al staging |
| `git add <archivo>` | Añade un archivo específico al staging |
| `git add --all` | Añade todos los archivos, incluyendo los que ya se rastreaban antes |
| `git add *.txt` | Añade todos los archivos con la extensión indicada |
| `git add docs/*.txt` | Añade los archivos de una extensión específica dentro de una carpeta |
| `git add docs/` | Añade todos los archivos dentro de una carpeta |

## git commit

| Comando | Descripción |
|---|---|
| `git commit -m "mensaje"` | Sube al HEAD los cambios que están en staging |
| `git commit -a -m "mensaje"` | Agrega (los archivos ya rastreados) y comitea en un solo paso |
| `git commit -a` | Igual que arriba, pero te muestra el editor si hay conflictos/detalles que revisar |
| `git commit --amend -m "mensaje"` | Modifica el último commit (no aparece como uno nuevo en el log); opcionalmente le cambias el mensaje |

## git push

| Comando | Descripción |
|---|---|
| `git push <origen> <branch>` | Sube los commits de esa rama al remoto indicado |
| `git push --tags` | Sube los tags al remoto |
| `git push --force-with-lease` | Fuerza el push de forma segura (usar después de reescribir historial, ej. con filter-branch) |
| `git push --force` | Fuerza el push sin chequeo de seguridad — evítalo si puedes, mejor usa `--force-with-lease` |

## git log

| Comando | Descripción |
|---|---|
| `git log` | Muestra el historial de commits |
| `git log --oneline --stat` | Muestra los commits resumidos junto con los archivos que cambiaron |
| `git log --oneline --graph` | Muestra el historial como gráfico de ramas |

## git diff

| Comando | Descripción |
|---|---|
| `git diff` | Muestra los cambios que aún no están en staging |
| `git diff --staged` | Muestra los cambios que ya están en staging |

## git reset

| Comando | Descripción |
|---|---|
| `git reset HEAD <archivo>` | Saca un archivo del staging (sin perder los cambios) |
| `git reset --soft HEAD^` | Deshace el último commit y deja los cambios en staging |
| `git reset --hard HEAD^` | Deshace el último commit y borra los cambios por completo |
| `git reset --hard HEAD^^` | Deshace los últimos 2 commits y borra los cambios |
| `git reset --hard <commit_sha>` | Rollback a un commit específico (usa `git log` primero para conseguir el sha) |

## git remote

| Comando | Descripción |
|---|---|
| `git remote add origin <url>` | Agrega un repositorio remoto |
| `git remote set-url origin <url>` | Cambia la URL del remoto (útil si renombraste el repo en GitHub) |
| `git remote rm <nombre>` | Elimina un remoto |
| `git remote -v` | Lista los remotos configurados |
| `git remote show origin` | Muestra info y branches del remoto |
| `git remote prune origin` | Limpia referencias a branches remotos que ya no existen |

## git branch

| Comando | Descripción |
|---|---|
| `git branch` | Lista los branches locales |
| `git branch <nombre>` | Crea un branch nuevo |
| `git branch -d <nombre>` | Elimina el branch (ya fusionado a master) |
| `git branch -D <nombre>` | Elimina el branch sin preguntar, aunque no esté fusionado |

## git tag

| Comando | Descripción |
|---|---|
| `git tag` | Muestra la lista de todos los tags |
| `git tag -a <version> -m "mensaje"` | Crea un tag nuevo con mensaje |
| `git push origin --tags` | Empuja el tag a git |
| `git tag -d <version>` |Elimina el tag en el repo local| 
| `git push origin :refs/tags/<version>` | elimina el tag del repo online| 

## git rebase

Los rebase se usan cuando trabajas con branches; ponen tu branch al día con master sin que se vea como un merge.

| Comando | Descripción |
|---|---|
| `git rebase <nombre-branch>` | Hace rebase de tu branch actual sobre el branch indicado |
| `git rebase --continue` | Continúa el rebase después de resolver un conflicto |
| `git rebase --skip` | Omite el commit conflictivo y sigue |
| `git rebase --abort` | Cancela el rebase y vuelve todo al estado inicial |

## git stash

Guarda tus cambios sin comitear en un espacio aparte y deja el árbol de trabajo limpio — útil cuando necesitas cambiar de rama o correr algo que exige el working tree limpio, pero no quieres comitear todavía.

| Comando | Descripción |
|---|---|
| `git stash` | Guarda los cambios sin comitear |
| `git stash list` | Lista lo que tienes guardado |
| `git stash pop` | Recupera lo último guardado |

## git subtree

Trae un repo completo como subcarpeta dentro de otro repo, conservando todo su historial de commits — útil para consolidar varios repos chicos en uno solo (ej. proyectos de un mismo curso).

| Comando | Descripción |
|---|---|
| `git subtree add --prefix=carpeta-destino <url-repo-viejo> main` | Trae el repo viejo como subcarpeta, con su historial completo |
| `git subtree add --prefix=carpeta-destino <url-repo-viejo> main --squash` | Igual, pero comprime el historial del repo viejo en un solo commit |

## git filter-branch (reescribir historial)

Reescribe todos los commits del repo — por ejemplo, para dejar de exponer tu email real en el historial. Solo hazlo en repos que aún no compartiste, o que vas a forzar el push después.

| Comando | Descripción |
|---|---|
| `git filter-branch --env-filter '`<br>`export GIT_AUTHOR_EMAIL="tu-email-nuevo@ejemplo.com"`<br>`export GIT_COMMITTER_EMAIL="tu-email-nuevo@ejemplo.com"`<br>`' --tag-name-filter cat -- --branches --tags` | Reescribe el autor/committer de TODOS los commits con el email nuevo |

> Git sugiere usar `git-filter-repo` (más moderno) en vez de esto, pero `filter-branch` ya viene con git y no requiere instalar nada extra.

## GitHub CLI (`gh`)

| Comando | Descripción |
|---|---|
| `gh repo rename nuevo-nombre` | Renombra el repo en GitHub (si lo corres desde la carpeta local) |

## Otros comandos

| Comando | Descripción |
|---|---|
| `git status` | Muestra archivos modificados/agregados y el estado del repo |
| `git checkout -- <archivo>` | Descarta cambios de un archivo y lo deja como estaba en el último commit |
| `git checkout -b nombre-local origin/nombre-branch` | Crea un branch local a partir de uno remoto |
| `git pull origin <branch>` | Trae y fusiona los cambios nuevos del remoto |
| `git checkout <branch/tag>` | Cambia de branch (o de tag) |
| `git merge <branch>` | Fusiona el branch indicado con el actual |
| `git fetch` | Revisa cambios nuevos en el remoto sin fusionarlos todavía |
| `git rm <archivo>` | Borra un archivo del repositorio |

## Fork

| Comando | Descripción |
|---|---|
| `git remote add upstream <url>` | Agrega el repo original como remoto (para poder traer sus cambios) |
| `git fetch upstream` | Trae los cambios del repo original |
| `git merge upstream/master` | Fusiona esos cambios en tu forks |

git show-branch | muestra todas las ramas. 
gitk muestra todo de manera mas visual.kjfñladsjdf 
