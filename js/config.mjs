import { processRuleBlocks } from "https://logius-standaarden.github.io/publicatie/respec/plugins/adr.mjs";
import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
  pubDomain: "api",
  shortName: "mod-encryption",
  specType: "ST",
  specStatus: "DEF",
  publishDate: "2026-06-18",
  publishVersion: "1.0.0",
  latestVersion: "https://logius-standaarden.github.io/API-mod-encryption/",
  prevVersion: [],
  editors: [{
    name: "Logius Standaarden",
    company: "Logius",
    companyURL: "https://www.logius.nl",
  },],
  authors: [{
    name: "Peter Haasnoot",
    company: "Logius",
    companyURL: "https://www.logius.nl",
  },],
  github: "https://github.com/Logius-standaarden/API-mod-encryption/",
  postProcess: [generateMermaidFigures, processRuleBlocks],
});
