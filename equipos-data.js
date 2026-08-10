// ══════════════════════════════════════════════════════════════════
//  EQUIPOS-DATA.JS — Archivo de mantención interna (solo Prevención de Riesgos)
//  Aquí se agregan o eliminan los números de equipo por Planta y Área.
//  El Checklist del Operador SOLO LEE este archivo, nunca se edita desde ahí.
//
//  Cómo agregar un equipo: escríbelo dentro de las comillas, separado por coma,
//  dentro del arreglo [ ] que corresponda a su Planta y Área.
// ══════════════════════════════════════════════════════════════════
const EQUIPOS = {
  "Osorno": {
    "Producción": ["11826", "11827", "11828", "11829"],
    "Medicado": ["11830", "11835"],
    "Mat. Primas": ["11842", "11843", "11853"],
    "Logística": ["11821", "11822", "11823", "11824", "11825"],
    "Resiter": [],
    "Stand by": ["11831", "11844"]
  },
  "Pargua": {
    "Producción": ["11833", "11834"],
    "Mat. Primas": ["11845", "11846", "11852"],
    "Logística": ["11836", "11837", "11838", "11839", "11847", "11848", "11849", "11850", "11851"],
    "Resiter": ["11840"],
    "Stand by": ["11832", "11841"]
  }
};
