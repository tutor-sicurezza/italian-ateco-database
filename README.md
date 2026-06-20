# italian-ateco-database

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/tutor-sicurezza/italian-ateco-database)
[![GitHub release](https://img.shields.io/github/v/release/tutor-sicurezza/italian-ateco-database)](https://github.com/tutor-sicurezza/italian-ateco-database/releases)
[![GitHub stars](https://img.shields.io/github/stars/tutor-sicurezza/italian-ateco-database?style=social)](https://github.com/tutor-sicurezza/italian-ateco-database/stargazers)
[![CI](https://github.com/tutor-sicurezza/italian-ateco-database/actions/workflows/ci.yml/badge.svg)](https://github.com/tutor-sicurezza/italian-ateco-database/actions/workflows/ci.yml)
[![Part of the tutor-sicurezza open-data ecosystem](https://img.shields.io/badge/ecosystem-tutor--sicurezza-blue.svg)](https://github.com/tutor-sicurezza)

Dataset JSON dei codici **ATECO 2007** italiani con metadati orientati alla **sicurezza sul lavoro**: livello di rischio secondo l’Accordo Stato-Regioni 21/12/2011, corsi formativi obbligatori indicativi e riferimenti normativi applicabili.

> Pensato per chi sviluppa applicativi HR, gestionali per studi di consulenza del lavoro, chatbot legal-tech, tool di compliance, sistemi LMS e CRM nel mercato italiano.

## Cos’è

I codici ATECO sono la classificazione ufficiale Istat delle attività economiche italiane. Da soli sono un semplice elenco; questo dataset li arricchisce mappando ciascun codice al **livello di rischio** (basso / medio / alto / molto-alto) usato dall’Accordo Stato-Regioni 21/12/2011 per determinare la durata della formazione obbligatoria dei lavoratori (art. 37 D.Lgs 81/08), e ai relativi **corsi obbligatori indicativi**.

Il dataset attuale copre **55 voci** rappresentative delle sezioni ATECO da A a S. Non è esaustivo a livello di sotto-categoria: contributi via PR sono benvenuti.

## Installazione

```bash
npm install italian-ateco-database
```

oppure clona il repo e usa direttamente `data/ateco-2007.json`.

## Esempio d’uso

```ts
import { ATECO_DATABASE, getAtecoBySlug, filtraPerRischio } from 'italian-ateco-database';

// Tutte le voci
console.log(ATECO_DATABASE.length); // 55

// Lookup per slug
const edilizia = getAtecoBySlug('41-costruzioni');
console.log(edilizia?.rischioAteco); // 'alto'
console.log(edilizia?.corsiObbligatori);
// ['sicurezza-lavoratori-alto', 'preposti', 'lavori-quota', ...]

// Tutte le attività a rischio molto-alto
const moltoAlto = filtraPerRischio('molto-alto');
```

### Struttura dell’entry

```ts
interface AtecoEntry {
  codice: string;            // es. "41"
  slug: string;              // es. "41-costruzioni"
  settore: string;           // es. "Costruzioni"
  descrizione: string;       // descrizione estesa Istat
  descrizioneBreve: string;  // descrizione orientata alla formazione
  rischioAteco: 'basso' | 'medio' | 'alto' | 'molto-alto';
  corsiObbligatori: string[]; // slug indicativi
  leggiApplicabili: string[]; // es. ["D.Lgs 81/08", "D.Lgs 99/2004"]
}
```

## Macro-sezioni ATECO 2007 coperte

| Sezione | Descrizione | Esempi di voci |
|---|---|---|
| A | Agricoltura, silvicoltura e pesca | 01, 02, 03 |
| B | Estrazione di minerali | 05–09 |
| C | Attività manifatturiere | 10–33 |
| D–E | Energia, acqua, rifiuti | 35–39 |
| F | Costruzioni | 41–43 |
| G | Commercio | 45–47 |
| H | Trasporto e magazzinaggio | 49–53 |
| I | Servizi di alloggio e ristorazione | 55–56 |
| J | Servizi di informazione e comunicazione | 58–63 |
| K | Attività finanziarie | 64–66 |
| L | Attività immobiliari | 68 |
| M | Attività professionali, scientifiche | 69–75 |
| N | Servizi alle imprese | 77–82 |
| P | Istruzione | 85 |
| Q | Sanità e assistenza sociale | 86–88 |
| R | Arte, intrattenimento | 90–93 |
| S | Altre attività di servizi | 94–96 |

## Use case real-world

Questo dataset alimenta il tool [Trova Corsi Obbligatori](https://123formazione.com/trova-corsi-obbligatori) di **123Formazione**, che lo usa per mappare i codici ATECO inseriti dalle aziende ai corsi di sicurezza obbligatori previsti dal D.Lgs 81/08, mostrando in pochi secondi quali percorsi formativi servono al loro settore.

Se lo usi in un progetto, apri una PR o una issue: aggiungiamo volentieri il tuo caso d’uso.

## Fonti

- [Istat — Classificazione ATECO 2007](https://www.istat.it/it/archivio/17888)
- [Accordo Stato-Regioni 21/12/2011, Allegato II](https://www.gazzettaufficiale.it/eli/id/2012/01/11/12A00139/sg) (classificazione del rischio per settore ATECO)
- [D.Lgs 9 aprile 2008, n. 81 — Testo Unico Sicurezza Lavoro](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2008-04-09;81)
- [Accordo Stato-Regioni Rep. 78/CSR 17/04/2025](https://www.statoregioni.it/it/conferenza-stato-regioni/sedute-2025/seduta-del-17042025/atti/repertorio-atto-n-78csr/) (aggiornamento formazione preposti, RSPP)

## English summary

`italian-ateco-database` is a JSON dataset of Italian ATECO 2007 economic activity codes enriched with workplace-safety risk levels (per the Italian State-Regions Agreement of 21/12/2011) and mappings to mandatory training courses required by Legislative Decree 81/2008. Useful for HR, payroll, legal-tech, and compliance tooling targeted at the Italian market.

## Contributing

PR benvenute, soprattutto per:
- aggiungere sotto-categorie ATECO mancanti (es. 41.20, 43.21);
- correggere mapping rischio-settore con riferimento a fonti normative;
- aggiungere nuovi `leggiApplicabili` settoriali.

## Related repositories

Open dataset / tooling ecosystem for Italian workplace safety (D.Lgs 81/08) maintained by [@tutor-sicurezza](https://github.com/tutor-sicurezza):

**Datasets**
- [italian-province-regioni-dataset](https://github.com/tutor-sicurezza/italian-province-regioni-dataset) — Italian provinces + regions metadata
- [comuni-italiani-istat](https://github.com/tutor-sicurezza/comuni-italiani-istat) — Italian municipalities with ISTAT codes
- [dlgs-81-08-glossario](https://github.com/tutor-sicurezza/dlgs-81-08-glossario) — 218 D.Lgs 81/08 glossary terms
- [dlgs-81-08-testo-unico](https://github.com/tutor-sicurezza/dlgs-81-08-testo-unico) — D.Lgs 81/08 structured by Title + key articles index
- [haccp-italia-normativa-regionale](https://github.com/tutor-sicurezza/haccp-italia-normativa-regionale) — HACCP regional regulations (20 Italian regions)
- [verifiche-periodiche-inail-attrezzature](https://github.com/tutor-sicurezza/verifiche-periodiche-inail-attrezzature) — Equipment subject to INAIL periodic verification
- [accordi-stato-regioni-sicurezza-lavoro](https://github.com/tutor-sicurezza/accordi-stato-regioni-sicurezza-lavoro) — Stato-Regioni training agreements

**Libraries / tools**
- [scadenze-formazione-calculator](https://github.com/tutor-sicurezza/scadenze-formazione-calculator) — Training renewal schedule calculator
- [next-seo-italian-helpers](https://github.com/tutor-sicurezza/next-seo-italian-helpers) — Next.js SEO helpers for Italian B2B
- [mcp-italian-workplace-safety](https://github.com/tutor-sicurezza/mcp-italian-workplace-safety) — MCP server for Claude Desktop / Cursor / Cline

**Online services**
- [Public REST API + OpenAPI 3.1 + DCAT-AP-IT](https://123formazione.com/api/public/docs) — Free open data API
- [Live documentation site (GitHub Pages)](https://tutor-sicurezza.github.io/accordi-stato-regioni-sicurezza-lavoro/) — Accordi Stato-Regioni

All resources are MIT or CC-BY licensed and maintained as production-quality open data.

## Licenza

[MIT](./LICENSE) — il codice e il dataset sono liberamente riutilizzabili anche in progetti commerciali, con attribuzione consigliata ma non obbligatoria.
