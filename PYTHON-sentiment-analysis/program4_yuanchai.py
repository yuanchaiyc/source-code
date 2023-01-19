import nltk
from nltk.corpus import movie_reviews
import random
from collections import Counter
# movie_reviews.categories() = ['pos', 'neg']
# movie_reviews.fileids() returns all the file in movie_reviews corpus.
# files in movie_reviews are in pos/XXX.txt format.
# movie_reviews.categories(<file name>) would return whether a file is pos or neg.
# document = [(all the word in a file, pos/neg of the file), ...]

documents = [(list(movie_reviews.words(fileid)), category)
             for category in movie_reviews.categories()
             for fileid in movie_reviews.fileids(category)]
random.shuffle(documents)


word_features = []

with open('positive_bing.txt', 'r') as f:
# feature 1: the existence of positive and negative lexicon
# pos_features: all the positive words
# neg_features: all the negative words
    pos_features = [line.strip() for line in f]
    word_features.extend(pos_features)

with open('negative_bing.txt', 'r') as f:
    neg_features = [line.strip() for line in f]
    word_features.extend(neg_features)

word_features = set(word_features)
pos_features = set(pos_features)
neg_features = set(neg_features)

#feature 2: remove function words from the most frequent 2000 words
with open('prep.txt', 'r') as f:
    for i in word_features:
        if i in [line.strip() for line in f]:
            word_features.remove(i)


# document is all the words in one file
# set(document) is the unique words in that file
def document_features(document):
    document_cnt = dict(Counter(document).items())
    pos_cnt = 0
    neg_cnt = 0
    features = {}
    for word in word_features:
        features['contains({})'.format(word)] = (word in document_cnt)

# feature 3: the frequency of negative words 

    for word in neg_features:
        if word in document_cnt:
            neg_cnt += document_cnt[word]
        features['freq(neg)'] = neg_cnt
            


    return features
featuresets = [(document_features(d), c) for (d, c) in documents]
# featuresets = [({'contains(waste)': False, 'contains(lot):False, ...'}, pos), ...]

def get_accuracy(train_set, test_set):
    classifier = nltk.NaiveBayesClassifier.train(train_set)
    accuracy = nltk.classify.accuracy(classifier, test_set)
    return accuracy

# 10-fold validataion
accuracy = 0
for n in range(10):
    test_set = featuresets[200*n : 200*(n+1)]
    train_set = featuresets[:200*n] + featuresets[200*(n+1):]
    accuracy += get_accuracy(train_set, test_set)
average_accuracy = accuracy / 10


print (average_accuracy)





