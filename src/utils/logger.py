import logging
from loguru import logger

logger.add("outputs/cyber_threat_detection.log", rotation="1 MB")

def get_logger():
    return logger
