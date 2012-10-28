Cistrome Enrichment
=====================

.. envvar:: Cistrome-Enrichment

   - all input is yours:  just like GSEA, you can input a list of
     ranked calcscore with genes(symbol or refseq) and your interested
     genes for preranked GSEA to your target, databases use their
     interest genes.
   - with your input to compare with DC calcscore databases, input a
     list of genes and desired factors to calculate all the enrichment
     score of DC factors historic score enrichment situations, use
     genes set in three ways,
          + gsea migsb, containing their curated kegg, reactome
          + kegggraph, gostats, reactome denovo 
          + our definition of TF, Histone pattern with GO.
   - with your input single factor name to see DC factors correlation
     with yours. and you could input two or three factors to see
     whether they have data in our databases and output their
     potential correlations. draw plot to show distribution
   -  input genes to get  factors which regulate them, input factors to see what genes they regulate and the extent of regulation
   -  genes name conversion using biomart

..   NOTE::
          1. 2 draw gsea plot, like enrichment and butterfly or NES vs
          4 and 5 could be cooperated into :envvar:`Cistrome-Network`
