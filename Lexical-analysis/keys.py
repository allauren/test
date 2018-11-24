import gensim
import matplotlib.pyplot as plt
import math
from sklearn.manifold import TSNE
import numpy as np
import matplotlib.pyplot as plt
from closest_words import closestwords_tsnescatterplot
import sys
import os

def draw_plt():
    dir = os.path.dirname(os.path.abspath(__file__))
    model = gensim.models.Word2Vec.load(dir + '/word2vec50.model')
    for key in model.wv.vocab :
        if (len(key) > 3):
            print('\t\toption '+ key) 

if __name__ == '__main__':
        draw_plt()
