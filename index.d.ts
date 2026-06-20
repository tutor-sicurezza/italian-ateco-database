export type RischioAteco = 'basso' | 'medio' | 'alto' | 'molto-alto';

export interface AtecoEntry {
  /** Codice ATECO 2007 (es. "01", "41.20") */
  codice: string;
  /** Slug URL-safe (es. "01-agricoltura") */
  slug: string;
  /** Macro-settore (es. "Agricoltura, silvicoltura e pesca") */
  settore: string;
  /** Descrizione estesa Istat */
  descrizione: string;
  /** Descrizione sintetica orientata alla formazione */
  descrizioneBreve: string;
  /** Livello di rischio ai sensi dell'Accordo Stato-Regioni 21/12/2011, Allegato II */
  rischioAteco: RischioAteco;
  /** Slug indicativi dei corsi obbligatori applicabili al settore */
  corsiObbligatori: string[];
  /** Riferimenti normativi principali applicabili al settore */
  leggiApplicabili: string[];
}

export const ATECO_DATABASE: AtecoEntry[];
export function getAtecoByCodice(codice: string): AtecoEntry | undefined;
export function getAtecoBySlug(slug: string): AtecoEntry | undefined;
export function filtraPerRischio(rischio: RischioAteco): AtecoEntry[];
