// italian-ateco-database — entry point CommonJS
const ATECO_DATABASE = require('./data/ateco-2007.json');

function getAtecoByCodice(codice) {
  return ATECO_DATABASE.find((e) => e.codice === codice);
}

function getAtecoBySlug(slug) {
  return ATECO_DATABASE.find((e) => e.slug === slug);
}

function filtraPerRischio(rischio) {
  return ATECO_DATABASE.filter((e) => e.rischioAteco === rischio);
}

module.exports = {
  ATECO_DATABASE,
  getAtecoByCodice,
  getAtecoBySlug,
  filtraPerRischio,
};
