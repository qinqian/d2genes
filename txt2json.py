#!/usr/bin/env python
# convert text CalcScore to Json
import sys
import os
def txt2json(scoretxt, species=""):
    """
    example:
    {
      id1: {symbol1: score1, symbol2: score2},
      id2: { ... },
    }
    more efficient json structure when using 5000 more
    Use jQuery to parse json, supported in Firefox
    TODO: refseq id
    """
    idname = os.path.split(scoretxt)[1].split("_")[0]
    sym2score = {}
    with open(scoretxt, 'r') as f:
        for line in f.readlines()[6:]:
            line = line.strip().split()
            if float(line[4]) > 0.5:
                sym2score[line[6]] = float(line[4])
    f.close()
    return idname, sym2score

def json2html(scoredict):
    json = ""
    js="""
    var d2genes = eval ("(" + txt + ")");
    """
    pass

def main(dir):
    listd = os.listdir(dir)
    path2d = map(lambda x: os.path.join(os.path.abspath(dir), x), listd)
    print path2d
    d2genes = {}
    with open("d2genes.json", 'w') as f:
        for i in path2d:
            idname, sym2score = txt2json(i)
            d2genes[idname] = sym2score
        f.write(str(d2genes))
    print type(d2genes)
    f.close()

if __name__ == "__main__":
    dir = sys.argv[1]
    main(dir)
