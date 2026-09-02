# Knowledge Base

Base de conocimiento personal de programación y herramientas de desarrollo. Nació como una colección de comandos de Git/GitHub y se fue ampliando para cubrir otros lenguajes y temas técnicos a medida que los voy aprendiendo.

## Índice

- [Lenguajes](#lenguajes)
  - [Python](#python)
  - [JavaScript](#javascript)
  - [CSS](#css)
  - [MATLAB](#matlab)
  - [C](#c)
  - [Ensamblador](#ensamblador)
  - [Markdown](#markdown)
- [Herramientas](#herramientas)
  - [Git / GitHub](#git--github)
  - [Terminal](#terminal)
  - [Neovim](#neovim)
- [Nube](#nube)
  - [AWS](#aws)
  - [Azure](#azure)
  - [Google Cloud](#google-cloud)
- [Organización](#organización)
- [Convenciones](#convenciones)

## Lenguajes

### Python
[`lenguajes/python/`](lenguajes/python/)

- [`referencia.md`](lenguajes/python/referencia.md) — sintaxis básica y notas rápidas.
- Cursos:
  - [Curso Completo de Python](lenguajes/python/cursos/curso-completo-de-python/)
  - [Python3: Django, Flask, Tkinter](lenguajes/python/cursos/python3-django-flask-tkinter/)
  - [Trading Cuantitativo en Python](lenguajes/python/cursos/trading-cuantitativo/)

### JavaScript
[`lenguajes/javascript/`](lenguajes/javascript/)

- Cursos:
  - [JS Curso Completo (WebDev)](lenguajes/javascript/cursos/js-curso-completo-webdev/)
  - [Curso Básico de JS](lenguajes/javascript/cursos/curso-basico-de-js/)
  - [DOM Scripting](lenguajes/javascript/cursos/dom-scripting/)

### CSS
[`lenguajes/css/`](lenguajes/css/)

- Cursos:
  - [Patrones RWD](lenguajes/css/cursos/patrones-rwd/) — patrones de layout responsive (flexbox y grid).

### MATLAB
[`lenguajes/matlab/`](lenguajes/matlab/)

- Cursos:
  - [Curso de MATLAB](lenguajes/matlab/cursos/curso-de-matlab/)

### C
[`lenguajes/c/`](lenguajes/c/) — notas de C.

### Ensamblador
[`lenguajes/asm/`](lenguajes/asm/) — notas de ensamblador.

### Markdown
[`lenguajes/markdown/`](lenguajes/markdown/)

- [`referencia.md`](lenguajes/markdown/referencia.md) — cheatsheet de sintaxis.

## Herramientas

### Git / GitHub
[`herramientas/git/`](herramientas/git/)

- [`referencia.md`](herramientas/git/referencia.md) — comandos de uso frecuente.
- [`apuntes/redaccion-commits.md`](herramientas/git/apuntes/redaccion-commits.md) — cómo redactar mensajes de commit.

### Terminal
[`herramientas/terminal/`](herramientas/terminal/) — comandos de shell, SSH y redes locales.

- [`referencia/global.md`](herramientas/terminal/referencia/global.md) — comandos comunes a cualquier SO.
- [`referencia/linux.md`](herramientas/terminal/referencia/linux.md)
- [`referencia/macos.md`](herramientas/terminal/referencia/macos.md)
- [`referencia/windows.md`](herramientas/terminal/referencia/windows.md)

### Neovim
[`herramientas/nvim/`](herramientas/nvim/)

- [`referencia.md`](herramientas/nvim/referencia.md) — comandos y atajos.

## Nube

### AWS
[`nube/aws/`](nube/aws/) — notas de Amazon Web Services.

### Azure
[`nube/azure/`](nube/azure/)

- [`az-900.md`](nube/azure/az-900.md) — apuntes de la certificación Azure Fundamentals (AZ-900).

### Google Cloud
[`nube/gcp/`](nube/gcp/) — notas de Google Cloud Platform.

## Organización

El contenido se agrupa en tres categorías (`lenguajes/`, `herramientas/`, `nube/`). Dentro de cada tema se usan siempre los mismos nombres de subcarpeta:

| Subcarpeta | Contenido |
|---|---|
| `cursos/` | Una carpeta por curso, con su propio `README.md`. |
| `referencia/` o `referencia.md` | Comandos, sintaxis y cheatsheets de consulta rápida. |
| `apuntes/` | Notas temáticas propias, sueltas. |
| `proyectos/` | Prácticas independientes que no pertenecen a un curso. |
| `README.md` | Índice de la carpeta. |

## Convenciones

- Carpetas y archivos en minúscula y `kebab-case`, sin espacios ni tildes.
- Prefijo numérico de dos dígitos (`01-`, `02-`) para ordenar.
- Nombres descriptivos: `01-variables.js`, no `01.js`.
- Cada carpeta lleva un `README.md` que hace de índice.
- Las carpetas "meta" van en español: `cursos`, `apuntes`, `referencia`, `proyectos`.

Cada carpeta contiene notas propias — son apuntes de cosas aprendidas en el día a día, no documentación oficial.
