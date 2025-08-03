import os
from utils.logger import logger
from utils.data_loader import load_data
from utils.preprocessing import preprocess_data
from models.model import train_model, evaluate_model
import yaml

def load_config():
    with open("config.yaml", "r") as file:
        return yaml.safe_load(file)

def main():
    logger.info("🚀 Starting Cyber Threat Detection Pipeline")

    config = load_config()

    # Create outputs folder if missing
    output_folder = os.path.dirname(config["model_path"])
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
        logger.info(f"📁 Created missing output folder: {output_folder}")

    # Load and preprocess data
    df = load_data(config["data_path"])
    X_train, X_test, y_train, y_test = preprocess_data(df, config)

    # Train model
    model = train_model(X_train, y_train, config)

    # Evaluate model
    evaluate_model(model, X_test, y_test)

if __name__ == "__main__":
    main()
