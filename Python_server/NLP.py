from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


class NLPClassifiers:
    sid_obj = SentimentIntensityAnalyzer()

    def sentiment_scores(self, sentence):
        return self.sid_obj.polarity_scores(sentence)
