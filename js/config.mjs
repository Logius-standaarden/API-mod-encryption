import { processRuleBlocks } from "https://logius-standaarden.github.io/publicatie/respec/plugins/adr.mjs";
import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: false });

loadRespecWithConfiguration({
  pubDomain: "api",
  shortName: "mod-encryption",
  specType: "ST",
  specStatus: "WV",
  publishDate: "2024-09-06",
  publishVersion: "1.0.2",
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
  postProcess: [processRuleBlocks],

  postProcess: [
    async (config, document, utils) => {
      const mermaidFigures = document.querySelectorAll('.mermaid');
      const generatedFigures = [];
      for (const figure of mermaidFigures) {
        const figureName = figure.dataset.figureName;
        if (figureName) {
          const fetchSource = await fetch(`./media/${figureName}`);
          const preElement = document.createElement('pre');
          preElement.classList.add('mermaid');
          preElement.prepend(document.createTextNode(await fetchSource.text()));
          figure.replaceWith(preElement);
          generatedFigures.push(preElement);
        } else {
          generatedFigures.push(figure);
        }
      }
      mermaid.run({
        nodes: generatedFigures,
      });
    }
  ]

});
