// ══════════════════════════════════════════════════════════════════
//  SUPERVISORES-DATA.JS — Archivo de mantención interna (solo Prevención de Riesgos)
//  Define a qué correo se notifica el resultado del Check List, según
//  Planta + Área + Turno. El Checklist SOLO LEE este archivo.
//
//  Cómo completarlo: escribe el correo del supervisor responsable
//  dentro de las comillas de cada Turno.
// ══════════════════════════════════════════════════════════════════
const SUPERVISORES = {
  "Osorno": {
    "Mat. Primas": { "Turno A": "cesar.constanzo@gmail.com", "Turno B": "cesar.constanzo@skretting.com", "Turno C": "" },
    "Logística": { "Turno A": "", "Turno B": "", "Turno C": "" },
    "Producción": { "Turno A": "", "Turno B": "", "Turno C": "" }
  },
  "Pargua": {
    "Mat. Primas": { "Turno A": "", "Turno B": "", "Turno C": "" },
    "Logística": { "Turno A": "", "Turno B": "", "Turno C": "" },
    "Producción": { "Turno A": "", "Turno B": "", "Turno C": "" }
  },
  "Puerto Montt": {
    "Mat. Primas": { "Turno A": "", "Turno B": "", "Turno C": "" },
    "Logística": { "Turno A": "", "Turno B": "", "Turno C": "" },
    "Producción": { "Turno A": "", "Turno B": "", "Turno C": "" }
  }
};
