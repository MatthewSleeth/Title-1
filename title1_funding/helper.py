import pickle

# Helper functions
def unpickle(fp):
    with open(fp, 'rb') as f:
        # The protocol version used is detected automatically, 
        # so we do not have to specify it.
        data = pickle.load(f)
    return data

def load_model(data):
    model = data
    return model
    
def predict_eval(model, user_info:list):
    return model.predict([user_info])