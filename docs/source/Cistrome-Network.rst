Cistrome network
=======================


  .. envvar:: Cistrome-Network

  using the  :envvar:`Cistrome-Enrichment` above to recurse to get
  the network for a list of input factors or input genes for their
  potential upstream and downstream regulators. This predictiion will
  be more reliable with rna-seq and chip-seq differential analysis
  data. WIth cell specificity options on, the system only take the
  genes with low cell specificity in, without the option, it will get
  all the potential information with cell line specificity score(look
  for method for evaluate through peaks score or `CalcScore`_ ) on it.

.. digraph:: CN

    .. rankdir=TB
    .. size="15,15"
    .. edge[arrowhead=open]

    .. start[shape=circle, label="", style=filled]
    .. end[shape=doublecircle, label="", style=filled]

    .. readconf[shape=box,style=rounded, label="class Check"]
    .. bowtie[shape=box,style=rounded, label="Run Bowtie"]
    .. rawQC[shape=box,style=rounded, label="Run RawQC"]
    .. mappingQC[shape=box,style=rounded, label="Run MappingQC"]
    .. macs2[shape=box,style=rounded, label="Run MACS2"]
    .. peakcallingQC[shape=box,style=rounded, label="Run PeakcallingQC"]
    .. ceas_seqpos[shape=box,style=rounded, label="Run CEAS/Seqpos"]
    .. venn[shape=box,style=rounded, label="class Replicates, Draw VennDiagram and Correlation plot"]
    .. conservation[shape=box,style=rounded, label="Draw ConservationPlot"]
    .. annotationQC[shape=box,style=rounded, label="Run AnnotationQC"]

    
    .. ifmapped[shape=diamond, label="Mapped?"]
    .. ifrep[shape=diamond, label="Replicate?"]
    
    .. start -> readconf
    .. readconf -> rawQC
    .. rawQC -> ifmapped[headport=n, color="grey"]
    .. ifmapped -> mappingQC[label="[Yes]" tailport=s]
    .. ifmapped -> bowtie[taillabel="[No]" tailport=e]
    .. bowtie -> mappingQC
    .. mappingQC -> macs2[color="grey"]
    .. macs2 -> ifrep
    .. peakcallingQC -> ceas_seqpos[color="grey"]
    .. ifrep -> venn[label="[Yes]" tailport=s]
    .. ifrep -> conservation[label="[No]" tailport=e]
    .. venn -> conservation
    .. conservation -> peakcallingQC
    .. ceas_seqpos -> annotationQC
    .. annotationQC -> end[taillabel="Output Report"]

.. _CalcScore: https://bitbucket.org/siping/cistrome-applications-harvard/src/16cc3f3e456a/cistrome-extra-apps/Scripts/RegPotential.py
