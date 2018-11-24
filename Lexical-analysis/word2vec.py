import gensim
import matplotlib.pyplot as plt
import math
from sklearn.manifold import TSNE
import numpy as np
import matplotlib.pyplot as plt
from closest_words import closestwords_tsnescatterplot
import sys
import os

def draw_plt(words, *args, **kwargs):
    dir = os.path.dirname(os.path.abspath(__file__))
    model = gensim.models.Word2Vec.load(dir + '/word2vec50.model')
    values = words.split(',')
    to_find = closestwords_tsnescatterplot(model, values, 30, 'the words you will look', words)
    plt.savefig(dir + '/../public/img/figure.png')

if __name__ == '__main__':
        draw_plt(sys.argv[1])
