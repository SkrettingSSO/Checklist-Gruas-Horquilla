// ══════════════════════════════════════════════════════════════════
//  EQUIPOS-DATA.JS — Archivo de mantención interna (solo Prevención de Riesgos)
//  Aquí se agregan o eliminan los números de equipo por Planta y Área.
//  El Checklist del Operador SOLO LEE este archivo, nunca se edita desde ahí.
//
//  Cómo agregar un equipo: escríbelo dentro de las comillas, separado por coma,
//  dentro del arreglo [ ] que corresponda a su Planta y Área.
//  Ejemplo:  "Logística": ["GH-01", "GH-02", "GH-03"]
// ══════════════════════════════════════════════════════════════════
const EQUIPOS = {
  "Osorno": {
    "Mat. Primas": ["GH-01", "CH-02"],
    "Logística": ["GH-03", "GH-04", "GH-05"],
    "Producción": ["GH-06", "GH-07"]
  },
  "Pargua": {
    "Mat. Primas": ["Grua-1"],
    "Logística": ["Grua-2", "Grua-3"],
    "Producción": ["Grua-4"]
  },
  "Puerto Montt": {
    "Mat. Primas": [],
    "Logística": [],
    "Producción": []
  }
};
