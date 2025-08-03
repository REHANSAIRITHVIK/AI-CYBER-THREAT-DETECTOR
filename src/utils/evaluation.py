from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt
from loguru import logger
import os

def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    logger.info("🧪 Classification Report:\n" + classification_report(y_test, y_pred))

    cm = confusion_matrix(y_test, y_pred)
    sns.heatmap(cm, annot=True, fmt="d", cmap="Blues")
    plt.title("Confusion Matrix")
    plt.xlabel("Predicted")
    plt.ylabel("Actual")

    output_path = "../outputs/confusion_matrix.png"
    plt.savefig(output_path)
    logger.info(f"📊 Confusion matrix saved to {output_path}")
    plt.close()
