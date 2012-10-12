about
============
This project, *d2genes*, focus on ChIP-sea extended analysis on gene
regulation cross different experiments.

search all background Json data
get back the related ones
red means under the regulation of the peaks
blue means not or downregulated.


.. note::
   Only one dataset could be chosen now, multiple datasets will be
   added soon.

* extract all `CalcScore`_ from `Cistrome DC project`_
* parse the score texts into JSON format through python
* demonstrate general potential regulation relationship between
  dataset and genes by gradient red color using cutoff 0.5
* draw distribution of genes' scores like gene set enrichment analysis
  through d3.js and Highcharts, heatmap.js

