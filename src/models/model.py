import xgboost as xgb
import joblib
from loguru import logger

def train_model(X_train, y_train, config):
    model = xgb.XGBClassifier(use_label_encoder=False, eval_metric='logloss')
    model.fit(X_train, y_train)
    joblib.dump(model, config["model_path"])
    logger.info(f"✅ Model saved to {config['model_path']}")
    return model


from sklearn.metrics import classification_report, confusion_matrix

def evaluate_model(model, X_test, y_test):
    predictions = model.predict(X_test)
    print("Confusion Matrix:")
    print(confusion_matrix(y_test, predictions))
    print("\nClassification Report:")
    print(classification_report(y_test, predictions))
