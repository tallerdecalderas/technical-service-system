# 01 — Go idiomático: simplicidad, claridad y formato

## Objetivo

Escribir código que otro desarrollador Go pueda leer y mantener sin tener que descifrar abstracciones o convenciones ajenas al ecosistema.

## Reglas

- Ejecutar `gofmt` sobre todo archivo `.go` modificado.
- Preferir nombres cortos pero expresivos, especialmente para variables locales (`ctx`, `req`, `err`). Usar nombres descriptivos en scopes amplios.
- Nombrar paquetes con minúsculas, una sola palabra cuando sea razonable y sin guiones bajos.
- Evitar nombres redundantes: `user.UserService` suele ser peor que `user.Service`.
- Documentar identificadores exportados con comentarios que comiencen por su nombre.
- Preferir control de flujo explícito y funciones pequeñas con una responsabilidad clara.
- Evitar getters/setters mecánicos, herencia simulada y patrones trasladados literalmente desde otros lenguajes.
- No crear abstracciones genéricas hasta que exista una necesidad concreta.

## Evitar

- `utils`, `helpers`, `common` como depósitos indiscriminados.
- Interfaces enormes o tipos genéricos sin una razón concreta.
- Comentarios que repiten el código en lugar de explicar intención o restricciones.
- Complejidad prematura para escenarios que todavía no existen.

## Criterio de aceptación

El código modificado está formateado con `gofmt`, los paquetes tienen responsabilidades identificables y los nombres expresan el dominio o la operación.

## Referencias

- https://go.dev/doc/effective_go
- https://go.dev/wiki/CodeReviewComments
