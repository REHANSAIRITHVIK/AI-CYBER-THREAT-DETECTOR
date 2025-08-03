import pandas as pd
from loguru import logger

def load_data(path):
    try:
        data = pd.read_csv(path)
        logger.info(f"✅ Loaded dataset with shape: {data.shape}")
        return data
    except Exception as e:
        logger.error(f"❌ Failed to load dataset: {e}")
        raise
