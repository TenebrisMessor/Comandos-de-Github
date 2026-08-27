# Comandos útiles de navegación en Neovim (Estilo VS Code)

## Búsqueda de archivos y contenido (Telescope)

SPC + f + f — Buscar archivos (como Ctrl+P en VSCode)
SPC + f + g — Buscar palabra (como Ctrl+Shift+F)
SPC + f + h — Archivos recientes
SPC + f + r — Frecuencia/MRU

## Explorador de Archivos (NvimTree)

SPC + e — Abrir/cerrar árbol de archivos

## Terminal Flotante (Floaterm)

SPC + t — Abrir/cerrar terminal flotante
ESC — Salir de la terminal flotante

## Ventanas y Pestañas (Bufferline)

:bn — Siguiente pestaña
:bp — Pestaña anterior
:bd — Cerrar pestaña actual

## Snippets y Autocompletado

Tab — Expandir snippet / completar
Shift+Tab — Saltar atrás en snippet

## Moverse en el archivo

gg — Ir al inicio
G — Ir al final
zz — Centrar línea actual
Ctrl + d / Ctrl + u — Avanzar/retroceder medio archivo

## Modo Visual Rápido

V — Seleccionar línea
v — Seleccionar carácter
Ctrl + v — Seleccionar bloque

## Guardar y Salir

:w — Guardar
:q — Salir
:wq — Guardar y salir

# Cheat Sheet: Navegación y Uso Básico de Neovim (nvim)

## Modos de Neovim:
- Normal Mode: Modo por defecto. Navega, copia, borra, etc. (presiona Esc para entrar)
- Insert Mode: Para escribir texto. Entra con 'i', 'I', 'a', 'A', 'o', 'O'.
- Visual Mode: Selecciona texto. Entra con 'v' (por carácter) o 'V' (por línea).
- Command Mode: Para comandos como :w, :q, :wq. Entra con ':' desde modo normal.

## Navegación:
- h / j / k / l: Izquierda / Abajo / Arriba / Derecha
- w / W: Salta a la siguiente palabra
- b / B: Salta a la palabra anterior
- 0 / ^ / $: Inicio / primer carácter / fin de línea
- gg / G: Inicio / Fin del archivo
- Ctrl+d / Ctrl+u: Baja / Sube media pantalla
- zz: Centra la línea actual en pantalla

## Edición:
- i / a / o: Insertar antes / después / nueva línea abajo
- x / dd / yy / p: Borrar carácter / borrar línea / copiar línea / pegar
- u / Ctrl+r: Deshacer / Rehacer
- r<char>: Reemplazar carácter bajo el cursor
- ciw / diw: Cambiar palabra / Borrar palabra
- v / V / Ctrl+v: Modo visual: selección carácter / línea / bloque

## Archivos y Ventanas:
- :w / :q / :wq / :q!: Guardar / Salir / Guardar y salir / Salir sin guardar
- :e <archivo>: Abrir archivo
- :vsp <archivo>: Abrir en ventana vertical
- :sp <archivo>: Abrir en ventana horizontal
- Ctrl+w + h/j/k/l: Moverte entre ventanas

## Plugins útiles (packer):
- nvim-telescope/telescope.nvim - Búsqueda estilo VSCode
- kyazdani42/nvim-tree.lua - Explorador de archivos
- nvim-lualine/lualine.nvim - Barra de estado
- nvim-treesitter/nvim-treesitter - Resaltado avanzado
- goolord/alpha-nvim - Dashboard de inicio

## Setup recomendado para Neovim estilo VS Code

### LSP (Lenguaje y diagnósticos inteligentes)
use { "williamboman/mason.nvim" }
use { "williamboman/mason-lspconfig.nvim" }

### Snippets (Fragmentos de código)
use "L3MON4D3/LuaSnip"
use "saadparwaiz1/cmp_luasnip"
use "rafamadriz/friendly-snippets"

### Autopairs y Surround (calidad de vida)
use "windwp/nvim-autopairs"
use "kylechui/nvim-surround"

### Barra de buffers estilo pestañas de VS Code
use { "akinsho/bufferline.nvim", tag = "*" }

### Línea de estado tipo VS Code
use "nvim-lualine/lualine.nvim"

### Comentarios rápidos tipo VS Code
use "numToStr/Comment.nvim"

### Árbol de símbolos (Outline de funciones/clases)
use "simrat39/symbols-outline.nvim"
